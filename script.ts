export {};

// ===== DUEL =====

type Mage = {
  hp: number;
  mp: number;
};

const mage: Mage = {
  hp: 100,
  mp: 50
};

const mageInfo = document.getElementById("mageInfo") as HTMLElement;
const log = document.getElementById("battleLog") as HTMLElement;

function updateMage() {
  mageInfo.innerText = `HP: ${mage.hp} | MP: ${mage.mp}`;
}

updateMage();

document.getElementById("attackBtn")?.addEventListener("click", () => {

  mage.mp += 5;

  log.innerHTML += "<p>Атака!</p>";

  updateMage();
});

document.getElementById("healBtn")?.addEventListener("click", () => {

  if (mage.mp >= 5) {
    mage.hp += 10;
    mage.mp -= 5;

    if (mage.hp > 100) {
      mage.hp = 100;
    }

    log.innerHTML += "<p>Лікування!</p>";
  } else {
    log.innerHTML += "<p>Мало мани!</p>";
  }

  updateMage();
});

document.getElementById("superBtn")?.addEventListener("click", () => {

  if (mage.mp >= 20) {
    mage.mp -= 20;

    log.innerHTML += "<p>СУПЕРУДАР!</p>";
  } else {
    log.innerHTML += "<p>Недостатньо мани!</p>";
  }

  updateMage();
});

// ===== CLICK BATTLE =====

const left = document.getElementById("leftSide") as HTMLElement;
const right = document.getElementById("rightSide") as HTMLElement;
const battleText = document.getElementById("battleText") as HTMLElement;

let blue = 50;
let red = 50;

let gameOver = false;

document.addEventListener("keydown", (e: KeyboardEvent) => {

  if (gameOver) {
    return;
  }

  if (e.key === "a") {
    blue += 5;
    red -= 5;
  }

  if (e.key === "l") {
    red += 5;
    blue -= 5;
  }

  // ОБМЕЖЕННЯ

  if (blue < 0) blue = 0;
  if (red < 0) red = 0;

  if (blue > 100) blue = 100;
  if (red > 100) red = 100;

  left.style.width = blue + "%";
  right.style.width = red + "%";

  if (blue === 100) {
    battleText.innerText = "Синій переміг!";
    gameOver = true;
  }

  if (red === 100) {
    battleText.innerText = "Червоний переміг!";
    gameOver = true;
  }
});

// ===== QUIZ =====

type Question = {
  text: string;
  answer: string;
};

const q: Question = {
  text: "Що компілюється в JavaScript?",
  answer: "TypeScript"
};

const question = document.getElementById("question") as HTMLElement;
const result = document.getElementById("quizResult") as HTMLElement;

question.innerText = q.text;

const buttons = document.querySelectorAll(".answerBtn");

buttons.forEach((btn) => {

  btn.addEventListener("click", () => {

    if (btn.textContent === q.answer) {
      result.innerText = "Правильно!";
    } else {
      result.innerText = "Неправильно!";
    }

  });

});