'use strict'
console.log('javascript fundamentals part-2')

//Activating Strict Mode
//avoid accidental errors.
//this mode create visible error
//where javascript would otherwise fail silently.
//with strict mode , javascript throws an error making
//the bug obvious

//also reserve certain keywords.
/*
let hasDriversLicense = false 
const passTest = true;

if (passTest)hasDriverLicense = true;
if(hasDriversLicense) console.log('ican drive')

    const interface = 'Audio'

///////3.functions
//functions are fundamental building blocks
//reusable pieces of code that can be executed whenever needed.

function logger(){
    console.log('my name is akash')
}

//calling/running/invoking the function 

logger();
logger();


function fruitProcessor(apples, oranges){
    console.log(apples, oranges)
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

//////////////////////
//4:function declaration vs expression

//function declaration
//called before they;re defined(process called hoisting)
const age1 = calcAge1(1998);
function calcAge1(birthYear){
    return 2037-birthYear;
}


//function Expression

const calcAge2 = function (birthYear){
    return 2037-birthYear
}

const age2 = calcAge2(1998);
console.log(age1, age2)



////////////////////////////////////////
//5.Arrow function (es6)
//one parameter
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)


//with multiple parameters
const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 -age;
    return `${firstName} retires in ${retirement} years!` 
}

console.log(yearsUntilRetirement(1998, 'Akash'));

///////////////////////////////////////
///6.function calling other function

//function to cut fruit into pieces
const cutPieces = function(fruit){
    return fruit * 4;
}

//function that uses the cutPieces function

const fruitProcessor = function(apples, oranges){
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and 
    ${orangePieces} pieces of orange`
    return juice
}

console.log(fruitProcessor(2,3))

/////////////////////////////////////////

//7.reviewing the function
const calcAge1 = function(birthYear){
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear,firstName){
    const age = calcAge1(birthYear);
    const retirement = 65-age;

    if(retirement >= 0){
        return `${firstName} retires in ${retirement} years!`
    }else{
        return `${firstName} is already retired`
    }
}

console.log(yearsUntilRetirement(1998, 'akash'))


///////////////////////////////////////////////////////
//9.Introduction to Arrays

const friend1 = 'Michael';
const friend2 = "steven";
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991,1998, 2008, 2020)


//accessing array elemetns (using-zero based indexing)
console.log(friends[0]);
console.log(friends[2]);

//getting the array length
console.log(friends.length);

//getting the last element
console.log(friends[friends.length-1]);

// arrays can be mutated even when declared with const
friends[1] = 'Jay'
console.log(friends)


const  akash = ['akash', 'ramesh', 2037-1998,'programmer',
    friends
]


console.log(akash)

//using arrays with function.
const calcAge = function (birthYear) {
 return 2037 - birthYear;
};
const years_b = [1990, 1967, 2002, 2010, 2018];

const ages = [
    calcAge(years_b[0]),
    calcAge(years_b[1]),

    calcAge(years_b[years.length-1]),

]

console.log(ages)

/////////////////////////////////////////////////

//10.Basic Array Operations
//builtin methods 
//adding elements
const friends = [ 'michael','steven', 'peter']

//add to end
friends.push('jay');
console.log(friends);

//add to beginning
friends.unshift('john');
console.log(friends);


//new length 
const newLength = friends.push("Andrew");
console.log(newLength);


//removing elementsfrom end
const popped = friends.pop();
console.log(friends);
console.log(popped);


//removing elements from beginning
const shifted = friends.shift();
console.log(friends);
console.log(shifted);



//finding elements
console.log(friends.indexOf("steven"))
console.log(friends.indexOf("mark"))


//es6 method- returns boolean useful for conditionals
console.log(friends.includes('steven'));
console.log(friends.includes('bob'));


if(friends.includes('peter')){
    console.log('You have a friend called Peter!')
}



////////////////////////////////////////////////////////
//12.Introduction to OBjects
//arrays are great of ordered data
//let us define key-value pairs.
const jonas = {
    firstName: 'akash',
    lastName : 'ramesh',
    age: 2037-1991,
    job:"programmer",
    friends:['Michael','Peter', 'Steven'],
}

//object literalsyntax= we're literally writing down the 
//object content.

//give each piece of data a name(key or property name)
//store unstructured and related data
//access data by name rather than position
//order of properties in object does't matter when retrieving data

/////////////////////////////
//13.DOT vs BracketNotation

//access object properties

//dot
const akash = {
    firstName: 'akash',
    lastName : 'ramesh',
    age: 2037-1991,
    job:"programmer",
    friends:['Michael','Peter', 'Steven'],
}

console.log(akash.lastName);


//bracket notation
console.log(akash['lastName'])


//main difference is that bracket notation allows us to 
//use expression
const nameKey = 'Name'
console.log(akash['first' + nameKey]);
console.log(akash['last' + nameKey]);


// this would not work with dot notation:
//bracket notation is use ful when we don't know which
//property to access until runtime.

const interestedIn = prompt("what do you want to now about akash")

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);

}else{
    console.log('Wrong request! choose between firstName, lastName, age, job and friends')
}

//we can also add new property to objects using either notation

jonas.location = 'portugal';
jonas['twitter'] = '@jonas';

console.log(jonas)

////////////////////
//14:object methods;
const akash  = {
    firstName:'akash',
    lastName:'Ramesh',
    birthYear:1991,
    job:'programmer',
    friends:['Michael', 'Peter', 'Steven'],
    hasDriversLicense:true,
    //method (function as property)
    calcAge: function(){
        this.age = 2037-this.birthYear;
        return this.age;
    },
    getSummary:function(word){
        return `${this.firstName}
            ${this.lastName}
            is a ${this.calcAge()} = year old ${this.job}.he has ${
                this.friends.length } friends ${this.hasDriversLicense ? 'a' :'no'} driver's
                license ${word}; `
    },
};

console.log(akash.calcAge());
console.log(akash['calcAge']());
console.log(akash.age)
console.log(akash.getSummary("a"))
console.log(akash["getSummary"]('bracket notation'))
*/
/////////////////////////
//iteration: the for loop
//loops allow us to automate repetitive task
//when you know exactly how many iterations you need

