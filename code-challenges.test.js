// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
 
// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleArray", () => {
  const arrayWillContain1 = ["yellow", "blue", "pink", "green"]
  const arrayWillContain2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("removes the first item from the array and shuffles the remaining content", () => {
    expect(shuffleArray(colors1)).toEqual(expect.not.arrayContaining(arrayWillContain1))
    expect(shuffleArray(colors2)).toEqual(expect.not.arrayContaining(arrayWillContain2))
  })
})

//   ReferenceError: shuffleArray is not defined

// b) Create the function that makes the test pass.

 // Pseudo:
    // create a function named shuffleArray
    // input: an array of strings
    // use mutator method .shift() on the array to remove the value at the first index of the array
    // use HOF .map to iterate over the array with the parameters values and index (i)
    // set a new variable (j) to a random index by using Math.floor(Math.random() * (i+1)). (i+1) will give the length of the array at the current iteration. The value at the current iteration is set to = value, which the function will reassign to the random indexed value j. Do this over and over with each element in the array to produce a randomized order of the elements
    // return the array with shuffled values
    // output: an array that excludes the first index of the original array and has the remaining values in a different order

const shuffleArray = (array) => {
    array.shift()
    array.map((value, i) => {
    const j = Math.floor(Math.random() * (i + 1))
    value = array[i]
    array[i] = array[j]
    array[j] = value
  })
  return array
}
console.log(shuffleArray(colors1)) // ->     [ 'blue', 'green', 'yellow', 'pink' ]
console.log(shuffleArray(colors2)) // ->     [ 'saffron', 'ochre', 'indigo', 'periwinkle', 'aquamarine' ]

// shuffleArray
//     ✓ removes the first item from the array and shuffles the remaining content (18 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { 
  upVotes: 13, 
  downVotes: 2 
}
// // Expected output: 11
const votes2 = { 
  upVotes: 2, 
  downVotes: 33 
}
// // Expected output: -31

describe("voteTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    expect(voteTally(votes1)).toEqual(11)
    expect(voteTally(votes2)).toEqual(-31)
  })
})

// ReferenceError: voteTally is not defined

// // b) Create the function that makes the test pass.
// Pseudo:
  // create a function named voteTally 
  // input: an object that contains 2 key:value pairs
  // access the value of each key using object deconstruction by declaring a variable with {} curly braces around the key names set equal to object
  // declare a variable called totalVotes to subtract the second value (down votes/negative votes) from the first value (up votes/positive votes)
  // return totalVotes, the result of the subtraction
  // output: the result end tally of upVotes and downVotes

const voteTally = (object) => {  
  const {upVotes, downVotes} = object
  const totalVotes = upVotes - downVotes
  return totalVotes
}
console.log(voteTally(votes1)) // -> 11
console.log(voteTally(votes2)) // -> -31

// voteTally
// ✓ takes in an object that contains up votes and down votes and returns the end tally (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. 
// // STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDupes", () => {
  it("takes in two arrays and returns one array with no duplicate values", () => {
    expect(noDupes(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

 //    ReferenceError: noDupes is not defined

// b) Create the function that makes the test pass.

// Pseudo
  // create a function named noDupes
  // input: two arrays as arguments. parameters will be array1 and array2
  // create a new variable comboArray assigned to one array containing all the elements of the given arrays using the spread operator (...) to copy array1 and array2
  // use HOF .filter to iterate over the new combined array and filter out duplicated values
  // output: one array with no duplicate values

const noDupes = (array1, array2) => {
  const comboArray = [...array1, ...array2]
  return comboArray.filter((value, index) => 
    comboArray.indexOf(value) === index)
}
console.log(noDupes(dataArray1, dataArray2)) 
  // [
  //   'array',
  //   'object',
  //   'number',
  //   'string',
  //   'Boolean',
  //   'null',
  //   'undefined'
  // ]

//   noDupes
//   ✓ takes in two arrays and returns one array with no duplicate values (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total