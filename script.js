console.log("js fundamental 1")
/*
//5:values and variables
//values are the most fundamental info
//we can store values in variables

console.log("akash");//string value
console.log(23)//Number Value
console.log(23+7)// expression creating a new value(30)
let firstName = 'jonas'
console.log(firstName);
console.log(firstName);

//use camelCase
//contain letters,numbers,underscore, $
//cannot start with numbers
//cannot use reserved words in javascript
//name should be descriptive.
//valid variables
let _age = 26;
let $name = 'akash';
let myFirstJob = "programmer"

//invalid variables names
let 3years= 3;
let jonas&matilda = 'jm'
let new = 27;

//less descriptive -avoid
let job1 ='programmer';
let job2 = 'Teacher'

/////////////////////////////////////////////////
//6.DATA TYPES
//values can have different types
//two main categories

//1.primitive = number, string , boolean, undefined, null,
//symbol, Bigint

//non-primitive types : objects,arrays, function etc.
//javscript has dynamic typing. 
//we don't manually define types
// type is automatically determined

let javascriptIsFun = true;//boolean
console.log(typeof javascriptIsFun);//boolean
console.log(typeof 23);//number
console.log(typeof 'akash')//string

//dynamic typing in action - type can change
javascriptIsFun= 'yes';
console.log(typeof javascriptIsFun);

//undefinedtype

let year;//undefined
console.log(year);//undefined
console.log(typeof year);//undefined

//later define the variable
year = 1991;
console.log(typeof year)

//note.type of null return object = this is a bug
console.log(typeof null)//object

function nameFun (){
    return a;
}

console.log(typeof nameFun)

console.log(typeof []);
console.log(typeof {})

////////////////////////////////////////////////////////////
//7:let, const , var

//let- for variables that can change (mutable)
let age = 30;
age = 31;//reassigning is allowed

let firstName //can declare empty variables with let.

//const -for variables that shouldn't change(immutable)

const birthYear = 1998;
//birthyear = 1990 //Error! cannot reassign
//const job; //error must be initialize
// 3.var - old way of definding variables (avoid using)
var job = 'programmer';
job = 'teacher';// can be reassigned like let

//dont do this
lastName = 'ramesh' //creates a global object property

///////////////////////////////////////////////
//8:Basic Operators.
//math operators
const now =2037
const ageJonas = now -1991;//46
const ageSarah  = now-2018//19
console.log(ageJonas, ageSarah);

console.log(ageJonas *2);//92
console.log(ageJonas/10);
console.log(2**3)// 2*2*2 = 2 to the power 3 (exponentiation)

//concatenation with + operator

const firstName = 'akash'
const lastName = 'ramesh'
console.log(firstName + ' '+lastName);

//Assignment operators
let x = 10 + 5;//15
x+=10 //x = x+ 10 =25

x *=4 // x = x * 4 = 100
x++ // x= x+1 = 101
console.log(x)

//comparison Opeartors(return boolean values)
console.log(ageJonas > ageSarah);//true
console.log(ageSarah >= 18);//true
console.log(now-1991 > now -2018) //true

/////////////////////////////////////////////////////////
//9:operator precedence
//well defined order

const now =2037
const ageJonas = now -1991;//46
const ageSarah  = now-2018//19

//math before comparison
console.log(now-1991 > now -2018)

//left to right execution for same-precedence operators
console.log(25-10-5); 

//right-to-left for assignment operators

let x, y;
x= y= 25-10-5 // x= y=10 x = 10, y = 10
console.log(x,y)

//grouping with parentheses (highest precedence)
const averageAge=(ageJonas + ageSarah)/2
console.log(averageAge);

*/
/*
. Parentheses ()
. Increment/decrement ++/--
. Exponentiation **
. Multiply/divide 
. Add/subtract +/-
. Comparison < > <= >=
. Equality == !=
. Assignment = += -= *= /=
*/


