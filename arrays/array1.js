/* we have two(2) methods of Arrays, they are the:
1. Number arrays:  var name = [1, 2, 3]
2. Associative arrays: var name = {"key1": 1, "key2": 2, "key3": 3}
There are two ways we declare an arrays*/
    let empty = [1, 2, 3, 4, 5]
    let newEmpty = new Array("max", 1, 3, empty, 4, 5);
    let newArray = new Array(empty, newEmpty)
   //associative arrays
   let student = {
       "id": 1,
       "name": "Maxwell",
       "age": 24,
       "color": "red",
       "name": "maxwell",
       "message": "Hello programmer"
   }
    //to access arrays
console.log(student.name); //using dot(.) notation
console.log(student["color"]) //using bracket[]notation
// adding values into associative arrays
student["school"] = "UNN"
student.surName = "Ebobo";
console.log(student["surname"])
console.log(student)
