exports.id=333,exports.ids=[333],exports.modules={6811:(e,s,r)=>{Promise.resolve().then(r.bind(r,4203))},2835:(e,s,r)=>{Promise.resolve().then(r.bind(r,1377))},9226:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},9394:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},7138:(e,s,r)=>{"use strict";r.d(s,{A:()=>t});let t=[{title:"Fizz Buzz",slug:"fizz-buzz",level:1,levelName:"easy",tags:["easy"],code:`function fizzBuzz(num) {
    // your code below
    
    

    
    // your code above
}`,description:'Write a program that prints the numbers from 1 to the passed param. But for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5 print "FizzBuzz".',test:function(e){let s=[],r=console.log,t=[];console.log=e=>t.push(e);try{Function(e+"; return fizzBuzz;")()(15),s.push({passed:"Fizz"===t[2],message:`fizzBuzz(3) should log "Fizz" instead of ${t[2]}`}),s.push({passed:"Buzz"===t[4],message:`fizzBuzz(5) should log "Buzz" instead of ${t[4]}`}),s.push({passed:"FizzBuzz"===t[14],message:`fizzBuzz(15) should log "FizzBuzz" instead of ${t[14]}`}),s.push({passed:"1"===t[0]||1===t[0],message:`fizzBuzz(1) should log "1" instead of ${t[0]}`}),s.push({passed:"2"===t[1]||2===t[1],message:`fizzBuzz(2) should log "2" instead of ${t[2]}`}),s.push({passed:"4"===t[3]||4===t[3],message:`fizzBuzz(4) should log "4" instead of ${t[3]}`})}catch(e){s.push({passed:!1,message:`Error: ${e?.message}`})}return console.log=r,s},solution:`function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}`,examples:["fizzBuzz(15) -> console.log(1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz');"]},{title:"Reverse a String",slug:"reverse-string",level:1,levelName:"easy",tags:["easy"],code:`function reverseString(str) {
  // your code below
  
  

  
  // your code above
}`,description:"Write a function that reverses a string.",test:function(e){let s=[];try{let r=Function(e+"; return reverseString;")();s.push({passed:"olleh"===r("hello"),message:"reverseString('hello') should return 'olleh'"}),s.push({passed:"dlrow"===r("world"),message:"reverseString('world') should return 'dlrow'"}),s.push({passed:"racecar"===r("racecar"),message:"reverseString('racecar') should return 'racecar'"}),s.push({passed:"54321"===r("12345"),message:"reverseString('12345') should return '54321'"})}catch(e){s.push({passed:!1,message:`Error: ${e instanceof Error?e.message:String(e)}`})}return s},solution:`function reverseString(str) {
  return str.split('').reverse().join('');
}`,examples:["reverseString('hello') -> 'olleh';","reverseString('world') -> 'dlrow';","reverseString('racecar') -> 'racecar';","reverseString('12345') -> '54321';"]},{title:"Palindrome",slug:"palindrome",level:1,levelName:"easy",tags:["easy"],code:`function isPalindrome(str) {
  // your code below
  
  

  
  // your code above
}`,description:"Write a function that determines if a string is a palindrome.",test:function(e){let s=[];try{let r=Function(e+"; return isPalindrome;")();for(let{input:e,expected:t}of[{input:"racecar",expected:!0},{input:"hello",expected:!1},{input:"A man a plan a canal Panama",expected:!0},{input:"No lemon no melon",expected:!0},{input:"Was it a car or a cat I saw",expected:!0}]){let a=r(e);s.push({passed:a===t,message:`Input: "${e}", Expected: ${t}, Got: ${a}`})}}catch(e){s.push({passed:!1,message:`Error: ${e instanceof Error?e.message:String(e)}`})}return s},solution:`function isPalindrome(str) {
  const reversed = str.replace(/\\W/g, '').toLowerCase().split('').reverse().join('');
  return str.replace(/\\W/g, '').toLowerCase() === reversed;
}`,examples:["isPalindrome('racecar') -> true;","isPalindrome('hello') -> false;","isPalindrome('A man a plan a canal Panama') -> true;","isPalindrome('No lemon no melon') -> true;","isPalindrome('Was it a car or a cat I saw') -> true;"]},{title:"Reverse Integer",slug:"reverse-integer",level:1,levelName:"easy",tags:["easy"],code:`function reverseInteger(num) {
    // your code below
    
    
  
    
    // your code above
  }`,description:"Write a function that reverses an integer.",test:function(e){let s=[];try{let r=Function(e+"; return reverseInteger;")();s.push({passed:321===r(123),message:"reverseInteger(123) should return 321"}),s.push({passed:-654===r(-456),message:"reverseInteger(-456) should return -654"}),s.push({passed:1===r(1e3),message:"reverseInteger(1000) should return 1"}),s.push({passed:0===r(0),message:"reverseInteger(0) should return 0"})}catch(e){s.push({passed:!1,message:`Error: ${e instanceof Error?e.message:String(e)}`})}return s},solution:`function reverseInteger(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    return Math.sign(num) * reversed;
}`,examples:["reverseInt(123) -> 321;","reverseInt(-456) -> -654;","reverseInt(1000) -> 1;","reverseInt(0) -> 0;"]},{title:"Anagram",slug:"anagram",level:1,levelName:"easy",tags:["easy"],code:`function anagram(stringA, stringB) {
    // your code below
    
    
  
    
    // your code above
  }`,description:"Check if two strings are anagrams of each other. An anagram uses the same characters in the same quantity. Ignore spaces, punctuation, and case differences.",test:function(e){let s=[];try{let r=Function(e+"; return anagram;")();s.push({passed:!0===r("listen","silent"),message:"Basic anagram"}),s.push({passed:!1===r("hello","world"),message:"Not an anagram"}),s.push({passed:!1===r("abc","abcd"),message:"Different lengths"}),s.push({passed:!0===r("Listen","Silent"),message:"Anagram with different cases"}),s.push({passed:!0===r("conversation","voices rant on"),message:"Anagram with spaces"})}catch(e){s.push({passed:!1,message:`Error: ${e instanceof Error?e.message:String(e)}`})}return s},solution:`function anagram(stringA, stringB) {
    function cleanString(str) {
      return str
        .toLowerCase()
        .replace(/\\s/g, '')
        .replace(/\\W/g, '')
        .split('')
        .sort()
        .join('');
    }
    
    return cleanString(stringA) === cleanString(stringB);
  }`,examples:["anagram('listen', 'silent') -> true;","anagram('hello', 'world') -> false;","anagram('abc', 'abcd') -> false;","anagram('Listen', 'Silent') -> true;","anagram('conversation', 'voices rant on') -> true;"]},{title:"Capitalize",slug:"capitalize",level:1,levelName:"easy",tags:["easy"],code:`function capitalize(str) {
    // your code below
    
    
  
    
    // your code above
  }`,description:"Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.",test:function(e){let s=[];try{let r=Function(e+"; return capitalize;")();[{input:"hello",expected:"Hello"},{input:"world",expected:"World"},{input:"a short sentence",expected:"A Short Sentence"},{input:"this is a test",expected:"This Is A Test"}].forEach(({input:e,expected:t})=>{try{let a=r(e);s.push({passed:a===t,message:`Input: "${e}", Expected: "${t}", Got: "${a}"`})}catch(e){s.push({passed:!1,message:`Error: ${e instanceof Error?e.message:String(e)}`})}})}catch(e){s.push({passed:!1,message:`Error: ${e instanceof Error?e.message:String(e)}`})}return s},solution:`function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}`,examples:["capitalize('hello') -> 'Hello';","capitalize('world') -> 'World';","capitalize('a short sentence') -> 'A Short Sentence';","capitalize('this is a test') -> 'This Is A Test';"]},{title:"Array Chunking",slug:"chank",level:2,levelName:"medium",tags:["medium"],code:`function chank(arr, size) {
    // your code below
    
    
  
    
    // your code above
  }`,description:"Write a function that takes an array and chunk size as arguments and returns an array of arrays where each subarray has at most the specified number of elements.",test:function(e){let s=[];try{let r=Function(e+"; return chank;")();s.push({passed:JSON.stringify(r([1,2,3,4],2))===JSON.stringify([[1,2],[3,4]]),message:"Basic functionality"}),s.push({passed:JSON.stringify(r([1,2,3,4,5],2))===JSON.stringify([[1,2],[3,4],[5]]),message:"Uneven chunks"}),s.push({passed:JSON.stringify(r([],2))===JSON.stringify([]),message:"Empty array"}),s.push({passed:JSON.stringify(r([1,2],5))===JSON.stringify([[1,2]]),message:"Chunk size larger than array"}),s.push({passed:JSON.stringify(r([1,2,3],1))===JSON.stringify([[1],[2],[3]]),message:"Chunk size of 1"})}catch(e){s.push({passed:!1,message:`Error: ${e instanceof Error?e.message:String(e)}`})}return s},solution:`function chank(arr, size) {
    const result = [];
    let chank = [];

    for (const item of arr) {
      chank.push(item);
      if (chank.length === size) {
        result.push(chank);
        chank = [];
      }
    }
    if (chank.length > 0) {
      result.push(chank);
    }
    return result;
    
  }`,examples:["chank([1, 2, 3, 4], 2) -> [[1, 2], [3, 4]];","chank([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]];","chank([], 2) -> [];","chank([1, 2], 5) -> [[1, 2]];","chank([1, 2, 3], 1) -> [[1], [2], [3]];"]},{title:"Max Char",slug:"maxchar",level:2,levelName:"medium",tags:["medium"],code:`function maxChar(str) {
    // your code below
    
    
  
    
    // your code above
  }`,description:"Given a string, return the character that is most commonly used in the string.",test:function(e){let s=[];try{let r=Function(e+"; return maxChar;")();[{input:"a",expected:"a"},{input:"Hello",expected:"l"},{input:"abcccccccd",expected:"c"},{input:"apple 1231111",expected:"1"}].forEach(({input:e,expected:t})=>{let a=r(e);s.push({passed:a===t,message:`Input: "${e}", Expected: "${t}", Got: "${a}"`})})}catch(e){s.push({passed:!1,message:`Error: ${e instanceof Error?e.message:String(e)}`})}return s},solution:`function maxChar(str) {

  const map = {};
    let maxChar;
    let maxNum = 0

    str.replace(/s/g, '').toLowerCase().split('').forEach(char => {
      map[char] = map[char] + 1 || 1;
    });
    
    for(const char in map) {
      if (map[char] > maxNum) {
        maxChar = char;
        maxNum = map[char];
      }
    }
  
    return maxChar;
    
  }`,examples:["maxChar('a') -> 'a'","maxChar('Hello') -> 'l'","maxChar('abcccccccd') -> 'c'","maxChar('apple 1231111') -> '1'"]},{title:"Mario",slug:"mario",level:1,levelName:"easy",tags:["easy"],code:`function mario(n) {
    // your code below
    
    
  
    
    // your code above
  }`,description:"Write a function `mario` that takes a number `n` and prints a right-aligned staircase of height `n` using the `#` character.",test:function(e){let s=[],r=console.log,t=[];console.log=e=>t.push(e);try{let r=Function(e+"; return mario;")();r(1),s.push({passed:"#\n"===t[0],message:`mario(1) should log "#" instead of ${t[0]}`}),t.length=0,r(2),s.push({passed:"# \n##\n"===t[0],message:`mario(2) should log "# 
##
" instead of ${t[0]}`}),t.length=0,r(3),s.push({passed:"#  \n## \n###\n"===t[0],message:`mario(2) should log "#  
## 
###
" instead of ${t[0]}`}),t.length=0}catch(e){s.push({passed:!1,message:`Error: ${e instanceof Error?e.message:String(e)}`})}return console.log=r,s},solution:`function mario(n) {
    let str = '';

    for (var i = 1; i <= n; i++) {
      str += new Array(i).fill('#').join('').padEnd(n, ' ') + '\\n';
    }

    console.log(str);
  }`,examples:[`mario(1) -> console.log('#\\n');`,`mario(2) -> console.log('# \\n##\\n');`,`mario(3) -> console.log('#  \\n## \\n###\\n');`]}].map((e,s)=>({...e,index:s+1}))},638:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>d,metadata:()=>u});var t=r(2740),a=r(9105),n=r.n(a),i=r(8716),o=r.n(i);r(2704);var l=r(4203);function c(){return(0,t.jsx)("footer",{className:"bg-gray-800 text-white py-4",children:(0,t.jsxs)(l.default,{maxWidth:"lg",className:"flex flex-col md:flex-row justify-between items-center",children:[(0,t.jsx)("div",{className:"mb-4 md:mb-0",children:(0,t.jsx)("p",{children:"\xa9 2024 All rights reserved."})}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4",children:[(0,t.jsx)("a",{href:"https://www.linkedin.com/in/max-im",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),(0,t.jsx)("a",{href:"https://github.com/max-im",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})]})})}let u={title:"js-lab | Code Checking Platform",description:"A platform for checking and reviewing code. The most popular interview questions and tasks."};function d({children:e}){return(0,t.jsx)("html",{lang:"en",children:(0,t.jsx)("body",{className:`${n().variable} ${o().variable} antialiased`,children:(0,t.jsxs)("div",{className:"flex flex-col min-h-screen w-full",children:[(0,t.jsx)(l.default,{maxWidth:"lg",className:"flex-grow",children:e}),(0,t.jsx)(c,{})]})})})}},6055:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2704:()=>{}};