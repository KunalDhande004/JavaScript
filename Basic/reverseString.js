// ---------------------- String Reverse With Different Methods -----------------------------

let st = 'Kunal';

// ------------------- 1. Using a for loop (manual index-based reversal) ---------------------

// This method builds the reversed string manually by iterating from the end to the start.
const reverseString = (str) => {
    let reverseStr = '';
    for (let index = str.length - 1; index >= 0; index--) {
        reverseStr += str[index];
    }
    return reverseStr;
};
console.log('For loop:', reverseString(st));

// ------------------- 2. Using reduce to accumulate reversed string -------------------------

// Reduces the array by prepending each character to the accumulator.
const strReducer = (acum, nxtVal) => nxtVal + acum;
const reverseStrWithReduce = (str) => [...str].reduce(strReducer);
console.log('Reducer:', reverseStrWithReduce(st));

// ------------------- 3. Using split + reverse + join ---------------------------------------

// Converts string into array using split(''), reverses it, then joins back to string.
const reverseStrWithArrowFun = str => str.split('').reverse().join('');
console.log('Split + reverse:', reverseStrWithArrowFun(st));

// ------------------- 4. Using spread operator + reverse + join -----------------------------

// Converts string into array using spread [...str], reverses it, then joins back to string.
const reverseStringWithArrowFun = str => [...str].reverse().join('');
console.log('Spread + reverse:', reverseStringWithArrowFun(st));
