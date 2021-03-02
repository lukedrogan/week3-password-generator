// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = "!@£$%^&*()";

  var lengthOfPassword = parseInt(prompt("How long would you like the password to be?"));

  if (isNaN(lengthOfPassword) === true){
    alert("Please enter a valid number");
    return;
  }

  if (lengthOfPassword < 8){
    alert("Please enter a number greater than 8");
    return;
  }

  if (lengthOfPassword> 128){
    alert("Please enter a number less than 128");
    return;
  }

  var userWantsUpperCase = confirm("Do you want upper case letters in your password?")
  var userWantsLowerCase = confirm("Do you want lower case letters in your password?")
  var userWantsNumbers = confirm("Do you want numbers in your password?")
  var userWantsSpecial = confirm("Do you want special characters in your password?")



  return "new password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
