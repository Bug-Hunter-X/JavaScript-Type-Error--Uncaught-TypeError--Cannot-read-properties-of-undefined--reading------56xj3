# JavaScript Type Error Bug

This repository demonstrates a common type error in JavaScript that occurs when performing arithmetic operations without proper type checking.  The bug is caused by attempting to add non-numeric values together. The solution implements robust input validation to prevent the error.

## Bug Description

The `foo` function adds two numbers together. The `bar` function calls `foo` and doubles the result.  If either input to `foo` is not a number, the `+` operator throws a `TypeError`. This is handled gracefully in the solution.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in a browser's developer console or Node.js environment.
3. Run the code.  You will see the error with the default inputs and the correct output when numeric values are used.
4. Open `bugSolution.js`. This version includes type checking and will not throw an error.

## Solution

The solution adds input validation to the `foo` function.  It explicitly checks that both inputs are numbers using `typeof`.  If either input is not a number, it returns 0; otherwise, it returns the sum. This prevents the `TypeError` and ensures that the function behaves as expected even with invalid inputs.
