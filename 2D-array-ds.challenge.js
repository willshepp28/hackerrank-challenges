

let testArr = [
    [1,5,3], // start
    [4,8,7], // end 
     [6,9,1] //  summand
];

let testArr2 = [
    [1,2,100],
    [2,5,100],
    [3,4,100]
];


// creates the new array with based on the given number of indicies
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

 






function manipulateArray(n, queries) {
    let arr = createArray(n);
    let largestNumber = 0;

    for(let i = 0; i < queries.length; i++) {
        
        console.log(i)
        for(let j = 0; j < arr.length; j++) {
            let index = j + 1;
            
            let start = queries[i][0];
            let stop = queries[i][1];
            let sumToAdd = queries[i][2];

            //  if the current index is greater than or equal to  the start, or less than or equal to stop add sum 
            if(index >= start && index <= stop){
                arr.splice(j, 1, arr[j] + sumToAdd)
            }

            // check if the newly added number is now the largest
            if(arr[j] > largestNumber) {
                largestNumber = arr[j];
            }

        }
    
    };

    return largestNumber;
};


manipulateArray(10, testArr);