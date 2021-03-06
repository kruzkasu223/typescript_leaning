/*
// You can use JavaScript in TypeScript...

const character = 'kruz'
console.log(character)

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    console.log(input)
})

*/
/* ***************************************************** */
/*
// Variable Types in TS

let character = 'kruz'
let age = 20
let isTall = false

// character = 20
character = 'axit'

// age = 'frnd'
age = 21

// isTall = 50
isTall = true

let stringhere: string = 'string'
let numberhere: number = 10
let booleanhere: boolean = true
let anythinghere: any = 'askdj' | 392 | false


const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(10))

*/
/* ***************************************************** */
/*
// Arrays and Objects

// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3);
// names[1] = 3;

let numbers = [10, 20, 12, 15];

numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';

let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']

ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['running'],
};
*/
/* ***************************************************** */
/*
// Explicit Types

let character: string = 'mario';
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);

let uid: string|number;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
*/
/* ***************************************************** */
/*
// Any Type

let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
console.log(ninja);

ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
*/
/* ***************************************************** */
/*
// Function...

// let greet: Function = () => {
//   console.log('hello, world');
// }

// greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

const add = (a: number, b: number, c?: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, 'ninja');

const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(10,7);
console.log(result);
*/
/* ***************************************************** */
/*
// Type Aliasing...

type StrOrNum = string | number
type objWithName = {name: string, uid: StrOrNum}

const logData = (uid: StrOrNum, item: string) => {
    console.log(`${item} has an id of ${uid}...`)
}

const greet = (user: objWithName) => {
    console.log(`Hello ${user.name}...`)
}

const greetAgain = (user: objWithName) => {
    console.log(`Hello ${user.name}, Again...`)
}
*/
/* ***************************************************** */
/*
// Function Signature...

// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}
*/
/* ***************************************************** */
/*
// Selecting HTML Elements...

const anchor = document.querySelector('a')!;
if(anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);
*/
/* ***************************************************** */
/*
// Interface...

// interfaces
export interface IsPerson {
    name: string;
    age?: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
  //age: 30,
        speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent ', amount);
        return amount;
    },
};

console.log(me);
me.speak('hello, world');

const greetPerson = (person: IsPerson): void => {
    console.log('hello ', person.name);
}

greetPerson(me);
//greetPerson({name: 'shaun'});
*/
/* ***************************************************** */
/*
// GENERICS

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
//let docTwo = addUID('shaun');

console.log(docOne.name);

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1, 
    resourceName: 'person', 
    data: { name: 'shaun' }
};

const docFour: Resource<string[]> = {
    uid: 1, 
    resourceName: 'shoppingList', 
    data: ['bread', 'milk']
};

console.log(docThree, docFour);
*/
/* ***************************************************** */
/*
// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);
*/
/* ***************************************************** */
/*
// TUPLES

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
*/
/* ***************************************************** */
/*
// Comments from script.ts


// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('mario', 'creating web design', 1500)
// docTwo = new Payment('maya', 'creating logo', 500)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)

// const invOne = new Invoice('mario', 'making website', 1000)
// const invTwo = new Invoice('luigi', 'making app', 1500)


// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })

// invOne.client = 'kruz'
// invTwo.amount = 1300
// console.log(invoices)

*/
/* ***************************************************** */
/*
// Comments from Invoice.ts

    // client: string
    // details: string
    // amount: number

    // constructor(c: string, d: string, a: number){
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }

*/
/* ***************************************************** */
