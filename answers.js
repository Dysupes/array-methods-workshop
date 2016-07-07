var positives = [1,2,3,5,6,9,12,15,17,29,44];

function printPositives(number){
    positives.forEach(function(number){
        if (number % 2 === 0) {
            console.log(number + ' is even.');
        }
    });        
}

printPositives();