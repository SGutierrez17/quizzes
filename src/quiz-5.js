/**
 * This quiz is to test your knowledge of Switch Statements.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Given a variable color with a value "red", use a switch statement to set a variable feeling to "passionate" for "red", "calm" for "blue", and "neutral" for other colors.
 */

const color = "red";
switch (color) {
  case "red":
    feeling = "passionate";
    break;
  case "blue":
    feeling = "calm";
    break;
  default:
    feeling = "neutral";
    break;
}

console.log("[Question #1]: ", feeling);

/**
 * Question 2
 * Using a switch statement, check the value of the variable day (e.g., "Monday"). Return "Working day" for weekdays and "Weekend" for Saturday and Sunday.
 */

const day = "Monday";
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thrusday":
  case "Friday":
    work = "Working day";
    break;
  case "Saturday":
  case "Sunday":
    work = "Weekend";
    break;
}

console.log("[Question #2]: ", work);

/**
 * Question 3
 * Given a variable score of 85, set a grade: "A" for 90 and above, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60.
 */

const score = 85;
switch (true) {
  case score >= 90:
    qualification = "A";
    break;
  case score >= 80:
    qualification = "B";
    break;
  case score >= 70:
    qualification = "C";
    break;
  case score >= 60:
    qualification = "D";
    break;
  case score < 60:
    qualification = "F";
    break;
}

console.log("[Question #3]: ", qualification);

/**
 * Question 4
 * Use a switch statement to determine if the variable fruit is a "berry". Set "berry" for strawberries, blueberries, and raspberries. "Not a berry" for other fruits.
 */

const fruit = "strawberry";
switch (fruit) {
  case "strawberry":
  case "blueberry":
  case "raspberry":
    isBerry = "berry";
    break;
  default:
    isBerry = "Not a berry";
    break;
}

console.log("[Question #4]: ", isBerry);

/**
 * Question 5
 * Check the value of the variable month (e.g., "January") and return which quarter of the year it belongs to.
 */

const month = "January";
switch (month) {
  case "January":
  case "Febrary":
  case "March":
    isTrimester = "first trimester";
    break;
  case "April":
  case "May":
  case "June":
    isTrimester = "second trimester";
    break;
  case "July":
  case "August":
  case "September":
    isTrimester = "third trimester";
    break;
  case "Octuber":
  case "November":
  case "December":
    isTrimester = "fourth trimester";
    break;
}

console.log("[Question #5]: ", isTrimester);

/**
 * Question 6
 * Use a switch statement to determine if a number is "small", "medium", or "large". Consider numbers 1-3 as "small", 4-6 as "medium", and 7-9 as "large".
 */

const number = 5;
switch (true) {
  case number >= 7 && number <= 9:
    isNumber = "large";
    break;
  case number >= 4 && number <= 6:
    isNumber = "medium";
    break;
  case number >= 1 && number <= 3:
    isNumber = "small";
    break;
}

console.log("[Question #6]: ", isNumber);

/**
 * Question 7
 * Determine the type of the variable pet (e.g., "dog"). Return "Canine" for a dog, "Feline" for a cat, and "Unknown" for other pets.
 */

const pet = "dog";
switch (pet) {
  case "dog":
    isPet = "Canine";
    break;
  case "cat":
    isPet = "Feline";
    break;
  default:
    isPet = "Unknown";
    break;
}

console.log("[Question #7]: ", isPet);

/**
 * Question 8
 * Given a variable transportMode with a value like "car", return "Fast" for "plane", "Medium" for "car", and "Slow" for "bicycle".
 */

const transportMode = "car";
switch (transportMode) {
  case "plane":
    isTransportMode = "Fast";
    break;
  case "car":
    isTransportMode = "Medium";
    break;
  case "bicycle":
    isTransportMode = "Slow";
    break;
}

console.log("[Question #8]: ", isTransportMode);

/**
 * Question 9
 * For a variable direction with values like "N", determine the full direction name. "N" for "North", "S" for "South", etc.
 */

const direction = "N";
switch (direction) {
  case "N":
    isDirection = "North";
    break;
  case "S":
    isDirection = "South";
    break;
  case "W":
    isDirection = "West";
    break;
  case "E":
    isDirection = "East";
    break;
}

console.log("[Question #9]: ", isDirection);

/**
 * Question 10
 * Determine the type of drink based on the variable drink. "Water" for "H2O", "Coffee" for "C8H10N4O2", and "Unknown" for other values.
 */

const drink = "Water";
switch (drink) {
  case "Water":
    isDrink = "H2O";
    break;
  case "Coffee":
    isDrink = "C8H10N4O2";
    break;
  default:
    isDrink = "Unknown";
}

console.log("[Question #10]: ", isDrink);
