// const solution = (A) => {
//     var min = 1;
//     A.sort((a,b) => {
//         return a - b; 
//     });

//     for (var i in A) {
//         if (A[i] > -1 && A[i] == min) {
//                 min++;
//         }
//     }

//     return min;
// }

function solution(A) {
    const len = A.length;
    const hash = {};
    for (let i = 0; i < len; i++) {
        // here we are making an object with all 
        // numbers in a given array as object keys and values
        // if 0 is given as possible digit we could assing 
        // hash[A[i]] = true; or any truthy value
        hash[A[i]] = A[i];
    }
    for (let i = 1; i < 1000002; i++) {
        // here we are trying to find any number 
        // between 1 and 1000001 (given constraints) 
        // which do not exists in an object
        // if the number is not in the object that's our missing one
        if(!hash[i]) return i;
    }
    return 1;
}

array = [4,6,2,7,3,1,1,3]
console.log(solution(array))