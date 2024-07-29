import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'create' | 'update' | 'delete';
  product: Product | null;
  fetchProducts: () => void;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type, product, fetchProducts }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (type === 'update' && product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description || '');
    } else {
      setName('');
      setPrice(0);
      setDescription('');
    }
  }, [type, product]);

  const handleSubmit = async () => {
    try {
      if (type === 'create') {
        await axios.post('/api/v1/product', { name, price, description });
      } else if (type === 'update' && product) {
        await axios.put(`/api/v1/product/${product.id}`, { name, price, description });
      } else if (type === 'delete' && product) {
        await axios.delete(`/api/v1/product/${product.id}`);
      }
      fetchProducts();
      onClose();
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-xl font-bold mb-4">
          {type === 'create' ? 'Create Product' : type === 'update' ? 'Update Product' : 'Delete Product'}
        </h2>
        {(type === 'create' || type === 'update') && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="number"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <textarea
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}
        {type === 'delete' && (
          <p>Are you sure you want to delete the product "{product?.name}"?</p>
        )}
        <div className="flex justify-end">
          <button className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>
            {type === 'delete' ? 'Delete' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
