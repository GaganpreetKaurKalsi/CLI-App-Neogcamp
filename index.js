readline = require('readline-sync');
user = readline.question("Please enter your name : ");
console.log("Hello "+user+"! Welcome to DO YOU KNOW Gaganpreet?");
console.log("\nThe quiz contains a total of 11 questions which will judge your knowledge of Gaganpreet. At any point if you would like to end the quiz ENTER -1 and we will get you out of it.\nNow let's begin and answer a few questions asked by GAGANPREET.......\n");

score = 0;

function check(ques,ans){
  var userAns = readline.question(ques);
  if (userAns == -1){
    return -1;
  } 
  if(ans.includes(userAns.toLowerCase())){
    console.log("Your answer is correct! :)");
    score++;
  }
  else{
    console.log("Your answer is wrong! :(");
  }
  console.log("Current score : " + score);
  console.log("-----------------------------------\n");
  return;
}

questionBank = [
  {
    question : "What is my full name ? ",
    answer : ['gaganpreet kaur kalsi']
  },
  {
    question : "When is my birthday ? ",
    answer : ['06/11/2001','6 nov','nov 6','6th nov,2001','6th nov, 2001']
  },
  {
    question : "What am I good at ? ",
    answer : ['art and craft','painting','sketching', 'drawing', 'art', 'craft']
  },
  {
    question : "By what nickname people love to call me ?  ",
    answer : ["gaggu","gagu"]
  },
  {
    question : "What is my height ? (format : x'y\")  ",
    answer : ["5'6\""]
  },
  {
    question : "Which series of fiction is my favourite ? ",
    answer : ['harry potter','twilight','chronicles of narnia']
  },
  {
    question : "How many Harry Potter movies have I seen ?  ",
    answer : ["all", "8"]
  },
  {
    question : "How many Harry Potter books have I read ?  ",
    answer : ["all", "7", "8"]
  },
  {
    question : "Which is my favourite Harry Potter character ?  ",
    answer : ["harry potter","harry", "albus dumbledore", "dumbledore", "severus snape", "snape"]
  },
  {
    question : "Which Harry Potter character do I hate the most ?  ",
    answer : ["voldemort", "bellatrix lestrange" ,"bellatrix", "rita skeeter", "umbridge", "dolores Umbridge","Tom","Riddle","Tom Riddle"]
  },
  {
    question : "Which is my favourite marvel superhero ? ",
    answer : ['iron man','doctor strange','captain marvel']
  } 
];


for (var i=0; i<questionBank.length; i++){
  if(check(questionBank[i].question, questionBank[i].answer)== -1){
    break;
  };
}


console.log("Your total score is "+ score+"\n");
if(score>=8){
  console.log("Bravo!! You really know Gaganpreet well. You appear to be her best mate :>. CONGRATULATIONS on achieving high.");
}
else if (score>=4){
  console.log("Better Luck next time!! You should pay little attention to your friends likings. Retake the quiz when you are ready. Till then Bye!");
}
else{
  console.log("You appear to be an acquaintance. It's never too late to get to know others. Retake the quiz when you are ready. We will be waiting.");
}
