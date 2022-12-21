import path from "path";
import express from "express";
import { indexRouter } from './routes';
import { usersRouter } from './routes/users';
import { slideRouter } from './routes/slide';
import {imageRouter} from "./routes/image";

const index = express();

index.use(express.json());
index.use(express.urlencoded({ extended: false }));
index.use(express.static(path.join(__dirname, 'public')));

index.use('/', indexRouter);
index.use('/users', usersRouter);
index.use('/slide', slideRouter);
index.use('/image', imageRouter);
const port = 3003

index.listen(port, () => {
  console.log(`slide-api listening on port ${port}`)
})
