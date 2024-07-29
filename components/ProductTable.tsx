import React from 'react';
import axios from 'axios';

const ProductTable = ({ products, fetchProducts, setSelectedProduct, openModal }: any) => {
  const handleEdit = (product: any) => {
    setSelectedProduct(product);
    openModal();
  };

  const handleDelete = async (productId: string) => {
    try {
      await axios.delete(`/api/v1/products`, { data: { id: productId } });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  return (
    <div className="table-container">
      <table className="min-w-full bg-white">
        <thead className="table-header">
          <tr>
            <th className="table-cell">Name</th>
            <th className="table-cell">Description</th>
            <th className="table-cell">Price</th>
            <th className="table-cell">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id} className="table-row">
              <td className="table-cell">{product.name}</td>
              <td className="table-cell">{product.description}</td>
              <td className="table-cell">{product.price}</td>
              <td className="table-actions">
                <button
                  onClick={() => handleEdit(product)}
                  className="btn btn-primary mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-secondary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;