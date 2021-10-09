//using objects
let person1 = {
    name: "maxwell",
    age: 23,
    color: "black",
}
// person1.name = "james";
person1["age"] = "22"
// person1.car = "benz";
person1.car = ["benz", "toyota", "volvo"];
person1["height"] = "12ft";
console.log(person1);

//using arrays
let person2 = [
    names = ["yemi", "victor", "amadin"],
    age = [23, 32, 44],
    color = ["yellow", "black", "blue"],
];
person2["2"].push("black");
person2["3"] = ["benz", "toyota"],
// person2["3"].push("volvo");
person2["3"].unshift("camry");
person2["3"].unshift("ferarri");
person2["2"].unshift("orange");
console.log(person2);
// console.dir("Maxwell is good");

const firstName = "Ebobo";
const lastName = "Maxwell";
const age = 23;
const color = "black";
const career = [
    academic = ["Librarian", "Teacher", "Writer", "Editor", "researcher"],
    IT = ["web_dev", "cloud_comp", "Data_Sci", "Mobile_dev", "Digital_Mkt"],
    office = ["remote", "physical"]
];
console.log(` this are my details: ${firstName}, ${lastName}, ${age},${color}, ${career}`);
// console.log(`my name is ${firstName} ${lastName} and i am ${age}years old`);