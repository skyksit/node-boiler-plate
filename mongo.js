
const mongoose = require("mongoose")
const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err))
