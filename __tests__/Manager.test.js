const Manager = require('../lib/manager');

describe('Manager', () => {
    it('Create a new instance of the manager class. Passes in the data.', () => {
        const newManager = new Manager('grimreaper', 66, 'grim@reaper.com', '5551234567');
    expect(newManager).toEqual({name:'grimreaper', id:66, email:'grim@reaper.com', officeNumber:'5551234567'})
    })
})