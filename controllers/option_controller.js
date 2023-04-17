// requring option model
const Option = require('../models/option');
// requring Question model
const Question = require('../models/question');

// fucntino is all Option to the given question 
module.exports.addOption = async function(req, res){
    try{
        // first finding the question by the id which is passed in the link
        const question = await Question.findById(req.params.id);
        // creating the options, which are present in the body(in Json format)
        for(let option of req.body.title){
            
            const currOption = await Option.create({
                title : option
            });
            // providing dynamic link to each option, of adding the votes to it
            currOption.linkToVote = "http://" + req.headers.host + "/option/" + currOption.id+ "/addVote";
            currOption.save();
            question.options.push(currOption.id);
            
        } 
        question.save();
        // Displying the messages if successfully added the option
        return res.status(200).json({
            message : 'Options added Succesfully'
        });

    }catch(err){
        // If any error occur then we will disply this messages
        return res.status(404).json({
            message : 'Error in creating the option',
            error : err.message
        })
    }
}


// Fucntion for deleting Option(it will delete only that option in which the votes are not yet added)
module.exports.deleteOptions = async function(req, res){
    try{
        // Finding the option, with given ID , which is passed in the link
        const option = await Option.findById(req.params.id);
        if(option.votes > 0){
            return res.status(404).json({
                message : 'This option can not be deleted, as it had votes'
            })
        }
        // finding the question and updating it
        await Question.updateOne(
            { options: { $in: req.params.id }},
            { $pull: { options: { $eq: req.params.id }}}
        );
        // Deleeting the option
        await Option.deleteOne({_id : option });
        // Displying the message if the option deleted is done successfully
        return res.status(200).json({
            message : 'Option Deleted Successfully'
        })
    }catch(err){
        // Displying the messages if the deleting option, if failed, or any error occured
        return res.status(404).json({
            message : 'Error in deleting the option',
            error : err.message
        })
    }
}

// Fucntion to add votes to the given option
module.exports.addVotes = async function(req, res){
    try{
        // Finding the option with the help of id provided in the link
        const option = await Option.findById(req.params.id);
        // console.log("In AddVotes");
        // incresing the vote by one
        option.votes+=1;
        await option.save();
        // displying the successful messages
        return res.status(200).json({
            message : 'Added the vote to option successfully',
            votes : option.votes
        })

    }catch(err){
        // Displyin messages if any thing went wrong
        return res.status(404).json({
            message : "Error in adding the votes",
            error : err.message
        })
    }
}