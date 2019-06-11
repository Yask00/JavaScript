// GOAL:
// addSubtract(1)(2)(3);          // 1 + 2 - 3             = 0
// addSubtract(1)(2)(3)(4)(5)(6); // 1 + 2 - 3 + 4 - 5 + 6 = 5

// NOT WORKING
// function addSubtract(x) {
//     let sign = 1;

//     function f (y) {
//         x += y * sign;
//         sign *= -1;
//     };

//     return f;
// }

// console.log(+addSubtract(2)(1)(1)(5)(3)(2));


// WORKING

function realAddSubtract (x) {
    let sign = 1;

    const f = (y) => {
        x += y * sign;
        sign *= -1;
        return f;
    }

    f.valueOf = () => x;
    return f;
}

console.log(+realAddSubtract(2)(1)(1)(5)(3)(2));