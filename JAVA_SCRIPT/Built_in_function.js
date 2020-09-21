  const name1 = 'Aditya'
  const name2 = new String('Aditya')

  console.log(name1);
  console.log(name2);

  if(name2 === 'Aditya'){
    console.log('YES');
  }else{
    console.log('NO')
  }

  const num1 = 5;
  const num2 = new Number(5)

  const bool1 = true
  const bool2 = new Boolean('true')

  const getSum1 = function(x,y){
    return x+y
  }
  console.log(getSum1(10,12));

  const getSum2 = new Function('x', 'y','return x + y' )
  console.log(getSum2(10,1));

  const jhon1 = {name : 'jeff'}
  const jhon2 = new Object({name: 'jeff'})
  console.log(jhon2);

  const arr1 = [1,2,3,4]
  const arr2 = new Array(1,2,3)
  console.log(arr2);

  const re1 = /\w+/
  const re2 = new RegExp('\\w+')
  console.log(re2)