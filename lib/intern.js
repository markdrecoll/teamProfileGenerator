const Employee = require('./Employee');

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