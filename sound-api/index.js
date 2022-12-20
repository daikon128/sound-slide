const express = require('express')
const multer = require('multer')
const upload = multer({ dest: "./data/uploads/"})
const app = express()
const port = 3001
const ms = require('mediaserver')

app.get('/ping', (req, res) => {
  res.send('pong!')
})

app.get('/audio/test.wav', (req, res) => {
  ms.pipe(req, res, './data/sample-3s.wav')
})

app.post('/audio', upload.array("audio", 1), (req, res) => {
  console.log(req.files)
  res.send('success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
