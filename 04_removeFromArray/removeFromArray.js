const removeFromArray = function(numbers, index) {
    let newArray;
    for(let i = 0; i < index; i++)
    {
        newArray[i] = numbers[i];
    }
    let newArray2;
    let arrayLength = numbers.length;
    for(let i = numbers.length; i > index; i++)
    {
        newArray2[i] = numbers[i];
    }
    return newArray.concat(newArray2);
};

// Do not edit below this line
module.exports = removeFromArray;
