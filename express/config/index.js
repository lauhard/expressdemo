const dotnev = require('dotenv')
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
dotnev.config();

module.exports = {
    port: process.env.PORT,
    hostname: process.env.HOSTNAME,
    environment: process.env.NODE_ENV,
}