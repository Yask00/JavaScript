function baz(z) {
    console.log(new Error().stack);
}

function bar(y) {
    baz(y + 1);
}

function foo(x) {
    bar(x + 1);
}

foo(3);
return;