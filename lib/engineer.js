// creates an Engineer class that has all the basic employee parameters, and then a github as well

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole() {   
        return 'Engineer'; 
    }
}

module.exports = Engineer;