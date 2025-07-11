import { BankInterface } from './Interfaces';

// if we want to use abstract methods we have to define the class as abstract.
// interfaces define a contract (method signatures) that any implementing class must follow.
// this helps separate "what should be done" (interface) from "how it's done" (class/abstract class).
// we can implement a limitless amount of interfaces in any given class.

export abstract class Bank implements BankInterface {
    private name: string;
    private address: string;
    private age: number;
    private balance: number;
    constructor(name: string, address: string, age: number, balance: number) {
        this.name = name;
        this.address = address;
        this.age = age;
        this.balance = balance;
    }

    // the abstract keyword allows us to set an empty method that we can use in subclasses and customise to our liking
    public abstract deposit(): number;

    public abstract withdraw(): number;

    public getBalance(): number {
        return this.balance;
    }

    // protected means that this can only be used inside a subclass, and never outside of a class
    // since we only want to update the balance inside the savings account class, this is the safest way to do so.
    protected setBalance(newBalance: number): void {
        this.balance = newBalance;
    }
}

class SavingsAccount extends Bank {
    private amountToWithdraw: number;
    private amountToDeposit: number;

    constructor(
        name: string,
        address: string,
        age: number,
        balance: number,
        amountToWithdraw: number,
        amountToDeposit: number,
    ) {
        super(name, address, age, balance);
        this.amountToWithdraw = amountToWithdraw;
        this.amountToDeposit = amountToDeposit;
    }

    deposit(): number {
        this.setBalance(this.getBalance() + this.amountToDeposit);
        return this.getBalance();
    }

    withdraw(): number {
        this.setBalance(this.getBalance() - this.amountToWithdraw);
        return this.getBalance();
    }
}

const zahrasSavingsAccount = new SavingsAccount(
    'zahra',
    'reading',
    24,
    1300,
    40,
    300,
);
console.log(zahrasSavingsAccount.withdraw());
console.log(zahrasSavingsAccount.deposit());
