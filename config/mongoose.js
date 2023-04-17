// Requring mongoose
const mongoose = require('mongoose');
// This database is saved in cloud
const DB = 'mongodb+srv://whiteWolff:praduman@cluster0.an8uy3k.mongodb.net/PollingApi?retryWrites=true&w=majority'

// connection out database to the given address
// mongoose.connect('mongodb://127.0.0.1/pollingApi'); // It was for the local server

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB).then(()=>{
    console.log('connection successful');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

// execute on error
db.on('error' , console.error.bind(console , 'Error in connecting the mongoDB'));

// execute if all the things went right
db.once('open' , function(){
    console.log("Connected to :: MongoDB");
})

module.exports = db;