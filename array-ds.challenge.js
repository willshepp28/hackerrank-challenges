/*

    An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  or .

    Reverse an array of integers.

    Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

    Example

    Return .

    Function Description

    Complete the function reverseArray in the editor below.

    reverseArray has the following parameter(s):

    int A[n]: the array to reverse
    Returns

    int[n]: the reversed array

*/


let testArray1 = [1,2,3];
let testArray2 = [6,7,8];




// Write a function that reverse array with unshift
// Note: unshift has a time complexity of 0(n)
function reverseArrayUsingUnshift(a) {
    let newArr = [];

    for(let i = 0; i < a.length; i++) {
        newArr.unshift(a[i]);
    }

    return newArr;
}




/* 

Write a function that reverses array with pop method
    Note: Array.pop() has a time complexity of 0(1)

    1. Initialize a new array
    2. Iterate over that passed in array, starting from that last index of that array
    3. Push every item in the passed in array, started from the last index into the new array
    4. Return the new array
 
 */
function reverseArrayUsingPop(a){
    let newArr = [];
    
    for(let i = 0; i < a.length; i++) {
        newArr.push(a[a.length - i - 1]);
    }

    return newArr;
};


reverseArrayUsingUnshift(testArray1);
reverseArrayUsingPop(testArray2);
