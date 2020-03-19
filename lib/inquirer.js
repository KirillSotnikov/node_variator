const inquirer = require('inquirer');


String.prototype.toArray = function() {
  const reg = /\s*,\s*/
  return this.trim().split(reg)
}

function filterAnswer (value) {
  return value.toArray()
}

const selectionSort = arr => {
  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
    let indexMin = i;
    for (let j = i + 1; j < l; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
};

module.exports = {
  askCredentials: () => {
    const questions = [
        {
          name: 'available',
          type: 'input',
          message: 'Set available numbers:',
          default: '240',
          filter: input => {
            const filteredArray = filterAnswer(input)
            const sortedArray = selectionSort(filteredArray)
            return sortedArray
          }
        },
        {
          name: 'allowed',
          type: 'input',
          message: 'Set allowed numbers:',
          default: '720, 360',
          filter: input => {
            const filteredArray = filterAnswer(input)
            const sortedArray = selectionSort(filteredArray)
            return sortedArray
          }
        },
        {
          name: 'preferred',
          type: 'input',
          message: 'Set preferred numbers:',
          default: '1080',
          filter: input => {
            const filteredArray = filterAnswer(input)
            const sortedArray = selectionSort(filteredArray)
            return sortedArray
          }
        }
    ];
    return inquirer.prompt(questions);
  },
};