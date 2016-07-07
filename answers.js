// Exercise 1

// var positives = [1,2,3,-4,6,9,12,1-15,17,-29,44];

/* function printPositives(array){
    array.forEach(function(number){
        if (number > 0) {
            console.log(number + ' is positive.');
        }
    });        
} */

// printPositives(positives);

// Exercise 2

/* function findPositives (number) {
    if(number > 0){
        return number;
    }
};

var filteredArray = positives.filter(findPositives);
console.log(filteredArray); */

// Exercise 2B

/* function findPositives (number) {
     if(number > 0){
         return number;
     }
}; */

/* function printPositives(array){
     return array.filter(findPositives).forEach(function(number){
         console.log(number);
        
     });
};

printPositives(positives); */

// Exercise 3

/* var truthy = ['bob', 7, 0, false]

function findThePositives (value) {
    if (value){
        return value;
    }
}
function filterArray (function1,array1) {
     return array1.filter(function1);
}

console.log(filterArray(findThePositives,truthy));

// Exercise 4
var string1 = "Dylan is learning to write functions in Javascript";
var splitArray = string1.split(" ");

var a = splitArray.reduce(function longestWord(initWord, word){
    if (word.length > initWord.length ){
        initWord = word
    } 
    return initWord;
}, "");

console.log(a); */

// Exercise 5
/* var string1 = "Dylan is learning to write functions in Javascript";
var splitCharacterArray = string1.split("");

var b = splitCharacterArray.reduce(function countVowels(counter, newChar){
    var vowels = ['a','e','i','o','u'];
    if (vowels.indexOf(newChar) > -1){
       counter = counter + 1;
    } 
    return counter;
},0);

console.log(b); */

// Exercise 6

/* var myNewNumbers = [12, -20, 15, 189, -43, 64];

var highLow = myNewNumbers.reduce(function highestLowest(acc, number){
    if(number < acc.lowest){
        acc.lowest = number;
    } 
    if (number > acc.highest){
        acc.highest = number;
    }
    return acc;
}, {lowest: Infinity, highest: -Infinity})

console.log(highLow);  */  

// Extra Exercise 6
/* var massiveNumbers = [10009, 34987, -654321, -987, 96423];


var biggestSmallest = massiveNumbers.reduce(function(acc, number) {
    
    if(number < acc.lowest){
        acc.lowest = number;
    }
    if(number > acc.highest){
        acc.highest = number;
    }
    return acc;

}, {lowest: Infinity, highest: -Infinity})

console.log(biggestSmallest); */

// Exercise 7

/* var myNewestNumbers = [19, -63, 42, 78, 9, -157];

var highLowTwo = myNewestNumbers.reduce(function TwohighestLowest(acc1, number1){
    if(number1 < acc1.lowest){
        acc1.secondLowest = acc1.lowest;
        acc1.lowest = number1;
    } 
    if (number1 > acc1.lowest && number1 < acc1.secondLowest){
        acc1.secondLowest = number1;    
    }
    if (number1 > acc1.highest){
        acc1.secondHighest = acc1.highest;
        acc1.highest = number1;
    }
    if(number1 < acc1.highest && number1 > acc1.secondHighest){
        acc1.secondHighest = number1;
    }
    return acc1;
}, {lowest: Infinity, secondLowest: Infinity, highest: -Infinity, secondHighest: -Infinity})

console.log(highLowTwo); */

// Exercise 8

var myString = "Dylan is learning Javascript";

function countChars (string1){
    var lettersArray = string1.split('');
    lettersArray = lettersArray.filter(function (letter){
        if (letter !== ' '){
            return letter;
        }
    })
    var returnedObject = lettersArray.reduce(function (initObj, newLetter){
        if(initObj[newLetter]){
            initObj[newLetter] += 1;
        }
        else {
            initObj[newLetter] = 1;
        }
        return initObj;    
    }, {});
    return returnedObject;
}

console.log(countChars(myString));