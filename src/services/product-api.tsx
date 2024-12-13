import { ProductResponse } from "@/types";

export const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data: ProductResponse = await response.json();

  return data.products;
};

export const fetchPagination = async (url: string) => {
  const response = await fetch(url);
  const data: ProductResponse = await response.json();
  return {
    products: data.products,
    total: data.total,
  };
};
