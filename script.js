var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var minlength = 8;
  var maxlength = 128;
 
  var userchoice1 = parseInt(window.prompt("Enter how long you want your password. 8-128 Characters"));

  if (isNaN(userchoice1) || userchoice1 < minlength || userchoice1 > maxlength ) {
    window.alert("Please input a number between 8-128.");
    return;
  }

  var userchoice2 = window.confirm("Would you like lower case letters?");
  var lowercase = "abcdefghijklmnopqrstuvwxyz";

  var userchoice3 = window.confirm("Would you like upper case letters?");
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var userchoice4 = window.confirm("Would you like to use numbers?");
  var numbers = "0123456789";

  var userchoice5 = window.confirm("Would you like special characters?");
  var characters = "!@#$%^&*()<>";

  var userAnswers = [];

  if (userchoice2 === true) {
    userAnswers.push(lowercase);
  }

  if (userchoice3 === true) {
    userAnswers.push(uppercase);
  }

  if (userchoice4 === true) {
    userAnswers.push(numbers);
  }
  
  if (userchoice5 === true) {
    userAnswers.push(characters);
  }

  var allChars = userAnswers.flat().join('');
  var password = '';

  for (var i = 0; i < userchoice1; i++) {
    var index = Math.floor(Math.random() * allChars.length);
    password += allChars[index];
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

