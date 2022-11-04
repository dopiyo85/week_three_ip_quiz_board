$(document).ready(function () {
    const quizAnswers = document.querySelectorAll(".ouranswers");
    const submitAnswer = document.querySelector("#submit_ans");
    const finalAnsPage = document.querySelector("#finalscore");
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
    submitAnswer.addEventListener("click", function(event) {
        let score = (marks / total) * 100;
        let level = "";
        if (score > 80){
            level += "Excellent";
        }
        else if(score >= 50 && score >= 80 ){
            level += "You can do better";
        }
        else{
            level += "\n You can do better, Please retake test.";
        }
        finalAnsPage.textContent = ("You have scored: " + score +"%"+ level);      
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

