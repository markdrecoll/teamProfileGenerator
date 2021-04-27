const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('Create a new instance of the engineer class. Passes in the data.', () => {
        const newEmp = new Engineer('bill', 88, 'bill@bill.com', 'billsGitHub');
    expect(newEmp).toEqual({name:'bill', id:88, email:'bill@bill.com', github:'billsGitHub'})
    })
})