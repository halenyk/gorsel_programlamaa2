// popup.js

function askWord() {
  chrome.runtime.sendMessage({ action: "askWord" }, function(response) {
    var questionElement = document.getElementById("question");
    questionElement.innerText = "İngilizce kelime nedir?\n" + response.turkish;
  });
}

function checkAnswer() {
  var answerInput = document.getElementById("answer");
  var userAnswer = answerInput.value.trim().toLowerCase();

  chrome.runtime.sendMessage({ action: "checkAnswer", userAnswer: userAnswer }, function(response) {
    if (response.correct) {
      alert("Doğru! Tebrikler!");
    } else {
      alert("Yanlış! Doğru cevap: " + response.correctAnswer);
    }

    // Yeni bir kelime sor
    askWord();
  });
}

// Sayfa yüklendiğinde ilk soruyu sor
document.addEventListener("DOMContentLoaded", function() {
  askWord();
});
