{
    // 
    // oop - encaptulation
    /* 
        # encaptulation means hidden
        # We can make encaptulated property and method using praivate and protected keyword
        # private key word can only take acces parent class
        # protectd key parent and child only, instance can't use that property or method
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

        private getBalance() {
            return this._balance;
        }

        getHiddenMethod() {
            return this.getBalance(); // higher position army who have access the get balance method
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this.getHiddenMethod();
        }
    }

    const asifErAccout = new BankAccount(121, "Asif", 5000);
    // asifErAccout.balance = 2565
    asifErAccout.addDeposit(23);
    const myBalance = asifErAccout.getHiddenMethod();

    console.log(myBalance);
    // 
}