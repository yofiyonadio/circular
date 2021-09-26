import randomInt from 'random-int'

class Random {
    number(start: number, end: number) {
        return randomInt(start, end)
    }
}

export default new Random()