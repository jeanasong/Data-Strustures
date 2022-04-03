/* Sorting with Custom Comparator Functions

The Array Sort Method
There are many algorithms to sort arrays, including bubble sort, merge sort, and quicksort. The JavaScript array object type actually has a .sort() method that will sort the array it’s called on in place and return the sorted version.

Code Challenge
Run the code below to see how the internal .sort() method works. */

const array1 = [10, 43, 5, 0, 4, 3, 2, 1, 11];
console.log(array1.sort());

const array2 = ['f', 'e', 'd', 'a', 'h', 'b', 'actual', 'aardvark'];
console.log(array2.sort());

/* As you can see, the internal .sort() method does return an altered array that is more sorted than before, but it’s not what we would expect to see. 
The numbers are ordered by the first digit, so while 1 comes before 2 (as expected), 10 also comes before 2 since its first digit is a 1. 
The same pattern can be seen in the sorting of the strings, where it’s sorted according to the first character. 
This is because .sort()‘s default comparator converts the values in the array to strings and then compares them lexically.

But what if we want to sort the array another way? 
Yes, it’s possible to use one of the sorting algorithms listed above, but the .sort() method will actually allow us to tell it how we want it to compare the elements in the array. */