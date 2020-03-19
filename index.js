const inquirer = require('./lib/inquirer');
const Variator = require('./lib/Variator')

const run = async () => {
    const {available, allowed, preferred} = await inquirer.askCredentials()

    const validator = new Variator(available)
    const result = validator.attempt(allowed, preferred).getResult()
    
    console.log(result)
}

run();