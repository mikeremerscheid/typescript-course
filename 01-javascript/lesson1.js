const products = [
  { id: 1, name: "Laptop", price: 1200, stock: 5 },
  { id: 2, name: "Mouse", price: 25, stock: 0 },
  { id: 3, name: "Keyboard", price: 75, stock: 12 },
  { id: 4, name: "Monitor", price: 300, stock: 3 },
  { id: 5, name: "Webcam", price: 90, stock: 0 },
];

function getAvailableProducts(products) {
  return products.filter((x) => x.stock > 0);
}

function getExpensiveProducts(products, minPrice) {
  return products.filter((x) => x.price > minPrice);
}

function getProductNames(products) {
  return products.map((x) => x.name);
}

function getInventoryValue(products) {
  return products.reduce((total, x) => total + x.stock * x.price, 0);
}

function findProductById(products, id) {
  return products.find((x) => x.id === id);
}

function getLowStockProducts(products, threshold) {
  // Return products with stock > 0
  // and stock < threshold.
  return products.filter((x) => x.stock < threshold && x.stock > 0);
}

function getInventoryValueByMinimumPrice(products, minPrice) {
  return products
    .filter((product) => product.price > minPrice)
    .reduce((sum, product) => sum + product.price * product.stock, 0);
}

const minPrice = 200;
const threshold = 4;

console.log("\n========== PRODUCT INVENTORY ==========\n");

console.group("Available Products");
console.table(getAvailableProducts(products));
console.groupEnd();

console.group(`Products Priced Above $${minPrice}`);
console.table(getExpensiveProducts(products, minPrice));
console.groupEnd();

console.group("Product Names");
console.log(getProductNames(products).join(", "));
console.groupEnd();

console.group("Inventory Summary");
console.log(`Total Inventory Value: $${getInventoryValue(products)}`);

console.log(
  `Inventory Value Above $${minPrice}: $${getInventoryValueByMinimumPrice(products, minPrice)}`
);
console.groupEnd();

console.group("Product Lookup");
console.log(findProductById(products, 2));
console.groupEnd();

console.group(`Low Stock Products (Below ${threshold})`);
console.table(getLowStockProducts(products, threshold));
console.groupEnd();
