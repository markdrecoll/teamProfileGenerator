// creates a Manager class that has all the basic employee parameters, and then an office number as well

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {   
        return 'Manager';   
    }
}

module.exports = Manager;