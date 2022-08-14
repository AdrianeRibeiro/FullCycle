import Product from "./product"

describe("products unit test", () => {
  it("should have an ID", () => {
    const product = new Product(String(Date.now()), "Produto 1")
    expect(product.id).toBeDefined()
  })

  it("should have a name", () => {
    const product = new Product(String(Date.now()), "Produto 1")
    expect(product.name).toBe("Produto 1")
  })

  it("should throw an error if cost is negative", () => {
    const product = new Product(String(Date.now()), "Produto 1")
    expect(() => {
      product.cost = -1
    }).toThrow("Cost cannot be negative")
  })

  it("should set the cost of a product", () => {
    const product = new Product(String(Date.now()), "Produto 1")
    product.cost = 100
    expect(product.cost).toBe(100)
  })

  it("should set the salesPrice by 3 times the cost of the product", () => {
    const product = new Product(String(Date.now()), "Produto 1")
    product.cost = 100
    expect(product.salesPrice).toBe(300)
  })
})