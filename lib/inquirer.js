const inquirer = require('inquirer');


String.prototype.toArray = function() {
  const reg = /\s*,\s*/
  return this.trim().split(reg)
}

function filterAnswer (value) {
  return value.toArray()
}

module.exports = {
  askCredentials: () => {
    const questions = [
        {
          name: 'available',
          type: 'input',
          message: 'Set available numbers:',
          default: '240, 360, 720',
          filter: input => {
            return filterAnswer(input)
          }
        },
        {
          name: 'allowed',
          type: 'input',
          message: 'Set allowed numbers:',
          default: '360, 720',
          filter: input => {
            return filterAnswer(input)
          }
        },
        {
          name: 'preferred',
          type: 'input',
          message: 'Set preferred numbers:',
          default: '1080',
          filter: input => {
            return filterAnswer(input)
          }
        }
    ];
    return inquirer.prompt(questions);
  },
};