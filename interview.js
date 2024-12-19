// 4) What is the purpose of a closure in JavaScript?
/* A closure is a function that remembers the variables from its lexical scope even after the function is executed. Closures are useful for:
	•	Data encapsulation.
	•	Implementing private variables.
 */
function outer() {
  let count = 0;
  count = 1;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();
