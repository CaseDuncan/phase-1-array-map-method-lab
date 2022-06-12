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

  return tutorials.map((newTuts)=>{
    const x =newTuts.split(" ")
    const result =newTuts.map((x)=>x.charAt(0).toUpperCase() +x.slice(1))
    const ans= result.join(" ")
    return ans
  })
  // return tutorials.split(' ')
  // .map((tutorials)=> tutorial[0].toUpperCase() + tutorials.slice(1).toLowerCase())
  // .join(" ");
  //return tutorials.map((tutorials).charAt(0).toUpperCase())
}
// console.log(titleCased(tutorials))
