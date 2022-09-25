


document.getElementById("start").addEventListener("click", thing);
const element = document.getElementById("demo");
var timer= element.innerHTML;

function thing () { 
    var ele1 = document.getElementById("start");
    ele1.style.display = "none";
       var ele2 = document.getElementById("question-1");
    ele2.style.display = "block";
    setInterval(function() {
      if (timer > 0){
          timer = timer - 1;
          element.innerHTML = timer;
      } else {
          element.innerHTML = "Game Over";
          clearInterval(thing);
      }
    }, 1000);
}
document.getElementById("right-answer").addEventListener("click", moveOnToNextQuestion);
document.getElementsByClassName("wrong-answer")[0].addEventListener("click", decreaseTimer);
document.getElementsByClassName("wrong-answer")[1].addEventListener("click", decreaseTimer);
document.getElementsByClassName("wrong-answer")[2].addEventListener("click", decreaseTimer);

function decreaseTimer () {
    timer = timer - 15;
    moveOnToNextQuestion();
}

function moveOnToNextQuestion() {
    var ele1 = document.getElementById("question-1");
    if (ele1.style.display === "block") {
    ele1.style.display = "none";
       var ele2 = document.getElementById("question-2");
    ele2.style.display = "block";
    }
}