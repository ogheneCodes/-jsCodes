// for callback function in asynchronous javascript
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>{
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){ //for status code in HTTP request
            callback(undefined, request.responseText); //call back getTodos
        }else if(request.readyState === 4){
            callback(`could not fetch data`, undefined); //call back getTodos
        }
    });
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/'); //for you to request then you must GET that which you request for
    request.send();
};
getTodos((err, data) =>{
console.log(`callback is fired`);
if(err){
    console.log(err);
} else{
    console.log(data);
}
});
 









