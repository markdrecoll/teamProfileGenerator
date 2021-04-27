// import packages used by the application
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
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
        .then((response) => {
            // create a new engineer object then push the engineer into the employee array
            const engineerEmployee = New Engineer(`${response.name}, ${response.id}, ${response.email}, ${response.officeNumber}`);
            employeeList.push(engineerEmployee);

            // call the function to ask if the user wants to add more employees
            addAnotherRoleQuestionFunction();
        })
}

// create an array of questions about an intern to ask the user
const internQuestions = [
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

function addAnIntern(){
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            // create a new engineer object then push the engineer into the employee array
            const internEmployee = New Intern(`${response.name}, ${response.id}, ${response.email}, ${response.officeNumber}`);
            employeeList.push(internEmployee);

            // call the function to ask if the user wants to add more employees
            addAnotherRoleQuestionFunction();
        })
}

function generateHTML(){
    // temporary log to see if things are going into array
    console.log(employeeList);

    // function writeToFile(theFileName, data) {
    //     fs.writeFile('./dist/index.html', generateMarkdown(data), (err) =>
    //         err ? console.error(err) : console.log('You successfully created a new read me file.')
    //     );
}


// calls the initialize function
init();