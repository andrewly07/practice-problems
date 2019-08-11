## Igpay Atinlay

Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of a word and then affix "ay" to the end of that word."

- Write a function that takes one parameter
	- Parameter 1 - A string
- The function should output your input string translated into Pig Latin
	- Example: 
		- `var myString = "Hello my name is Stu"`
		- `translate(myString);
		- Output - `"ellohay ymay ameya siay tusay"`

#### Making it better!

- There are several more rules to Pig Latin, try incorporating as many as you can into your function.
	- There are different rules for words that start with vowel sounds or silent letters for example.
	- <a href="http://en.wikipedia.org/wiki/Pig_Latin">Here</a> is a link to an explanation of all the rules.
- Also try maintaining capitalization of words that are capitalized in your input string.
	- Example: 
		- `"Hello there"` would be `"Ellohay heretay"`


1. Make an empty string to hold your Pig Latin word.
2. Assign your appropriate regular expression to a variable.
3. If the first character is a vowel, just add way to end of string and return it.
4. If the first character is not a vowel:
		Find number of consonants before first vowel with help of indexOf(), match() and regex.
		Start Pig Latin string with first vowel till the end.
		Add letters before first vowel to end of string.
		substr() is used for string manipulation here.
		Add 'ay' to end of string and return it.
