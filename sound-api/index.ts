import {Request, Response} from "express";
import express from "express";
import multer from "multer";

const upload = multer({ dest: "./data/uploads/"})
const app = express()
const port = 3001
const ms = require('mediaserver')

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong!')
})

app.get('/audio/test.wav', (req: Request, res: Response) => {
  ms.pipe(req, res, './data/sample-3s.wav')
})

app.post('/audio', upload.array("audio", 1), (req: Request, res: Response) => {
  console.log(req.files)
  res.send('success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
