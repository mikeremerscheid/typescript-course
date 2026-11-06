import { products } from "./products.js";

import {
  updateProductPrice,
  restockProduct,
  removeProduct,
} from "./inventory.js";

const updated = updateProductPrice(products, 1, 800);
const restocked = restockProduct(products, 2, 5);
const removed = removeProduct(products, 3);

console.table(updated);
console.table(restocked);
console.table(removed);
