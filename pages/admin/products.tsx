"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/admin/Sidebar';
import Navbar from '@/components/admin/Navbar';
import ProductTable from '@/components/ProductTable';
import ProductModal from '@/components/ProductModal';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <Navbar />
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <button onClick={openModal} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Create Product</button>
        </div>
        <ProductTable
          products={products}
          fetchProducts={fetchProducts}
          setSelectedProduct={setSelectedProduct}
          openModal={openModal}
        />
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
          fetchProducts={fetchProducts}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
