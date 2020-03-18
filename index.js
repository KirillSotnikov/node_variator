const inquirer = require('./lib/inquirer');
const Validator = require('./lib/Validator')

const run = async () => {
    const {available, allowed, preferred} = await inquirer.askCredentials()

    const validator = new Validator(available)
    console.log(validator.attempt(allowed, preferred).getResult())
}

run();