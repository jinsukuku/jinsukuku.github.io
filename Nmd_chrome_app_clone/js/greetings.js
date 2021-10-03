const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hiddenClass";
const USERNAME_KEY = "username";

function paintGreetings(username){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText= `Hello, ${username}`;
}

function onLoginSubmit(event){
    event.preventDefault();

    const username = loginInput.value;
    paintGreetings(username);
    localStorage.setItem(USERNAME_KEY, username);
}

loginButton.addEventListener("click", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername != null){
    paintGreetings(savedUsername);
}
