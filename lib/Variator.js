const {linearSearch, getIntersections, getApproximate} = require('./algorithms')

module.exports = class Variator {
    constructor (available) {
        this.available = available
        this.sorted = []
        this.result = []
    }

    attempt (allowed, preferred) {
        this.allowed = allowed
        this.preferred = preferred

        this.sortArray()

        const {balance, sameArray} = this.findSame()

        if(balance.length > 0) {
            const {approximateArray} = this.findApproximate(balance)
            this.result = [...this.result, ...approximateArray]
        }

        this.result = [...this.result, ...sameArray]
        return this
    }

    sortArray () {
        this.sorted = getIntersections(this.available, this.allowed)
    }

    findSame () {
        const sameArray = []
        const balance = []
        this.preferred.forEach((item, i) => {
            const data = this.sorted
            let searchResult = linearSearch(item, data)

            if(searchResult !== undefined) {
                sameArray.push(searchResult)
            } else {
                balance.push(item)
            }
        })
        
        return {
            balance,
            sameArray
        }
    }

    findApproximate (balance) {
        const data = this.sorted
        const approximateArray = []
        balance.forEach((item, i) => {
            const approximateNumber = getApproximate(data, item)
            approximateArray.push(approximateNumber)
        })
        return {
            approximateArray
        }
    }

    getResult () {
        let result
        if (this.result.includes(undefined)) {
            result = 'error' 
        } else {
            result = this.result
        }

        return result
    }
}