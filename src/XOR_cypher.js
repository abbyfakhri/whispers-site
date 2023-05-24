function xorCipher(message, key) {
  var encryptedMessage = '';
  
  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);

    var keyChar = key.charCodeAt(i % key.length);
    
    var encryptedChar = charCode ^ keyChar;
    encryptedMessage += String.fromCharCode(encryptedChar);
  }
  
  return encryptedMessage;
}

function xorDecipher(encryptedMessage, key) {
  var decryptedMessage = '';
  
  for (var i = 0; i < encryptedMessage.length; i++) {
    var charCode = encryptedMessage.charCodeAt(i);
    var keyChar = key.charCodeAt(i % key.length);
    
    var decryptedChar = charCode ^ keyChar;
    decryptedMessage += String.fromCharCode(decryptedChar);
  }
  
  return decryptedMessage;
}

function stringToBinary(string) {
  var binary = '';

  for (var i = 0; i < string.length; i++) {
    var charCode = string.charCodeAt(i);
    var binaryChar = charCode.toString(2).padStart(8, '0'); // Convert decimal to 8-bit binary string
    binary += binaryChar + ' ';
  }

  return binary.trim(); // Remove trailing space
}

function binaryToString(binary) {
  var string = '';
  var binaryChunks = binary.split(' ');

  for (var i = 0; i < binaryChunks.length; i++) {
    var decimal = parseInt(binaryChunks[i], 2); // Convert binary chunk to decimal
    string += String.fromCharCode(decimal); // Convert decimal to character
  }

  return string;
}

// Example usage
/* var message = "bebi aku kiyowo banget";
var key = "mwa";

var encrypted = xorCipher(message, key);
console.log("Encrypted message:",  encrypted);

let data = stringToBinary(encrypted)

var decrypted = xorCipher(binaryToString(data), key);
console.log("Decrypted message:", decrypted); */



