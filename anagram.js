var firstString = "naman";
var secondString =  "manan";

function anagram() {
    if (firstString.length !== secondString.length) {
        return false;
    }

    var firstArray = firstString.split("").sort();
    console.log(firstArray);
    var secondArray = secondString.split("").sort();

    for (var i = 0; i < firstString.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return "no";
        }
    }

    return "yes";
}

console.log(anagram());
