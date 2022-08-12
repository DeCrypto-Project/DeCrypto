const csv = require("csv-parser");
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const { parseAsync } = require("json2csv");

const parseCSV = async (csvFile, headers = [])  => {
    const csvContent = [];

    const csvOptions = {};
    if (headers.length) {
        csvOptions.headers = headers;
        csvOptions.skipLines = 1;
    }
    return new Promise((resolve, reject) => {
        fs.createReadStream(csvFile)
            .pipe(csv(csvOptions))
            .on("data", (data) => csvContent.push(data))
            .on("error", (err) => {
                reject(err);
            })
            .on("end", () => {
                resolve(csvContent);
            });
    });
}

async function json2Csv(data, fields) {
    const csvFields = fields.isArray ? fields : [fields];
    return parseAsync(data, { csvFields });
}

module.exports = {
    parseCSV,
    json2Csv
};
