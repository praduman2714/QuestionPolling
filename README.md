# QuestionPolling

### Description
Purly BackEnd project, in which you can create question, and it's option also. You can even vote for the the particular question. You can delete the question and and 
specific options too. One very important thing, is that we can not delete any questions  which has minimum of one votes to its options. This is same for options also, 
we can not delete any option, if it contains votes.


### Tech Stack

NodeJs, MongoDb, Express, Javascript

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Install PostMan or any such app, so that you can check the routes in your local computer.
  4. Navigate to Project Directory.

After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        npm start || nodemon index.js
   ````

### How to use PostMan
  1. Open PostMan
  2. Enter The Url into the postMan with the required Method and data to pass with the request
  3. Then just Note The Change in your database.

### URL That I Have Created

  1. http://localhost:8000/question/create (To create the questions)
  2. http://localhost:8000/question/:id/options/create (To create the options of a particular questions)
  3. http://localhost:8000/option/:id/add_vote (To add a vote for a Particular Option)
  4. http://localhost:8000/question/:id (To get the details about the particular question)
  5. http://localhost:8000/question/:id/delete (To delete a Particular Question)
  6. http://localhost:8000/option/:id/delete (To delete a particular option)
   
### Folder Structure

```
Polling Api
    |              
    |--->config---->|--->mongoose.js
    |               
    |
    |                  |-->option_controller.js
    |--->controllers-->|-->question_controller.js
    |                  
    |                  
    |
    |               |-->option.js
    |--->models---->|
    |               |-->question.js
    |
    |              
    |               |-->index.js
    |--->routes---->|-->option.js
    |               |-->question.js
    |               
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
    ````   
   

