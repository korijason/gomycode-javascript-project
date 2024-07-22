// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // Capitalize Words
  function capitalizeWords(sentence) {
    return sentence.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }
  
  // Array Functions
  
  // Find Maximum
  function findMax(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
  }
  
  // Find Minimum
  function findMin(arr) {
    if (arr.length === 0) return null;
    return Math.min(...arr);
  }
  
  // Sum of Array
  function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Filter Array
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Mathematical Functions
  
  // Factorial
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Prime Number Check
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  // Fibonacci Sequence
  function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
  }
  
  // Example usage
  console.log('Reverse "hello":', reverseString('hello'));
  console.log('Count characters in "example":', countCharacters('example'));
  console.log('Capitalize words in "this is a test":', capitalizeWords('this is a test'));
  
  const numbers = [5, 8, 2, 10, 3];
  console.log('Maximum number in [5, 8, 2, 10, 3]:', findMax(numbers));
  console.log('Minimum number in [5, 8, 2, 10, 3]:', findMin(numbers));
  console.log('Sum of [5, 8, 2, 10, 3]:', sumArray(numbers));
  console.log('Filter numbers less than 5:', filterArray(numbers, num => num < 5));
  
  const num = 6;
  console.log('Factorial of', num + ':', factorial(num));
  console.log('Is', num, 'prime?', isPrime(num));
  console.log('Fibonacci sequence up to 8 terms:', fibonacciSequence(8));
  