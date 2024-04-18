//SPREAD OPERATOR

//ARRAY
const array1 = [1, 2, 3, 4];
const array2 = [7, 8, 9, 0];
const newArray = [...array1, 5, 6, ...array2];
console.log(newArray);

//OBJECT
const details1 ={
    name:"anu",
    age:18,
    place:"kochi"
}
const details2 ={
    std:"plus two",
    mark:88,
    rank:4
}
const student ={...details1,batch:"A",...details2}
console.log(student);