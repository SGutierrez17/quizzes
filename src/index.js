/*
JavaScript Quiz

Directions: Uncomment the // console.log() lines one at a time as you are working on the quiz so you don't see any errors.

Hint: If you want to print the test results on your terminal, you can do it by using node
Example to see the answers in your terminal. 

Open terminal and type:
node /path/to/100-quiz.js
*/

/* Questions */

/*
==========================
Primitives
===========================
*/
// 1. Create a variable named `adds` of type const where the numbers 2 and 20 are added using the addition operator

const adds = 2 + 20;

console.log("[Question #1]: ", adds); // should print 22

// 2. Declare a variable named 'stringVar' of type let and assign it a value of 'Hello'.

let stringVar = "Hello";

console.log("[Question #2]: ", stringVar); // should print Hello

// 3. Create a constant named 'numberVar' with a value of 5.

const numberVar = 5;

console.log("[Question #3]: ", numberVar); // should print 5

// 4. Let 'booleanVar' be a variable that holds the value false.

const booleanVar = false;

console.log("[Question #4]: ", booleanVar); // should print true or false

/*
==========================
 Object
===========================
*/
// 5. Create an object named 'student' with keys 'name' and 'age' having values 'John' and 20 respectively.

let student = {
  name: "John",
  age: 20
};

console.log("[Question #5]: ", student);

// 6. Access the 'name' property of the 'student' object and store it in a variable named 'studentName'.

const studentName = student.name;

console.log("[Question #6]: ", studentName); // should print John

// 7. Add a new property 'grade' to 'student' and set its value to 'A'.

student.grade = "A";

console.log("[Question #7]: ", student);

/*
==========================
Array
===========================
*/
// 8. Declare an array named 'fruits' with values 'apple', 'banana', and 'cherry'.

const fruits = ["apple", "banana", "cherry"];

console.log("[Question #8]: ", fruits);

// 9. Access the second element of 'fruits' and store it in a variable named 'secondFruit'.

const secondFruit = fruits[1];

console.log("[Question #9]: ", secondFruit); // should print banana

// 10. Add 'orange' to the end of the 'fruits' array.

fruits.push("orange");

console.log("[Question #10]: ", fruits);

/*
==========================
let and const
===========================
*/
// 11. Create a variable of type let named 'temperature' and assign it a value of 25.

let temperature = 25;

console.log("[Question #11]: ", temperature); // should print 25

// 12. Change the value of 'temperature' to 30. Print a console again.

temperature = 30;

console.log("[Question #12]: ", temperature); // should print 30

/*
==========================
If Statements
===========================
*/
// 13. Write an if statement that checks if 'temperature' is greater than 28 and logs 'It's hot!' to the console.

if (temperature > 28) {
  console.log("[Question #13]: It's hot!");
} else if (temperature < 15) {
  // 14. Extend the previous if statement to check if 'temperature' is less than 15 and logs 'It's cold!' to the console.
  console.log("[Question #13]: It's cold!");
}

/*
==========================
Math Operators
===========================
*/
// 15. Declare a constant named 'product' which is the result of multiplying 5 and 7.

const product = 5 * 7;

console.log("[Question #15]: ", product); // should print 35

// 16. Create a variable 'remainder' which stores the remainder when 15 is divided by 4.

const remainder = 15 / 4;

console.log("[Question #16]: ", Math.trunc(remainder)); // should print 3

/*
==========================
Comparative Operators
===========================
*/
// 17. Check if 'numberVar' is equal to 5 using the strict equality operator.

// should print true
console.log("[Question #17]: ", numberVar === 5);

// 18. Check if 'stringVar' is not equal to 'Hello World'.

// should print true
console.log("[Question #18]: ", stringVar !== "Hello World");

/*
==========================
Logical Operators
===========================
*/
// 19. Check if 'temperature' is less than 5 or greater than 29.

console.log("[Question #19]: ", temperature < 5 || temperature > 29);
// should print true

// 20. Confirm that 'stringVar' is 'Hello' and 'numberVar' is not 6.

console.log("[Question #20]: ", stringVar === "Hello" && numberVar != 6);
// should print true

/*
==========================
Assignment Operators
===========================
*/
// 21. Add 10 to 'temperature' using the += assignment operator.

temperature += 10;

console.log("[Question #21]: ", temperature); // should print 40

// 22. Subtract 5 from 'temperature' using the -= operator.

temperature -= 5;

console.log("[Question #22]: ", temperature); // should print 35

