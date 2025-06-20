export class Peer {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  getBalance(): number {
    return this.balance;
  }

  send(amount: number): void {
    this.balance -= amount;
  }

  receive(amount: number): void {
    this.balance += amount;
  }
}
