const user = { email: "jdeo@gmail.com"}

try{
  // produce a ReferenceError
  // myFunction();

  // produce a TyprError
  // null.myFunction();

  // produce a SyntaxError
  // eval('Hello World')
  
  // produce URIError
  // decodeURIComponent('%')

  if(!user.name){
    // throw 'User has no name';
    throw new SyntaxError("user has no name")
  }
}catch(e){
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
}finally{
  console.log("Finally runs regardless of result...");
}

console.log("Program continues...");
