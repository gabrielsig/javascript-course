//Lecture: Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var  fullAge = true;
console.log(fullAge);
*/

//----------------------------------------------------------------

//Lecture: Variables 2
/*
var name = 'John';
var age = 26;

console.log(name + ' ' + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = true;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?')
console.log(lastName);

alert(lastName);
*/

//-----------------------------------------------------------------

//Lecture: Operators
/*
var year = 2016;
var age = 26;
var birthYear = year - age;

console.log(birthYear);

birthYear = year - age * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 36;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

//-----------------------------------------------------------------

//Lecture: if/else statements
/*
var name = 'john';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes'){
    console.log(name+ ' is married!');
}
else{
    console.log(name+ ' will hopefully marry soon');
}

isMarried = false;

if(isMarried){
    console.log('YES');
}
else{
    console.log("NO");
}

if(23 == '23'){
    console.log('Something to print')
}

if(23 === '23'){
    console.log('Something else to print')
}
*/

//-----------------------------------------------------------------

//Lecture: Boolean logic and switch
/*
var age = 36;

if (age < 20){
    console.log('John is a teenager');
}
else if(age >= 20 && age < 30){
    console.log('John is a young adult');
}
else{
    console.log('John is an adult');
}

var job = prompt('What does john do?')

switch (job){
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a  cab');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John does something else');
}
*/

//-----------------------------------------------------------------

//Lecture: functions
/*
function calcAge(birthYear){
    var age = 2016 - birthYear;
    return age;
}

var ageJohn = calcAge(1990);
console.log(ageJohn);

function retirement(name, birthYear){
    age = calcAge(birthYear);
    years = 65 - age;
    if (years >= 0){
        console.log(name + ' is ' + years + ' years away from retirement');
    }
    else{
        console.log(name + ' has already retired');
    }  
}

retirement('John', 1990);
retirement('Mary', 1948);
*/

//-----------------------------------------------------------------

//Lecture: arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);

names[1] = 'Ben';

console.log(names[1]);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.shift();
removed = john.pop();

console.log(john);
console.log(removed);

index = john.indexOf('Smith');
console.log(index);

if (john.indexOf('teacher') === -1){
    console.log('John is not a teacher')
}
*/

//-----------------------------------------------------------------

//Lecture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['birthYear']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'jane';
jane['lastName'] = 'smith';

console.log(jane);
*/

//-----------------------------------------------------------------

//Lecture: Objects and methods
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calcAge: function(){
        this.age = 2016 - this.birthYear;   
    }
};

john.calcAge()
console.log(john);
*/

//-----------------------------------------------------------------

//Lecture: loops
/*
for (var i = 0; i < 10; i++){
    console.log(i);
}

var names = ['John', 'Jane', 'Mary','Mark', 'Bob'];

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

for (var i = names.length-1 ; i >= 0; i--){
    console.log(names[i]);
}

var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}
*/










