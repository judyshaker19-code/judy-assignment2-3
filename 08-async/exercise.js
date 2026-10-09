/// 08-async — your work goes in this file.

import { findProduct, findAllProducts } from "./fake-db.js";

/**
 * The name of one product, looked up by id.
 */
export async function productName(id) {
  const product = await findProduct(id);
  return product.name;
}

/**
 * A price label for one product, looked up by id.
 */
export async function priceLabel(id) {
  const product = await findProduct(id);
  return `${product.name} costs ${product.price} EGP`;
}

/**
 * The name of a product, or "Not found" if there is no such product.
 */
export async function safeProductName(id) {
  try {
    const product = await findProduct(id);
    return product.name;
  } catch {
    return "Not found";
  }
}

/**
 * Names of all products that are in stock.
 */
export async function namesInStock() {
  const products = await findAllProducts();
  return products
    .filter(product => product.inStock)
    .map(product => product.name);
}