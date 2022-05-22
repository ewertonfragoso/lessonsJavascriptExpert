const Factorial = require('./factorial')
const sinon = require('sinon')
const assert = require('assert')
//Fibo o próximo valor é a soma dos dois valores anteriores da sequencia

;(async () => {
    {
        const factorial = new Factorial()
        const spy = sinon.spy(factorial, factorial.execute.name)
        // generators retornasm iterators, (possuem .next)
        // existem 3 formas de ler os dados
        // usando as funcoes .next, for await it, rest/spread\
        for await (const i of factorial.execute(3)) {}
        const expectedCallCounter = 4
        assert.deepStrictEqual(spy.callCount, expectedCallCounter)
    }   
    {
        //validar resultados
        const factorial = new Factorial()
        const spy = sinon.spy(factorial, factorial.execute.name)
        const [...results] = factorial.execute(5)
        const { args } = spy.getCall(2)
        const expectedResults  = [1, 5, 20, 60, 120]
        const expectedParams = Object.values({
            input: 3,
            current: 20,
        })

        assert.deepStrictEqual(args, expectedParams)
        assert.deepStrictEqual(results, expectedResults)
        
    }
})()