////////////////////////////////////////////////////////////////////
// 
// Summary
//
// Project:
//   Write a function that takes a string as input, offsets each 
//   charater in the string by 13, and returns the new string.
//   Input: "abc"
//   Output: "nop"
//   Optimization: 
//     Time: O(n), since we are looping through a string.  
//     Auxillary Space: O(n), since we are allocating a new string.
// 
//   Functions:
//     Decoder(str, offset=13):
//       An object contructor function that takes a string of letters 
//       and an offset that has a default value of 13.
//   
//       basecases():
//         A function that checks for basecases.
//
//       adjustOffset():
//         A function that adjusts the offset to not be greater than 
//         26, the length of the alphabet. This will prevent calculation 
//         errors with offset values greater than 26.
//
//       decode():
//         A function that utilizes the ASCII decimal system to calculate 
//         the letters in a string at an offset. 
//
//	     refactoredDecode():
//         A refactores function that utilizes the ASCII decimal system to 
//         calculate the letters in a string at an offset. 
//		
////////////////////////////////////////////////////////////////////


// DECRYPT
function Decoder(str, offset=13){
  this.str = str;
  this.offset = offset;
  this.len = str.length;
};

// BASECASES
Decoder.prototype.basecases = function(){
  if(this.offset < 0){ 											// Throw exception if offset is a negative value.
    throw "Offset must be a nonnegative value"	
  } 
  if(this.str === ""){ return this.str; }						// Return if str is empty.
  if(/[^a-z]/i.test(this.str)){ 								// Throw exception if string contains values other than letters.
    throw "String must only contain letters"	
  } 
  if(this.offset === 0){ return this.str; }						// Return str if offset is 0.
  if(this.offset %26 === 0){ return this.str; }					// Return the string if offset is a multiple of 26.
};

// ADJUST OFFSET
Decoder.prototype.adjustOffset = function(){
  if(this.offset > 26){ return this.offset %= 26; }				// Adjust offset to never be longer than the alphabet.
};	


// DECRYPT BY ASCII DECIMAL
Decoder.prototype.decode = function(){
  this.basecases();												// Check basecases.
  this.adjustOffset();											// Adjust offset to never be longer than 26, the length of the alphabet.

  var letterToAsciiDecimal;										// Retrieved ASCII value of the letter.
  var target;													// ASCII decimal of the letter plus the offset.
  var result = "";												// Result of Decoder.
  var i = 0;

  while(i < this.len){											// Loop through string, retrieve corresponding Ascii decimal, calculate offset letter, return result.
    letterToAsciiDecimal = this.str[i].charCodeAt(0); 			// Convert char to ASCII decimal number.
	target = letterToAsciiDecimal + this.offset;				// Add offset to ASCII decimal number.
	if((letterToAsciiDecimal <= 90 && target > 90) || (target > 122)){	// If ASCII decimal number corresponds to uppercase character and offset is beyond "Z".
	  result += String.fromCharCode(target - 26); 				// Calculate the decimal number of the offset character (target - 90 + 64) and add to the result. 
	}else{														// Else the offset is within the bounds of lowercase or uppercase character. 
	  result += String.fromCharCode(target);					// Calculate the decimal number of the offset character and add to the result.
	}
	i++;
  }	
  return result;												// Return the letters that correspond to the offset.
};

// REFACTORED DECRYPT BY ASCII DECIMAL
Decoder.prototype.refactoredDecode = function(){
  this.basecases();												// Check basecases.

  var letters = this.str;										// Input string of letters.
  var shift = this.offset;										// Input offset.
  var letter;													// One character string of letters.
  var asciiDecimal;												// Retrieved ASCII value of one character in string of letters.
  var decodeedLetter;											// Decodeed letter calculated from ASCII offset.
  var result = "";												// String to return decodeed letters.
  var i = 0;

  while(i < this.len){											// Loop input string of letters.
    asciiDecimal = 65;											// Set default for ASCII letters to lowercase. 
    letter = letters[i];										// Set variable to one character in input string of letters.
    if(letter !== letter.toUpperCase()){						// If the letter is uppercase,
      asciiDecimal = 97;										// Set ASCII letter to uppercase.
    }															// Calculate decodeed letter from ASCII table.
    decodeedLetter = String.fromCharCode(asciiDecimal + (letter.charCodeAt(0) - asciiDecimal + shift)%26);
    result += letter.replace(letter, decodeedLetter);			// Add decodeed letter to result string.
    i++;
  }
  return result;										    	// Return result string of decodeed letters.
};
