const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  // ScooterApp code here
  constructor( ){
    this.newCustomers = [ ]; 
  }
}
  new(username, password) {
    //if customer already exists  in newcustomer array, return a message saying already registered 
    for(let i = 0; i < this.newCustomers.length; i++){
      if (this.newCustomers[i]. username === username){
        console.log('User already exists')
        return; 
      } 
    }
  }
    let newUser = new User (username, password); 
    this.newCustomers.push(newUser); 


  existing(username, password){
//log existing customer in
for(let i = 0; i < this.newCustomers.length; i++){
  if (this.newCustomers[i]. username === username && this.newCustomers [i]. password === password){
    console.log('Log in succesful')
    return; 
  }
}
addScooter () {
  //registers a new scooter for the fleet
  let newScooter = new scooter();
  Scooter.fleet.push(newScooter); 
  return newScooter; 
}
  }
let myApp = new ScooterApp(); 
myApp.newCustomers('irene', 'password'); 
myApp.existing('Irene', 'password'); 
myApp.addScooter(); 
myApp.addScooter(); 
Scooter.rent('jordan'); 

module.exports = ScooterApp;
