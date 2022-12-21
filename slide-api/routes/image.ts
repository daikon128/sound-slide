import express from "express";
import multer from "multer";
import {PrismaClient} from "@prisma/client";

const imageRouter = express.Router();
const upload = multer({ dest: "./data/uploads"})
const prisma = new PrismaClient()

imageRouter.post('/', upload.array("slide", 1), async function (req, res) {
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
      path: destination + filename
    }
  }).catch((reason) => {
    res.status(500)
    res.send("error:" + reason)
    return
  })
  res.send('success')
})

export {
  imageRouter
}
