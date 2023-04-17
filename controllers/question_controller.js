const express = require('express');

const Question = require('../models/question');
const Option = require('../models/option');

module.exports.createQuestion = async function(req, res){
    // console.log("In the create function ");
    //console.log(req.body);
    try{
        
        for(let title of req.body.title){
            await Question.create({title});
        }
    
        return res.status(200).json({
            message : 'Question updated Succesfully'
        });
    }catch(err){
        return res.status(404).json({
            message : 'Error in creating the question',
            error : err.message
        })
    }
}

module.exports.deleteQuestion = async function(req, res){
    try{

        const question = await Question.findById(req.params.id);

        for(let option of question.options){
            console.log(option);
            await Option.deleteOne({_id : option});
        }
        question.save();
        await Question.deleteOne({_id : question});

        return res.status.json(200).json({
            message : "Question and it's associate option deleted successfully"
        })
 
    }catch(err){
        return res.status(404).json({
            message : 'Error in deleting',
            error : err.message
        })
    }
}

module.exports.showQuestionAndDescription = async function(req, res){
    try{
        const question = await Question.findById(req.params.id).populate('options') ;

        return res.status(200).json(question);

    }catch(err){
        return res.status(404).json({
            message : "Error in displying the question and it's options",
            error : err.message
        })
    }
}