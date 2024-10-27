//JSON Exercise
const students = [
    { "name": "John Doe", "age": 20, "address": { "pincode": "100001", "city": "New York", "country": "USA" } },
    { "name": "Alice Smith", "age": 22, "address": { "pincode": "200002", "city": "Los Angeles", "country": "USA" } },
    { "name": "Rahul Mehta", "age": 21, "address": { "pincode": "110011", "city": "Delhi", "country": "India" } },
    { "name": "Maria Garcia", "age": 23, "address": { "pincode": "28013", "city": "Madrid", "country": "Spain" } },
    { "name": "Sophia Brown", "age": 19, "address": { "pincode": "SW1A 1AA", "city": "London", "country": "UK" } },
    { "name": "Liam Nguyen", "age": 20, "address": { "pincode": "75001", "city": "Paris", "country": "France" } },
    { "name": "Emma Johnson", "age": 21, "address": { "pincode": "90001", "city": "Chicago", "country": "USA" } },
    { "name": "David Chen", "age": 22, "address": { "pincode": "200080", "city": "Shanghai", "country": "China" } },
    { "name": "Nina Patel", "age": 24, "address": { "pincode": "400001", "city": "Mumbai", "country": "India" } },
    { "name": "Carlos Sanchez", "age": 23, "address": { "pincode": "01000", "city": "Mexico City", "country": "Mexico" } }
];
// 1. Accessing Data
// - Write a function that takes in the JSON data and prints out all the students' names.
console.log(`1.1`);
function stname(mystudents){
    mystudents.forEach(mystudents => {
        console.log(mystudents.name);  
    });
}
stname(students);
console.log(`________________________________`)
// - Create a function that lists all students who are from the USA.
console.log(`1.2`);
function usast(usastudent){
    usastudent.forEach(usastudent => {
        let myaddress=usastudent.address;
        if(myaddress.country=="USA"){
            console.log(`Student from USA = `,usastudent.name);
        }
    });
}
usast(students);
console.log(`________________________________`)
// - Write a function to find the city of a student based on their name. If the student is not found, return "Student not found".
console.log(`1.3`);
function stcity(mystudents){
    for(var i=0;i<10;i++){
        if(stname==mystudents[i].name){
            return console.log(mystudents[i].address.city);
        }
    }
    console.log(`Student not found`);
}
var stname='John Doe';
stcity(students);
console.log(`________________________________`)
// 2. Filtering and Mapping
// - Write a function that returns an array of all students who are above 21 years old.
console.log(`2.1`);
//const stabove = students.map(function(mystudents){
const stabove = function(mystudents){
    for(var i=0;i<mystudents.length;i++)
    if(mystudents[i].age>21)
        console.log(mystudents[i].name);
}
//)
stabove(students);
console.log(`________________________________`)
// - Create a function that returns an array of names of students from a given country, like "India" or "Japan".
console.log(`2.2`);

function irj(mystudents){
    for(var i=0;i<mystudents.length;i++){
        if(mystudents[i].address.country=="India"|"Japan"){
            console.log(mystudents[i].name);
        }
    }
}
irj(students);
console.log(`________________________________`)
// - Write a function that returns an array of objects with only name and age properties for each student.
console.log(`2.3`);

function nameage(mystudents){
    const na = mystudents.map(mystudent => (
        {name: mystudent.name, age: mystudent.age}
    ));
    console.log(na);
}
nameage(students);