/* Using Json inside js

const names = `["Spongebob", "Patrick", "Squidward"]`;

const person = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": false,
    "hobbies": ["Cooking", "Playing Football", "Watching Film"]
}`;

const people = `[{
    "name": "Fuad",
    "age": 23,
    "isEmployed": false
}, {
    "name": "Abdu",
    "age": 25,
    "isEmployed": true
}, {
    "name": "Aymen",
    "age": 20,
    "isEmployed": true
}]`;

const jsonPerson  = JSON.stringify(person);
const jsonName = JSON.stringify(names);
const jsonPeople = JSON.stringify(people);

const parseData = JSON.parse(names);

console.log(people);
*/

// Import JSON from external file

fetch("people.json").then(fuad => fuad.json()).then(values => values.forEach(value => console.log(value.name))).catch(error => {
    console.error(error);
});