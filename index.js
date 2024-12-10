const compose = function(functions) {
    if(functions.length === 0) {
        return x => x;  // Return identity function if no functions are provided
    } else {
        return function(x) {
            return functions.reduceRight((acc, fn) => fn(acc), x);  // Pass x as the initial value
        };
    }
};

let functions = [x => x + 1, x => x * x, x => 2 * x];
let fn = compose(functions);
console.log(fn(8));  