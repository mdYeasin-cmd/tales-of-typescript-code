{
    // 

    /* 
        public - by default
        readonly - only read. can't edit or rewrite
        private - only inside that class. can't edit in instance or child class
        protected - only child class. can't edit or rewrite in instance
    */

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

        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        public getBalance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this._balance
        }
    }

    const asifErAccout = new BankAccount(121, "Asif", 5000);
    // asifErAccout.balance = 2565
    asifErAccout.addDeposit(23);
    const myBalance = asifErAccout.getBalance();

    console.log(myBalance);
    // 
}