for(let rep=1; rep<=10;rep++){
    console.log(`lifiting weigths repetition ${rep}`)
}

const jonasArray = [
 'Jonas',
 'Schmedtmann',
 2037 - 1991,
 'teacher',
 ['Michael', 'Peter', 'Steven'],
];
const types = [];

for(let i=0; i<jonasArray.length;i++){

    console.log(jonasArray[i], typeof jonasArray[i]);

    types.push(typeof jonasArray[i])
}

console.log(types)

///////////////////
const years = [1991,1998,2000,2020];
const ages = []

for(let i=0;i< years.length;i++){
    ages.push(2037-years[i]);

}

console.log(ages);
//continue statement skips the current iteration and continues with the next one

console.log('__________only strings_________');
for(let i =0;i<jonasArray.length; i++){
    if(typeof jonasArray[i] !=='string') continue;
    console.log(jonasArray[i]);
}

//break statement completley terminates the loop

console.log('Break with number');
for(let i=0; i<jonasArray.length;i++){
    if(typeof jonasArray[i]  === 'number') break;
    console.log(jonasArray[i])
}

//looping backwards.
for(let i=jonasArray.length-1; i>=0;i--){
    console.log(jonasArray[i])
}

//nested loops
for(let exercise=1; exercise<=3; exercise++){
    console.log(`----------starting exercise ${exercise}`);
    for(let rep=1; rep<=10; rep++){
        console.log(`exercise ${exercise}: lifting weights repetition ${rep}🏋️
            `)
    }
} 

//the while loop in advanc e
let rep = 1;
while (rep <=10){
    console.log(`lifting weights repetition ${rep}`)
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !==6){
    console.log(`you rolled a ${dice}`);
    dice= Math.trunc(Math.random() * 6) + 1
    if(dice === 6){
        console.log(`you rolled a six`)
    }
}