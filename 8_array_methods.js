const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 }
];

const itemsForIncludes = [1, 3, 4, 5];

const includes7 = itemsForIncludes.includes(7);
// console.log(includes7);

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
// console.log(total);

const hasExpensiveItems = items.every(item => {
  return item.price > 1000;
});
// console.log(hasExpensiveItems);

const hasInexpensiveItems = items.some(item => {
  return item.price <= 100;
});
// console.log(hasInexpensiveItems);

items.forEach(item => {
  //   console.log(item);
});

const foundItem = items.find(item => {
  return item.name === "Book";
}); // LOGS FIRST MATCH
// console.log(foundItem);

const itemNames = items.map(item => {
  return (item.name = item.name + "1");
}); // MAP CREATES NEW ARRAY
// console.log(items, itemNames);

const filteredItems = items.filter(item => {
  return item.price <= 100;
}); // FILTER CREATES NEW ARRAY
// console.log(filteredItems);
