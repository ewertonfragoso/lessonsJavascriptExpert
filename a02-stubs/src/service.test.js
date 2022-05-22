const Service = require('./service')
const BASE_URL_1 = "https://www.omdbapi.com/?i=tt3896198&apikey=62f946d5"
const BASE_URL_2 = "https://www.omdbapi.com/?t=ghost&apikey=62f946d5"
const sinon = require('sinon')
const { deepStrictEqual } =  require('assert')
const mocks = {
    guardians: require('../mocks/guardians.json'),
    ghost: require('../mocks/ghost.json')
}

;(async () => {
    
    // {
        //vai para a internet
        // const service = new Service()
        // const withoutStube = await service.makeRequest(BASE_URL_2)
        // console.log(JSON.stringify(withoutStube))
    // }
    const service = new Service()
    const stub = sinon.stub(service, service.makeRequest.name)

    stub.withArgs(BASE_URL_1).resolves(mocks.guardians)
    stub.withArgs(BASE_URL_2).resolves(mocks.ghost)

    {   
        const expected = {
            "title": "Guardians of the Galaxy Vol. 2",
            "year": "2017",
            "type": "movie"
        }
        const results = await service.getPlanets(BASE_URL_1)
        deepStrictEqual(results, expected)
    }
    {   
        const expected = {
            "title": "Ghost",
            "year": "1990",
            "type": "movie"
        }
        const results = await service.getPlanets(BASE_URL_2)
        deepStrictEqual(results, expected)
    }



})()
