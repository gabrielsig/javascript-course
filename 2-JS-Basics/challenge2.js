function calcAge(birthYear){
    return 2018 - birthYear;
}

function printFullAge(years){
    var ages = [];
    var fullAge = []

    for (var i = 0; i < years.length; i++){
        ages.push(calcAge(years[i]));
    }

    for (var i = 0; i < ages.length; i++){
        if (ages[i] < 18){
            fullAge.push(false);
            continue;
        }
        fullAge.push(true);
    }
    
    return fullAge;
}

var years1 = [1990, 1994, 1970, 1986, 1945, 1967, 2001, 2006];
var years2 = [1998, 1955, 1939, 1969, 1999, 2007, 2001, 2006];
var ages = [];

for (var i = 0; i < years1.length; i++){
    ages.push(calcAge(years1[i]));
}

for (var i = 0; i < ages.length; i++){
    if (ages[i] < 18){
        console.log('Person number ' + i + ' is under age');
    }
    else{
        console.log('Person number ' + i + ' is full age');
    }
}

fullAge1 = printFullAge(years1);
fullAge2 = printFullAge(years2);
console.log(fullAge1);
console.log(fullAge2);
