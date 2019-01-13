const cfg = require('./config.json');
const express = require('express');
const app = express();

let bodyParser = require('body-parser');

app.listen(cfg.server.port, cfg.server.host, ()=>{
    console.log("Listening to Port" + cfg.server.port + " ...");
    
});