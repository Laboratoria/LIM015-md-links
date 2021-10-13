const { mdLinks } = require('./mdlinks.js');
const { totalLinks, uniqueLinks, brokenLinks, helpMsg, helloMsgValidate,helloMsgStats, helloMsgValidateAndStats,footerMsg, msgErrorRoute, msgNotLinks } = require('./cli-stats.js');
const chalk = require('chalk');


// console.log(process.argv)
const option = process.argv.slice(2); 
const userPath = process.argv[2];

const validate = option.includes('--validate' && '--v');
const stats = option.includes('--stats' &&'--s' );
const help = option.includes('--help'&& '--h' );

if(option.length === 1) {
    mdLinks(userPath, { validate:false } )
    .then(res => console.log(res))
    .catch((rej) => {
        if(rej === 'This path does not exist') {
            console.log(chalk.magentaBright.bold(msgErrorRoute));
            console.log(chalk.cyanBright(helpMsg))
        } else {
            console.log(chalk.green(msgNotLinks));
            console.log(chalk.cyanBright(helpMsg));
        }
    })
} else {
    if(validate && stats) {
        mdLinks(userPath, {validate:true})
        .then(res => {
            console.table(chalk.green(helloMsgValidateAndStats))
            console.table(chalk.cyanBright(totalLinks(res)))
            console.table(chalk.yellowBright(uniqueLinks(res)))
            console.table(chalk.red(brokenLinks(res)))
            console.table(chalk.green(footerMsg))})
        .catch(()=>console.log(chalk.greenBright(msgErrorRoute)))
    }else if (validate) {
        mdLinks(userPath, {validate:true})
        .then(res => {
            console.table(chalk.cyanBright(helloMsgValidate))
            console.log(res)
            console.table(chalk.cyanBright(footerMsg))})
        .catch(()=>console.log(chalk.greenBright(msgErrorRoute)))
    }else if(stats){
        mdLinks(userPath, {validate:true})
        .then(res => {
            console.table(chalk.blue(helloMsgStats))
            console.table(chalk.cyanBright(totalLinks(res)))
            console.table(chalk.yellowBright(uniqueLinks(res)))
            console.table(chalk.blue(footerMsg))})
        .catch(()=>console.log(chalk.greenBright(msgErrorRoute)))
    }else if(help){
        mdLinks(userPath, { validate:true })
        .then( console.log(chalk.cyanBright(helpMsg)))
        .catch(()=>console.log(chalk.greenBright(msgErrorRoute)))
    }else{
       mdLinks(userPath, { validate:true })
        .then( console.log(chalk.cyanBright(helpMsg)))
        .catch(()=>console.log(chalk.greenBright(msgErrorRoute)))
    }
}