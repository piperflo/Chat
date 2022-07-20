import {createHeader} from './header.js';
var jwt;


function signUp(email, password, callback) {
  var credentials = {
    email: email,
    password: password
  }
  return fetch('/signup', {
    method: 'POST', 
    headers: {
      'Content-Type': 'text/json'
    },
    body: JSON.stringify(credentials)
  }).then(res => {
    if(res.status === 200) return res.text();
    else throw "Authorization Failed."
  });
}


function signIn(email, password, callback) {
  var credentials = {
    email: email,
    password: password
  }
  return fetch('/signin', {
    method: 'POST', 
    headers: {
      'Content-Type': 'text/json'
    },
    body: JSON.stringify(credentials)
  }).then(res => {
    if(res.status === 200) return res.text();
    else throw "Authorization Failed."
  });
}

/** @function signInOrUp
 * Function to display the signin or signup form
 * and respond to its actions.
 */
export function signInOrUp() {
  var overlay = document.createElement('div');
  overlay.classList.add('dialog-overlay');
  var dialog = document.createElement('div');
  overlay.appendChild(dialog);
  var header = document.createElement('h4');
  header.textContent = "Sign Up or In";
  dialog.appendChild(header);
  var info = document.createElement('p');
  info.textContent = "You must log in or create an account";
  dialog.appendChild(info);
  var email = document.createElement('input');
  email.type = "email";
  email.placeholder = "enter your email";
  dialog.appendChild(email);
  var password = document.createElement('input');
  password.type = "password";
  password.placeholder = "enter your password";
  dialog.appendChild(password);
  var createButton = document.createElement('button');
  createButton.textContent = "New Account";
  dialog.appendChild(createButton);
  createButton.addEventListener('click', () => {
    signUp(email.value, password.value).then(token => {
      jwt = token;
      document.body.removeChild(overlay);
      createHeader(email.value);
    }).catch(err =>{
      info.textContent = "Unable to create account, does it already exist?";
    });
  });
  var loginButton = document.createElement('button');
  loginButton.textContent = "Sign In";
  dialog.appendChild(loginButton);
  loginButton.addEventListener('click', () => {
    signIn(email.value, password.value).then(token => {
      jwt = token;
      document.body.removeChild(overlay);
      
      //console.log(email.value);
      createHeader(email.value);
    }).catch(err => {
      info.textContent = "Unable to sign in, do you need to create an account?."
    });
  });
  document.body.appendChild(overlay);
}
