import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import products from './data/products.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is runnnig fast');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(prod => prod._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5003;
app.listen(
  PORT,
  console.log(
    `Server up and runing in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold
  )
);
