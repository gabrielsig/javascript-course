///////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calcAge(1990);

function calcAge(year){
    console.log(2018 - year);
}


var retirement = function(year){
    console.log(65- (2018-year));
}

retirement(1990);

// variables
console.log(age);
var age = 23;
console.log(age);

function foo(){
    var age = 65;
    console.log(age);
    
}
foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello! ';
first();

function first() {
    var b = 'Hi! ';
    second();

    function second() {
        var c = 'Hey! ';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

calcAge(1994);

function calcAge(year){
    console.log(2018- year);
    console.log(this);
}

var john = {
    name: 'john',
    birthYear: 1990, 
    calcAge: function(){
        console.log(this);
        this.age = 2018 - this.birthYear;
        console.log(this.age);
        
//        function innerFunc(){
//           console.log(this); 
//        }
//        
//        innerFunc();
    }
};

john.calcAge();

var mike = {
    name: 'mike',
    birthYear: 1980
};

mike.calcAge = john.calcAge;

mike.calcAge();




