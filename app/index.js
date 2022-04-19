/*
//Spread
let a = [20,30,40];
let b = [10, ...a, 50];
console.log(b)

let s = ['danna', 'erik', 'frank'];
let c = ['alicem', 'bob', 'carl', ...s];
console.log(c)

function collect(...a){
    console.log(a)
}

collect(3,6,9,12,50)
*/

/*
//Destructuring and assignment
let z = [4,5,6];
// let four = z[0];
// let five = z[1];
let [four, five] = z
console.log(four, five)

let animals = ['simba', 'zazu', 'ed'];
let [lion, bird, people] = animals;
console.log(lion, bird, people);

let king = {name:'mufasa', kids:1};
// let name = king.name;
// let kids = king.kids;
let {name, kinds} = king;
console.log(name)

let son = {naming:'Simba', parents:2};
let naming, parents; 
({naming, parents} = son);
console.log(naming, parents)

*/

/*
//Anonymous arrow functions
let cheer = () => {
    console.log("whooo");
}

cheer();
*/

/*
//Helper method mapping and filters
let values = [20,30,40];

// let double = (n) =>{
//     return n*2;
// }

// let doubled = values.map((n) =>{
//     return n*2;
// });

let doubled = values.map((n) => n*2 );

console.log(doubled)


let points = [7,16,21,4,5,22,5];
let highscored = points.filter((n) => {
    return n > 15;
})
console.log(highscored)
*/

/*
//starts and endsWith, repeat, includes
// let b = `woo ${"oo". repeat(50)}`;
// console.log(b)

console.log("Butterfly".endsWith('fly'));
console.log("Butterfly".includes('u'));
*/

/*
//Helper method for numbers
const addToCart = (item, number) => {
    return Number.isSafeInteger(number);
}

console.log(addToCart('shirt', Math.pow(2,54)))
console.log(Math.pow(2,54))
*/


/*
//Modules
import {fellowship, total } from './fellowship';
import multiply from './math';
console.log(fellowship, total)
console.log(multiply(5,10))
*/

/*
//classes
class Animal {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    //Special Methods
    hello(){
        console.log(`Hi im ${this.name}`)
    }
}


let king = new Animal("Mufasa", 4.5);
king.hello()
*/

/*
//Inheritance
import Animal from "./animal";
class Lion extends Animal{
    constructor(name, height, color){
        //super from parents constructor or class
        super(name, height);
        this.color = color;
    }
    hello(){
        console.log(`Hi im ${this.name}`)
    }
}

let son = new Lion("simba", 2, 'golden')
son.hello();
*/

/*
//Static method classes
class Calculator{
    static multiply(a,b){
        return a*b
    }
    static add(a,b){
        return a+b
    }
}

//No new when calling the static method of the class
let a = Calculator.add(5,7)
console.log(a)
*/

/*
//Prototypes or using functions as classes
function Wizard(name, house, pet){
    this.name = name;
    this.house= house;
    this.pet = pet;
    this.greet = () => `Im ${this.name} from ${this.house}`
}

Wizard.prototype.pet_name;
//Cant use arrow function
Wizard.prototype.info = function(){
    return `I have a ${this.pet} named ${this.pet_name}`
};

let harry = new Wizard("Harry Potter", "Griff", "owl");
harry.pet_name="Hedwig"
console.log(harry.info()) 
*/

/*
//Sets
let a = new Set();
a.add(5);
a.add(43)
a.add('whooo');
a.add({
    x:50,y:50
});
console.log(a);
console.log(a.size);
console.log(a.has(5))


let numbers = [5,7,8,13,17];
let numSet = new Set(numbers);

for(let element of numSet.values()){
    console.log(element)
}

let chars ='asdadesackisoivmwmdmikwe';
let chars_arr=chars.split("");
let chars_set = new Set(chars_arr)
console.log(chars_set)
*/

/*
//Maps or mapping
let a = new Map();
let key_1 = "string key";
let key_2 = {a:'key'};
let key_3 = function(){};
a.set(key_1, 'Return vaklue')
a.set(key_2, 'Return value for an object key')
a.set(key_3, 'function key')
console.log(a)


let numArr = [[1,'one'], [2,'two'], [3, 'three']];
let valMap = new Map(numArr);
console.log(valMap)

for(let[key,value] of valMap.entries()){
    console.log(`${key} points to ${value}`)
}

let string = 'asdasdasdadwscewdcsvewvdsvcevds';
let letters = new Map();
for(let i =0; i<string.length; i++){
    let letter = string[i];
    if(!letters.has(letter)){
        letters.set(letter, 1); 
    }else{
        letters.set(letter, letters.get(letter)+1)
    }
}

console.log(letters)
*/

/*
//closure and scoping
let call = () => {
    let secret = 'ES6 Rocks';
    let reveal = () =>{
        console.log(secret)
    }
    return reveal;
}

let unveil = call();
unveil();
*/

/*
//Function factories, setting a variable without changing the main variable
const addSuffix = (x) => {
    const concat = (y)=>{
        return y+x
    }
    return concat
}

let add_ness = addSuffix("ness");
console.log(add_ness); 
let h = add_ness("happi");
console.log(h)


let add_ful = addSuffix("ful");
let f = add_ful("fruit");
console.log(f)

// const product = (x)=>{
//     return y=> {
//         return y*x;
//     }
// }

const product = x => y => y*x;

//setting global variable in function first;
let mult5 = product(5);
let double = product(2);
console.log(double(3));
*/

/*
//private methods with closures
const budget = () => {
    let balance = 0;
    let changeBal = (val) => balance += val;

    const deposit20 = () => changeBal(20);
    const withdraw20 = () => changeBal(-20);
    const check = () => balance;
    return {
        deposit20:deposit20,
        withdraw20,
        check:check
    }
}

let wallet = budget(); 
wallet.deposit20();
wallet.withdraw20();
wallet.deposit20();
wallet.deposit20();
console.log(wallet.check());
*/

