const personPrototypes = {
  greeting : function(){
    return `Welcome there ${this.firstName} ${this.lastName}`
  },
    getsMarried : function(newLastName){
    this.lastName = newLastName
  }


}

const mary = Object.create(personPrototypes)
 mary.firstName = 'mary'
 mary.lastName = 'willams'
 mary.age = 30
 mary.getsMarried('Thomson')

 console.log(mary);
 console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
   firstName: {value:'Brad'},
   lastName: {value: 'Traversy'},
   age : {value: 36}
   
 })

 console.log(brad);
 console.log(brad.greeting());