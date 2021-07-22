const express = require('express');
const data = require('./server.json');

const episodes = data.episodes;

const app = express();

const PORT = process.env.PORT || 8877;

app.get(`/episodes/:id`, (req, res)=>{
  const json = episodes.find((episode)=>{
    return episode.id === req.params.id
  });

  res.end(JSON.stringify(json, null, 4))
})

app.get('/episodes', (req, res)=>{
  res.end(JSON.stringify(episodes, null, 4))
})

app.get('/', (req, res)=>{
  res.end(JSON.stringify({
    msg: "find episodes with: https://garticuno-api-podcastr.herokuapp.com/episodes"
  }, null, 4));
})

app.listen(PORT, ()=>{
  console.log('Escutando na porta ' + PORT);
})