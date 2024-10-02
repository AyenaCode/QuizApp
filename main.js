const questions = [
  {
    question: "Quelle est la couleur du ciel ?",
    choices: ["Bleu", "Rouge", "Vert", "Jaune"],
    answer: "Bleu",
  },

  {
    question: "Qui est le plus riche du monde en 2024 selon ?",
    choices: ["Bill Gates", "Elon Musk", "Jeff Bezos", "Bernard Arnault"],
    answer: "Elon Musk",
  },

  {
    question: "Quelle est sa fortune ?",
    choices: [
      "100 milliards",
      "150 milliards",
      "243 milliards",
      "250 milliards",
    ],
    answer: "243 milliards",
  },
  // {
  //   question: "Quelle est le continet le plus grand du monde ?",
  //   choices: ["Afrique", "Europe", "Asie", "Amerique"],
  //   answer: "Asie",
  // },
  // {
  //   question: "Quel est le plus grand pays du monde ?",
  //   choices: ["Russie", "Canada", "Chine", "Etats-Unis"],
  //   answer: "Russie",
  // },
  // {
  //   question: "Quelle est sa capitale ?",
  //   choices: ["Moscou", "Paris", "Berlin", "Londres"],
  //   answer: "Moscou",
  // },
  // {
  //   question: "Quel est le plus petit pays du monde ?",
  //   choices: ["Monaco", "Vatican", "Malte", "Liechtenstein"],
  //   answer: "Vatican",
  // },
  // {
  //   question: "Quelle est sa superficie ?",
  //   choices: ["0,44 km²", "0,49 km²", "0,55 km²", "0,61 km²"],
  //   answer: "0,44 km²",
  // },
  // {
  //   question: "Quelle est sa monnaie locale ?",
  //   choices: ["Euro", "Dollar", "Franc Suisse", "Lire"],
  //   answer: "Euro",
  // },
  // {
  //   question: "Quel est le plus grand océan du monde ?",
  //   choices: ["Atlantique", "Pacifique", "Indien", "Arctique"],
  //   answer: "Pacifique",
  // },
  // {
  //   question: "Quelle monnaie est la plus échangée dans le monde ?",
  //   choices: ["Dollar", "Euro", "Yen", "Franc Suisse"],
  //   answer: "Dollar",
  // },
  // {
  //   question: "Quelle est la monnaie la plus utiliser en Afrique ?",
  //   choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
  //   answer: "Franc CFA",
  // },
  // {
  //   question: "Quelle est la monnaie la plus utiliser en Asie ?",
  //   choices: ["Euro", "Dollar", "Yen", "Franc Suisse"],
  //   answer: "Yen",
  // },
  // {
  //   question: "Quelle est la monnaie la plus utiliser en Europe ?",
  //   choices: ["Euro", "Dollar", "Yen", "Franc Suisse"],
  //   answer: "Euro",
  // },
  // {
  //   question: "Quelle est la monnaie la plus utiliser en Amérique ?",
  //   choices: ["Euro", "Dollar", "Yen", "Franc Suisse"],
  //   answer: "Dollar",
  // },
  // {
  //   question: "Quelle est la monnaie de la côte d'ivoire ?",
  //   choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
  //   answer: "Franc CFA",
  // },
  // {
  //   question: "Quelle est la monnaie du Togo ?",
  //   choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
  //   answer: "Franc CFA",
  // },
  // {
  //   question: "Quelle est la monnaie du Maroc ?",
  //   choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
  //   answer: "Franc CFA",
  // },
  // {
  //   question: "Quelle est la monnaie du Ghana ?",
  //   choices: ["Euro", "Dollar", "Franc CFA", "Cedi"],
  //   answer: "Cedi",
  // },
  // {
  //   question: "Quelle est la monnaie du Burkina Faso ?",
  //   choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
  //   answer: "Franc CFA",
  // },
];

