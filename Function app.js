
const makeNoise = function() {
    console.log("pling");
}

makeNoise();
const power = function(base, expriment) {
    let result = 1;
    for (let count = 0; count< expriment; count++) {
        result *= base;
    }
    return result;
};
console.log(power (2,10));