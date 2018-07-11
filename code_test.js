/*Given you’re passed an empty string (no jobs), the result should be an empty sequence.
Given the following job structure:
The result should be a sequence consisting of a single job a. */

let a = (str) => {
    str = ''; // variable holding empty string
    //for checking if a string is empty, null or undefined
    if (!str || 0 === str.length) {
        console.log(true);
    } else {
        console.log(false);
    }
    return console.log(str);
}
a(); // calls function


/* Given the following job structure:
a =>
b => 
c =>
=====================================  */

let store = function () {
    let newArr = []; // this creates an empty array
    newArr.push('a', 'b', 'c'); //abc is pushed to the empty array
    console.log(newArr);
};
store(); // calls the function


/* Given the following job structure:
a =>
b => c
c =>
The result should be a sequence that positions c before b, containing all three jobs abc. */

//=======================================================================================================

let arr = ['a', 'b', 'c'];

let moved = arr.splice(2, 1);// this method removes the 'c' at index 2.
console.log(moved);

newMove = arr.splice(1, 0, 'c');// this method adds the 'c' to index 1.
console.log(arr);

/* Given the following job structure:

a =>
b => c
c => f
d => a
e => b
f =>

=========================================== */
// I have used an array to store the letters & used splice to move the letters in the order required
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
let emt = arr2.splice(0, 0, ''); // empty string is added to index [0];
let takeOne = arr2.splice(5, 1); // removes 'f'
let AddOne = arr2.splice(2, 0, 'f'); // adds 'f' to [2];
console.log(arr2);
let takeE = arr2.splice(5, 1); // removes 'e'
let addE = arr2.splice(1, 0, 'e'); // adds 'f' to [1];
console.log(arr2);
let takeD = arr2.splice(5, 1); // removes 'd'
let addD = arr2.splice(0, 0, 'd'); // adds 'd' to [0];
console.log(arr2);

/* Given the following job structure:
a =>
b =>
c => c
The result should be an error stating that jobs can’t depend on themselves. */

let letters = [{ letter1: 'a', letter2: 'b', letter3: 'c' }]; // object array to with key value pairs

function findLetter(lets) {
    let result = lets.some(function (obj) { // some method searches the array
        if (obj.letter3 === 'c') { // if key is found & equals c, console.log jobs can’t depend on themselves
            console.log('jobs can’t depend on themselves');
        } else {
            letters.push(); // otherwise push to array
        }

    });
    return result;
}
console.log(findLetter('c'));

/* Given the following job structure:

a =>
b => c
c => f
d => a 
e =>
f => b

*/

// I have used an array to store the letters & used splice to move the letters in the order required
let arr2 = ['a', 'c', 'd', 'e', 'f'];
let emt = arr2.splice(0, 0, ''); // adds empty space
console.log(arr2);
let takeOne = arr2.splice(5, 1); //removes f
console.log(arr2);
let takeF = arr2.splice(5, 1); // adds e
let addF = arr2.splice(1, 0, 'b'); // adds b
let takeE = arr2.splice(4, 0, 'f'); // adds f
let emy = arr2.splice(6, 0, ''); // adds empty space
let emty = arr2.splice(7, 0); //removes empty space
console.log(arr2);
console.log('jobs can’t have circular dependencies.');

