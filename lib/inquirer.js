const inquirer = require('inquirer');

module.exports = {
  askCredentials: () => {
    const questions = [
        {
          name: 'available',
          type: 'input',
          message: 'Set available numbers:',
          default: '240, 360, 720'
        },
        {
          name: 'allowed',
          type: 'input',
          message: 'Set allowed numbers:',
          default: '360, 720'
        },
        {
          name: 'preferred',
          type: 'input',
          message: 'Set preferred numbers:',
          default: '1080'
        }
    ];
    return inquirer.prompt(questions);
  },
};