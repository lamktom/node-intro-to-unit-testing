// Inside this file, write unit tests for the fizzBuzzer function found in
// fizzBuzzer.js. Be sure to test the normal case on a range of representative 
//inputs, and test for at least one edge case (for instance, non-numeric inputs).

// import chai, declare expect variable 
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our 'fizzBuzzer' function 
describe('fizzBuzzer', function() {
	// range of normal inputs, uncluding notable cases like non-numeric inputs
	it('should return "fizz-buzz" for multiples of 15', function() {
    [15, 30, 45].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

	it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });

	it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });

	it('should return the number if not a multiple of either 3 or 5', function() {
		[1, 2, 4, 7].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal(input); 
		});
	});

	it('should say error if input is not a number', function() {
    const badInputs = [true, false, 'dog', function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
    });
  });

}); 