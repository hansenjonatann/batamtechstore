import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductModal = ({ isOpen, onClose, product, fetchProducts }: any) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (product) {
        await axios.put('/api/v1/products', { ...formData, id: product.id });
      } else {
        await axios.post('/api/v1/products', formData);
      }
      fetchProducts();
      onClose();
    } catch (error) {
      console.error('Error saving product', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-bg">
      <div className="modal-content">
        <h2 className="text-xl font-bold mb-4">{product ? 'Edit Product' : 'Create Product'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price || 0}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
