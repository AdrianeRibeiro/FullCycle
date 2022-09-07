import TaxItem from "./TaxItem";

export default class Eletronic extends TaxItem {
  constructor(description: string, price: number) {
    super("Eletronic", description, price)
  }

     /*calculateTaxes(): number {
   return this.price * 0.5
  }*/

  getTax(date: Date): number {
    return 0.5
  }
}