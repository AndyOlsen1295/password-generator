// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var minlength = 8

  var maxlength = 128
 
  var userchoice1 = window.prompt("Enter how long you want your password. 8-128 Characters")

  if (userchoice1 < minlength || userchoice1 > maxlength ) {
    window.alert("please input a number between 8-128")
    return
  };

  var userchoice2 = window.confirm("Would you like lower case letters?")
  var lowercase = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]

  var userchoice3 = window.confirm("Would you like upper case letters?")
  var uppercase = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"]

  var userchoice4 = window.confirm("Would you like to use numbers?")
  var numbers = ["1, 2, 3, 4, 5, 6, 7, 8, 9, 0"]

  var userchoice5 = window.confirm("Would you like special characters?")
  var characters = ["!, @, #, $, %, ^, &, *, (, ), <, >"]

  var userAnswers =[]

  if (userchoice2 === true) {
    userAnswers.push(lowercase)
  };

  if (userchoice3 === true) {
    userAnswers.push(uppercase)
  };

  if (userchoice4 === true) {
    userAnswers.push(numbers)
  };
  
  if (userchoice5 === true) {
    userAnswers.push(characters)
  };

};

function writePassword() {
  writePassword.push(userAnswers)
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




