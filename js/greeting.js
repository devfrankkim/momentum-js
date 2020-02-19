const form = document.querySelector(".js-form "); // input  - what's your name?
const input = form.querySelector("input"); // input name
const greeting = document.querySelector(".js-greetings"); // painting greeting
const goal = document.querySelector(".goal");

const USER_LOCAL_STROAGE = "currentUser"; // local storage
const SHOWING_CLASSNAME = "showing";

function saveName(text) {
  localStorage.setItem(USER_LOCAL_STROAGE, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CLASSNAME);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(currentValue) {
  form.classList.remove(SHOWING_CLASSNAME);
  greeting.classList.add(SHOWING_CLASSNAME);
  greeting.innerText = ` You are doing great, ${currentValue} 🥰 `;
  goal.innerText = `What's your main focus for today?`;
}

// querySelector => select the first one that he finds.
// querySelectrAll gets all of them.

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STROAGE);

  if (currentUser === null) {
    // when there is no currentUser data on the local storage
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