const start = document.getElementById("start");
const restart = document.getElementById("restart");
const appQuestionContainer = document.getElementById("app");
const nextQuestion = document.getElementById("nextQuestion");
const validButton = document.getElementById("valid");
const congrateElement = document.getElementById("congrate");
const wrongElement = document.getElementById("wrong");
const scorElement = document.getElementById("scor");

let next = 0;
let goodAnswer = 0;

//Démarrage du quiz
start.addEventListener("click", () => {
  next = 0;
  appQuestionContainer.classList.remove("invisible");
  validButton.classList.remove("invisible");
  start.classList.add("invisible");
  appQuestionContainer.innerHTML = displayQuestion(questions, next);
  scorElement.classList.remove("invisible");
  scorElement.innerHTML = `Votre score: ${goodAnswer}/${questions.length}`;
});

//Validation de la réponse
validButton.addEventListener("click", () => {
  if (document.querySelector("select").value) {
    checkAnswer();
    appQuestionContainer.classList.add("invisible");
    validButton.classList.add("invisible");
  } else {
    checkAnswer();
  }
  scorElement.innerHTML = `Votre score: ${goodAnswer}/${questions.length}`;
});

//Passage à la question suivante
nextQuestion.addEventListener("click", () => {
  next++;
  validButton.classList.remove("invisible");
  if (next === questions.length) {
    appQuestionContainer.innerHTML = `
      <div class="text-xl font-semibold">Fin du quiz</div>
      <div class="text-lg font-semibold">Vous avez ${goodAnswer} bonnes réponses et ${
      questions.length - goodAnswer
    } mauvaises réponses sur ${questions.length}</div>
    `;
    appQuestionContainer.classList.remove("invisible");
    restart.classList.remove("invisible");
    nextQuestion.classList.add("invisible");
    validButton.classList.add("invisible");
    congrateElement.classList.add("invisible");
    wrongElement.classList.add("invisible");
    return;
  }
  appQuestionContainer.classList.remove("invisible");
  appQuestionContainer.innerHTML = displayQuestion(questions, next);
  wrongElement.classList.add("invisible");
  congrateElement.classList.add("invisible");
  nextQuestion.classList.add("invisible");
});

//Recommencer le quiz
restart.addEventListener("click", () => {
  restart.classList.add("invisible");
  next = 0;
  goodAnswer = 0;

  appQuestionContainer.innerHTML = displayQuestion(questions, next);
  appQuestionContainer.classList.add("invisible");
  start.classList.remove("invisible");
  nextQuestion.classList.add("invisible");
  validButton.classList.add("invisible");
  congrateElement.classList.add("invisible");
  wrongElement.classList.add("invisible");
});

// Fontion pour afficher les questions
/**
 * @param {Array} questionsTab
 * @param {Number} nextIndex
 * @returns {String} questionValue
 * @description Affiche la question suivante
 */
function displayQuestion(questionsTab, nextIndex) {
  const questionValue = `
    <div class="text-xl font-semibold">${
      questionsTab[nextIndex].question
    } </div>
     <select
        value="selected"
        class="p-2 border border-blue-500 bg-gray-100 shadow-md rounded m-1 text-lg"
      >
        <option value="" disabled selected>Choisir une réponse</option>
        ${questionsTab[nextIndex].choices
          .map(
            (choice) =>
              `<option value="${choice}" class="p-2">${choice}</option>`
          )
          .join("")}
      </select>
      
    `;

  return questionValue;
}

// Fonction pour vérifier la réponse sélectionnée avant de passer à la question suivante
function checkAnswer() {
  const selected = document.querySelector("select").value;
  if (selected) {
    nextQuestion.classList.remove("invisible");
    if (selected === questions[next].answer) {
      goodAnswer++;
      wrongElement.classList.add("invisible");
      congrateElement.classList.remove("invisible");
    } else {
      congrateElement.classList.add("invisible");
      wrongElement.classList.remove("invisible");
    }
  } else {
    alert("Veuillez choisir une réponse");
  }
}
