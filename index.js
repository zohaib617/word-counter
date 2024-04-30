#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentance",
    type: "input",
    message: "input your sentace to count the words: "
});
const words = answer.sentance.trim().split(" ");
console.log(words);
console.log(`your sentance word is = ${words.length}`);
