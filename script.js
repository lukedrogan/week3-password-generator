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

  // Need to validate at least one of the confirms above has returned true and alert the user if not
  if(userWantsUpperCase && userWantsLowerCase & userWantsNumbers & userWantsSpecial === false){
    alert("Please confirm at least one of the selections");
    return;
  }


  var masterCharacterStr = ""; 

  if (userWantsUpperCase === true){
    masterCharacterStr += upperCase; 
  }
  if (userWantsLowerCase === true){
    masterCharacterStr += lowerCase; 
  }
  if (userWantsNumbers === true){
    masterCharacterStr += numbers; 
  }
  if (userWantsSpecial === true){
    masterCharacterStr += special; 
  }

  var finalPassword = "";

  for(var i = 0; i < lengthOfPassword; i++){
    finalPassword += masterCharacterStr[Math.floor(Math.random() * masterCharacterStr.length)]
  }

  return finalPassword; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
