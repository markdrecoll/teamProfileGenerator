const Intern = require('../lib/intern');

describe('Intern', () => {
    it('Create a new instance of the intern class. Passes in the data.', () => {
        const newIntern = new Intern('ted', 77, 'ted@ted.com', 'tedschool');
    expect(newIntern).toEqual({name:'ted', id:77, email:'ted@ted.com', school:'tedschool'})
    })
})