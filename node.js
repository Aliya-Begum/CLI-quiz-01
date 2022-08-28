var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Let me know your name ");
console.log("Welcome " +userName);
console.log("Lets see how much you know Me"); 
console.log("Let's Start");
 function play(question, answer){
   var userAnswer = readlineSync.question(question);
  
   if(userAnswer.toUpperCase() === answer){
     console.log("YAY! you got it right");
     score = score+1;
   }else{
     console.log("Oops! you got it wrong");
    
   } 
 }
var questionList = [{
  question: "What is my full name? ",
  answer : "ALIYA BEGUM"
}, 
 {
  question : "where do I live? ",   
  answer : "ETAWAH"
 },{
  question : "Where do I work? ",
  answer : "INFOSYS"
},
{
  question : "Which dessert I love most? ",
  answer : "CAKE"
},
{
  question : "When is my birthday? ",
  answer : "NOV"
}
]
for (let i = 0; i < 5; i++) {
  var currentQuestion = questionList[i];
  play(currentQuestion.question , currentQuestion.answer);
  console.log("-------");
  
}
console.log("Your final score is : " +score);

