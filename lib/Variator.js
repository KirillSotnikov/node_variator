
module.exports = class Variator {
    constructor (available) {
        this.available = available
        this.sorted = []
    }

    attempt (allowed, preferred) {
        this.allowed = allowed
        this.preferred = preferred
        return this
    }

    getResult () {
        return {
            available: this.available,
            allowed: this.allowed,
            preferred: this.preferred
        }
    }
}