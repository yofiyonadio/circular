import random from 'random'
class Random {
    number(start: number, end: number) {
        return random.int(start, end)
    }
}

export default new Random()