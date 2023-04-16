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

