const cors = require("cors");

const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/:shop", async (req, res, next) => {
  const { shop } = req.params;
  const dishes = await getAllDishes(shop);
  res.json({ dishes });
});

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})


// module.exports = app;
