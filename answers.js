// Exercise 1

var positives = [1,2,3,5,6,9,12,15,17,29,44];

function printPositives(number){
    positives.forEach(function(number){
        if (number % 2 === 0) {
            console.log(number + ' is even.');
        }
    });        
}

//printPositives();

// Exercise 2

var positives = [1,2,3,5,6,9,12,15,17,29,44];

function findPositives (number) {
    if(number % 2 === 0){
        return number;
    }
};

var filteredArray = positives.filter(findPositives);
// console.log(filteredArray);

// Exercise 3

var positives = [1,2,3,5,6,9,12,15,17,29,44];

function findPositives (number) {
    if(number % 2 === 0){
        return number;
    }
};

function printPositives(number){
    return positives.filter(findPositives).forEach(function(number){
        console.log(number);
        
    });
};

printPositives();