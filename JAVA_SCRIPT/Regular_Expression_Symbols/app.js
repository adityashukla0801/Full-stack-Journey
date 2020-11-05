let re;
re = /hello/
re = /hello/i

//metcharacter symbols

re = /^h/i        //must starts with
re = /word$/i     //must ends with
re = /^hello$/i    //must end and begins with
re = /h.llo/i      //matches any one chracter
re = /h*llo/i       //matches any charcter form 0 to more
re = /gre?a?y/i     //optional character
re = /gre?a?y\?/i    //escape charater

//Brackets [] - charater sets
re = /gr[ae]y/i;    //must be an a or e
re = /[GF]rey/i      //must be a G or F
re = /[^GF]rey/i     //matches anything except a G and F
re = /[A-Z]rey/     //Matchs any upper case letter
re = /[a-z]rey/     //matches any lower case letter
re = /[A-za-z]ray/  //match any letter
re = /[0-9][0-9]rey/   // match any digit

//Braces{} - quantifiers
re = /hel{2}o/i
re = /hel{2,4}o/i
re = /hel{2,}o/i

//Paretheses ()- Grouping
re = /^([0-9]x){3}$/

//Shorthand Character classes
re = /\w/   //word character - alphanumeric or _
re = /\w+/    // + = one or more
re = /\W/    // non word character
re = /\d/   //matches any digit
re = /\d+/  //matches any digit 0 or more times
re = /\D/   //matches any non-digit
re = /\s/   //matches whitespaces char
re = /\S/   //matches non-whitespaces char
re = /Hell\b/i  // Word Boundary

//Assertions
re = /x(?=y)/;   //matches x if only followed by y
re = /x(?!y)/;    //matches x if NOT followed by y

const str = 'x y'

const result = re.exec(str)
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} Matches ${re.source}`);
  }else{
    console.log(`${str} does not Matches ${re.source}`);
  }
}

reTest(re, str);
