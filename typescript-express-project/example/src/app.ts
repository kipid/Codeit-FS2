import express, { RequestHandler } from 'express';

const app = express();

const validator: RequestHandler = (req, res, next) => {
  req.valid = true;
  next();
}

app.get('/valid', validator, (req, res) => {
  res.send(req.valid);
});

app.get('/invalid', validator, (req, res) => {
  res.send(!req.valid);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
