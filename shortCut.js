//Here are 20 shortcut keys for Javascript

// (1) declaring Variables using the long method
// let x; let y = 20;
// //  short method
// let x, y = 20;

//(2) Assigning value to Multiple variables using the long method
// let a, b, c;
// a = 5;
// b = 6;
// c = 2;
// // short method
// let [a, b, c,] = [5, 3, 2];
// console.log(a + b + c);

//(3)using the ternary operator for conditional operations long method
// let number = 26;
// let isEven;
// if(number % 2){
//     isEven = true;
// }else {
//     isEven = false;
// }

//short method
// let number = 26;
// let isEven = number % 2 ? true : false;
// console.log(isEven)

//(4)AND(&&)long method
// if(isLooggedIn){
//     goToHomePage();
// }
//short
//isLooggedIn && goToHomePage();

//(5)Swap Variables using Arrays destructuring assigned long method
// let x = 'Hello Max', y = 25;
// const temp = x;
// x = y;
// y = temp;
//short method
// [x, y] = [y, x];
// console.log(x, y);

//(6) declaring function which is long
// function add(a, b){
//     return a + b;
// }
//declaring function with arrow which is short
// const add = (a, b) => a + b;
// console.log(add(3, 2))

//(7)using the Template literals. doing away with + concantination long method
// const name = "My name is maxwell";
// const age = 24;
// const school = "UNN";
//long method
// console.log(name + "and i am"+ " "+ age+ ", "+" "+ school);
//short method
// console.log(`${name} and i am ${age}, and i attend ${school}`);

//(8) using multiline strings use + operator and \n for new line escape inside a backticks(`) Long method
// console.log('javascript is a\n'    + 'programming language that is\n' +
// 'popular and well documented to use,\n' + 'i love Javascript')
// //short method using the backticks(`)
// console.log(`javascript is a programming language that is popular and i am god in it,\n am well skilled using it`)

//(9) multiple condition checking long method
// let valueA = 20; valueB = 30;
// if(valueA === 20 || valueA === '20' || valueB === 30 || valueB === '30'){
//     console.log(`ValueA ${valueA} is equal to 20 and ValueB ${valueB} is equal to 30`)
// }else {
//     console.log(`they all are not equal`)
// }
//shortcut for multiple condition checking using indexOf()
// let value = 3;
// if([1, 'one', 2, 'two'].indexOf(value) >= 0){
//     console.log(` value is greater than or equal to 0`)
// }else {
//     console.log(`value less than 0`)
// }

//(10)object property assignment long method
// let firstName = 'oghenemaga', lastName = 'Ebobo'
// let obj = {
//     firstName:firstName, lastName: lastName
// }
//shorthand for object property assignment
// let obj = {firstName, lastName}
// console.log(obj)

//(11)converting strings to number long method
// let  total = parseInt('234');
// let avarage = parseFloat('23.9');
// let _string = "2929"
//short method to convert strings to method
// let total = +'234'
// let avarage = +'23.9'
// console.log(`${total}`)
// console.log(`${avarage}`)
// // console.log(_string)

//(12)Repeating a string multiple time
// let str = '';
// for(i = 0; i < 5; i++){
//     str += 'hello Max\n';
// }
// console.log(str);
// //short method repeating a string multiple time
// let please = 'please am sorry\n'.repeat(10);
// console.log(please)

//(13) Exponent Power long method
// const power = Math.pow(4, 3);
// console.log(power)
// //short method for Exponent power method
// const power1 = 4 ** 3;
// console.log(power1)

//(14) Double NOT bitwise operator(~~) used to substitute "Math.floor"
// const floor = Math.floor(7.8);
// //shortcut for using Math.floor()
// const floor1 = ~~6.9;
// console.log(floor)
// console.log(floor1)

//(15)short method finding Max and Min number in an array using the (...)
// const arr = [2, 1, 4, 6, 12, 8];
// const _max = Math.max(...arr);
// const _min = Math.min(...arr);
// console.log(_max);
// console.log(_min);

//(16) to Loop through an array long method
// const arr = [10, 20, 30, 12, 89, 90, 1, 8, 0, 13];
// //long
// // for(let i = 0; i < arr.length; i++){
// //     console.log(arr[i])
// // }
// //short for of loop
// for(const val of arr){
//     console.log(val);
// }
//for in loop
// for(const index in arr){
//     console.log(arr[index]);
// }
//(17)we can also loop in object too with short method
// const obj = {x: 1, y:4, z:9}
// for(const key in obj){
// console.log(obj[key])
// }

// //(18)joining of Arrays long method
// let arr1 = [20, 30];
// let arr2 = arr1.concat([2,3,4]);
// console.log(arr2);
// //shortcut
// let arr3 = [89, 33, 11, ...arr1, ...arr2];
// console.log(arr3);

//(19)Deep cloning of a multi-level object long method
// let obj = {x: 20, y: {z:30}};
// const makeDeepClone = (obj) => {
//     let newObject = {};
//     object.keys(obj).map(key => {
//        if(typeof obj[key] === 'object'){
//            newObject[key] === makeDeepClone(obj[key]);
//        }else {
//            newObject[key] = obj[key];
//        }
//     });
//     return newObject;
// }
// const cloneObj = makeDeepClone(obj);
//short method for Deep cloning of a multi-level object
// const cloneObj = JSON.parse(JSON.stringify(obj));
// console.log(cloneObj);
// console.log(obj);

//(20) Getting Character from string long method
// let str = "maxbobo@unn.edu.ng"
// //long using the chatAt()
// let long = str.charAt(3);
// console.log(long);
// //short without using the chartAt()
// let short = str[2];
// console.log(short);


