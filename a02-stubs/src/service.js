const https = require('https')
class Service {
    async makeRequest(url) {
        return new Promise((resolve, reject) => {
            https.get(url, response => {
                let chuncks = [];
                response.on("data", (chunck) => {
                    chuncks.push(chunck);
                });
                response.on("error", reject)
                response.on("end", () => {
                    let response = Buffer.concat(chuncks);
                    resolve(JSON.parse(response));
                })
            })
        })
    }
    async getPlanets(url) {
        const result =  await this.makeRequest(url)

        return {
            title: result.Title,
            year: result.Year,
            type: result.Type
        }
    }
}

module.exports = Service