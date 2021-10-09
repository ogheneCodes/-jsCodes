//using if statement
const age = 25;
if( age > 35){
    console.log(`my age is ${age} and it is above 30`);
} else{
    console.log(`my age is ${age} and it is not above 30`);
}
//using elseif statement
let numb = NaN;
numb = "hello";
if(numb === 50){
console.log(`numb is ${numb} and it is equal to 50`);
}else if(numb>50){
    console.log(`numb is ${numb} and it is greater than 50`);
}else if(numb<50){
    console.log(`numb is ${numb} and it is less than 50`);
}else{
    console.log(`numb is ${numb} and it is nothing`);
}
//using the ternery operator
const x = 10;
const color = x === 10 ? "true" : "false";  //x > 10 then show(true)otherwise show(false)
console.log(`${color}`);

// using switch statement 
const school = "AUN";
switch(`${school}`){
    case 'UNN':
        console.log("school is UNN");
        break;
    case 'ABU':
        console.log("school is ABU");
        break;
    case 'Delsu':
        console.log("school is Delsu");
        break;
    default:
        console.log("school does not exist here in the swtich");
        break;
};