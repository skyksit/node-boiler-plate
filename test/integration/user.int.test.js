const request = require("supertest")
const app = require("../../app")
const newUser = require("../data/new-user.json")
const mongoose = require("mongoose")

jest.setTimeout(30000)

describe("User Integration Test", () => {
  beforeAll(async () => {
    const uri = process.env.MONGO_URI
    await mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("Mongdo DB Connected..."))
      .catch((error) => console.error(error))
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
  })

  it("POST /api/register", async () => {
    //Act
    const response = await request(app).post("/api/register").send(newUser)
    //Assert
    expect(response.statusCode).toBe(201)
    expect(response.body.success).toBe(true)
  })
})
