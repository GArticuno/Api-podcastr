const express = require('express');
const data = require('./server.json');

const app = express();

const PORT = process.env.PORT || 8877;

app.get('/episodes', (req, res)=>{
  res.json(data.episodes);
})

app.get('/', (req, res)=>{
  res.json(data);
})

app.listen(PORT, ()=>{
  console.log('Escutando na porta ' + PORT);
})