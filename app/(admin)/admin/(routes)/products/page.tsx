"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductTable from '@/components/ProductTable';


const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/v1/products');
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  

  return (
    <div className="flex justify-center items-center h-screen ">
                <ProductTable products={products}/>

    </div>
  );
};

export default ProductsPage;
