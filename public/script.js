"use strict";
var Invoice = /** @class */ (function () {
    // client: string
    // details: string
    // amount: number
    // constructor(c: string, d: string, a: number){
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }
    /* ************ */
    // readonly client: string
    // private details: string
    // public amount: number
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u20B9" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'making website', 1000);
var invTwo = new Invoice('luigi', 'making app', 1500);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
// invOne.client = 'kruz'
// invTwo.amount = 1300
// console.log(invoices)
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
