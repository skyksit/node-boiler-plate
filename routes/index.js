const staticRoutes = require("./static.route")
const userRoutes = require("./user.route")

const initRoutes = (app) => {
  app.use("/", staticRoutes)
  app.use("/auth", userRoutes)
}

module.exports = initRoutes