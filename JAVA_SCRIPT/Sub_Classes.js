class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello There ${this.firstName} ${this.lastName}`;
  }
  
}

class Customer extends Person{
  constructor(firstName, lastName, phone, membership){
  super(firstName, lastName)
  this.phone = phone
  this.membership = membership
  }

  static membershipCost(){
    return 500;
  }
  
}
const jhon = new Customer('jhon', 'doe', '555-555-5555', 'standard')

console.log(jhon);
console.log(jhon.greeting());
console.log(Customer.membershipCost());