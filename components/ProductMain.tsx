"use client";
import Link from "next/link";

import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductMain = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await axios.get("/api/v1/product");
    if (res) {
      setProducts(res.data.data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="flex-col m-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xs md:text-xl">Our Products</h1>
          <Link href={"/products"} className="text-xs md:text-xl">
            See other Products...
          </Link>
        </div>

        <div className="grid gap-x-4 grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductMain;
