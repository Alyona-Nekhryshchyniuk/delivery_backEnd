const { DefineModel } = require("./models/menu");

const cors = require("cors");

const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/:shop", async (req, res, next) => {
  const { shop } = req.params;

  const dishes = await DefineModel(shop)?.find();
  return !dishes ? next(new Error()) : res.json({ dishes });
});


app.use((err, req, res, next) => {
  if (err)
  res.status(404).json({ message: "No such shop or menu there!" });
});

module.exports = app;
