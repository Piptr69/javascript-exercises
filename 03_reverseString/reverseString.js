const reverseString = function(message) {
    message = message.split("");
    message = message.reverse();
    message = message.join("");
    return message;
};

// Do not edit below this line
module.exports = reverseString;
