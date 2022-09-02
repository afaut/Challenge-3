// Assignment Code
var generateBtn = document.querySelector("#generate");

//Special characters for the function created
const specialCharacters = "" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~""; 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompts to select type of password
function generatePassword() {
  var length = prompt("How long do you want your password?")
  var lowercase = confirm("Do you want lowercases?")
  var uppercase = confirm ("Do you want uppercases?")
  var numeric = confirm ("Do you want numbers?")
  var specialCharacters = confirm ("do you want special characters?")
  var minCount = 8
  var maxCount = 128
}