const mongoose = require('mongoose');

// Scheman for Question. It contains title and list of options(which is the of Option Schema)
const questionSchema = mongoose.Schema({
    title : {
        type : 'String',
        required : true,
        unique : true
    },

    options : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Option'
    }]
}, 
{
    timestamps : true
}
);

const Question  = mongoose.model('Question' , questionSchema);
module.exports = Question;