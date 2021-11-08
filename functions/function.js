//declaring function in javascript
function addNum(a, b, c) {
    return a + b + c;
}
console.log(addNum(2, 2, 3));

//you can also set the paramenter with default values
function minusNum(a = 100, b = 50, c = 20) {
    return a - b - c;
}
console.log(minusNum());
//you can also set you variable as a function even after seting tje parameter with default values
const number = function myNumber(a = 5, b = 5, c = 5, d = 5, e = 15) {
    return a + b + c + d - e
}
console.log(number())

//defining variables in global scope
let num1 = 4;
let num2 = 4;
function multiply() { //defining function in global scope as values are outside
    return num1 * num2
}
console.log(multiply());

//nexted function example(variables inside a function)
 function addition(){
    let  number1 = 22;
    let  number2 = 33;

     function added(){
         return number1 + number2
     }
     return added();
 }
 console.log(addition());
 
 //using class in function
 function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
}
// console.log(Apple(type));

//constructive function in Javascript OOP
function person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.fullName = function(){ //using a function inside a constructive function
        return `${firstName} ${lastName}`
    }
}
//Instatiate object 
const person1 = new person('john', 'ibori', '2-3-1990');
const person2 = new person('Max', 'bobo', '2-24-1994');
console.log(person2.dob)
console.log(person2.fullName())

// using split
const longWord = "oghenemagaebobomaxwell";
console.log(longWord.split(""));

