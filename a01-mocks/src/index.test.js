const { error } = require('./src/constants')
const File = require('./src/file')

;
(async() => {
    const filePath = './mocks/emptyFile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
})();