const express = require('express')
const app = express()
const port = 3001
const ms = require('mediaserver')

app.get('/ping', (req, res) => {
  res.send('pong!')
})

app.get('/audio/test.mp3', (req, res) => {
  ms.pipe(req, res, './data/sample-3s.mp3')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
