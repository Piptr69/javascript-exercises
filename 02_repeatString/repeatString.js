const repeatString = function(message, n)  {
    let base = "";
    if(n < 0) return "ERROR";
    
    for(let i = 0; i < n; i++)
    {
        base += message;
    }
    return base;
};

// Do not edit below this line
module.exports = repeatString;
