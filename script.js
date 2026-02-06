const startBtn = document.querySelector(".startBtn");
const startingState = document.querySelector(".initialState");
const nextState = document.querySelector(".mainContainer");
const timeDisplayPara = document.querySelector(".timePara");
const footer = document.querySelector("footer");
const nextButton = document.querySelector(".nextButton>p");
const questionDisplayPara = document.querySelector(".questionDisplayDiv>p");
const questionCounterPara = document.querySelector(".questionCounter>p>span");
const resetButton = document.querySelector(".resetBtn");

const allQuestions = [
  ["Inside which HTML element do we put the JavaScript?"],
  ["Which HTML attribute is used to define inline styles?"],
  [" What does HTML stand for?"],
  ["Which tag is used to define a hyperlink in HTML?"],
  [" Which HTML tag is used to display an image?"],
  ["Where is the correct place to insert JavaScript?"],
  ['How do you write "Hello World" in an alert box in JavaScript?'],
  [" Which operator is used to assign a value in JavaScript?"],
  ["How do you create a function in JavaScript?"],
  ["Which HTML tag is used for the largest heading?"],
  [" How can you add a comment in JavaScript?"],
  [" Which event occurs when the user clicks on an HTML element?"],
  ["How do you declare a JavaScript variable?"],
  ["Which symbol is used for single-line comments in JavaScript?"],
  [" Which HTML tag is used to create a checkbox?"],
  [" How do you write an IF statement in JavaScript?"],
  ["Which method is used to write content into the browser?"],
  ["Which HTML tag is used to create a line break?"],
  ["How do you round the number 7.25 to the nearest integer in JavaScript?"],
  ["Which HTML attribute specifies an alternate text for an image?"],
  ["How do you call a function named myFunction?"],
  ["Which input type is used for passwords?"],
  ["Which JavaScript keyword is used to define a constant?"],
  ["How do you select an element by ID in JavaScript?"],
  [" Which HTML tag is used to create an unordered list?"],
];

let allAnswers = [
  [`<js>, <scripting>, <javascript>, <script>`],
  [`<class>, <font>, <style>, <id>`],
  [
    `"Hyper Text Markup Language","High Text Machine Language","Hyperlinks and Text Markup Language", "Home Tool Markup Language"`,
  ],
  [`<link>, <a>, <href>, <url>`],
  [`<picture>,  <img>, <image>, <src>`],
  [
    `The <head> section, The <body> section, Both <head> and <body>, The <footer> section`,
  ],
  [
    `alertBox("Hello World");, msg("Hello World"); , alert("Hello World"); , console("Hello World");`,
  ],
  [`-, =, ==, ===`],
  [
    `function = myFunction(), function myFunction(), create myFunction(), def myFunction()`,
  ],
  [`<h6>, <h4>, <h2>, <h1>`],
  [`<!-- comment -->, // comment, ** comment **, ## comment`],
  [`onmouseclick, onmouseover, onclick, onchange`],
  [`v myVar; , let myVar; , variable myVar; , int myVar;`],
  [`<!-- , // , ** , ##`],
  [`<input type="checkbox"> , <checkbox> , <input checkbox> , <check>`],
  [`if i == 5 , if (i == 5) , if i = 5 then , if i equals 5`],
  [`window.write() , document.write() , browser.write() , console.write()`],
  [`<br> , <lb> , <break> , <hr>`],
  [`Math.round(7.25) , Math.rnd(7.25) , round(7.25) , Math.near(7.25)`],
  [`title , src , alt , href`],
  [
    `call myFunction() , myFunction() , call function myFunction , run myFunction`,
  ],
  [`text , password , secure , hidden`],
  [`let, var , const , static`],
  [
    `getElement("id") , getElementById("id") , querySelectorAll("id") , getId("id")`,
  ],
  [`<ol> , <ul> , <li> , <list>`],
];

startBtn.addEventListener("click", () => {
  startingState.classList.add("hide");
  nextState.classList.remove("hide");
  footer.classList.remove("hide");
  startTime();
});

nextButton.addEventListener("click", () => {
  clearInterval(time);
  startTime();
  updateQuestion();
  updateAnswers();
});

let time;
let questionTime;
function startTime() {
  clearInterval(time);
  questionTime = 31;
  time = setInterval(() => {
    if (questionTime <= 0) questionTime = 30;
    questionTime--;
    timeDisplayPara.innerText = questionTime;
    timeSaying();
  }, 1000);
}

let questionCounter = 1;
function updateQuestion() {
  if (questionCounter >= 25) questionCounter = 0;
  questionDisplayPara.innerText = allQuestions[questionCounter];
  // updating questionCounter Paragraph
  questionCounterPara.innerText = questionCounter;
  questionCounter++;
}

function updateAnswers() {
  let arr = [];
  String(allAnswers[questionCounter - 1])
    .split(",")
    .forEach((val) => {
      arr.push(val);
    });
  for (let i = 1; i <= 4; i++) {
    let el = document.querySelector(`.answer-${i}`);
    el.innerText = arr[i - 1];
  }
}

function resetBtnFun() {
  localStorage.clear();
  startingState.classList.remove("hide");
  nextState.classList.add("hide");
  footer.classList.add("hide");
}

resetButton.addEventListener("click", () => {
  clearInterval(time);
  questionCounter = 1;
  resetBtnFun();
});

function timeSaying() {
  // time saving
  localStorage.setItem("time", questionTime);
}

startingState.classList.add("hide");
nextState.classList.remove("hide");
footer.classList.remove("hide");
