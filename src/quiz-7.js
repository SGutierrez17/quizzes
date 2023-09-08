/**
 * This quiz is to test your knowledge of while-Loop.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Using a while loop, sum all numbers from 1 to 10 and store the result in a variable called sum.
 */

num = 0;
sum = 0;
while (num < 10) {
  num++;
  sum += num;
}

console.log("[Question # 1]: ", sum);

/**
 * Question 2
 * Using a while loop, create a string of numbers from 5 to 15 separated by commas, e.g., "5,6,7,...,15".
 */

let number = [];
num = 4;
while (num < 15) {
  num++;
  number += num;
  if (num < 15) {
    number += ",";
  }
}

console.log("[Question # 2]: ", number);

/**
 * Question 3
 * Print all even numbers between 10 and 30 using a while loop.
 */

let numberEven = [];
num = 9;
while (num <= 29) {
  num++;
  if (num % 2 === 0) {
    numberEven += num;
    if (num < 29) {
      numberEven += ",";
    }
  }
}

console.log("[Question # 3]: ", numberEven);

/**
 * Question 4
 * Determine the smallest power of 2 greater than 1000 using a while loop.
 */

let numberPower = [];
n = 0;
while (n ** 2 <= 1000) {
  n++;
  numberPower = n;
}

console.log("[Question # 4]: ", numberPower);

/**
 * Question 5
 * Reverse a string "HelloWorld" using a while loop.
 */

let name1 = "HelloWorld";
let reverseName1 = "";
i = name1.length;
while (i > 0) {
  i--;
  reverseName1 += name1[i];
}

console.log("[Question # 5]: ", reverseName1);

/**
 * Question 6
 * Using a while loop, count how many times the letter 'a' appears in the string "banana".
 */

let name2 = "banana";
let count = 0;
i = 0;
while (i < name2.length) {
  i++;
  count += name2[i] === "a";
}

console.log("[Question # 6]: ", count);

/**
 * Question 7
 * Using a while loop, compute the factorial of 5.
 */

let factorial = 1;
n = 0;
while (n < 5) {
  n++;
  factorial = factorial * n;
}

console.log("[Question # 7]: ", factorial);

/**
 * Question 8
 * Print all numbers from 100 to 80 in descending order using a while loop.
 */

let numberDes = "";
num = 101;
while (num > 80) {
  num--;
  numberDes += num;
  if (num > 80) {
    numberDes += ",";
  }
}

console.log("[Question # 8]: ", numberDes);

/**
 * Question 9
 * Using a while loop, find the greatest common divisor (GCD) of two numbers, 56 and 98.
 */

function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let number1 = 56;
let number2 = 98;

let gcd = findGCD(number1, number2);

console.log("[Question # 9]: ", gcd);

/**
 * Question 10
 * Calculate the sum of all odd numbers between 1 and 50 using a while loop.
 */

numberOdd = 0;
num = 0;
while (num < 50) {
  num++;
  if (num % 2 === 1) {
    numberOdd += num;
  }
}

console.log("[Question # 10]: ", numberOdd);