// 23. Multiply 'temperature' by 2 using the *= operator.

temperature = 40;
typeHere = temperature *= 2;

console.log("[Question #23]: ", typeHere); // should print 80

// 24. Divide 'temperature' by 5 using the /= operator.

typeHere = temperature /= 5;

console.log("[Question #24]: ", typeHere); // should print 16

// 25. Check if the type of 'stringVar' is 'string'.

console.log("[Question #25]: ", typeof stringVar === "string");
// should print true

// 26. Compare the values of 'numberVar' and the string '5' using the loose equality operator.

console.log("[Question #26]: ", numberVar !== "5");
// should print true

// 27. Declare an array named 'colors' and push 'red' and 'blue' into it.

const colors = [];
colors.push("red", "blue");

console.log("[Question #27]: ", colors); // should print array with red and blue

// 28. Remove the last element from 'fruits' array.

fruits.pop();

console.log("[Question #28]: ", fruits); // should print [ 'apple', 'banana', 'cherry' ]

// 29. Check if 'numberVar' is greater than or equal to 5.

console.log("[Question #29]: ", numberVar >= 5);
// should print true

// 30. Determine if the length of 'stringVar' is strictly equal to 5.

console.log("[Question #30]: ", stringVar.length === 5);
// should print true

// 31. Use the modulo operator to determine if 10 is even.

console.log("[Question #31]: ", 10 % 10 === 0);
// should print true

// 32. Create a variable 'result' and assign it the result of 10 raised to the power of 3.

const result = 10 ** 3;

console.log("[Question #32]: ", result); // should print 1000

// 33. Compare the value of 'stringVar' to the string 'hello' in a case insensitive manner.

console.log("[Question #33]: ", stringVar === "hello"); // should print true

// 34. Check if 'booleanVar' is truthy.

console.log("[Question #34]: ", booleanVar === null); // should print falsey

// 35. Log the opposite value of 'booleanVar' to the console using the NOT operator.

const opposite = !booleanVar;
console.log("[Question #35]: ", opposite);
// should print opposite

// 36. Check if 'fruits' array contains more than 3 elements.

console.log("[Question #36]: ", fruits.length === 3); // should print true if it does, false if it does not

// 37. Create an object named 'car' with keys 'make' and 'model'.

const car = {
  keys: "",
  make: "",
  model: ""
};

console.log("[Question #37]: ", car); // should print object with above structure and keys with empty strings

// 38. Change the 'make' property of 'car' to 'Toyota'.

car.make = "Toyota";

console.log("[Question #38]: ", car); // should print object with make key = Toyota

// 39. Declare a variable named 'isRainy' and assign it a boolean value based on if 'temperature' is less than 20.

const isRainy = temperature < 20;

console.log("[Question #39]: ", isRainy); // should print true

// 40. Write an if statement that checks if 'numberVar' is even.

if (numberVar % 2 === 0) {
  console.log("[Question #40]: ", true);
}

// 41. Check if both 'numberVar' is less than 10 and 'temperature' is greater than 20.

const bothNumberVar = numberVar < 10 && temperature > 20;

console.log("[Question #41]: ", bothNumberVar); // should print false

// 42. Use the ternary operator to assign 'cold' or 'warm' to a variable 'weather' based if 'temperature' is less than 16 celsius.

const weather = temperature < 16 ? "cold" : "warm";

console.log("[Question #42]: ", weather); // should print warm

// 43. Check if 'fruits' includes 'banana'.

console.log("[Question #43]: ", fruits.includes("banana")); //

// 44. Check if the value of 'numberVar' is between 4 and 6.

console.log("[Question #44]: ", numberVar > 4 && numberVar < 6); // should print true

// 45. Declare a variable named 'divided' which is the result of dividing 100 by 'numberVar'.

const divided = 100 / numberVar;

console.log("[Question #45]: ", divided); // should print 20

// 46. Check if 'stringVar' starts with the letter 'H'.

console.log("[Question #46]: ", stringVar.startsWith("H")); // should print true

// 47. Declare a variable 'squared' and assign it the result of squaring 'numberVar'.

const squared = numberVar ** 2;

console.log("[Question #47]: ", squared); // should print 25

// 48. Find out if 'stringVar' ends with the letter 'o'.

console.log("[Question #48]: ", stringVar.endsWith("o")); // should print true

// 49. Use the remainder operator to determine if 'numberVar' is odd.

console.log("[Question #49]: ", remainder % 2 !== 0); // should print true

