const mysql = require('../utils/mysql');
const user = () => {
    try {
        Promise.all(usersDb.map(async (user) => {
             return mysql.runQuery('INSERT INTO `users`.`users` (id,first_name,last_name,email,temp_pass,questionnaire_rank) VALUES(?,?,?,?,?)', [user.id,user.first_name,user.last_name,user.email,user.temp_pass,user.questionnaire_rank])
        }))
    } catch (error) {
        console.error(`Error migrating: ${error.message}`);
    }
    console.log('Done!');
};

