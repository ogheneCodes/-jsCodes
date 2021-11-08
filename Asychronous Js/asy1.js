//How to create a request using XMLHttpRequest()
//This is hot to write an HTTP Requests
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>{
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){ //for status code in HTTP request
        console.log(request, request.responseText); //this brings an associative array in our console
    }else if(request.readyState === 4){
        console.log(`could not fetch the data`);
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //for you to request then you must GET that which you request for
request.send();

