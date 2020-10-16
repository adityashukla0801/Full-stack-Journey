function Person(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('jhon', 'Doe')
console.log(person1.greeting())

function Customer(firstName, lastName, phone,membership){
    Person.call(this,firstName,lastName)
    this.phone = phone
    this.membership = membership
}

Customer.prototype = Object.create(Person.prototype)

Customer.prototype.constructor = Customer

const customer1 = new Customer('Tom','Smith','555-555-5555','Standard')


console.log(customer1.greeting());  

Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} Welcome to Our Company`
}
console.log(customer1.greeting());

