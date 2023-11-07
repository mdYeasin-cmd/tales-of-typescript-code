{
    // 
    // access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number; // ghat vai of private modifier keyword

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // setter

        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // getter

        get balance() {
            return this._balance;
        }

        // public getBalance() {
        //     return this._balance;
        // }
    }

    const asifErAccout = new BankAccount(121, "Asif", 5000);

    // asifErAccout.addDeposit(23); // Need to call function
    // const myBalance = asifErAccout.getBalance(); // Need to call function

    asifErAccout.deposit = 1000; // access like objet property but it is a function
    const myBalance = asifErAccout.balance; // access like objet property but it is a function

    console.log(myBalance);
    // 
}