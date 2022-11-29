import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";
import { setMaxIdleHTTPParsers } from "http";
import { Console } from "console";

const neon=chalkAnimation.rainbow('VERY SIMPLE CALCULATOR PERFORM ONLY BASIC OPERATION');
function delay(){
    return new Promise(r => setTimeout(r,3000))
}
let del= await delay();
neon.stop();
let again=true;
while(again==true){
let num1 = await inquirer.prompt([
  {
    name: "first",
    type: "number",
    message: chalk.yellowBright("Please Enter The First Number:"),
  },
]);
let operator = await inquirer.prompt([
  {
    name: "op",
    type: "list",
    message: chalk.yellowBright("Please Select The Operator:"),
    choices: ["+", "-", "*", "/"],
  },
]);
let num2 = await inquirer.prompt([
  {
    name: "second",
    type: "number",
    message: chalk.yellowBright("Please Enter Your Second Number:"),
  },
]);

function result(n1:number,oper:any,n2:number){
switch (oper) {
  case "+":
    return n1 + n2;
  case "-":
    return n1 - n2;
  case "*":
    return n1 * n2;
  case "/":
    return n1 / n2;
}
}
let cal=result(num1.first,operator.op,num2.second);
console.log(chalk.yellowBright.bold(`Operation Result is ${cal}`));
let ag = await inquirer.prompt([
  {
    name: "redo",
    type: "confirm",
    message: chalk.yellowBright("Do You Want To Do Again:"),
  },
]);

let aga=again=ag.redo;
}