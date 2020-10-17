#!/usr/bin/env node

const yargs = require("yargs");
const methods = require("./controllers")

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .option("s", { alias: "addTable", describe: "Add table", type: "string" })
 .argv;

const greeting = `Hello, ${options.name}!`;
console.log(greeting);

if (options.addTable) {
    methods.addTable(options.addTable)
}
