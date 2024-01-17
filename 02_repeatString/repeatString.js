const repeatString = function(message, n)  {
    let base = message;
    for(let i = 1; i < n; i++)
    {
        message += base;
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
