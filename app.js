// declaring action btn

const form = document.getElementById("form");

// declaring input-fields

const username = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// functioning main function

const validate = () => {
  //  declaring useful variales

  let usernameVal = username.value.trim();
  let emailVal = email.value.trim();
  let numberVal = number.value.trim();
  let passwordVal = password.value.trim();
  let confirmPasswordVal = confirmPassword.value.trim();

  // Error Message

  function errorMsg(input, msg) {
    let inputGroup = input.parentElement;
    let small = inputGroup.querySelector("small");
    inputGroup.className = `input-error input-group`;
    small.innerText = msg;
  }

  // Success Message

  function successMsg(input) {
    let inputGroup = input.parentElement;
    let small = inputGroup.querySelector("small");
    inputGroup.className = "input-success input-group";
    small.innerText = "";
  }

  //  USERNAME

  if (usernameVal === "") {
    errorMsg(username, `Username is empty`);
  } else if (usernameVal.length < 3) {
    errorMsg(username, `At least 3 charactor`);
  } else {
    successMsg(username);
  }

  // EMAIL

  // advanced email function

  let isEmail = (input) => {
    let atsymbol = input.indexOf("@");
    if (atsymbol < 1) return false;
    let dot = input.indexOf(".");
    if (dot === atsymbol + 2) return false;
    if (dot === dot.length - 1) return false;
    return true;
  };

  if (!isEmail(emailVal)) {
    errorMsg(email, `Email is not valid`);
  } else {
    successMsg(email);
  }

  // NUMBER

  if (numberVal === "") {
    errorMsg(number, `Number required`);
  } else if (numberVal.length < 11) {
    errorMsg(number, `Number have at 11 digits`);
  } else {
    successMsg(number);
  }

  // PASSWORD

  if (passwordVal === "") {
    errorMsg(password, `Password required`);
  } else if (passwordVal.length < 6) {
    errorMsg(password, `At least 6 charactors required`);
  } else {
    successMsg(password);
  }

  // CONFIRM PASSWORD

  if (confirmPasswordVal === "") {
    errorMsg(confirmPassword, `Confirm your password`);
  } else if (confirmPasswordVal !== passwordVal) {
    errorMsg(confirmPassword, `Password is not matching`);
  } else {
    successMsg(confirmPassword);
  }
};

// adding eventListener on form

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});
