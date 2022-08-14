//dados de entrada
//executar o usecase
//retornar os dados de saída

export interface CreateProductInputDto {
  id: string
  name: string
  cost: number
}

export interface CreateProductOutputDto {
  id: string
  name: string
  cost: number
  salesPrice: number
}