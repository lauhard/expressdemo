const config = require('./config/index.js');
const { generateFileList } = require('./utils/index.js');

const express = require('../node_modules/express');
const bodyParser = require('../node_modules/body-parser');
const path = require('path');

const app = express();
generateFileList();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../static'));

app.use(express.static(path.join(__dirname, '../static')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(config.port, config.hostname, () => {
    console.log(`Server is listening on: ${config.hostname}:${config.port}`);
})

module.exports = {
    app
}