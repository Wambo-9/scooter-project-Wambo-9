const User = require('../src/User');

// User tests here
describe (' The User Class', () => {
    let user = new User ('Jane', 'abcd1234')
    test('is an object type', () => {
        expect(typeof user).toBe('object')
    })
    test('username', () => {
        expect(user.username). toBe ('Jane')
        expect(user.username). toBe ('not Jane')
    })
    test('age', () => {
        expect(typeof user.age) .toBe ('interger')
    })
}); 
// test username

// test password

// test age
