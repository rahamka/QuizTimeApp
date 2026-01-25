const html = document.querySelector("html");
const initialState = document.querySelector(".initialState");
const startBtn = document.querySelector(".startBtn");
const footer = document.querySelector("footer");
const mainContainer = document.querySelector(".mainContainer");
const resetBtn = document.querySelector(".resetBtn");
const timer = document.querySelector(".timeDiv p>span");

// checking is they hide or not
try {
  const IsMainContainerHide = localStorage
    .getItem("mainContainer_class")
    .split(" ")
    .includes("hide");
  const isFooterHide = localStorage
    .getItem("footer_class")
    .split(" ")
    .includes("hide");

  const isInitializeHide = localStorage
    .getItem("initialState_class")
    .split(" ")
    .includes("hide");

  if (IsMainContainerHide) {
    mainContainer.classList.add("hide");
  } else {
    mainContainer.classList.remove("hide");
  }

  if (isFooterHide) {
    footer.classList.add("hide");
  } else {
    footer.classList.remove("hide");
  }

  if (isInitializeHide) {
    initialState.classList.add("hide");
  } else {
    initialState.classList.remove("hide");
  }
} catch (error) {}

//getting the saving time from the localStorage
let questionInterval;
function QuestionTime() {
  clearInterval(questionInterval); // clearing the first
  let timerText = localStorage.getItem("questionTime") || 30;
  timerText = Number(timerText);
  questionInterval = setInterval(() => {
    if (timerText <= 0) timerText = 30;
    timerText--;
    localStorage.setItem("questionTime", timerText);
    timer.innerText = timerText;
  }, 1000);
}

QuestionTime();

// startBtn event
startBtn.addEventListener("click", (e) => {
  initialState.classList.add("hide");
  footer.classList.remove("hide");
  mainContainer.classList.remove("hide");

  // --- storing classes of elements --- //

  const footer_class = localStorage.setItem("footer_class", footer.classList);
  const initialState_class = localStorage.setItem(
    "initialState_class",
    initialState.classList,
  );
  const mainContainer_class = localStorage.setItem(
    "mainContainer_class",
    mainContainer.classList,
  );

  QuestionTime();
});

// resetBtn

resetBtn.addEventListener("click", (e) => {
  // --- clearing the localStorage --- //
  localStorage.clear();
  initialState.classList.remove("hide");
  mainContainer.classList.add("hide");
  footer.classList.add("hide");
  // --- stopping the time that runs in the background --- //
  clearInterval(questionInterval);
});

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
  [`<class>, <font>, <style>, <style>`],
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

// getting the question display elements from html
let questionDisplayDiv = document.querySelector(".questionDisplayDiv>p");
let questionCounterPara = document.querySelector(".questionCounter>p>span");
let questionCounter = localStorage.getItem("questionCounter") || 0;
questionCounter = Number(questionCounter);

if (questionCounter >= 24) {
  localStorage.setItem("questionCounter", 0);
  questionCounter = 0;
}

//
questionDisplayDiv.innerText = allQuestions[questionCounter];
questionCounterPara.innerText = questionCounter;

let nextBtn = document.querySelector(".nextButton>p");

function questionFun() {
  questionCounter++;
  if (questionCounter >= 24) {
    localStorage.setItem("questionCounter", 0);
    questionCounter = 0;
  }
  localStorage.setItem("questionCounter", questionCounter);
  questionDisplayDiv.innerText = allQuestions[questionCounter];
  questionCounterPara.innerText = questionCounter;
}

function answersFun() {
  let index = 1;
  separatedAnswers[questionCounter].forEach((innerArray) => {
    const el = document.querySelector(`.answer-${index}>p`);
    if (el) {
      el.innerText = innerArray;
    } else {
    }
    index++;
  });
}

// saving the innerText of elements

function savingAnswers() {
  for (let i = 1; i <= 4; i++) {
    const answer = document.querySelector(`.answer-${i} > p`);
    if (answer) {
      localStorage.setItem(`answer-${i}`, answer.innerText);
    }
  }
}

nextBtn.addEventListener("click", () => {
  questionFun();
  answersFun();
  savingAnswers();
  clearInterval(questionInterval);
  localStorage.removeItem("questionTime");
  QuestionTime();
});

resetBtn.addEventListener("click", () => {
  questionCounter = 0;
  localStorage.setItem("questionCounter", 0);
  window.location.reload();
});

// showing the answers in web page

const separatedAnswers = allAnswers.map((val) => {
  return val[0].split(",");
});
