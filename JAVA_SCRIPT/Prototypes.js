function Person(firstName, lastName, dob){
  this.firstName = firstName
  this.lastName = lastName
  this.birthday = new Date(dob)
  
}

Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

Person.prototype.getMarried = function(newLastName){
  this.lastName = newLastName;
}    
const jhon = new Person('jhon', ' deo', '9-10-90')
const marry = new Person('marry','jonson','march 20 89')

console.log(jhon);
console.log(marry);

console.log(jhon.calculateAge());
console.log(marry.getFullName());

marry.getMarried('smith')
console.log(marry.getFullName());

console.log(marry.hasOwnProperty('lastName'));
console.log(marry.hasOwnProperty('getFullName'));

