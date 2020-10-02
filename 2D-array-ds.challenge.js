/**
    
    1.Starting with a 1-indexed array of zeros and a list of operations
    2. for each operation add a value to each of the array element between two given indices
    3. Once all operations have been performed, return the maximum value in the array.

    Function Description

        Complete the function arrayManipulation in the editor below.

        arrayManipulation has the following parameters:

        int n - the number of elements in the array
        int queries[q][3] - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.
         
        Returns
            int - the maximum value in the resultant array
            Input Format

            The first line contains two space-separated integers  and , the size of the array and the number of operations.
            Each of the next  lines contains three space-separated integers ,  and , the left index, right index and summand.
 */




let testArr = [
    [1,5,3], // start
    [4,8,7], // end 
     [6,9,1] //  summand
];

   /**
    * 
        1. create new array with the number of indices provided by user
        2. use the lenght of the multidimensial array for loop iterations
        3. Add numbers to the indices in the new array up to the index of the highest index

        a [0]
        b [1]
        k [2]
    */
  





function arrayManipulation(n, queries) {

    let newArr = createArray(n); // This creates the array with the number of indices
    let largestNumber = 0;


    for (let i = 0; i < queries.length; i++) {
     

        let startingPosition = queries[i][0] - 1; // start here
        let stoppingPosition = queries[i][1] - 1; // end here
        let summand = queries[i][2]; // add this

        for(let j = 0; j <= newArr.length; j++) {
            let index = j;
   
           if(index >= startingPosition && index <= stoppingPosition){
               newArr.splice(j, 1, newArr[j] + summand)
               if(newArr[j] > largestNumber) {
                   largestNumber = newArr[j]
               }
           }     
        }
        
        return largestNumber;
    }

};





function createArray(numberOfIndices){

    if(!numberOfIndices) {
        console.log("please enter a value");
        return;
    }

    if(typeof numberOfIndices !== "number") {
        console.log("Please enter a number");
        return;
    }

    let arr = [];

    for(let i = 0; i < numberOfIndices; i++) {
        arr.push(0)
    }

    return arr;

};




arrayManipulation(10, testArr);










