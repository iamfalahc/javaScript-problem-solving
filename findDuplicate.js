
var myArray = [1, 2,3,4,1];

function findDuplicate() {
    for (i = 0; i < myArray.length; i++) {
        for (j = i + 1; j < myArray.length; j++) {
            if (myArray[i] === myArray[j]) {
                return true; 
            }
        }
    }
    return false; 
}

console.log(findDuplicate()); 
