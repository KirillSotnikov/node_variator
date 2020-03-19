function linearSearch(value, list)
{
    let found = false;
    let position = -1;
    let index = 0;
 
    while(!found && index < list.length)
    {
      if(list[index] == value) {
        found = true;
        position = index;
      } else {
        index += 1;
      }
    }

    const result = list[position]
    return result;
}

module.exports = class Variator {
    constructor (available) {
        this.available = available
        this.sorted = []
        this.resultArray = []
    }

    attempt (allowed, preferred) {
        this.allowed = allowed
        this.preferred = preferred

        this.isSame()

        return this
    }

    isSame () {
        this.preferred.forEach((item, i) => {
            const data = this.allowed
            let searchResult = linearSearch(item, data)

            this.resultArray.push(searchResult)
        })
    }

    getResult () {
        return {
            result: this.resultArray
        }
    }
}