// ====== DUEL ======

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

mageInfo.innerText = `HP: ${mage.hp} MP: ${mage.mp}`;

document.getElementById("attackBtn")?.addEventListener("click", () => {

  mage.mp += 5;

  mageInfo.innerText = `HP: ${mage.hp} MP: ${mage.mp}`;

  log.innerHTML += "<p>Атака!</p>";
});

document.getElementById("healBtn")?.addEventListener("click", () => {

  mage.hp += 10;

  mageInfo.innerText = `HP: ${mage.hp} MP: ${mage.mp}`;

  log.innerHTML += "<p>Лікування!</p>";
});

document.getElementById("superBtn")?.addEventListener("click", () => {

  if (mage.mp >= 20) {
    mage.mp -= 20;

    log.innerHTML += "<p>Суперудар!</p>";
  }

  mageInfo.innerText = `HP: ${mage.hp} MP: ${mage.mp}`;
});

// ====== CLICK BATTLE ======

const left = document.getElementById("leftSide") as HTMLElement;
const right = document.getElementById("rightSide") as HTMLElement;

let blue = 50;
let red = 50;

document.addEventListener("keydown", (e: KeyboardEvent) => {

  if (e.key === "a") {
    blue += 5;
    red -= 5;
  }

  if (e.key === "l") {
    red += 5;
    blue -= 5;
  }

  left.style.width = blue + "%";
  right.style.width = red + "%";
});

// ====== QUIZ ======

type Question = {
  text: string;
  answer: string;
};

const q: Question = {
  text: "Що краще працює з JavaScript?",
  answer: "TypeScript"
};

const question = document.getElementById("question") as HTMLElement;

question.innerText = q.text;

const buttons = document.querySelectorAll(".answerBtn");

buttons.forEach((btn) => {

  btn.addEventListener("click", () => {

    const result =
      document.getElementById("quizResult") as HTMLElement;

    if (btn.textContent === q.answer) {
      result.innerText = "Правильно!";
    } else {
      result.innerText = "Неправильно!";
    }

  });

});