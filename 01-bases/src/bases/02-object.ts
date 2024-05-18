export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 51323,
        lat: 14.23232,
        lng: 34.5667
    }
}


//Create a new object based on an existing object, by using spread operator

const person2={...person,address:{...person.address}}

//Lets clone objects
const person3=structuredClone(person)

person2.lastName='Parker'
person2.address.city='Manhattan'
person3.address.city='Las vegas'

console.log(person)
console.log(person2)
console.log(person3)