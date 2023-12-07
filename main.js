// Magic 8 Ball

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  // INPUTS
  let answer = document.getElementById("answer-in").value;
  let question = document.getElementById("question-in").value;

  // Question
  if (question === "Does a magic 8 ball actually work?") {
    document.getElementById("output").innerHTML = "How dare you doubt me!!";
  }
  if (question1 === "is JavaScipt awesome?") {
    document.getElementById("output").innerHTML = "Of Course";
  } else if (question.length > 5) {
    document.getElementById("output").innerHTML = "As i see it,yes.";
  } else if (question.length > 7) {
    document.getElementById("output").innerHTML = "without a doubt";
  } else if (question.length > 10) {
    document.getElementById("output").innerHTML = "Concentrate and ask again";
  } else if (question.length > 15) {
    document.getElementById("output").innerHTML = "Dont count on it";
  } else if (question.length > 20) {
    document.getElementById("output").innerHTML = "outlook not so good";
  }
}
