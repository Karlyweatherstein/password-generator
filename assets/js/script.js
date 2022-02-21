// Assignment code here
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!@#$%^&*()",
  numbers: "0123456789"

};


// Ask user how many characters they would like to have
var numOfChar = function () {
  prompt("How many characters would you like to include? Please enter a number between 8 and 128.")
}

numOfChar();



// //ask if they want to include lowercase
var lower = function() {
  var useLower = prompt("Do you want to include lowercase letters? Please type 'YES' or 'NO'.");

//validate answer
  if (useLower === "YES" || useLower === "yes") {
    window.alert("You have chosen YES.");
    // use return to call it again and stop the rest of this function from running
    // return useLower();
  }
  if (useLower === "NO" || useLower === "no") {
    window.alert("You have chosen NO.");
    // use return to call it again and stop the rest of this function from running
    // return useLower();
  }
  if (useLower === "" || useLower === "null") {
    window.alert("Please type a valid answer.");
    // use return to call it again and stop the rest of this function from running
    return useLower();
    
  }


};

lower();


//ask if they want to include UPPERCASE



//ask if they want to include numeric



//ask if they want to include special characters




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* 
-click button then:
-ask how many characters 8-128
-ask for character types - 
    hether or not to include lowercase, uppercase, numeric, special characters
    One option must be selected
-Answer can be written in an alert or on the page */
