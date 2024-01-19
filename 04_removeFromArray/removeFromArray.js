const removeFromArray = function(numbers, ...args) {
    return numbers.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
