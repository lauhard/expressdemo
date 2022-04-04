const dotnev = require('../../node_modules/dotenv')
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
dotnev.config();
module.exports = {
    port: process.env.PORT,
    host: process.env.HOST,
    environment: process.env.NODE_ENV
}