// 50. Write an if-else statement that checks if 'temperature' is above 25, logs 'Too hot!', otherwise logs 'Just right!'.

if (temperature > 25) {
  console.log("[Question #50]: Too hot!");
} else {
  console.log("[Question #50]: Just right!");
} // should print Just right!

/*
==========================
Primitives
===========================
*/
// 51. Declare a variable named 'city' of type let and assign it a value of 'Paris'.

let city = "Paris";

console.log("[Question #51]: ", city); // should print Paris

// 52. Create a constant named 'maxCount' with a value of 100.

const maxCount = 100;

console.log("[Question #52]: ", maxCount); // should print 100

// 53. Let 'isVisible' be a variable that holds the value true.

let isVisible = true;

console.log("[Question #53]: ", isVisible); // should print true

/*
==========================
Objects
===========================
*/
// 54. Create an object named 'book' with keys 'title' and 'author' having values '1984' and 'George Orwell' respectively.

let book = {
  title: "1984",
  author: "George Orwell"
};

console.log("[Question #54]: ", book);

// 55. Access the 'title' property of the 'book' object and store it in a variable named 'bookTitle'.

bookTitle = book.title;

console.log("[Question #55]: ", bookTitle); // should print 1984

// 56. Add a new property 'publishedYear' to 'book' and set its value to 1949.

book.publishedYear = 1949;

console.log("[Question #56]: ", book); //

/*
==========================
Array
===========================
*/
// 57. Declare an array named 'planets' with values 'Mercury', 'Venus', and 'Earth'.

const planets = ["Mercury", "Venus", "Earth"];

console.log("[Question #57]: ", planets); // should print array with above values

// 58. Access the third element of 'planets' and store it in a variable named 'thirdPlanet'.

const thirdPlanet = planets[2];

console.log("[Question #58]: ", thirdPlanet); // should print Earth

// 59. Add 'Mars' to the start of the 'planets' array using an appropriate method.

planets.unshift("Mars");

console.log("[Question #59]: ", planets); // should print ['Mars', 'Mercury', 'Venus', 'Earth']

/*
==========================
let and const
===========================
*/
// 60. Create a variable of type let named 'weight' and assign it a value of 60.

let weight = 60;

console.log("[Question #60]: ", weight); // should print 60

// 61. Change the value of 'weight' to 65.

weight = 65;

console.log("[Question #61]: ", weight); // should print 65

/*
==========================
If Statements
===========================
*/
// 62. Write an if statement that checks if 'weight' is less than 58 and logs 'Underweight' to the console.

if (weight < 58) {
  console.log("[Question #62]: Underweight");
} else if (weight > 70) {
  console.log("[Question #62]: Overweight");
} // 63. Extend the previous if statement with an else if to check if 'weight' is over 70 and logs 'Overweight' to the console.

/*
==========================
Math Operators
===========================
*/
// 64. Declare a constant named 'radius' with a value of 7.

const radius = 7;

console.log("[Question #64]: ", radius); // should print 7

// 65. Calculate the area of a circle using 'radius' (area = πr^2) and store it in a variable named 'circleArea'.

let circleArea = Math.PI * Math.pow(radius, 2);

console.log("[Question #65]: ", circleArea); // should print 153.93804002589985

/*
==========================
Comparative Operators
===========================
*/
// 66. Check if 'weight' is less than or equal to 65.

if (weight <= 65) {
  console.log("[Question #66]: ", true);
}

// 67. Confirm that 'city' is strictly not equal to 'London'.

if (city !== "London") {
  console.log("[Question #67]: ", true);
}

/*
==========================
Logical Operators
===========================
*/
// 68. Check if 'isVisible' is false using the NOT operator.

if (!isVisible === false) {
  console.log("[Question #68]: ", true);
} // should print true

// 69. Verify if 'city' is 'Paris' or 'bookTitle' is 'Brave New World'.

if (city === "Paris" || bookTitle === "BRave New World") {
  console.log("[Question #69]: ", true);
} // should print true

/*
==========================
Assignment Operators
===========================
*/
// 70. Increment 'weight' by 1 using the appropriate operator.

weight++;

console.log("[Question #70]: ", weight); // should print 66

// 71. Halve the value of 'weight' using the /= operator.

weight /= 2;

console.log("[Question #71]: ", weight); // should print 33

// 72. Confirm that 'city' is a type of string using the typeof operator.

if (typeof ("city" === String)) {
  console.log("[Question #72]: ", true);
} // should print true

