import path from "path";
import express from "express";

const slideRouter = express.Router();

/* GET users listing. */
slideRouter.get('/lenna', function(req, res) {
  res.type('.jpg')
  res.sendFile('Lenna.jpg', { root: path.join(__dirname, '../data') })
});

export {
  slideRouter
}