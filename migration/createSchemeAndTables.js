const mysql = require('../utils/mysql');
const users = require('./users.json');
const cryptocurrencies = require('./cryptocurrencies.json');

(async () => {
        try {
            // await mysql.runQuery(`CREATE SCHEMA IF NOT EXISTS \`future_advisor\` DEFAULT CHARACTER SET utf8;`)
            // await mysql.runQuery(`CREATE TABLE \`future_advisor\`.\`users\`
            //                       (
            //                           \`id\`                  INT UNSIGNED NOT NULL AUTO_INCREMENT,
            //                           \`first_name\`          VARCHAR(20) NOT NULL,
            //                           \`last_name\`           VARCHAR(20) NOT NULL,
            //                           \`email\`               VARCHAR(256) NULL,
            //                           \`temp_pass\`           VARCHAR(256) NOT NULL,
            //                           \`taken_questionnaire\` INT(1),
            //                           PRIMARY KEY (\`id\`)
            //                       );`)
            // await mysql.runQuery(`CREATE TABLE \`future_advisor\`.\`portfolios\`
            //                     (
            //                             \`portfolio_id\`         INT UNSIGNED NOT NULL AUTO_INCREMENT,
            //                             \`user_id\`              INT UNSIGNED NOT NULL,
            //                             \`algorithm\`            VARCHAR(256) NULL,
            //                             \`date\`                 VARCHAR(256) NULL,
            //                             \`total_investment\`     INT UNSIGNED NOT NULL,
            //                             PRIMARY KEY (\`portfolio_id\`),
            //                             FOREIGN KEY (\`user_id\`) REFERENCES users(\`id\`)
            //                     );`)
            // await mysql.runQuery(`CREATE TABLE \`future_advisor\`.\`portfolios_assets\`
            //                     (                   
            //                             \`portfolio_id\`         INT UNSIGNED NOT NULL,
            //                             \`ticker\`               VARCHAR(256) NOT NULL,
            //                             \`percentage\`           INT UNSIGNED NOT NULL,
            //                             FOREIGN KEY (\`portfolio_id\`) REFERENCES portfolios(\`portfolio_id\`)
            //                     );`)
            // await mysql.runQuery(`CREATE TABLE \`future_advisor\`.\`user_risk_profile\`
            //                     (
            //                             \`risk_profile_id\`       INT UNSIGNED NOT NULL AUTO_INCREMENT,
            //                             \`user_id\`               INT UNSIGNED NOT NULL,
            //                             \`main_goal\`             VARCHAR(256) NOT NULL,
            //                             \`main_consideration\`    VARCHAR(256) NOT NULL,
            //                             \`time_frame_score\`      INT UNSIGNED NOT NULL,
            //                             \`risk_attitude_score\`   INT UNSIGNED NOT NULL,
            //                             \`questionnaire_result\`  VARCHAR(256) NOT NULL,
            //                             \`total_score\`           INT UNSIGNED NOT NULL,
            //                             \`investment_amount\`           INT UNSIGNED NOT NULL,
            //                             FOREIGN KEY (\`user_id\`) REFERENCES users(\`id\`),
            //                             PRIMARY KEY (\`risk_profile_id\`)
            //                     );`)



            // await mysql.runQuery(`CREATE TABLE \`future_advisor\`.\`currencies\`
            //                       (
            //                           \`name\`                VARCHAR(256) NOT NULL,
            //                           \`ticker\`              VARCHAR(256) NOT NULL,
            //                           \`price\`               VARCHAR(256) NULL,
            //                           \`market_cap\`          VARCHAR(256) NULL,
            //                           PRIMARY KEY (\`ticker\`)
            //                       );`)

            // populate tables
            // Promise.all(cryptocurrencies.map(async (currency) => {
            //         return mysql.runQuery('INSERT INTO `future_advisor`.`currencies` (name,ticker,price,market_cap) VALUES(?,?,?,?)', [currency.name, currency.ticker,currency.price,currency.market_cap])
            // }))               

            // Promise.all(users.map(async (user) => {
            //     return mysql.runQuery('INSERT INTO `future_advisor`.`users` (id,first_name,last_name,email,temp_pass,taken_questionnaire) VALUES(?,?,?,?,?,?)', [user.id,user.first_name,user.last_name,user.email,user.temp_pass,user.taken_questionnaire])
            // }));
        } catch (error) {
            console.error(`Error migrating: ${error.message}`)
        }
    }
    
)();

