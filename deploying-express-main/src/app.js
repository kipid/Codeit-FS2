import { S3Client } from '@aws-sdk/client-s3';
import express from 'express';
import { PrismaClient } from "@prisma/client";
import multer from 'multer';
import multerS3 from 'multer-s3';
import process from 'node:process';

const app = express();
const prisma = new PrismaClient();

console.log({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	bucket: process.env.S3_BUCKET,
	env: process.env.NODE_ENV,
});

const s3 = new S3Client({
	region: 'ap-northeast-2', // 서울
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	},
});

app.use('/photos', express.static('photos'));

const upload = multer({
	storage: multerS3({
		s3: s3,
		bucket: process.env.S3_BUCKET,
		metadata: function (req, file, cb) {
			cb(null, { fieldName: file.fieldname });
		},
		key: function (req, file, cb) {
			cb(null, `${Date.now()}_${file.originalname}`)
		}
	})
});

app.route('/')
  .get(async (req, res) => {
    const diaryEntries = await prisma.diaryEntry.findMany();
    return res.status(200).json(diaryEntries);
  })
  .post(upload.single('photo'), async (req, res) => {
    const { date, content } = req.body;
    const { location } = req.file;
    const diaryEntry = await prisma.diaryEntry.create({
      data: {
        date: new Date(date),
        content,
        photoUrl: location,
      },
    });
    return res.json(diaryEntry);
  });

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`);
});
