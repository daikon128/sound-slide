import {Request, Response} from "express";
import express from "express";
import {PrismaClient} from "@prisma/client";

const app = express()
const port = 3002
const prisma = new PrismaClient();
app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong!')
})

interface CreateSoundSlideRequest {
  name: string,
  slideId: number,
  soundId: number
}

app.get('/sound-slide', async (req: Request, res: Response) => {
  await prisma.soundSlide.findMany().then((items) => {
    return res.json(items.map( (item) => {
      return {
        id: item.id,
        name: item.name,
        soundId: item.soundId,
        slideId: item.slideId
      }
    }))
  })
})

app.delete('/sound-slide/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id)
  await prisma.soundSlide.delete(
    {
      where: {
        id: id
      }
    }
  ).then((_) => {
    res.send("success")
  }).catch((_) => {
    res.send("error")
  })
})

app.get('/sound-slide/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id)
  await prisma.soundSlide.findUnique(
    {
      where: {
        id: id
      }
    }
  ).then((soundSlide) => {
    if (soundSlide == null) {
      res.status(404)
      res.send("not found")
      return
    }
    res.json({
      id: soundSlide.id,
      name: soundSlide.name,
      soundId: soundSlide.soundId,
      slideId: soundSlide.slideId
    })
  }).catch((_) => {
    res.send("error")
  })
})


app.post('/sound-slide', async (req: Request<CreateSoundSlideRequest>, res: Response) => {
  await prisma.soundSlide.create(
    {
      data: {
        ...req.body
      }
    },
  ).then(() => {
    res.send('success')
  }).catch((reason) => {
    res.status(500)
    res.send(`error. cause: ${reason}`)
  })
})

app.listen(port, () => {
  console.log(`run sound-slide-api on port ${port}`)
})
