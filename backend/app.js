const express = require('express')
const app = express()
const mailRoutes = require('./routes/mailRoute')
const mysql = require('mysql2')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



const db = mysql.createPool({
  host: '127.0.0.1',
  user:'root',
  password:'',
  database:''
}).promise() 
 
app.set('db', db);
app.use(express.json())
app.use('/api/contact', mailRoutes)
module.exports = app