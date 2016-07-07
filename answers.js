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
var string1 = "Dylan is learning to write functions in Javascript";
var splitCharacterArray = string1.split("");

var b = splitCharacterArray.reduce(function countVowels(counter, newChar){
    var vowels = ['a','e','i','o','u'];
    if (vowels.indexOf(newChar) > -1){
       counter = counter + 1;
    } 
    return counter;
},0);

console.log(b);
