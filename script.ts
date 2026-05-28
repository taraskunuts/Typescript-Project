type Mage = {
  hp: number;
  mp: number;
};

const mage1: Mage = { hp: 100, mp: 50 };
const mage2: Mage = { hp: 100, mp: 50 };

const info1 = document.getElementById("mage1Info")!;
const info2 = document.getElementById("mage2Info")!;
const log = document.getElementById("battleLog")!;

function render() {
  info1.textContent = `Mage1 HP:${mage1.hp} MP:${mage1.mp}`;
  info2.textContent = `Mage2 HP:${mage2.hp} MP:${mage2.mp}`;
}

render();

// ===== Mage 1 actions =====

document.getElementById("p1Attack")!.addEventListener("click", () => {
  mage2.hp -= 10;
  log.innerHTML += "<p>Mage1 атакує Mage2</p>";
  render();
});

document.getElementById("p1Heal")!.addEventListener("click", () => {
  mage1.hp += 10;
  mage1.mp -= 5;
  log.innerHTML += "<p>Mage1 лікується</p>";
  render();
});

// ===== Mage 2 actions =====

document.getElementById("p2Attack")!.addEventListener("click", () => {
  mage1.hp -= 10;
  log.innerHTML += "<p>Mage2 атакує Mage1</p>";
  render();
});

document.getElementById("p2Heal")!.addEventListener("click", () => {
  mage2.hp += 10;
  mage2.mp -= 5;
  log.innerHTML += "<p>Mage2 лікується</p>";
  render();
});

// ===== CLICK BATTLE =====

const leftSide = document.getElementById("leftSide")!;
const rightSide = document.getElementById("rightSide")!;
const battleText = document.getElementById("battleText")!;

let blue = 50;
let red = 50;

let gameOver = false;

document.addEventListener("keydown", (event) => {

  if (gameOver) {
    return;
  }

  if (event.key === "a") {

    blue += 5;
    red -= 5;
  }

  if (event.key === "l") {

    red += 5;
    blue -= 5;
  }

  if (blue < 0) {
    blue = 0;
  }

  if (red < 0) {
    red = 0;
  }

  if (blue > 100) {
    blue = 100;
  }

  if (red > 100) {
    red = 100;
  }

  (leftSide as HTMLElement).style.width = blue + "%";
  (rightSide as HTMLElement).style.width = red + "%";

  if (blue === 100) {

    battleText.textContent = "Синій переміг!";
    gameOver = true;
  }

  if (red === 100) {

    battleText.textContent = "Червоний переміг!";
    gameOver = true;
  }
});

// ===== QUIZ =====

type Question = {
  text: string;
  answer: string;
};

const questionData: Question = {
  text: "Що компілюється в JavaScript?",
  answer: "TypeScript"
};

const question = document.getElementById("question")!;
const quizResult = document.getElementById("quizResult")!;

question.textContent = questionData.text;

const buttons = document.querySelectorAll(".answerBtn");

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    if (button.textContent === questionData.answer) {

      quizResult.textContent = "Правильно!";

    } else {

      quizResult.textContent = "Неправильно!";
    }

  });

});