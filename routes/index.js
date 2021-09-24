const express = require("express")
const router = express.Router()
const userRoute = require("./user.route")
const loginRoute = require("./login.route")

router.use("/api/register", userRoute)
router.use("/api/user", loginRoute)

module.exports = router