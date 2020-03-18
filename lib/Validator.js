
String.prototype.toArray = function() {
    const reg = /\s*,\s*/
    return this.trim().split(reg)
}

module.exports = class Validator {
    constructor (available) {
        this.availableArray = available.toArray()
        this.sortedArray = []
    }

    attempt (allowed, preferred) {
        this.allowedArray = allowed.toArray()
        this.preferredArray = preferred.toArray()
        return this
    }

    getResult () {
        return {
            available: this.availableArray,
            allowed: this.allowedArray,
            preferred: this.preferredArray
        }
    }
}