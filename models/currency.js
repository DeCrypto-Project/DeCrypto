const mysql = require('../utils/mysql');
const { parseCSV } = require('../utils/csvParser');
const currency = () => {
    try {
        const cryptocurrencies = require('../migration/cryptocurrencies.csv');

        const currency = parseCSV(cryptocurrencies)
        Promise.all(currenciesDb.map(async (currency) => {
             return mysql.runQuery('INSERT INTO `cryptocurrencies`.`cryptocurrencies` (name,symbol,price,market_cap) VALUES(?,?,?,?)', [currency.name, currency.symbol,currency.price,currency.market_cap])
        }))
    } catch (error) {
        console.error(`Error migrating: ${error.message}`);
    }
    console.log('Done!');
};

