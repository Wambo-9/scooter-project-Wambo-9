class Scooter {
  constructor (scooterId, typeOfBike){
    this.scooterId = Math.trunc(Math.random() * 10000000)
  }
rent(userName){
  this.currentUser = userName; 
}
dock (){
  this.currentUser = ' '
}
}

module.exports = Scooter;
