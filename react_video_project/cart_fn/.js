let a = [
  { id: 1, quantity: 2 },
  { id: 2, quantity: 3 },
  { id: 3, quantity: 4 },
];
let quantity = a.reduce((quantity, item) => {
  return item.quantity + quantity, 0;
});

console.log(a);
