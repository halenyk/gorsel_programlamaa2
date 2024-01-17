// content.js

var words = [
  { english: "dog", turkish: "köpek" },
  { english: "cat", turkish: "kedi" },
  { english: "house", turkish: "ev" },
  { english: "excellent", turkish: "mükemmel" },
{ english: "journey", turkish: "seyahat" },
{ english: "solution", turkish: "çözüm" },
{ english: "adventure", turkish: "macera" },
{ english: "expand", turkish: "genişletmek" },
{ english: "observe", turkish: "gözlemlemek" },
{ english: "significant", turkish: "önemli" },
{ english: "contribute", turkish: "katkıda bulunmak" },
{ english: "achieve", turkish: "başarmak" },
{ english: "appropriate", turkish: "uygun" }
  
];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "askWord") {
    var randomWord = getRandomWord();
    sendResponse({ turkish: randomWord.turkish });
  } else if (request.action === "checkAnswer") {
    var userAnswer = request.userAnswer;
    var correctAnswer = getRandomWord().english;
    sendResponse({ correct: userAnswer === correctAnswer, correctAnswer: correctAnswer });
  }
});
