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
const newtuts = tutorials.split(' ')
const titleCased = () => {

  return tutorials.split(' ').map((tutorials)=> tutorials[0].toUpperCase() + tutorials.slice(1).toLowerCase())
  .join(" ");
  //return tutorials.map((tutorials).charAt(0).toUpperCase())
}
console.log(newtuts)
