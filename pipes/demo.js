// We're going to create our own pipe function!

// Some basic functions for easily understand the pipe function.
// We'll combine those three function and send the value 4 to it.
// Getting result of - 'The numner is: 10'
const add1 = x => x + 1;
const mul2 = x => x * 2;
const title = x => `The number is: ${x}`;


// The most imperative and naive way of writing the pipe function
// Calling the function with:
// pipe1([add1, mul2, title])
function pipe1 (array_of_fn) {
    return function(x) {
        let result = x;
        for (let i = 0; i < array_of_fn.length; i++) {        
            let func = array_of_fn[i];

            result = func(result)
        }

        return result; 
    }
}

x = pipe1([add1, mul2, title])(4); // 'The number is: 10'