/**
 * This quiz is to test your knowledge of For-Loop.
 *
 * 1. When you finish the quiz, create a branch on you repository
 * 2. Submit to your lead
 */

// Quiz on For-loops and Biblical Trivia

// Question 1: Count the number of occurrences of the letter 'a' in the name "Abraham".
let name1 = "Abraham";
let count1 = 0;
for (let i = 0; i < name1.length; i++) {
  // if (name1[i].toLowerCase() === "a") {
  //   count1++;
  // }
  count1 += name1[i].toLowerCase() === "a" ? 1 : 0;
}
console.log(
  `the number of occurrences of the letter 'a' is ${count1} in the name ${name1}`
); // Answer should be:

// Question 2: Reverse the string "Moses".
let name2 = "Moses";
let reversedName2 = "";
for (let j = name2.length - 1; j >= 0; j--) {
  //reversedName2 = name2.split("").reverse().join("");
  reversedName2 += name2[j];
}
console.log(`the word reverse is : ${reversedName2}`); // Answer should be:

// Question 3: Sum the integers from 1 to 12 (the number of sons of Jacob).
let sum3 = 0;
for (let k = 1; k <= 12; k++) {
  sum3 += k;
}
console.log(`The number of sons of Jacob is : ${sum3}`); // Answer should be:

// Question 4: Create a string that contains the first 5 books of the Old Testament separated by a comma.
let books4 = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];
let bookString4 = "";
for (let l = 0; l < books4.length; l++) {
  //bookString4 = books4.join(",");
  bookString4 += books4[l];
  if (l < books4.length - 1) {
    bookString4 += ", ";
  }
}
console.log(bookString4); // Answer should be:

// Question 5: Count the number of vowels in the name "Jerusalem".
let name5 = "Jerusalem";
let count5 = 0;
for (let m = 0; m < name5.length; m++) {
  if ("aeiou".includes(name5[m].toLowerCase())) {
    count5++;
  }
}
console.log(`The number of vowels in the name ${name5} is : ${count5}`); // Answer should be:

// Question 6: Find the product of the numbers 1 to 5.
let product6 = 1;
for (let n = 1; n <= 5; n++) {
  product6 *= n;
}
console.log(`The product of the numbers 1 to 5 is : ${product6}`); // Answer should be:

// Question 7: Create a string from an array that tells the story of David and Goliath.
let story7 = ["David", "fought", "Goliath", "and", "won."];
let storyString7 = "";
for (let o = 0; o < story7.length; o++) {
  storyString7 += story7[o];
  if (o < story7.length) {
    storyString7 += " ";
  }
}
console.log(storyString7); // Answer should be:

// Question 8: Create an acronym from the phrase "In The Beginning".
let phrase8 = "In The Beginning";
let acronym8 = "";
for (let p = 0; p < phrase8.length; p++) {
  if (p === 0) {
    acronym8 = phrase8[0];
  }
  if (phrase8[p] === " ") {
    acronym8 += phrase8[p + 1];
  }
}
console.log(acronym8); // Answer should be:

// Question 9: Convert the string "Noah" to uppercase.
let name9 = "Noah";
let upperName9 = "";
for (let q = 0; q < name9.length; q++) {
  upperName9 += name9[q].toUpperCase();
}

console.log(upperName9); // Answer should be:

// Question 10: Find the length of the string "Revelation" without using the `.length` property.
let name10 = "Revelation";
let length10 = 0;
for (let r = 0; name10[r] !== undefined; r++) {
  if (name10[r] !== undefined) {
    length10++;
  }
}
console.log(`The length of the string ${name10} is : ${length10}`); // Answer should be:

// Additional 10 Questions on For-loops and Biblical Trivia

// Question 11: Count the number of occurrences of the letter 'e' in the word "Jericho".
let city11 = "Jericho";
let count11 = 0;
for (let s = 0; s < city11.length; s++) {
  count11 += city11[s].toLowerCase() === "e" ? 1 : 0;
}
console.log(
  `the number of occurrences of the letter 'e' is ${count11} in the name ${city11}`
); // Answer should be:

// Question 12: Reverse the string "Bethlehem".
let town12 = "Bethlehem";
let reversedTown12 = "";
for (let t = town12.length - 1; t >= 0; t--) {
  reversedTown12 += town12[t];
}
console.log(`the word reverse is : ${reversedTown12}`); // Answer should be:

// Question 13: Sum the integers from 1 to 40 (the number of days of Jesus' temptation).
let sum13 = 0;
for (let u = 1; u <= 40; u++) {
  sum13 += u;
}
console.log(`the number of days of Jesus temptation is : ${sum13}`); // Answer should be:

// Question 14: Concatenate the list of the Twelve Apostles into a single string separated by a comma.
let apostles14 = [
  "Peter",
  "James",
  "John",
  "Andrew",
  "Philip",
  "Bartholomew",
  "Matthew",
  "Thomas",
  "James",
  "Thaddeus",
  "Simon",
  "Judas"
];
let apostlesString14 = "";
for (let v = 0; v < apostles14.length; v++) {
  apostlesString14 += apostles14[v];
  if (v < apostles14.length - 1) {
    apostlesString14 += ", ";
  }
}
console.log(apostlesString14); // Answer should be:

// Question 15: Count the number of consonants in the name "Isaiah".
let name15 = "Isaiah";
let count15 = 0;
for (let w = 0; w < name15.length; w++) {
  if (!"aeiou".includes(name15[w].toLowerCase())) {
    count15++;
  }
}
console.log(`The number of consonants in the name ${name15} is : ${count15}`); // Answer should be:

// Question 16: Find the product of the numbers from 3 to 7.
let product16 = 1;
for (let x = 3; x <= 7; x++) {
  product16 *= x;
}
console.log(`The product of the numbers from 3 to 7 is : ${product16}`); // Answer should be:

// Question 17: Create a string from an array that tells the story of Jonah and the Whale.
let story17 = ["Jonah", "was", "swallowed", "by", "a", "whale."];
let storyString17 = "";
for (let y = 0; y < story17.length; y++) {
  storyString17 += story17[y];
  if (y < story17.length) {
    storyString17 += " ";
  }
}
console.log(storyString17); // Answer should be:

// Question 18: Create an acronym from the phrase "Garden Of Eden".
let phrase18 = "Garden Of Eden";
let acronym18 = "";
for (let z = 0; z < phrase18.length; z++) {
  if (z === 0) {
    acronym18 += phrase18[0];
  }
  if (phrase18[z] === " ") {
    acronym18 += phrase18[z + 1];
  }
}
console.log(acronym18); // Answer should be:

// Question 19: Convert the string "Canaan" to lowercase.
let name19 = "Canaan";
let lowerName19 = "";
for (let aa = 0; aa < name19.length; aa++) {
  lowerName19 += name19[aa].toLowerCase();
}
console.log(lowerName19); // Answer should be:

// Question 20: Find the length of the string "Exodus" without using the `.length` property.
let name20 = "Exodus";
let length20 = 0;
for (let bb = 0; name20[bb] !== undefined; bb++) {
  length20 += name20[bb] !== undefined ? 1 : 0;
}
console.log(`The length of the string ${name20} is : ${length20}`); // Answer should be:
