const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);  //does not know id, or email
        this.officeNumber = officeNumber;
    }

    getRole() {   
        return 'Manager';   
    }
}