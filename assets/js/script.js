// Assignment code here


function generatePassword(){

  var allChar = []
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var number = ['1','2','3','4','5','6','7','8','9','0'];
  var special = ['!','@','#','$','%','^','&','*','?'];
  


  var passwordLength = prompt("How many characters would you like to include? Please enter a number between 8 and 128.")
    console.log(passwordLength)

  // //ask if they want to include lowercase
  var useLower = confirm("Do you want to include lowercase letters?");
    console.log(useLower)

  //ask if they want to include UPPERCASE
  var useUpper = confirm("Do you want to include uppercase letters?");
    console.log(useUpper)

  //ask if they want to include numbers
  var useNumber = confirm("Do you want to include numbers?");
    console.log(useNumber)


    
  //ask if they want to include special characters
  var useSpecial = confirm("Do you want to include special characters?");
  console.log(useSpecial)

  if (useLower) {
    allChar.push(lower)
  }

  if (useUpper) {
    allChar.push(upper)
  }

  if (useNumber) {
    allChar.push(number)
  }

  if (useSpecial) {
    allChar.push(special)
  }



  console.log(allChar)
  
  var password = [];

    for (var i = 0; i < passwordLength; i++) {
      allChar.forEach(type =>  {
        
      })
      if (i < allChar.length) {
        console.log(allChar)
        console.log(i)
        var randomIndex = Math.floor(Math.random() * allChar[i].length);
        var randomChar = allChar[i][randomIndex] 
        password += randomChar
      }
      
      else {
        var randomIndex = Math.floor(Math.random() * allChar.length);
        var randomCharIndex = Math.floor(Math.random() * allChar[randomIndex])
        randomChar = allChar[randomIndex][randomCharIndex]
        password += randomChar
        console.log(randomIndex)
        
      }
      
    }
    console.log(password);

  
  return password
  
}



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



