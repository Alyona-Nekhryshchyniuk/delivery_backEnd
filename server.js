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
      console.log(`Server running. Use our API on port: ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
