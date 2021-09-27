const userController = require("../../controllers/users")
const staticController = require("../../controllers/static")
const userModel = require("../../models/User")
const httpMocks = require("node-mocks-http")
const newUser = require("../data/new-user.json")

let req, res, next

userModel.create = jest.fn()
userModel.findOne = jest.fn()

beforeEach(() => {
  req = httpMocks.createRequest()
  res = httpMocks.createResponse()
  next = jest.fn()
})

describe("Welcome Page", () => {
  it("When api root access, Should have a Welcome message", async () => {
    //Act
    await staticController.index(req, res)
    //Assert
    expect(res.statusCode).toBe(200)
    expect(res._getData()).toStrictEqual("Welcome to Node.js + MongoDB API")
  })
})

describe("User Register", () => {
  beforeEach(() => {
    req.body = newUser
  })
  it("When create user, should have a createUser function", () => {
    expect(typeof userController.register).toBe("function")
  })

  it("When call controller create, Should call model.createUser", async () => {
    //Act
    await userController.register(req, res, next)
    //Assert
    expect(userModel.create).toBeCalledWith(newUser)
  })

  it("When the User is successfully created, Should return a 201", async () => {
    //Act
    await userController.register(req, res, next)
    //Assert
    expect(res.statusCode).toBe(201)
    expect(res._isEndCalled()).toBeTruthy()
  })

  it("When the User is successfully created, Should Return json body in response", async () => {
    //Arrange
    userModel.create.mockReturnValue(newUser)
    //Act
    await userController.register(req, res, next)
    //Assert
    expect(res._getJSONData()).toStrictEqual({ success: true })
  })

  it("When User creation fails, Should handle errors", async () => {
    //Arrange
    const errorMessage = { message: "name property missing" }
    const rejectedPromise = Promise.reject(errorMessage)
    userModel.create.mockReturnValue(rejectedPromise)
    //Act
    await userController.register(req, res, next)
    //Assert
    expect(next).toBeCalledWith(errorMessage)
  })
})

describe("User login", () => {
  beforeEach(() => {
    //Arrange
    req.body = newUser
  })
  it("When login user, should have a login function", () => {
    expect(typeof userController.login).toBe("function")
  })

  it("When call controller login, Should call model.findOne", async () => {
    //Arrange
    let findUser = { email: "skyksit@gmail.com" }
    userModel.findOne.mockReturnValue(findUser)
    //Act
    await userController.login(req, res, next)
    //Assert
    expect(userModel.findOne).toBeCalledWith(findUser, expect.any(Function))
  })
})