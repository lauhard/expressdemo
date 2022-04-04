const config = require('./config/config.js');
const express = require('../node_modules/express');
const app = express();



var App = {
    app: this.app,
    listen(){
        app.listen(config.port, config.host,()=>{
            console.log(`Server is listening on: ${config.host}:${config.port}`);
        })
        return app;
    }
}


module.exports = App;
