const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



function deleteTodo(e){
    const li = e.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));    
    saveToDos();
    li.remove();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;

    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    saveToDos();

    paintToDo(newTodoObj);
}


todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos;
}