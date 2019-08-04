## One to Multi

Build a function that sorts an array into a multidimensional array grouped by data type

- Write a function that takes one parameter 
	- Parameter 1 - An array of anything
- The function should output a multidimensional array grouped by data type
- Example: 
	- `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
	- `groupArray(myArray);`
	- Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`

1. write a function that takes 1 list parameter
2. check list for each value
3. if value is equal to a boolean, add to a list
4. if value is equal to a string , add to a second list
5. if value is equal to a number, add to a third list
6. combine these three lists
7. return a single list.

switch 