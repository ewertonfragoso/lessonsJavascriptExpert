class Factorial {
    *execute (input, current = 1) {
        if(input === 0) {
            return 1
        }
        //retorna o valor
        yield current
        //delega a função
        yield* this.execute(input - 1, current*input)
    }
}
module.exports = Factorial