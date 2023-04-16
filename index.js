// requring express assigining port value, and calling express as fucntion;
const express = require('express');
const port = 8000;
const app = express();
// Connection to MongoDb(Database).
const db = require('./config/mongoose');

// bodyParser for reading the value of req.body
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json()); // middleware for using req, as json

// middleware for router
app.use('/' , require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log("Error is " + err);
        return ;
    }

    console.log('Server is up and running in port ' + port);
})