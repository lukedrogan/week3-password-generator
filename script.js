// Assignment Code
var generateButton = document.querySelector("#generate");

// Createe variable for each of the types of character that could be used in the password

function generatePassword(){
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var specialChar = "!@£$%^&*()";

// Prompt the user to ask a series of questions to set up the password generator

  var lengthOfPassword = parseInt(prompt("How long would you like the password to be?"));

  if (isNaN(lengthOfPassword) === true){
    alert("Please enter a valid number");
    return;
  }

  if (lengthOfPassword < 8){
    alert("Your password must be at least 8 characters long");
    return;
  }

  if (lengthOfPassword > 128){
    alert("Your password must be 128 characters or less");
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
    masterCharacterStr += specialChar; 
  }

  var finalPassword = "";

  // Create a for loop to randomly select characters from the four variables assigned to generatePassword function

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
generateButton.addEventListener("click", writePassword);

