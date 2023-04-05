// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };
// function greet() {
//   return `${this.firstName}`;
// }
// let result = greet(person);

// console.log(result);

const getData = () => {
  console.log("Pressed");
};

// Debounce

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

// Throttle

const throttle = (fn, delay) => {
  let flag = true;
  return (...args) => {
    let context = this;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const better1Function = debounce(getData, 700);
const better2Function = throttle(getData, 2000);
