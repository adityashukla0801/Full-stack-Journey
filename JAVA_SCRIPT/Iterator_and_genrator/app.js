//Iterator Example
function nameIterator(name){
  let nextIndex = 0 
  
  return{
    next: function(){
      return nextIndex < name.length ?
      { value: name[nextIndex++], dono: false } :
      {done: true }
    }
  }
}

const namesArr = ['Jack', 'Jill', 'Jhon']

const name = nameIterator(namesArr)

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

//Generator Example
function* sayNames(){
  yield 'Jack'
  yield 'Jill'
  yield 'Jhon'
}

const names = sayNames()

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

//ID Creator
function* createIds(){
  let index = 1

  while(true){
    yield index++
  }
}

const gen = createIds()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

