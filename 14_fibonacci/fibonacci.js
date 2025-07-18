const fibonacci = function(num) {
    let a = 0
    let b = 1
    let result = 0
    for (let i = 1; i < num; i++) {
        result = a + b
        a = b
        b = result
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
