function discount(discount) {
    return (price) => {
        return price * discount;
    }
}

const tenPercentDiscount = discount(0.1);
const realDiscount = tenPercentDiscount(500);

console.log(realDiscount);
// or
console.log(+discount(0.1)( 500));