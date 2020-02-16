const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text) {
  //   console.log(text);
  const ElLi = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text;
  ElLi.appendChild(span);
  ElLi.appendChild(delBtn);
  ElLi.id = newId;
  toDoList.appendChild(ElLi);

  const toDoObj = {
    text: text,
    id: newId //   if there isn't anything, it starts from 0
  };

  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
// you can't save javaScript DATA on local storage.
// you can only save String
// 자바스크립트는 local storage에 있는 모든 데이터를 String으로 저장하려고 한다.
// => JSON.stringify
// JSON.stringify는 자바스크립트 Object를 String으로 바꿔준다.
// parsing means it understands JSON.stringify
// forEach => array에 담겨있는 것들을 각각 한번 씩 함수를 실행시켜준다.
// 화면에 뿌려줄 때는 JSON.parse,
// 데이터 형태로 저장할 때는 String 형태로. JSON.stringify
