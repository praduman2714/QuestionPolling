// Requring mongoose
const mongoose = require('mongoose');

// connection out database to the given address
mongoose.connect('mongodb://127.0.0.1/pollingApi');

const db = mongoose.connection;

// execute on error
db.on('error' , console.error.bind(console , 'Error in connecting the mongoDB'));

// execute if all the things went right
db.once('open' , function(){
    console.log("Connected to :: MongoDB");
})

module.exports = db;