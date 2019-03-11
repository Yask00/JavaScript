doNotTrack(() => {
    doB();
    doC(() => {
        doD();
    });
    doE();
});
doF();

// REAL ORDER OF EXECUTION

first(() => {
    third();
    fourth(() => {
        sixst();
    })
    fifth();
});
second();

// Inversion of control, we hand off callback and hope they do the right thing