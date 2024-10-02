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
  {
    question: "Quelle est le continet le plus grand du monde ?",
    choices: ["Afrique", "Europe", "Asie", "Amerique"],
    answer: "Asie",
  },
  {
    question: "Quel est le plus grand pays du monde ?",
    choices: ["Russie", "Canada", "Chine", "Etats-Unis"],
    answer: "Russie",
  },
  {
    question: "Quelle est sa capitale ?",
    choices: ["Moscou", "Paris", "Berlin", "Londres"],
    answer: "Moscou",
  },
  {
    question: "Quel est le plus petit pays du monde ?",
    choices: ["Monaco", "Vatican", "Malte", "Liechtenstein"],
    answer: "Vatican",
  },
  {
    question: "Quelle est sa superficie ?",
    choices: ["0,44 km²", "0,49 km²", "0,55 km²", "0,61 km²"],
    answer: "0,44 km²",
  },
  {
    question: "Quelle est sa monnaie locale ?",
    choices: ["Euro", "Dollar", "Franc Suisse", "Lire"],
    answer: "Euro",
  },
  {
    question: "Quel est le plus grand océan du monde ?",
    choices: ["Atlantique", "Pacifique", "Indien", "Arctique"],
    answer: "Pacifique",
  },
  {
    question: "Quelle monnaie est la plus échangée dans le monde ?",
    choices: ["Dollar", "Euro", "Yen", "Franc Suisse"],
    answer: "Dollar",
  },
  {
    question: "Quelle est la monnaie la plus utiliser en Afrique ?",
    choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
    answer: "Franc CFA",
  },
  {
    question: "Quelle est la monnaie la plus utiliser en Asie ?",
    choices: ["Euro", "Dollar", "Yen", "Franc Suisse"],
    answer: "Yen",
  },
  {
    question: "Quelle est la monnaie la plus utiliser en Europe ?",
    choices: ["Euro", "Dollar", "Yen", "Franc Suisse"],
    answer: "Euro",
  },
  {
    question: "Quelle est la monnaie la plus utiliser en Amérique ?",
    choices: ["Euro", "Dollar", "Yen", "Franc Suisse"],
    answer: "Dollar",
  },
  {
    question: "Quelle est la monnaie de la côte d'ivoire ?",
    choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
    answer: "Franc CFA",
  },
  {
    question: "Quelle est la monnaie du Togo ?",
    choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
    answer: "Franc CFA",
  },
  {
    question: "Quelle est la monnaie du Maroc ?",
    choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
    answer: "Franc CFA",
  },
  {
    question: "Quelle est la monnaie du Ghana ?",
    choices: ["Euro", "Dollar", "Franc CFA", "Cedi"],
    answer: "Cedi",
  },
  {
    question: "Quelle est la monnaie du Burkina Faso ?",
    choices: ["Euro", "Dollar", "Franc CFA", "Franc Suisse"],
    answer: "Franc CFA",
  },
];

const start = document.getElementById("start");
const appQuestionContainer = document.getElementById("app");
const nextQuestion = document.getElementById("nextQuestion");
let next = 0;

//Démarrage du quiz
start.addEventListener("click", () => {
  appQuestionContainer.classList.remove("invisible");
  start.remove();
  appQuestionContainer.innerHTML = displayQuestion(questions, next);
});

//Passage à la question suivante
nextQuestion.addEventListener("click", () => {
  next++;
  appQuestionContainer.innerHTML = displayQuestion(questions, next);
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
        v-model="selected"
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
  console.log(nextIndex);
  return questionValue;
}
