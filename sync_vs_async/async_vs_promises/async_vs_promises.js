// With promises we write asynchronous code that emulates synchronous code 
// but with async/await we write asynchronous code that looks like synchronous code. 
// As a consequence this often leads to misconception

const delay = (duration) => {
    return new Promise(resolve => setTimeout(resolve, duration))
}

async function asyncWithAwait(prefix) {
    console.log(prefix + ' before await');
    await delay(1000);
    console.log(prefix + ' after await');
}

function asyncWithPromise(prefix) {
    console.log(prefix + ' before promise');
    return delay(1000).then(_ => {
        console.log(prefix + ' after promise');
    });
}

async function run() {
    let prefix = '(1)';
    console.log(prefix + ' with await');
    asyncWithAwait(prefix);
    console.log(prefix + ' with promise');
    asyncWithPromise(prefix);
    console.log(prefix + ' after all');
}

run();

async function run2() {
    let prefix = '(2)'
    console.log(prefix + ' with await')
    await asyncWithAwait(prefix)
    console.log(prefix + ' with promise')
    asyncWithPromise(prefix).then(_ => console.log(prefix + ' after all'))
}

run2()