////////////////////////////////////////////////
/*
//11.Strings and Template literals

//template literals make is much easier
//to create  string with variables and experssion embeddedin
//them.
const firstName = 'akash';
const job = 'programmer';
const birthYear = 1998;
const year = 2037;

//old way ( string concatenation)
const akashOld = 
"I'm "+ firstName + ', a '+(year-birthYear) + ' year old '+ job
+ '!';
console.log(akashOld);

//new way (template literals)
const akashNew = `I'm ${firstName}, a ${year-birthYear} year old
${job}!`
console.log(akashNew);

//template literals also work for regular strings
console.log(`Just a regular string!`);

//multi-line strings with template literals
console.log(`String with 
    multiple
    lines`);

//old way of multi-line strings (less clean)
console.log('String wit \n\
        multiple \n\
        lines')
   

/////////////////////////////////////////////////////////
//12. Taking decisions: if /else statements
//conditional statement let us execute different code based
//control over our program flow.

const age = 19;
//if else conditional statement
if(age >= 18){
    console.log('Sarah can start driving license');
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait 
        another ${yearsLeft} years`);
}

//creating variables conditionally
const birthYear = 1991;
let century;

if(birthYear <=2000){
    century = 20;
}else{
    century = 21;
}

console.log(century);


///////////////////////////////////////////////////////
//14:type conversion(explicit) and coercion (automatic)

//Type conversion (explicit)
const inputYear = '1991';
console.log(Number(inputYear) + 18)//2009

//conversion examples
console.log(Number('akash')) //nan typeof nan= number
console.log(String(23),23);


//type coercion (automatic)
console.log('i am ' + 23 + 'years old');//String Concatenation

//this + operator triggers coercion to string.


//other operators trigger coercion to number

console.log('23'-'10' - 3);
console.log('23' * 2)

console.log('23' > '18')

//Mixed coercion example

let n = '1' + 1 //'11'(string)
n=n-1;//11-1 = 10 (number)
console.log(n)

///////////////////////////////////////////
//15.truthy falsey values 
//only 5 falsy values in javascript

//0, '',undefined, null, Nan
//EVERYTHING ELSE IS TRUTHY - THEY CONVERT TO TRUE.
//false when converted to a boolean
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));

const money = 0;

if(money){
    console.log('Dont spend itall');

}else{
    console.log('you should get a job');
}

//becareful with 0
let height;
if (height){
    console.log('height is defined');
}else{
    console.log('height is UNDEFINED');
}



//////////////////////////////////////////
//LECTURE 16:EQUALITY OPERATORS ==/===

const age = 18;

//strict equality (===) no type coercion
console.log(age === 18);//true.
console.log('18' === 18)//false

//loose equality (==)- with type coercion
console.log(age == 18)//true
console.log('18'==18)//true

const favourite = Number(prompt('what is your favourite number?'));

if(favourite === 23){
    console.log('cool! 23 is an amazing number!');
}else if (favourite === 7){
    console.log('7 is also a cool number!');
}else{
    console.log('Number is not 23 or 7');
}

//inequality operators
const notEqual= favourite !== 23;
console.log(notEqual);

/////////////////////////////////////////////////////////
//booleanlogic 18:logical operators
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

//AND operator
console.log(hasDriverLicense && hasGoodVision);

//OR Operator
console.log(hasDriverLicense || hasGoodVision)

//NOT operator
console.log(!hasDriverLicense);// false

const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if (shouldDrive){
        console.log('sarah is able to drive')
}else{
    console.log('Someone else should drive...')
}
 
///////////////////////////////////////////////////////////
//20 switch statement
const day = 'monday';
switch(day){
    case 'monday':
        console.log('Plan course Structure');
        console.log('go to coding meet up');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write the code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend :D');
        break;
    default://like 'else -runs if nocase matches
    console.log('not a valid day')
}

//equivalent if /else structurel

if(day === 'monday'){
    console.log('plan course structure');
    console.log("Go to Coding meetup");
}else if(day === 'tuesday'){
    console.log("prepare the theory videos");
}else if(day === 'wednesday' || day === "thursday"){
    console.log('Write code examples');
}else if (day === 'friday'){
    console.log("record videos");
}else if ( day === 'saturday' || day ==='sunday'){
    console.log('Enjoy the weekend : D')
}else {
    console.log('not a vaid day')
}

 
  //CHALLENGE 1 and 2

const marksWeight = 78;
const markHeight = 1.69
const johnWeight = 92;
const johnHeight = 1.95

const markBMI = marksWeight/(markHeight * markHeight);

const johnBMI = johnWeight/(johnHeight * johnHeight);

const markHigherBMi  = markBMI > johnBMI

console.log(markBMI, johnBMI, markHigherBMi);


if(markBMI > johnBMI){
    console.log(`Mark's BMi ${markBMI}is higher than john bmi${johnBMI}`)
}else{
    console.log(`john's BMi ${johnBMI}is higher than markss bmi${markBMI}`)

}
      

//challenge 3

// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas = (89+91+110)/3

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log('Dolphin wins the trophy');
// }else if(scoreKoalas > scoreDolphins && scoreKoalas >=100){
//     console.log('Koalas wins the trophy')
// }else if(scoreDolphins === scoreKoalas && scoreDolphins>=100 
//     &&scoreKoalas >=100)
//     {
//         console.log("both team wins trophy");
//     }else{
//         console.log('no team wins the trophy')
//     }
     */

//challenge4 
const billValue = 275
const tip = billValue >=50 &&  billValue <=300 ? 0.15 * billValue:
            0.2 * billValue;

const finalValue= `this bill was ${billValue} , the tip was
                        ${tip} and total value ${billValue + tip}`

console.log(finalValue)