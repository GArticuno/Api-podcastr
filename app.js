const express = require('express');
const data = require('./server.json');

const episodes = data.episodes;

const app = express();

const PORT = process.env.PORT || 8877;

app.get(`/episodes/:id`, (req, res)=>{
  res.json(episodes.find((episode)=>{
    return episode.id = req.params.id
  }));
})

app.get('/episodes', (req, res)=>{
  res.json(episodes);
})

app.get('/', (req, res)=>{
  res.send({
    msg: "find episodes with: https://garticuno-api-podcastr.herokuapp.com/episodes"
  });
})

app.listen(PORT, ()=>{
  console.log('Escutando na porta ' + PORT);
})