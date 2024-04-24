#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    PKR: 280,
    INR: 74.57,
    EUR: 0.91
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.bgCyan("Enter from currency"),
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR']
    },
    {
        name: "to",
        message: chalk.yellow('Enter to currency'),
        type: 'list',
        choices: ['USD', 'PKR', 'INR', 'EUR']
    },
    {
        name: "amount",
        message: chalk.green("Enter your amount"),
        type: "number"
    },
]);
// ------------------------------//
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//--------------------------------------//
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
// ---------------The-End-------------//
