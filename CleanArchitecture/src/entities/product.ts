export default class Product {
  _id: string
  _name: string
  _cost: number

  constructor(id?: string, name?: string | any) {
    this._name = name
    this._id = id
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  set cost(cost: number) {
    if(cost < 0) {
      throw new Error("Cost cannot be negative")
    }
    this._cost = cost
  }

  get cost(): number {
    return this._cost
  }

  get salesPrice(): number {
    return this._cost * 3
  }
}