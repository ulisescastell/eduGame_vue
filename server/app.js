import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();  

const app = express();
//const port = 5000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  // eslint-disable-next-line no-undef
  host: process.env.DB_HOST,
  // eslint-disable-next-line no-undef
  user: process.env.DB_USER,
  // eslint-disable-next-line no-undef
  password: process.env.DB_PASSWORD,
  // eslint-disable-next-line no-undef
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos MySQL.');
  }
});
