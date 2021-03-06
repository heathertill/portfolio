export default {
    knex: {
        client: 'mysql',
        connection: {
            connectionLimit: 10,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
            database: process.env.DB_SCHEMA
        }
    },
    auth: {
        secret: process.env.SECRET
    },
    mailgun: {
        apiKey: process.env.MAILGUN_APIKEY
    }
}

