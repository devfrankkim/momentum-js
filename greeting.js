const form = document.querySelector(".js-form ");
const input = form.querySelector("input"); // input name
const greeting = document.querySelector(".js-greetings");
const USER_LOCAL_STROAGE = "currentUser";
const SHOWING_CLASSNAME = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CLASSNAME);
  greeting.classList.add(SHOWING_CLASSNAME);
  greeting.innerText = `Hello ${text}`;
}

// querySelector => select the first one that he finds.
// querySelectrAll gets all of them.

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STROAGE);
  if (currentUser === null) {
    // when there is no currentUser data on the local storage
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
