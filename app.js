const express = require("express")
const app = express()
const initRoutes = require("./routes")

app.use(express.json())

// Routes
initRoutes(app)

//express error handler
app.use((req, res, next) => {
  const err = new Error("The requested url was not found on this server")
  err.status = 404
  next(err)
})

module.exports = app
