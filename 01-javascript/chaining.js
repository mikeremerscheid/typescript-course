const users = [
  { id: 1, name: "Alice", address: { city: "Boston" } },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol", address: { city: "Seattle" } },
];

function getUserCity(user) {
  // Return the city, or undefined if no address exists.
  return user.address?.city ?? "Unknown city";
}

for (const user of users) {
  console.log(getUserCity(user));
}

const products = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Mouse", stock: 0 },
  { id: 3, name: "Monitor" },
];

function displayStock(product) {
  const stock = product.stock;

  return stock == null
    ? `${product.name}: Stock unknown`
    : `${product.name}: ${stock} units`;
}

for (const product of products) {
  console.log(displayStock(product));
}

console.log("========");

for (const product of products) {
  const description = product?.stock ?? "Stock unknown";
  console.log(`${product.name}: ${description}`);
}
