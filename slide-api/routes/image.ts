import express from "express";
import multer from "multer";
import {PrismaClient} from "@prisma/client";
import path from "path";

const imageRouter = express.Router();
const upload = multer({ dest: "./data/uploads"})
const prisma = new PrismaClient()

imageRouter.post('/', upload.array("file", 1), async function (req, res) {
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
  const {originalname, destination, filename} = file
  await prisma.image.create({
    data: {
      name: originalname,
      path: destination + "/" + filename
    }
  }).catch((reason) => {
    res.status(500)
    res.send("error:" + reason)
    return
  })
  res.send('success')
})

imageRouter.get('/', async function (req, res) {
  await prisma.image.findMany().then((images) => {
    console.dir(images)
    res.json(
      images.map((image) => {
        return {
          id: image.id
        }
      })
    )
  })
})

imageRouter.get('/:id', async function(req, res) {
  const id: number = parseInt(req.params.id)
  const image = await prisma.image.findFirst({
    where: {
      id: id
    }
  })
  if (image == null) {
    res.status(404)
    res.send("not found")
    return
  }
  res.sendFile(path.join(__dirname, "../", image.path), {

  })
});

export {
  imageRouter
}
