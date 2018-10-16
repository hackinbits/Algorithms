# Binary search algorithm using python

#Input: An array of elements - arr, item to be found - item

#Output: Index of the item found in array

# Program:

def binary_search(arr, item):
	low = 0
	high = len(arr) - 1
	while low <= high :
		mid=(low + high) // 2
		selectedNum = arr[mid]
		if selectedNum == item:
			return mid
		if selectedNum > item:
			high = mid - 1
		else:
			low = mid + 1
	return None 

arr = [1,2,3,4,5,6,7,8,9]
print(binary_search(arr, 6));

