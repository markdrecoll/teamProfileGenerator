// creates an Intern class that has all the basic employee parameters, and then a school as well

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);  //does not know id, or email
        this.school = school;
    }
      
    getSchool(){
        return this.school;
    }

    getRole() {   
        return 'Intern';   
    }
}

module.exports = Intern;