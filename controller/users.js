const userModel = require("../models/User")

exports.createUser = async (req, res, next) => {
  try {
    await userModel.create(req.body)
    res.status(201).json({
      success: true,
    })
  } catch (error) {
    next(error)
  }
}

exports.login = async (req, res, next) => {
  await userModel.findOne({ email: req.body.email }, (err, userInfo) => {
    if (!userInfo) {
    }
  })
}