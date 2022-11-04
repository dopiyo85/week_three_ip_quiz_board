$(document).ready(function () {
    const quizAnswers = document.querySelectorAll(".ouranswers");
    const submitAnswer = document.querySelector("#submit_ans");
    const finalAnsContainer = document.querySelector("#matokeo");
    let marks = 0;
    let total = 0;
    quizAnswers.forEach(function (correctans) {
        total += parseInt(correctans.value);
    });
    submit_ans.addEventListener("click", function (e) {
        quizAnswers.forEach(function (answer) {
            if (answer.checked) {
                score += parseInt(answer.value);
            }
        });
        let score = (marks / total) * 100;
        let rating = "";
        if (score >= 80) {
            rating += "You have scored: " + score + "%" + " :Excellent";
        }
        else if (score >= 50 && score < 80) {
            rating +="You have scored: " + score + "%" + " :You can do better";
        }
        else {
            rating +="You have scored: " + score + "%" +  "\n You can do better, Please retake test.";
        }
        finalAnsContainer.innerHTML += rating;
        
    });
    $("#submit_ans").click(function(){
        $("#finalscore").removeClass("d-none");
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

