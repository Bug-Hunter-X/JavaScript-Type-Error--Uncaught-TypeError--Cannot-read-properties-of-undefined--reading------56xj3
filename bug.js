function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10

//The bug is that if the parameter a or b is not a number, it will cause a TypeError: Cannot read properties of undefined (reading '+')

function foo(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 0;
  }
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar('2', 3)); //Output: 0
console.log(bar(2, '3')); //Output: 0
console.log(bar('2','3')); //Output: 0