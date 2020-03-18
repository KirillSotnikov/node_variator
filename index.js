const inquirer = require('./lib/inquirer');
const Variator = require('./lib/Variator')

const run = async () => {
    const {available, allowed, preferred} = await inquirer.askCredentials()

    const validator = new Variator(available)
    console.log(validator.attempt(allowed, preferred).getResult())
}

run();