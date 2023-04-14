$(document).ready(function () {
    const quizAnswers = document.querySelectorAll(".ouranswers");
    const submitAnswer = document.querySelector("#submit_ans");
    const finalAnsContainer = document.querySelector("#matokeo");
       
    let marks = 0;
    let total = 0;
    quizAnswers.forEach(function (correctans) {
        if (parseInt(correctans.value) > 0) {
            total += parseInt(correctans.value);
        }
        else {
            total = total;
        }
        correctans.addEventListener("change", function (event) {
            marks += parseInt(event.target.value)
        });
    });
    submitAnswer.addEventListener("click", function (e) {
        quizAnswers.forEach(function (correctans) {
            if (correctans.checked) {
                marks += parseInt(correctans.value);
            }
        });
        let score = (marks / total) * 100;
        let rating = "";
        if (score >= 80) {
            rating += "You have scored: " + score + "%" + " :Excellent";
        }
        else if (score >= 50 && score < 80) {
            rating += "You have scored: " + score + "%" + " :You can do better";
        }
        else {
            rating += "You have scored: " + score + "%" + "\n You can do better, Please retake test.";
        }
        finalAnsContainer.textContent= rating;
    });

    $("#submit_ans").click(function () {
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
