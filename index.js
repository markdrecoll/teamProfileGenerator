// import packages used by the application
const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const inquirer = require('inquirer');
const fs = require('fs');

// setup empty employee list array
const employeeList = [];

// create array of manager questions
const managerQuestions = [
    {
        type: 'input',
        message: "Please enter the manager's name: ",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the manager's id: ",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the manager's email: ",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the manager's office number: ",
        name: 'officeNumber',
    }
];

// initializes the program and prompts the user for their info
function init() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            // console.log just to see functionality            
            console.log(response);

            // create a new manager object then push the manager into the employee array
            const managerEmployee = New Manager(`${response.name}, ${response.id}, ${response.email}, ${response.officeNumber}`);
            employeeList.push(managerEmployee);
            
            // call the function to ask if the user wants to add more employees
            addAnotherRoleQuestionFunction();
        }
    );
}

// the options for adding another employee or finish adding
const addAnotherRoleQuestion = [
    {
        type: 'list',
        message: 'Would you like to add an engineer or intern, or are you finished building your team?',
        choices: ['Engineer', 'Intern', 'Done Adding']
    }
]

// prompt user if they want to make another engineer, another intern, or are done adding
// if done adding, the HTML generator function is called
function addAnotherRoleQuestionFunction(){
    inquirer
        .prompt(addAnotherRoleQuestion)
        .then((response) => {
            if (response === 'Engineer'){
                addAnEngineer();
            }else if(response === 'Intern'){
                addAnIntern();
            }else{
                generateHTML();
            }
        });
}

// create an array of questions about an engineer to ask the user
const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter the engineer's name: ",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the engineer's id: ",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the engineer's email: ",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the engineer's GitHub: ",
        name: 'gitHub',
    }
];

function addAnEngineer(){
    inquirer
        .prompt(engineerQuestions)
        .

}

// create an array of questions about an intern to ask the user
const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter the intern's name: ",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the intern's id: ",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the intern's email: ",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the intern's school: ",
        name: 'school',
    }
];


// calls the initialize function
init();






// this asks the user if they want to add another member and gives options
// const memberQuestion = {
//     type:'list',
//     message: 'Which type of team member would you like to add?',
//     name: 'newMember',
//     choices: ['Engineer', 'Intern', 'I do not want to add anyone else.']
// }

// function teamMemberSelect() {


// }

// creates a file with the name that the user inputted
// function writeToFile(theFileName, data) {
//     fs.writeFile('./dist/index.html', generateMarkdown(data), (err) =>
//         err ? console.error(err) : console.log('You successfully created a new read me file.')
//     );
// }