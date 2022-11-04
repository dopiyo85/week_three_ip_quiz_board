const quizAnswers = document.querySelectorAll(".ouranswers");
const submitAnswer = document.querySelector("#submit_ans");
let marks = 0;
let total = 0;
quizAnswers.forEach(function (jibu) {
    if(parseInt(jibu.value) > 0) {
        total += parseInt(jibu.value);
    }
    else{
        total = total;
    }
    jibu.addEventListener("change", function (event) {
        marks += parseInt(event.target.value);
    });
});
submitAnswer.addEventListener("click", function (event) {
    let score = (marks/total)*100;
    if (event.target.submitAnswer == score &&
    !event.target.hasAttribute("target"))
{
event.target.setAttribute("target", "_blank");
}
    //   alert("your score is " + score + "%");   
}); 

// function grader(){
//     var grades = score;
//       if(grades >= 80 && grades <=100 ){
//           alert("Your grade is A");
//           }else if(grades >=60 && grades <=79){
//           alert("Your grade is B");
//           } 
//            else if(grades >=40 && grades <=59){
//           alert("Your grade is C");
//           }
//   else if(grades >=20 && grades <=39){
//           alert("Your grade is D");
//           } 
//           else if(grades >=0 && grades <=20){
//           alert("Your grade is E");
//           }  
// }   
// grader();
      
