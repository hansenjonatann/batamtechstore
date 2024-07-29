"use client";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductMain = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/v1/products");
      if (res.status === 200) {
        setProducts(res.data.data);
      } else {
        setError("Failed to fetch products.");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to fetch products.");
      } else {
        setError("Failed to fetch products.");
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col m-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold text-lg md:text-xl">Our Products</h1>
        <Link href="/products" className="text-xs md:text-lg text-white hover:underline">
          See other Products...
        </Link>
      </div>

      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ProductCard products={products} />
        </div>
      )}
    </div>
  );
};

export default ProductMain;
