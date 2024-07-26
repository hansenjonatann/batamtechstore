"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  products: any;
}

const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <>
      {products.map((product: any, index: any) => (
        <div
          key={index}
          className="mt-8 bg-white pb-2 md:pb-2 mx-4 md:mx-0 transition-all ease-in-out duration-200 aspect-square rounded-lg shadow-md hover:shadow-2xl hover:shadow-purple-600 hover:ring-purple-600 "
        >
          <div className="flex-col">
            <div className="w-full bg-black h-32 hover:opacity-45 transition-all ease-in-out duration-200 hover:rounded-lg">
              <h1>Gambar</h1>
            </div>
            <div className="flex-col m-2">
              <div className="flex items-center justify-between">
                <h1 className="text-black md:text-md text-sm">
                  {product.name}
                </h1>
                <Link
                  href={`/category/${product.category.id}`}
                  className=" text-blue-800 uppercase font-bold text-[12px] md:text-md md:ms-4  "
                >
                  {product.category.name}
                </Link>
              </div>
              <p className="text-slate-600 mt-2 truncate text-xs">
                {product.description}
              </p>
              <div className="flex justify-between  mt-8 md:mt-4  items-center">
                <button className="px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600  text-sm font-bold py-2 rounded-md">
                  <ShoppingCart />
                </button>

                <div className="">
                  <h1 className="text-black">
                    Rp{" "}
                    <span className="font-bold text-blue-800">
                      {product.price.toLocaleString("ID")}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
