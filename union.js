#!/usr/bin/env node

const colors = require('colors');
const { mdLinks } = require("./index");
const {  broke, unique } = require("./src/cli.js");
const chalk = require("chalk");
const path = require("path")




const argumentTotal = process.argv.slice(2)
if (argumentTotal.length === 1) {
  mdLinks(argumentTotal[0], { validate: false })
    .then(resp => {
    
    console.log(resp)
  })
}
if (argumentTotal.length === 2) {
  switch (argumentTotal[1]) {
    case '--validate':
  
      mdLinks(argumentTotal[0], { validate: true })
      .then(resp => {
      resp.forEach(element => {
      console.log(colors.white(`│ Link: ${element.href} │ Text: ${element.text} │ Status: ${element.status} │ Status Text: ${element.statusText}`))
      });
    });
    break;
    case '--stats':
  
      mdLinks(argumentTotal[0], { validate: true }).then(resp =>console.log((unique(resp))));
  
    break;
    default:
    console.log('Comando invalido');
}
}

if (argumentTotal.length === 3) {
  if ((argumentTotal[1] === '--validate' && argumentTotal[2] === '--stats') || (argumentTotal[1] === '--stats' && argumentTotal[2] === '--validate')) {
    mdLinks(argumentTotal[0], { validate: true }).then(resp => console.log((unique(resp) + '\n' + (colors.bgRed(broke(resp))))));
  } else {
    console.log('Comando invalido')
  }
}