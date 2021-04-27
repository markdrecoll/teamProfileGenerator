const Employee = require('../lib/employee');

describe('Employee', () => {
    it('Create a new instance of the employee class. Passes in the data.', () => {
        const newEmployee = new Employee('mark', 99, 'mark@mark.com');
    expect(newEmployee).toEqual({name:'mark',id:99,email:'mark@mark.com'})
    })
})