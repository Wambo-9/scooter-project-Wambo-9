const Scooter = require('../src/Scooter');
const User = require('../src/User');

//typeof scooter === object
describe('The Scooter Class', () => {
  let scooter1 = new Scooter ()
  let scooter2 = new Scooter ()
  test('creates an object type', () => {
    expect(typeof scooter1).toEqual('object');
  });
  test('creates unique scooter ids', () => {
    expect (scooter1.scooterId != scooter2.scooterId).toBe (true)
  })

  describe ('The Scooter ', () => {
    let scooter1 = new Scooter();
    let user = new User ('Jane', '1234')
    scooter1.rent(user.username)
    test('rent method correctly assigns its user', () => {
      expect(scooter1.currentUser).toBe ('jane')
    })
  })

  
});

//Method tests
describe('The Scooter ', () => {
  // tests here!
  //rent method
  //dock method
  //requestRepair method
  //charge method
});
