import {app, sequelize } from "../express/express"
import request from "supertest"

describe("E2E teste for product", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true })
  })

  afterAll(async () => {
    await sequelize.close()
  })

  it("should create a product", async () => {
    const product = {
      id: "2",
      name: "Product 2",
      cost: 150
    }

    const response = await request(app).post("/products").send(product)
    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      id: "2",
      name: "Product 2",
      cost: 150,
      salesPrice: 450
    })
  })
})