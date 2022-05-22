const Fibonacci = require('./fibonacci')
const sinon = require('sinon')
const assert = require('assert')
//Fibo o próximo valor é a soma dos dois valores anteriores da sequencia

;(async () => {
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        // generators retornasm iterators, (possuem .next)
        // existem 3 formas de ler os dados
        // usando as funcoes .next, for await it, rest/spread\
        for await (const i of fibonacci.execute(3)) {}
        const expectedCallCounter = 4
        assert.deepStrictEqual(spy.callCount, expectedCallCounter)
    }
    {
        //validar lógica
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        const [...results] = fibonacci.execute(5)

        const { args } = spy.getCall(2)
        const expectedResults  = [0, 1, 1, 2, 3]
        const expectedParams = Object.values({
            input: 3,
            current: 1,
            next: 2
        })

        assert.deepStrictEqual(args, expectedParams)
        assert.deepStrictEqual(results, expectedResults)
        
    }
})()