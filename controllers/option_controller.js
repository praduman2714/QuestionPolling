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