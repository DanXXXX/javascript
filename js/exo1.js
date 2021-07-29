// 01 - Hello World

console.log("Hello World");

// 02 - String 
let test = "My name is Dany";
console.log(test);

// 03 - concatenation 
let name = "Nyoung";

console.log( "Nice to meet you "+ name);

// 04 - concatenation 
let testLength = "I'm very long !" ;

console.log(testLength.length);

// 05 - Replace
let food = "croissant is meh";
console.log(food.replace("meh", "so good") );

// ## 06 - Up and Down
let basic       = "This is Cool";
let basicUp     = "this is cool";
let basicDown   = "this is cool";

console.log(basic, basicUp.toUpperCase(), basicDown.toLowerCase());

//  07 - Split
let word    = "banana";
// let letters = ['b', 'a', 'n', 'a', 'n', 'a'];
let letters = word.split("");

console.log(letters);

// 08 - Template
let  age = 41;
let template = `I'm  ${age}  years old`;

console.log(template);