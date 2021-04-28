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
        name: 'id',
        validate: function (input) {
            input = parseInt(input)
                // Declare function as asynchronous, and save the done callback
                var done = this.async();
                // Do async stuff
                setTimeout(function() {
                  if (typeof input !== 'number' || isNaN(input) ) {
                    // Pass the return value in the done callback
                    done('You need to provide a number');
                    return;
                  }
                  // Pass the return value in the done callback
                  done(null, true);
                }, 300);
              }
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
        validate: function (input) {
            input = parseInt(input)
                // Declare function as asynchronous, and save the done callback
                var done = this.async();
                // Do async stuff
                setTimeout(function() {
                  if (typeof input !== 'number' || isNaN(input) ) {
                    // Pass the return value in the done callback
                    done('You need to provide a number');
                    return;
                  }
                  // Pass the return value in the done callback
                  done(null, true);
                }, 300);
              }        
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
            const managerEmployee = new Manager(`${response.name}`, `${response.id}`, `${response.email}`, `${response.officeNumber}`);
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
        choices: ['Engineer', 'Intern', 'Done Adding'],
        name: 'addAnotherRoleChooser'
    }
]

// prompt user if they want to make another engineer, another intern, or are done adding
// if done adding, the HTML generator function is called
function addAnotherRoleQuestionFunction() {
    inquirer
        .prompt(addAnotherRoleQuestion)
        .then((response) => {
            if (response.addAnotherRoleChooser === 'Engineer') {
                addAnEngineer();
            } else if (response.addAnotherRoleChooser === 'Intern') {
                addAnIntern();
            } else {
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
        name: 'id',
        validate: function (input) {
            input = parseInt(input)
                // Declare function as asynchronous, and save the done callback
                var done = this.async();
                // Do async stuff
                setTimeout(function() {
                  if (typeof input !== 'number' || isNaN(input) ) {
                    // Pass the return value in the done callback
                    done('You need to provide a number');
                    return;
                  }
                  // Pass the return value in the done callback
                  done(null, true);
                }, 300);
              }
    },
    {
        type: 'input',
        message: "Please enter the engineer's email: ",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the engineer's GitHub: ",
        name: 'gitHub'
    }
];

function addAnEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            // create a new engineer object then push the engineer into the employee array
            const engineerEmployee = new Engineer(`${response.name}`, `${response.id}`, `${response.email}`, `${response.gitHub}`);
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
        name: 'id',
        validate: function (input) {
            input = parseInt(input)
            // Declare function as asynchronous, and save the done callback
            var done = this.async();
            // Do async stuff
            setTimeout(function() {
                if (typeof input !== 'number' || isNaN(input) ) {
                // Pass the return value in the done callback
                done('You need to provide a number');
                return;
                }
                // Pass the return value in the done callback
                done(null, true);
            }, 300);
        }
    },
    {
        type: 'input',
        message: "Please enter the intern's email: ",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the intern's school: ",
        name: 'school'
    }
];

function addAnIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            // create a new engineer object then push the engineer into the employee array
            const internEmployee = new Intern(`${response.name}`, `${response.id}`, `${response.email}`, `${response.school}`);
            employeeList.push(internEmployee);

            // call the function to ask if the user wants to add more employees
            addAnotherRoleQuestionFunction();
        })
}

function generateHTML() {

    let employeeHtmlContent = '';

    for(var i=0; i<employeeList.length; i++){
        if(employeeList[i].getRole() === 'Manager'){
            employeeHtmlContent += 
`<div class="card m-3" style="width: 17em">
<div class ="card-header bg-primary text-white">
<h1>${employeeList[i].getName()}</h1>
<h2><i class="bi bi-cup-fill"></i>${employeeList[i].getRole()}</h2></div>
<div class="card-body bg-light">
<ul class = "list-group list-group-flush">
<li class = "list-group-item">ID: ${employeeList[i].getId()}</li>
<li class = "list-group-item">Email: <a href = "mailto: ${employeeList[i].getEmail()}">${employeeList[i].getEmail()}</a></li>
<li class = "list-group-item">Office Number: ${employeeList[i].officeNumber}</li></ul></div></div>`
        }
        
        else if(employeeList[i].getRole() === 'Engineer'){
            employeeHtmlContent += `Name: ${employeeList[i].name} ID: ${employeeList[i].id} Email: ${employeeList[i].email} GitHub: ${employeeList[i].github}`
        }
        
        
        else if(employeeList[i].getRole() === 'Intern'){
            employeeHtmlContent += `Name: ${employeeList[i].name} ID: ${employeeList[i].id} Email: ${employeeList[i].email} School: ${employeeList[i].school}`
        }
    }




    let thePageHtmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"/>
<title>Team Generator</title>
</head>
<div class="jumbotron jumbotron-fluid bg-danger">
<div class="container">
<h1 class="display-4 text-center text-white">The Team</h1>
</div>
</div>
<body>
<div class="container row row-col-sm-12 row-col-md-3 d-flex justify-content-center mx-auto">
<p>
${employeeHtmlContent}
</p>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>`

    // temporary log to see if things are going into array
    console.log('GenerateHTML is being called');
    console.log(employeeList);

    fs.writeFile('./dist/index.html', thePageHtmlContent, function (err){
        if (err) return console.log(err);
    })
}

// calls the initialize function
init();