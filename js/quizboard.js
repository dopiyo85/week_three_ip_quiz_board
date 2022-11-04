$(document).ready(function () {
    const quizAnswers = document.querySelectorAll(".ouranswers");
    const submitAnswer = document.querySelector("#submit_ans");
    let marks = 0;
    let total = 0;
    quizAnswers.forEach(function (correctans) {
        if (parseInt(correctans.value) > 0) {
            total += parseInt(correctans.value);
        }
        else {
            total = total;
        }
        // correctans.addEventListener("change", function (event) {
        //     marks += parseInt(event.target.value);
        // });
        quizAnswers.forEach(function(correctans) {
            if(correctans.checked){
                marks += parseInt(correctans.value);
            }
        })
    });
    submitAnswer.addEventListener("click", function (event) {
        let score = (marks / total) * 100;
        //     if (event.target.submitAnswer == score &&
        //     !event.target.hasAttribute("target"))
        // {
        // event.target.setAttribute("target", "_blank");
        // }
        alert("your score is " + score + "%");
    });
    $("#submit_ans").click(function () {
        alert("Wait for your Score");
    });
    $("#jumboimage").hover(function () {
        $(this).mouseenter(function () {
            $("#jumboimage").hide()
        })
        $(this).mouseleave(function () {
            $("#jumboimage").show();
        })

    });
});


// $(window).reload(function(event){
//     $("body").css("background-image","images/background2.jpg")
// });

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

