$(document).ready(function () {
  const words = [
    { word: "always", translation: "завжди" },
    { word: "never", translation: "ніколи" },
    { word: "sometimes", translation: "іноді" },
    { word: "happy", translation: "щасливий" },
    { word: "sad", translation: "сумний" },
    { word: "friend", translation: "друг" },
    { word: "love", translation: "любов" },
    { word: "family", translation: "сім'я" },
    { word: "world", translation: "світ" },
    { word: "dream", translation: "мрія" },
  ];

  let currentIndex = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  const shuffledWords = words.sort(() => Math.random() - 0.5);

  function updateWord() {
    $("#word").text(shuffledWords[currentIndex].word);
    $("#step").text(currentIndex + 1);
    $("#translation").val("");
  }

  updateWord();

  $("#check-btn").click(function () {
    const userTranslation = $("#translation").val().trim();
    const correctTranslation = shuffledWords[currentIndex].translation;

    if (userTranslation.toLowerCase() === correctTranslation.toLowerCase()) {
      correctAnswers++;
      $("#correct").text(correctAnswers);
    } else {
      incorrectAnswers++;
      $("#incorrect").text(incorrectAnswers);
    }

    currentIndex++;

    if (currentIndex < shuffledWords.length) {
      updateWord();
    } else {
      const totalWords = shuffledWords.length;
      const knowledgeLevel =
        correctAnswers / totalWords >= 0.8
          ? "Високий"
          : correctAnswers / totalWords >= 0.5
          ? "Середній"
          : "Низький";

      $("#result-message").text(
        `Ваша кількість вірних відповідей: ${correctAnswers}/${totalWords}. Рівень знань: ${knowledgeLevel}.`
      );
      $("#result-modal").fadeIn();
    }
  });

  $("#restart-btn").click(function () {
    currentIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    $("#correct").text(0);
    $("#incorrect").text(0);
    $("#result-modal").fadeOut();
    updateWord();
  });
}); 
