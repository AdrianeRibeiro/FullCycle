import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {
  constructor(description: string, price: number) {
    super("Beer", description, price)
  }

   /*calculateTaxes(): number {
   return this.price * 0.1
  }*/

  getTax(date: Date): number {
    return 0.1
  }
}