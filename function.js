//declaring function in javascript
function addNum(a,b,c){
    return a+b+c;
}
console.log(addNum(2,2,3));
//you can also set the paramenter with default values
function minusNum(a = 100,b = 50,c = 20){
    return a-b-c;
}
console.log(minusNum());
