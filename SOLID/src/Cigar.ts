import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem {
  constructor(description: string, price: number) {
    super("Cigar", description, price)
  }

  /*calculateTaxes(): number {
   return this.price * 0.2
  }*/

  getTax(date: Date): number {
    const january = 0
    if(date.getMonth() === january) return 0.1
    return 0.2
  }
}