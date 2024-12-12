import axios from 'axios';
import express, { RequestHandler } from 'express';
import multer from 'multer';
import { User } from './database';

const app = express();
const upload = multer({ dest: 'uploads/'});

const handler: RequestHandler = async (req, res, next) => {
  const response = await axios.get('https://learn.codeit.kr/api/codeitmall/products');
  res.send(response.data);
}

app.get('/products', handler);

const middleware: RequestHandler = (req, res, next) => {
  req.userId = '123';
  next();
}

app.use(middleware);

app.get('/', async (req, res) => {
  res.send(req.userId);
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json({ users });
});

app.post('/uploads', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
