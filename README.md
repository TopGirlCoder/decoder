# Decoder
github.com/topgirlcoder/decoder
## Summary
Decoder is a function that takes a string as input, offsets each charater in the string by n, and returns the new string.
### More about Decoder
Decoder is written in JavaScript, utilizing an object function constructor and prototypes. String manipulation is accomplished utilizing ASCII decimals. Tests have been written utilizing Jasmine.

Input: a string of letters, for example "abc".

Output: a string of letters offset by 13, for example "nop".

####Optimization: 
  
  Time: O(n), since we are looping through a string.  
  
  Auxillary Space: O(n), since we are allocating a new string.

####Constraints:
  
  Input is a string of letters, and decoder key is a nonnegative integer.

  Loop to the beginning of the alphabet if a decoded letter result is beyond 'z' or 'Z'. For example, "xyz" with an offset of 1 would be decoded as "yza".

  Throw an exception with a message if the string contains more than just letters.

  Throw an exception if the offset is a negative number.

####Functions are written in JavaScript:
  
  Decoder(str, offset=13): An object contructor function that takes a string of letters and an offset that has a default value of 13.
  
  basecases(): A function that checks for basecases.

  adjustOffset(): A function that adjusts the offset to not be greater than 26, the length of the alphabet. This will prevent calculation errors with offset values greater than 26.

  decode(): A function that utilizes the ASCII decimal system to calculate the letters in a string at an offset. 

  refactoredDecode(): A refactored function that utilizes the ASCII decimal system to calculate the letters in a string at an offset. 
### Jasmine Tests
Tests have been written in Jasmine to describe the behavior of custom JavaScript functions. The file containing the tests is located in the 'spec/' directory, and the file is named 'decoder-spec.js'.
### Running Jasmine Tests
On the command line navigate to the 'decoder' directory and then run 

'''
$ open SpecRunner.html
'''

This runs the test and then displays the outcome of the test in the browser.   
