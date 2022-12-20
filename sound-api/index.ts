import {Request, Response} from "express";
import express from "express";
import multer from "multer";
import {PrismaClient} from "@prisma/client";

const upload = multer({ dest: "./data/uploads/"})
const app = express()
const port = 3001
const ms = require('mediaserver')
const prisma = new PrismaClient();

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong!')
})

app.get('/audio', async (req: Request, res: Response) => {
  const audio = await prisma.sound.findMany()
  return res.json(audio.map( (audio) => {
    return {
      id: audio.id,
      name: audio.name
    }
  }))
})

app.get('/audio/:id', async(req: Request, res: Response) => {
  const id: number = parseInt(req.params.id)
  console.log(id)
  console.log(req.params.id)
  console.log(typeof id)
  const audio = await prisma.sound.findFirst({
    where: {
      id: id
    }
  })
  if (audio == null) {
    res.status(404)
    res.send(`id : ${req.params.id} is not found` )
    return
  }
  console.log(audio.path)
  ms.pipe(req, res, audio.path, '.wav')
})

app.post('/audio', upload.array("audio", 1), async (req: Request, res: Response) => {
  if (req.files == null) {
    res.status(400)
    res.send("file not found")
    return
  }
  if (!Array.isArray(req.files)) {
    res.status(400)
    res.send("unexpected type: " + typeof req.files)
    return
  }
  const file = req.files[0];
  const { originalname, destination, filename } = file
  const result = await prisma.sound.create({
    data: {
      name: originalname,
      path: destination + filename
    }
  }).catch((reason) => {
    res.status(500)
    res.send("error:" + reason)
    return
  })
  console.log(result)
  res.send('success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
