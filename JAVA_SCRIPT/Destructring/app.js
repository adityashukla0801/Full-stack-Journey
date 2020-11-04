//Destruing Assignmtent

let a, b;
[a, b] = [100, 200];
[a, b, c, ...rest] = [100, 200, 300, 400, 500];         
console.log(rest);

({a, b} = {a: 10, b:20, c:30, d:40, e:50});
({a, b, ...rest} = {a: 10, b:20, c:30, d:40, e:50}) 
console.log(rest);

//Array Destructing
const people = ['Jhon', 'Bill', 'Smith']
const [person1, person2, person3] = people
console.log(person1, person2, person3);

//parse array return from function
function getPeople(){
  return ['Jhon','Jill','Jonson']
}
let [p1, p2, p3] = getPeople()
console.log(p1, p2, p3);

// object destructing
const person ={
  name: 'Jhon',
  age: '32',
  city: 'Boston',
  gender: 'male',
  sayHello: function(){
    console.log('Hello');
  }
}
// old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6
const {name, age, city, gender, sayHello} = person;
console.log(name, age , city, gender);
sayHello()