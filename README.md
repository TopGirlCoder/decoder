#Decoder
github.com/topgirlcoder/decoder
##Summary
Decoder is a function that takes a string as input, offsets each character in the string by n, and returns the new string.
##More about Decoder
Decoder is written in JavaScript, utilizing an object function constructor and prototypes. String manipulation is accomplished utilizing ASCII decimals. Tests have been written utilizing Jasmine.

Input: a string of letters, for example "abc".

Output: a string of letters offset by n. If the default for n is 13, then the output for example would be "nop".

###Optimization: 
  
  Time: O(n), since we are looping through a string.  
  
  Auxillary Space: O(n), since we are allocating a new string.

###Constraints:
  
  Input is a string of letters, and offset is a nonnegative integer.

  Loop to the beginning of the alphabet if a decoded letter result is beyond 'z' or 'Z'. For example, "xyz" with an offset of 1 would be decoded as "yza".

  Throw an exception with a message if the string contains more than just letters. 

  Throw an exception if the offset is a negative number.

###Functions are written in JavaScript:
  
  **Decoder(str, offset=13):** An object contructor function that takes a string of letters and an offset that has a default value of 13.
  
  **basecases():** A function that checks for basecases.

  **adjustOffset():** A function that adjusts the offset to not be greater than 26, the length of the alphabet. This will prevent calculation errors with offset values greater than 26.

  **decode():** A function that utilizes the ASCII decimal system to calculate the letters in a string at an offset. Calls basecases() to check for basecases, and calls adjustOffset() to adjust the offset if it is greater than 26. Returns the calculated letters at the offset.

  **refactoredDecode():** A refactored function that utilizes the ASCII decimal system to calculate the letters in a string at an offset. Like decode() except does not need to call adjustOffset(). Returns the calculated letters at the offset.
  
### Jasmine Tests
Tests have been written in Jasmine to describe the behavior of custom JavaScript functions. The file containing the tests is located in the 'spec/' directory, and the file is named 'decoder-spec.js'.
### Running Jasmine Tests
On the command line navigate to the 'decoder' directory and then run 

```
$ open SpecRunner.html
```

This runs the test and then displays the outcome of the test in the browser.   

### Running the Code without Jasmine Tests
First open the decoder.js file. At the bottom add code to call the function, such as

```
decoder = new Decoder("a,b,c", 3);
decoder.decode(); 
decoder.recactoredDecode();
```

On the command line navigate to the decoder.js file and then run

```
$ ruby decoder.js
```
 
