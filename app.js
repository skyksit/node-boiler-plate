const express = require("express")
const app = express()
const routes = require("./routes")

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

//요청이 오면 routes/index.js 로 보내준다
app.use("/", routes)

//express error handler
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message })
})

module.exports = app
