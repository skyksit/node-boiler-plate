const userModel = require("../models/User")

exports.register = async (req, res, next) => {
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
  try {
    await userModel.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        return res.status(400).json({
          loginSuccess: false,
          message: "제공된 이메일에 해당하는 사용자가 없습니다",
        })
      }
      res.status(200).json({
        loginSuccess: true,
        message: user.name,
      })
    })
  } catch (error) {
    next(error)
  }
}