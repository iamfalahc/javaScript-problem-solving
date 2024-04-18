//ARRAY DESTRUCTURING

const [num1, num2, num3, num4] = [1, 2, 3, 4, 5];
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

//OBJECT DESTRUCTURING

const person = {
  name: "manu",
  age: 12,
  std: 7,
  place: {
    city: "tvm",
    state: "kerala",
  },
};
function student({ name, age, std, place: { city, state } }) {
  console.log(name);
  console.log(age);
  console.log(std);
  console.log(city);
  console.log(state);
}
student(person);
