export class Payment {
  Date: string;
  Description: string;
  Amount: number;
  Method: string;
  Confirmation: string;
  Notes: string;

  constructor(
    Date: string,
    Description: string,
    Amount: number,
    Method: string,
    Confirmation: string,
    Notes: string
  ) {
    this.Date = Date;
    this.Description = Description;
    this.Amount = Amount;
    this.Method = Method;
    this.Confirmation = Confirmation;
    this.Notes = Notes;
  }
}
