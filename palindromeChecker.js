//  A program that determines an input's status as a palindrome.  Returns true
//  for palindromes and false otherwise.  

//  Directions:
//  1.) Copy/paste code into console
//  2.) Set input equal to a potential palindrome
//  	e.g.  input = "Race car";
//  3.) Call the palindromeChecker function with "input" as an argument
//  	e.g.  palindromeChecker(input);

var input = "";													//  e.g. input = "Race car";
var palindromeChecker = function(string) {
	var lowCaseString = string.toLowerCase();					//  e.g. lowCaseString = "race car";
	var arrayOfString = lowCaseString.split(" ");				//  e.g. arrayOfString = ["race", "car"];
	var stringNoSpaces = arrayOfString.join("");				//  e.g. stringNoSpaces = "racecar"; 
	function stringReverser(s) {
		var o = "";
		for( var i = s.length - 1; i >= 0; i-- ) {
			o += s[i];
		}
		return o;
	}
	if(stringNoSpaces === stringReverser(stringNoSpaces)) {		//  e.g. ("racecar" === "racecar");
		return true;
	} else {
		return false;
	}
}
input = "Race car";
palindromeChecker(input);