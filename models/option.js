const mongoose = require('mongoose');

const optionSchema = mongoose.Schema({
    title : {
        type : 'String',
        required : true,
        unique : true
    },
    votes : {
        type : 'Number',
        default : 0
    },
    linkToVote : {
        type : 'String',
        default : ""
    }
}, {
    timestamps : true
});

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;