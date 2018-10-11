// Input: An array with number values.
// Output: Maximum of all the number present in the array.

// Input: [9, 5, 4, 2, 1, 6, 7]
// Output : 9

//Program

const arr = [9, 5, 4, 2, 1, 6, 7];

//initializing max to first element of the array.
let max = arr[0];

//comparing the next value with max in the array,
//if max is smaller than the compared value,
// set max to the compared value(i.e. next value in array).
for(let i = 0; i < arr.length; i++)
{
	if(max < arr[i+1]){
		max = arr[i+1];
	}
}

console.log(max);
