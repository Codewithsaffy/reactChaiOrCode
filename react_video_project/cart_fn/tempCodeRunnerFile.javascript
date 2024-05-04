let a = [
  { id: 1, quantity: 2 },
  { id: 2, quantity: 3 },
  { id: 3, quantity: 4 },
];
let quantity = a.reduce((quantity, item) =>
  console.log("quantity:" + quantity, "item:" + item)
);
console.log(a)

