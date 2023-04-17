// REquring questin, and option form the model
const Question = require('../models/question');
const Option = require('../models/option');

// fucntino for creating Quesiton 
module.exports.createQuestion = async function(req, res){
    // console.log("In the create function ");
    //console.log(req.body);
    try{
        // Iterating over the req.body, and creating the Qeustin
        for(let title of req.body.title){
            await Question.create({title});
        }
        // Displying the success messages
        return res.status(200).json({
            message : 'Question updated Succesfully'
        });
    }catch(err){
        // Dispying the messsages if any error occured
        return res.status(404).json({
            message : 'Error in creating the question',
            error : err.message
        })
    }
}

// Functino for delting the Question
module.exports.deleteQuestion = async function(req, res){
    try{
        // Finding the question form the link, 
        const question = await Question.findById(req.params.id);

        // checking if the options contains votes or not
        // If it contins votes, then we will not delete the option, and return from there with some messages
        for(let id of question.options){
            let option = await Option.findById(id);
            if(option.votes > 0){
                return res.status(404).json({
                    message : 'You can not delete this Quesiton, as it had vote added to some options.'
                })
            }
        }
        // To delete the Questin first we need to delete all the option asssociated with it.
        // Deleting the options, 
        for(let option of question.options){
           // console.log(option.votes);
           
            await Option.deleteOne({_id : option});
        }
        question.save();
        // after dleting the options , then we delete the question 
        await Question.deleteOne({_id : question});
        // Displyin the success messages
        return res.status(200).json({
            message : "Question and it's associate option deleted successfully"
        })
 
    }catch(err){
        // Displying the error messages
        return res.status(404).json({
            message : 'Error in deleting',
            error : err.message
        })
    }
}
// This function is for the displuing the content of the the particular questin
module.exports.showQuestionAndDescription = async function(req, res){
    try{
        // finding the quesiton with the help of the gven params, the populting it with options
        const question = await Question.findById(req.params.id).populate('options') ;
        // Displing the content of the questino 
        return res.status(200).json(question);

    }catch(err){
        // Displying the error messages
        return res.status(404).json({
            message : "Error in displying the question and it's options",
            error : err.message
        })
    }
}