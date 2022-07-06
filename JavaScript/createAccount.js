
let myInput = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let check = false;

let lengthcheck = false;
let capitalcheck = false;
let numbercheck = false;
let lettercheck = false;

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    lettercheck = true;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");

  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    capitalcheck = true;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");

  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    numbercheck = true;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");

  }

  const newLocal = myInput.value.length >= 8;
  // Validate length
  if (newLocal) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    lengthcheck = true;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");

  }
}
function checkboxcheck() {
  check = true;
}


function storeUser() {
  //Build object that we are going to store

  if (myInput.value.length >= 8 && numbercheck == true && capitalcheck == true && lettercheck == true) {
    let usrObject = {};
    usrObject.email = document.getElementById("mailusrid").value;
    usrObject.password = document.getElementById("password").value;
    usrObject.email = document.getElementById("repassword").value;
    usrObject.password = document.getElementById("phone").value;


    if (check == true) {// Check checkbox

      //Store user
      localStorage[usrObject.email] = JSON.stringify(usrObject);
      console.log(localStorage);
      console.log(usrObject.email);
      //Inform user of result
      document.getElementById("Result").innerHTML = "<b>Registration successful.</b>";
      document.getElementById("Result").style.display = "block";
     // location.replace("PlayGame.php")
    }
    else {
      document.getElementById("Result").innerHTML = "<b>Please Accept User Agreement.</b>";
      document.getElementById("Result").style.display = "block";
      setTimeout(function () {
        document.getElementById("Result").style.display = "none";
      }, 1000);
    }


  }
  else {
    document.getElementById("Result").innerHTML = "<b>Invalid Input.</b>";
    document.getElementById("Result").style.display = "block";
    setTimeout(function () {
      document.getElementById("Result").style.display = "none";
    }, 1000);

    console.log(check + "number")
  }
}
