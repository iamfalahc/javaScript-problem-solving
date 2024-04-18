//TERNARY OPERATOR

const time = new Date().getHours();
const greeting = time < 12 ? "Good Morning" : time < 17 ? "Good Afternoon" : time < 20 ? "Good Evening" : "Good Night";
console.log(greeting);
