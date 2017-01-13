# Decoder
github.com/topgirlcoder/decoder
## Summary
Question: Write a function that takes a string as input and offsets each character in the string by 13.
Input: a string of letters, for example "abc"
Output: a string of letters offset by 13, for example "nop"
Optimization: 
  Time: O(n), since we are looping through a string.  
  Auxillary Space: O(n), since we are allocating a new string.
### Jasmine Tests
Tests have been written in Jasmine to describe the behavior of custom JavaScript functions. The file containing the tests is located in the 'spec/' directory, and the file is named 'findOffset-spec.js'.
### Running Jasmine Tests
On the command line navigate to the 'decoder' directory and then run 
'''
$ open SpecRunner.html
'''
This runs the test and then displays the outcome of the test in the browser. 
### About Project: Decrypt
Decrypt is a function that takes a string as input, offsets each 
charater in the string by 13, and returns the new string.
Input: "abc"
Output: "nop"
Optimization: 
  Time: O(n), since we are looping through a string.  
  Auxillary Space: O(n), since we are allocating a new string.

Functions:
  
  FindOffset(str, offset=13):
    An object contructor function that takes a string of letters 
    and an offset that has a default value of 13.
  
    basecases():
      A function that checks for basecases.

    adjustOffset():
      A function that adjusts the offset to not be greater than 
      26, the length of the alphabet. This will prevent calculation 
      errors with offset values greater than 26.

    decrypt():
      A function that utilizes the ASCII decimal system to calculate 
      the letters in a string at an offset. 

	   refactoredDecrypt():
      A refactores function that utilizes the ASCII decimal system to 
      calculate the letters in a string at an offset. 
