const mongoose = require("mongoose")

const initDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(err)
    })

  const connection = mongoose.connection

  connection.once("open", () => {
    console.log("MongoDB Database connected successfully")
  })
}

module.exports = initDatabase