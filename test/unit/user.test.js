const userController = require("../../controller/users")
const userModel = require("../../models/User")
const httpMocks = require("node-mocks-http")

let req, res, next

beforeEach(() => {
  req = httpMocks.createRequest()
  res = httpMocks.createResponse()
  next = jest.fn()
})

describe("User Controller", () => {
  it("should have a createUser function", () => {
    expect(typeof userController.createUser).toBe("function")
  })
})