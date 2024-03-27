#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstnumber" },
    {message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operator to perform action", 
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division",],
    },
]);

// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
} 
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
} else {
    console.log("Please select invalid number")
}