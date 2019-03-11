// JS ENGINE added Micro Task queue with Promises

// Promises are like placeholders, they allow us to reason about feture values, without knowing their outcomes

const p = Promise.resolve('hello')

// Capabilty to know when a given task finishes and we decide what out code will do

p.then(val => {
    console.log(val);
    return `${val} world`;
}).then(newVal => {
    console.log(newVal);
});

// Under the hood promises utilize the micro task queue
// here is a thing i need to do later, but immedeatly later before anything else can happen

// ERRORS

const prom = new Promise((resolve, reject) => {
    if(true) {
        reject(new Error('rejected!'));
    } else {
        resolve('success!');
    }
});

prom.then(val => `${val} we did it!`)
    .then(val => console.log(`got ${val}`))
    .catch(err => {
        console.log(`error: ${err.message}`);
        console.log(`error stack: ${err.stack}`);
    });
// next error will fail silently