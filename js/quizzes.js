let game = document.querySelector(".addtion-game");
let gameXBtn = document.querySelector(".addtion-game .x-btn");
let addGameLink = document.querySelector(".quizzes .add-game > a");
let subGameLink = document.querySelector(".quizzes .sub-game > a");
let timGameLink = document.querySelector(".quizzes .times-game > a");
let divideGameLink = document.querySelector(".quizzes .divide-game > a");

addGameLink.addEventListener("click", () => {
  game.style.top = "0";
  generateNums();
});

subGameLink.addEventListener("click", () => {
  game.style.top = "0";
  generateNumsMinus();
});

timGameLink.addEventListener("click", () => {
  game.style.top = "0";
  generateNumsTimes();
});

divideGameLink.addEventListener("click", () => {
  game.style.top = "0";
  generateNumsDivide();
});

gameXBtn.addEventListener("click", () => {
  game.style.top = "-200%";
});

let numpadNums = document.querySelectorAll(".addtion-game .numpad > span");
let resultTag = document.querySelector(".addtion-game .body .result");

numpadNums.forEach((num) => {
  if (num.classList.contains("number")) {
    num.addEventListener("click", (ev) => {
      if (resultTag.innerHTML.length <= 1) {
        resultTag.innerHTML += ev.target.getAttribute("data-val");
      }
    });
  } else if (num.classList.contains("clear")) {
    num.addEventListener("click", () => {
      resultTag.innerHTML = resultTag.innerHTML.slice(0, -1);
    });
  } else {
    num.addEventListener("click", () => {
      resultTag.classList.remove("correct");
      resultTag.classList.remove("not-correct");
      let num1 = +document.querySelector(".addtion-game .body .num-one")
        .innerHTML;
      let num2 = +document.querySelector(".addtion-game .body .num-two")
        .innerHTML;
      let title = document
        .querySelector(".addtion-game .heading > h3")
        .innerHTML.split(" ")[0]
        .toLowerCase();
      switch (title) {
        case "addtion":
          if (num1 + num2 === parseInt(resultTag.innerHTML)) {
            resultTag.classList.add("correct");
          } else {
            resultTag.classList.add("not-correct");
          }
          setTimeout(() => {
            generateNums();
          }, 2000);
          break;
        case "substract":
          if (num1 - num2 === parseInt(resultTag.innerHTML)) {
            resultTag.classList.add("correct");
          } else {
            resultTag.classList.add("not-correct");
          }
          setTimeout(() => {
            generateNumsMinus();
          }, 2000);
          break;
        case "times":
          if (num1 * num2 === parseInt(resultTag.innerHTML)) {
            resultTag.classList.add("correct");
          } else {
            resultTag.classList.add("not-correct");
          }
          setTimeout(() => {
            generateNumsTimes();
          }, 2000);
          break;
        case "divide":
          if (num1 / num2 === parseInt(resultTag.innerHTML)) {
            resultTag.classList.add("correct");
          } else {
            resultTag.classList.add("not-correct");
          }
          setTimeout(() => {
            generateNumsDivide();
          }, 2000);
          break;
      }
    });
  }
});

function generateNums() {
  let num1 = Math.floor(Math.random() * 9);
  let num2 = Math.floor(Math.random() * 9);
  document.querySelector(".addtion-game .body .num-one").innerHTML = num1;
  document.querySelector(".addtion-game .body .num-two").innerHTML = num2;
  document.querySelector(".addtion-game .body .result").innerHTML = "";
  document.querySelector(".addtion-game .body > i:first-of-type").className =
    "";
  document
    .querySelector(".addtion-game .body > i:first-of-type")
    .classList.add("fa", "fa-plus-circle");
  document.querySelector(".addtion-game .heading > h3").innerHTML =
    "Addtion Quiz";
  resultTag.classList.remove("correct");
  resultTag.classList.remove("not-correct");
}

function generateNumsMinus() {
  let num1 = Math.floor(Math.random() * 11) + 10;
  let num2 = Math.floor(Math.random() * 9);
  document.querySelector(".addtion-game .body .num-one").innerHTML = num1;
  document.querySelector(".addtion-game .body .num-two").innerHTML = num2;
  document.querySelector(".addtion-game .body .result").innerHTML = "";
  document.querySelector(".addtion-game .body > i:first-of-type").className =
    "";
  document
    .querySelector(".addtion-game .body > i:first-of-type")
    .classList.add("fa", "fa-minus-circle");
  document.querySelector(".addtion-game .heading > h3").innerHTML =
    "Substract Quiz";
  resultTag.classList.remove("correct");
  resultTag.classList.remove("not-correct");
}

function generateNumsTimes() {
  let num1 = Math.floor(Math.random() * 9);
  let num2 = Math.floor(Math.random() * 9);
  document.querySelector(".addtion-game .body .num-one").innerHTML = num1;
  document.querySelector(".addtion-game .body .num-two").innerHTML = num2;
  document.querySelector(".addtion-game .body .result").innerHTML = "";
  document.querySelector(".addtion-game .body > i:first-of-type").className =
    "";
  document
    .querySelector(".addtion-game .body > i:first-of-type")
    .classList.add("fa", "fa-times-circle");
  document.querySelector(".addtion-game .heading > h3").innerHTML =
    "Times Quiz";
  resultTag.classList.remove("correct");
  resultTag.classList.remove("not-correct");
}

function generateNumsDivide() {
  let num1 = Math.ceil(Math.random() * 90);
  let res = [];
  for (let i = num1; i > 0; i--) if (num1 % i === 0) res.push(i);
  let num2 = Math.floor(Math.random() * res.length);
  document.querySelector(".addtion-game .body .num-one").innerHTML = num1;
  document.querySelector(".addtion-game .body .num-two").innerHTML = res[num2];
  document.querySelector(".addtion-game .body .result").innerHTML = "";
  document.querySelector(".addtion-game .body > i:first-of-type").className =
    "";
  document
    .querySelector(".addtion-game .body > i:first-of-type")
    .classList.add("fa", "fa-divide");
  document.querySelector(".addtion-game .heading > h3").innerHTML =
    "Divide Quiz";
  resultTag.classList.remove("correct");
  resultTag.classList.remove("not-correct");
}
