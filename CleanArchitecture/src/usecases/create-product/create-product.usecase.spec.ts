import CreateProductUseCase from "./create-product.usecase"

describe("create product usecase unit teste", () => {

  it("should create a product", async () => {
    const input = {
      id: 'abc',
      name: 'iPhone',
      cost: 100
    }

    const output = {
      id: 'abc',
      name: 'iPhone',
      cost: 100,
      salesPrice: 300
    }

    const productGateway = () => {
      return {
        create: jest.fn()
      }
    }
    const createProductUsecase = new CreateProductUseCase(productGateway())
    const result = await createProductUsecase.execute(input)
    expect(result).toEqual(output)
  })
})