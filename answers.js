// Exercise 1

var positives = [1,2,3,-4,6,9,12,1-15,17,-29,44];

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

function findPositives (number) {
     if(number > 0){
         return number;
     }
};

/* function printPositives(array){
     return positives.filter(findPositives).forEach(function(number){
         console.log(number);
        
     });
};

printPositives(positives); */

// // Exercise 3
