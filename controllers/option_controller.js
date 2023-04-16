const Option = require('../models/option');

const Question = require('../models/question');

module.exports.addOption = async function(req, res){
    try{
        const question = await Question.findById(req.params.id);
        
        for(let option of req.body.title){
            
            const currOption = await Option.create({
                title : option
            })
            question.options.push(currOption.id);
            
        } 
        question.save();

        return res.status(200).json({
            message : 'Options added Succesfully'
        });

    }catch(err){
        return res.status(404).json({
            message : 'Error in creating the option',
            error : err.message
        })
    }
}


module.exports.deleteOptions = async function(req, res){
    try{
        const option = await Option.findById(req.params.id);

        // finding the question and updating it
        await Question.updateOne(
            { options: { $in: req.params.id }},
            { $pull: { options: { $eq: req.params.id }}}
        );

        await Option.deleteOne({_id : option });

        return res.status(200).json({
            message : 'Option Deleted Successfully'
        })
    }catch(err){
        return res.status(404).json({
            message : 'Error in deleting the option',
            error : err.message
        })
    }
}


module.exports.addVotes = async function(req, res){
    try{

    }catch(err){
        
    }
}