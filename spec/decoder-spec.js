////////////////////////////////////////////////////////////////////
// 
// On the command line navigate to the 'decoder' 
// directory and then run. This runs the test and then displays 
// the outcome of the test in the browser.
//
//   $ open SpecRunner.html
//
//////////////////////////////////////////////////////////////////// 

describe("Decoder", function(){
	var decoder1, decoder2, decoder3, decoder4, 
	    decoder7, decoder8, decoder9, decoder10, 
	    decoder11, decoder12, decoder13;

	beforeEach(function(){
		decoder1 = new Decoder("abc");
		decoder2 = new Decoder("abc", 10);
		decoder3 = new Decoder("", 10);
		decoder4 = new Decoder("abc", 0);
		decoder7 = new Decoder("rst", 78);
		decoder8 = new Decoder("abc", -1);
		decoder9 = new Decoder("zabcdefghijklmn", 51);
		decoder10 = new Decoder("adjmblz", 5);
		decoder11 = new Decoder("fWFjjFtnwTodnvHbtsxRjfrZyidGfgdzIgjMjhePnZqpAl");
		decoder12 = new Decoder("aB1C");
		decoder13 = new Decoder("ABC");
	});

	describe("str", function(){
		it("has a string", function(){
			expect(decoder1.str).toEqual("abc");
		});
	});

	describe("offset", function(){
		it("when it does not have a value, has a default value", function(){
			expect(decoder1.offset).toEqual(13);
		});
		it("has a value when input by the user", function(){
			expect(decoder2.offset).toEqual(10);
		});
	});

	describe("basecases", function(){
		it("throws an exception if the string contains nonalpha characters", function(){
			expect(function(){ decoder12.basecases(); }).toThrow("String must only contain letters");
		});			
		it("returns the empty str if the str is empty", function(){
			expect(decoder3.basecases()).toEqual("");
		});		
		it("returns the str if the offset is 0", function(){
			expect(decoder4.basecases()).toEqual("abc");
		});
		it("returns the str if the offset is a multiple of 26", function(){
			expect(decoder7.basecases()).toEqual("rst");
		});
		it("throws an exception if offset is a negative number", function(){
			expect(function(){ decoder8.basecases(); }).toThrow("Offset must be a nonnegative value");
		});
	});

	describe("adjustOffset", function(){
		it("adjusts the offset to 0 when it is a multiple of 26", function(){
			expect(decoder7.adjustOffset()).toEqual(0);
		});
		it("adjusts the offset to be from 0 to 26 when it is greater than 26", function(){
			expect(decoder9.adjustOffset()).toEqual(25);
		});		
	});

	describe("decode", function(){
		it("when given a string of lowercase letters, returns lowercase letters that correspond to the offset", function(){
			expect(decoder1.decode()).toEqual("nop");
		});

		it("when given a string of uppercase letters, returns uppercase letters that correspond to the offset", function(){
			expect(decoder13.decode()).toEqual("NOP");
		});

		it("returns a long string of letters that correspond to the offset", function(){
			expect(decoder9.decode()).toEqual("yzabcdefghijklm");
		});

		it("returns letters from a str of nonconsecutive letters that correspond to the offset", function(){
			expect(decoder10.decode()).toEqual("fiorgqe");
		});

		it("returns letters from a very long str of nonconsecutive uppercase and lowercase letters that correspond to the offset", function(){
			expect(decoder11.decode()).toEqual("sJSwwSgajGbqaiUogfkEwseMlvqTstqmVtwZwurCaMdcNy");
		});
	});	

	describe("refactoredDecode", function(){
		it("when given a string of lowercase letters, returns lowercase letters that correspond to the offset", function(){
			expect(decoder1.refactoredDecode()).toEqual("nop");
		});

	 	it("when given a string of uppercase letters, returns uppercase letters that correspond to the offset", function(){
	 		expect(decoder13.refactoredDecode()).toEqual("NOP");
	 	});

	 	it("returns a long string of letters that correspond to the offset", function(){
	 		expect(decoder9.refactoredDecode()).toEqual("yzabcdefghijklm");
	 	});

	 	it("returns letters from a str of nonconsecutive letters that correspond to the offset", function(){
	 		expect(decoder10.refactoredDecode()).toEqual("fiorgqe");
		});

	 	it("returns letters from a very long str of nonconsecutive uppercase and lowercase letters that correspond to the offset", function(){
	 		expect(decoder11.refactoredDecode()).toEqual("sJSwwSgajGbqaiUogfkEwseMlvqTstqmVtwZwurCaMdcNy");
	 	});
	});	
});