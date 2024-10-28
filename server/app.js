const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const session = require('express-session');

dotenv.config();  

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(express.json());

app.use(session({
  secret: 'M$-A?Ocvdf]:oag', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

//config puerto
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

//conexión con bdd
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//prueba de conexión
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    console.log("errosr")
  } else {
    console.log('Conectado a la base de datos MySQL.');
  }
});

//session
app.get('/api/session', (req, res) => {
  if (req.session.user) {
    res.json({ isAuthenticated: true, user: req.session.user });
  } else {
    res.json({ isAuthenticated: false });
  }
});

// login 
app.get('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (error, results) => {
      if (error) {
          console.error('Error en la consulta:', error);
          res.status(500).json({ error: 'Error en la consulta' });
      } else if (results.length > 0) {
          req.session.user = {
              id: results[0].id,
              email: results[0].email
          };
          console.log('Sesión guardada:', req.session.user);
          res.json({ message: 'Login exitoso', user: req.session.user });
      } else {
          res.status(401).json({ error: 'Credenciales incorrectas' });
      }
  });
});

//register
app.get('/api/register', async (req, res) => {
  const { email, password } = req.query;

  const query = 'SELECT * FROM user WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (error, results) => {
      if (error) {
          console.error('Error en la consulta:', error);
          res.status(500).json({ error: 'Error en la consulta' });
      } else if (results.length > 0) {
          req.session.user = {
              id: results[0].id,
              email: results[0].email
          };
          console.log('Sesión guardada:', req.session.user);
          res.json({ message: 'Login exitoso', user: req.session.user });
      } else {
          res.status(401).json({ error: 'Credenciales incorrectas' });
      }
  });
});



