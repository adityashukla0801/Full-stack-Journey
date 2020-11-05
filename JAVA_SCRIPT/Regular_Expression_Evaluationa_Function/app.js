let re;
re = /hello/
re = /hello/i
// re = /hello/g

console.log(re);
console.log(re.source);

const result1 = re.exec('hello word')

console.log(result1);
console.log(result1[0]);
console.log(result1.index);
console.log(result1.input);

const result2 = re.test("hello")
console.log(result2);

const str = 'Hello There'
const result = str.match(re)
console.log(result);

const str1 = 'Brad Hello There'
const result3 = str1.search(re)
console.log(result3);

const str2 = 'Hello There'
const newStr = str2.replace(re, 'Hi')
console.log(newStr);