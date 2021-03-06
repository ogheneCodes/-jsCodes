// for loop
for(let i = 1; i < 20; i++){
    // console.log(`for loop numbers: ${i}`);
};
//while loop
let e = 0;
while(e < 10){
    // console.log(`while loop numbers: ${e}`);
    e++;
};
//forEach loop
const Activities = [
    {
        id: 1,
        event: "went to play ball",
        result: false,
    },
    {
        id: 1,
        event: "went to church",
        result: true,
    },
    {
        id: 1,
        event: "went to the Library",
        result: true,
    },
]
//using forEach to loop through an array
Activities.forEach(function(Activities){
        console.log(Activities.event);
    });
//using map to loop through an array
    const activities = Activities.map(function(Activities){
        return Activities.event;
    })
    console.log(activities);
//using filter to loop through an array
const result = Activities.filter(function(Activities){
    return Activities.result === true;
})
console.log(result);

//using tenery operator for conditioning instead of foreach loop
const numb = 9, numb1 = 10, numb2 = 11;

const numb3 = numb >= 10 || numb1 >= 10 || numb2 >= 10 ? 'true' : 'false';
console.log(numb3);
