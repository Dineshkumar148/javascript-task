
// 1. Random color code genarator

function RandomColorCode() {
    let color_value = "0123456789ABCDEF";
    let start_value = '#';
    for (let i = 0; i < 6; i++) {
        start_value += color_value [Math.floor(Math.random() * color_value.length)];
    }
    return start_value ;
}

var randomColor1 = RandomColorCode();
console.log(randomColor1);

var randomColor2 = RandomColorCode();
console.log(randomColor2);


// Remove Duplicate value from Array


let Duplicate_value = [1, 2, 3, 4, 5, 2, 2, 3];
 
function removeDuplicates(Duplicate_value) {
    let newarray = [];
    for (i = 0; i < Duplicate_value.length; i++) {
        if (newarray.indexOf(Duplicate_value[i]) === -1) {
            newarray.push(Duplicate_value[i]);
        }
    }
    return newarray;
};


console.log(removeDuplicates(Duplicate_value));


// count occurences

const array = [1, 2, 3, 4, 5, 2, 2, 3];

function countOccurrences(arr) {
    return arr.reduce(function (occurences, currentvalue) {
        occurences[currentvalue] = (occurences[currentvalue] || 0) + 1;
        return occurences;
    }, {});
}


const count = countOccurrences(array);

console.log(count);



// flatten array using given nsted array.

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flattenedArray = nestedArray.toString().split(',').map(Number);

console.log(flattenedArray);

