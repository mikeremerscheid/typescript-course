const employee = {
  id: 101,
  name: "Alice",
  department: "Engineering",
  salary: 95000,
  active: true,
};

// TASK 1:
// Extract name, department, and salary
// using destructuring.
const { name, department, salary } = employee;

// TASK 2:
// Write a function called displayEmployee()
// that uses destructuring in its parameter.
function displayEmployee({ name, department, salary }) {
  console.log(`${name} works in ${department} and earns $${salary}.`);
}

// Expected output:
// Alice works in Engineering and earns $95000.

displayEmployee(employee);

const product = {
  id: 1,
  name: "Laptop",
  price: 1200,
  stock: 5,
};

// TASK 1:
// Create a new object called discountedProduct.
// Reduce the price by 10% using spread syntax.
// Do not modify product.
const discountedProduct = {
  ...product,
  price: product.price * 0.9,
};

// TASK 2:
// Create a new object called restockedProduct.
// Increase the stock by 10.
// Do not modify product.
const restockedProduct = {
  ...product,
  stock: product.stock + 10,
};

// TASK 3:
// Print all three objects to verify the results.
console.table([product, discountedProduct, restockedProduct]);

const products = [
  { id: 1, name: "Laptop", price: 1200, stock: 5 },
  { id: 2, name: "Mouse", price: 25, stock: 10 },
  { id: 3, name: "Monitor", price: 300, stock: 3 },
];

function updateProductPrice(products, id, newPrice) {
  // Return a new array with the matching product's price updated.

  return products.map((product) =>
    product.id === id ? { ...product, price: newPrice } : product
  );
}

function restockProduct(products, id, quantity) {
  // Return a new array with the matching product's stock increased.
  return products.map((product) =>
    product.id === id
      ? {
          ...product,
          stock: product.stock + quantity,
        }
      : product
  );
}

function removeProduct(products, id) {
  // Return a new array without the matching product.

  return products.filter((product) => product.id !== id);
}

console.log(updateProductPrice(products, 1, 800));
console.log(restockProduct(products, 2, 5));
console.log(removeProduct(products, 3));
