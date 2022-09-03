import Account from "./Account";
import Command from "./Command";
import TransferService from "./TransferService";

export default class TransferCommand implements Command {
  
  operation = "transfer"
  
  constructor(readonly accountDocumentFrom: string, readonly accountDocumentTo: string, readonly amount: number) {
  }
}