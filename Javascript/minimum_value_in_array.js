// Input: An array with number values.
// Output: Minimum of all the number present in the array.

// Input: [9, 5, 4, 2, 1, 6, 7]
// Output : 1

//Program

const arr = [9, 5, 4, 2, 1, 6, 7];

//initializing min to first element of the array.
let min = arr[0];

//comparing the next value with min in the array,
//if min is greater than the compared value,
// set min to the compared value(i.e. next value in array).
for(let i = 0; i < arr.length; i++)
{
	if(min > arr[i+1]){
		min = arr[i+1];
	}
}

console.log(min);


