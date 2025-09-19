import { products } from "./products";

export const getAllProducts = async () => {
  return new Promise((resolve) => {
    // Simulate a database call by setting a short timeout
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};


export const getProductById = async (id: number) => {
  return new Promise((resolve, reject) => {
    // Simulate a database call by setting a short timeout
    setTimeout(() => {
      const product = products.find(p => p.productId === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error(`Product with Id ${id} was not found.`));
      }
    }, 500);
  });
};
