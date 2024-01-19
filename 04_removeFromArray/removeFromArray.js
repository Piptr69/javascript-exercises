const removeFromArray = function(numbers, index) {
    let newArray = [];
    for (let i = 0, n = numbers.length; i < n; i++)
    {
        if (i != index - 1)
        {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
