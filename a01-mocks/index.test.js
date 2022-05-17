const File = require('./src/file')
const { error } = require('./src/constants')
const { rejects, deepStrictEqual } = require('assert')

;
(async() => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        // implementação para substituir o comportamento padrao do Date
        //Date.prototype.getFullYear = () => 2020
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
              "id": 123,
              "name": "Ewerton Fragoso",
              "profession": "Javascript Specialist",
              "birthDay": 1985
            },
            {
              "id": 321,
              "name": "Xuxinha",
              "profession": "Java Dev",
              "birthDay": 1942
            },
            {
              "id": 45,
              "name": "Juquinha",
              "profession": "React Dev",
              "birthDay": 18
            }
        ]
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }

})();