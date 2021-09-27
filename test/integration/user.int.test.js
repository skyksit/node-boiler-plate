const request = require("supertest")
const app = require("../../app")
const newUser = require("../data/new-user.json")
// const mongoose = require("mongoose")
const initDatabase = require("../../config/database")

jest.setTimeout(30000)


describe("Welcome API Test", () => {
  it("GET /", async() => {
    //Act
    const response = await request(app).get("/").send()
    //Assert
    expect(response.statusCode).toBe(200)
    expect(response.text).toBe('Welcome to Node.js + MongoDB API')
  })
})

describe("User Integration Test", () => {
  beforeAll(async () => {
    initDatabase()
  })

  afterAll(async () => {
    // await mongoose.disconnect()
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
  })

  it("POST /auth/register", async () => {
    //Act
    const response = await request(app).post("/auth/register").send(newUser)
    //Assert
    expect(response.statusCode).toBe(201)
    expect(response.body.success).toBe(true)
  })
})
