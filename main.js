#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one off the operators to perfrom operators",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction ", "Multiplication", "Divison"],
    },
]);
//en node //shebay hy chalny k kaam ata hy/ kise dukan pr rakhwana hy//pr run ho
//conditional sentences
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else
    (console.log("Please select value operator"));
