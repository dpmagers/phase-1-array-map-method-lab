const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




const titleCased = () => {
  return tutorials.map(string => {
    let words = string.split(' ')
    let capitalWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
      )
      let titleCasedString = capitalWords.join(' ')
      return titleCasedString
  })
}



//PASSING
// const titleCased = () => {
//   return tutorials.map(string => {
//     let words = string.split(' ')
//     let capitalWords = words.map(
//       (word) => word.charAt(0).toUpperCase() + word.slice(1)
//       )
//     let titleCasedString = capitalWords.join(' ')
//     return titleCasedString
//   })
// }


// const titleCased = () => {
//   return tutorials
// }

// const titleCased = tutorials.map(string => {
//   string = string.toLowerCase().split( ' ' ).map(word =>{
//     word.charAt(0).toUpperCase() + word.slice(1)
//   }).join( ' ' )
//   return titleCased
// })
//   console.log(string.toLowerCase().split)





////needs to separate the first character from the rest of the word
////needs to capitalize that first letter 
////OR
////replace that first character with one that is uppercased 
////needs to rejoin the first letter and the rest of the word
////needs to join each word back into original string 
////needs to return new array 
//   return tutorials
// })

////needs to set each string in lowercase (to add consistency) [didn't need this]
////needs to split the string word-for-word [didn't need this]


// https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/

// How can we "iterate" through individual words in a string?
//////could split strings and rejoin them
//// str = str.toLowerCase()
//// string = string.toLowerCase()

// Can we execute an iteration inside an iteration? How?

// How can we capitalize just the first letter in a word?

// To capitalize the first character of a string, 
// We can use the charAt() to separate the first character and then use the 
// toUpperCase() function to capitalize it. 




//original shell
// const titleCased = () => {
//   return tutorials
// }