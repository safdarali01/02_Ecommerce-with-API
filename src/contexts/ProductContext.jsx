import React, { createContext, useState, useEffect } from "react";

//Create Context

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //Products State
  const [products, setProducts] = useState([]);

  //Products Fetch Function
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
