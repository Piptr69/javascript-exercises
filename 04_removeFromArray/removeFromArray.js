const removeFromArray = function(numbers, index) {
    let newArray = [];
    for(let i = 0; i < index - 1; i++)
    {
        newArray[i] = numbers[i];
    }
    let newArray2 = [];
    let arrayLength = numbers.length;
    for(let i = index; i < arrayLength + 1; i++)
    {
        newArray2[i] = numbers[i];
    }
    return newArray.concat(newArray2);
};

// Do not edit below this line
module.exports = removeFromArray;
