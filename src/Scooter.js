class Scooter {
  constructor (scooterId, typeOfBike){
    this.scooterId = Math.trunc(Math.random() * 10000000)
  }
rent(userName, scooterId){
  this.currentUser = userName; 
}
dock (){
  this.currentUser = ' '
}
}

module.exports = Scooter;
