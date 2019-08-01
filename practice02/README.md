## Total Reverse 

Build a function that takes in an array and reverses it

- Write a function that takes one parameter
	- Parameter 1 - An array of anything
- The function should output an array that is in reverse order from the input array
- Example: 
	- `var myArray = ['hello', 45, 'Bob', 'what', '23'];`
	- `arrayReverse(myArray);`
	- Output - `['23', 'what', 'Bob', 45, 'hello']`
- Avoid using pre-built functions that do something similar

1. define a function with 1 parameter
2. the parameter should take an array
3. the array should loop to the end of the list
4. at the end of the list it should take off the last element
5. take that element and put it into a new array
6. return that new array 