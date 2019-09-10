  
// zadanie 1
const a = "Hello";
const b = "World";
console.log(`${a} ${b}`);

// zadanie 2
const multiply = (a = 1, b = 1) => console.log(a * b);

// zadanie 3
const average = (...args) =>
  console.log(args.reduce((total, arg) => total + arg) / args.length);

  // zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// zadanie 5
const array = [1, 4, "Iwona", false, "Nowak"];
const [, , firstname, , lastname] = array;
console.log(`${firstname} ${lastname}`);