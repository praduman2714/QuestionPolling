const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/pollingApi');

const db = mongoose.connection;

db.on('error' , console.error.bind(console , 'Error in connecting the mongoDB'));

db.once('open' , function(){
    console.log("Connected to :: MongoDB");
})

module.exports = db;