const mysql = require('../utils/mysql');
const { parseCSV } = require('../utils/csvParser');
const portfolio = () => {
    try {
        const cryptocurrencies = require('../migration/cryptocurrencies.csv');

        // parseCSV(cryptocurrencies)
        // Promise.all(podcastDb.map(async (podcast) => {
        //     return mysql.runQuery('INSERT INTO `podcasts`.`podcasts` (id,title,author,description,htmlDescription,webUrl,imageUrl,language,numberOfEpisodes,avgEpisodeLength,category) VALUES(?,?,?,?,?,?,?,?,?,?,?)', [podcast.id, podcast.title, podcast.author, podcast.description, podcast.htmlDescription, podcast.webUrl, podcast.imageUrl, podcast.language, podcast.numberOfEpisodes, podcast.avgEpisodeLength, podcast.category])
        // }))
    } catch (error) {
        console.error(`Error migrating: ${error.message}`);
    }
    console.log('Done!');
};

