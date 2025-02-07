function multiply (a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

console.log(+multiply(1)(2)(3));
// but if we add 4th number it fails:
// console.log(+multiply(1)(2)(3)(4));

//vs

const outer = multiply(1);
const middle = outer(2);
const inner = middle(3);
console.log(inner); 