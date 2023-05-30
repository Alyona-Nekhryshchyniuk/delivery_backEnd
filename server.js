const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();
const { DB_ACCESS, PORT = 3000 } = process.env;

// -------------------------------------------------------------------------------

(async () => {
  await mongoose.connect(DB_ACCESS);
})()
  .then(
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3001");
    })
  )
  .catch((error) => {
    console.log(error);
  });