// 73. Declare an array named 'days' and add 'Monday' and 'Tuesday' to it.

const days = ["Monday", "Tuesday"];

console.log("[Question #73]: ", days);

// 74. Remove the first element from 'planets' array.

planets.shift();

console.log("[Question #74]: ", planets);

// 75. Determine if the length of 'city' is strictly greater than 6.

console.log("[Question #75]: ", city.length > 6);

// 76. Check if 'maxCount' is less than or equal to 105.

if (maxCount <= 105) {
  console.log("[Question #76]: ", true);
}

// 77. Check if 'isVisible' is a type of boolean.

if (typeof (isVisible === Boolean)) {
  console.log("[Question #77]: ", true);
}

// 78. Add 25 to 'circleArea' using the += assignment operator.

circleArea += 25;

console.log("[Question #78]:", circleArea);

// 79. Find out if 'book' has a property named 'genre'.

console.log("[Question #79]: ", "genre" in book);

// 80. Check if 'days' array has exactly 2 elements.

console.log("[Question #80]: ", days.length === 2);

// 81. Using the ternary operator, check if 'isVisible' is true and assign 'visible' or 'not visible' to a variable named 'status'.

const status = isVisible ? "visible" : "not visible";

console.log("[Question #81]: ", status);

// 82. Confirm that 'planets' does not include 'Jupiter'.

console.log("[Question #82]: ", !planets.includes("Jupiter"));

// 83. Check if 'radius' is between 5 and 10 using logical operators.

if (radius > 5 && radius < 10) {
  console.log("[Question #83]: ", true);
}

// 84. Calculate the perimeter of the circle using 'radius' (perimeter = 2πr) and store it in a variable named 'circlePerimeter'.

const circlePerimeter = 2 * Math.PI * radius;

console.log("[Question #84]: ", circlePerimeter);

// 85. Check if 'city' contains the substring 'ar'.

console.log("[Question #85]: ", city.includes("ar"));

// 86. Declare a variable 'cubeVolume' and assign it the result of cubing 'radius' (volume = s^3).

const cubeVolume = Math.pow(radius, 3);

console.log("[Question #86]: ", cubeVolume);

// 87. Determine if 'bookTitle' ends with the word '1984'.

console.log("[Question #87]: ", bookTitle.endsWith("1984"));

// 88. Check if the 'days' array is not empty.

console.log("[Question #88]: ", days.length > 0);

// 89. Add a new key-value pair 'pages' and '328' to the 'book' object.

book.pages = 328;

console.log("[Question #89]: ", book);

// 90. Write an if-else statement that checks if 'circleArea' is above 150, logs 'Large Circle', otherwise logs 'Small Circle'.

if (circleArea > 150) {
  console.log("[Question #90]: Large Circle");
} else {
  console.log("[Question #90]: Small Circle");
}

// 91. Use the AND operator to check if 'weight' is more than 50 and less than 70.

if (weight > 50 && weight < 70) {
  console.log("[Question #91]: ", true);
} else {
  console.log("[Question #91]: ", false);
}

// 92. Declare a variable 'squareArea' and assign it the result of squaring 'radius'.

const squareArea = radius ** 2;

console.log("[Question #92]: ", squareArea);

// 93. Check if 'bookTitle' starts with the word 'The'.

console.log("[Question #93]: ", bookTitle.startsWith("The"));

// 94. Using the appropriate method, reverse the order of elements in the 'planets' array.

planets.reverse();

console.log("[Question #94]: ", planets);

// 95. Convert 'weight' into a string and store it in a variable named 'weightStr'.

const weightStr = weight.toString();

console.log("[Question #95]: ", weightStr);

// 96. Compare 'weight' and 'weightStr' using the loose equality operator.

console.log("[Question #96]: ", weight == weightStr);

// 97. Create an array named 'numbers' and fill it with numbers 1 through 5.

let numbers = [1, 2, 3, 4, 5];

console.log("[Question #97]: ", numbers);

// 98. Find out if 'book' has a property named 'isbn'.

console.log("[Question #98]: ", "isbn" in book);

// 99. Calculate the difference between 'circlePerimeter' and 'squareArea' and store it in a variable named 'shapeDifference'.

const shapeDifference = circlePerimeter - squareArea;

console.log("[Question #99]: ", shapeDifference);

// 100. Create an object named 'album' with properties 'name', 'artist', and 'releaseYear'.

const album = {
  name: "",
  artist: "",
  releaseYear: ""
};

console.log("[Question #100]: ", album);
