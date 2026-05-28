"use strict";
const mage = {
    hp: 100,
    mp: 50
};
const mageInfo = document.getElementById("mageInfo");
const battleLog = document.getElementById("battleLog");
function updateMage() {
    mageInfo.textContent =
        "HP: " + mage.hp + " | MP: " + mage.mp;
}
updateMage();
const attackBtn = document.getElementById("attackBtn");
const healBtn = document.getElementById("healBtn");
const superBtn = document.getElementById("superBtn");
attackBtn.addEventListener("click", () => {
    mage.mp += 5;
    battleLog.innerHTML += "<p>Атака!</p>";
    updateMage();
});
healBtn.addEventListener("click", () => {
    if (mage.mp >= 5) {
        mage.hp += 10;
        mage.mp -= 5;
        if (mage.hp > 100) {
            mage.hp = 100;
        }
        battleLog.innerHTML += "<p>Лікування!</p>";
    }
    else {
        battleLog.innerHTML += "<p>Мало мани!</p>";
    }
    updateMage();
});
superBtn.addEventListener("click", () => {
    if (mage.mp >= 20) {
        mage.mp -= 20;
        battleLog.innerHTML += "<p>Суперудар!</p>";
    }
    else {
        battleLog.innerHTML += "<p>Недостатньо мани!</p>";
    }
    updateMage();
});
// ===== CLICK BATTLE =====
const leftSide = document.getElementById("leftSide");
const rightSide = document.getElementById("rightSide");
const battleText = document.getElementById("battleText");
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
    leftSide.style.width = blue + "%";
    rightSide.style.width = red + "%";
    if (blue === 100) {
        battleText.textContent = "Синій переміг!";
        gameOver = true;
    }
    if (red === 100) {
        battleText.textContent = "Червоний переміг!";
        gameOver = true;
    }
});
const questionData = {
    text: "Що компілюється в JavaScript?",
    answer: "TypeScript"
};
const question = document.getElementById("question");
const quizResult = document.getElementById("quizResult");
question.textContent = questionData.text;
const buttons = document.querySelectorAll(".answerBtn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === questionData.answer) {
            quizResult.textContent = "Правильно!";
        }
        else {
            quizResult.textContent = "Неправильно!";
        }
    });
});
