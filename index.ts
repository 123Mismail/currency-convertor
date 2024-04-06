#! /usr/bin/env node
import inquirer from "inquirer";
//currency converter/
let currency:any={
    USD:1,
    PKR:280,
    EURO:0.91,
    GBP:0.6,
    INR:74.47,

};
let usrAns:any=await inquirer.prompt(
    [
        {
          name:"fromCurrency",
          type:"list",
          message:"select from which currency you want to convert ?:",
          choices:["USD","PKR","EURO","GBP","INR"]
        },
        {
            name:"toCurrency",
            type:"list",
            message:"select to which currency you want to convert ?:",
            choices:["USD","PKR","EURO","GBP","INR"]
          },
          {
            name:"amount",
            type:"number",
            message:"enter yoour amount here :"
          },

    ]
);

let usrFromCurrency=currency[usrAns.fromCurrency];
console.log(usrFromCurrency);
let usrToCurrency=currency[usrAns.toCurrency] ;
console.log(usrToCurrency);
let usrAmount=usrAns.amount;
console.log(usrAmount);
let baseAmount=usrAmount/usrFromCurrency;
console.log(baseAmount);
let convertedAmount=baseAmount*usrToCurrency;
console.log(convertedAmount)



