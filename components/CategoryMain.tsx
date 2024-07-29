"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const CategoryMain = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/v1/categories");
      if (res.status === 200 && res.data && res.data.data) {
        setCategories(res.data.data);
      } else {
        setError("Failed to fetch categories.");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to fetch categories.");
      } else {
        setError("Failed to fetch categories.");
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex-col m-4">
      <div className="my-8">
        <h1 className="font-bold">Our Categories</h1>
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="mt-2">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
            >
              {categories.length > 0 ? (
                categories.map((category: any, index: number) => (
                  <SwiperSlide key={index}>
                    <Link href={`/category/${category.slug}`}>
                      <div
                        className="w-48 bg-white 
                        transition-all ease-in-out duration-300
                        hover:bg-gradient-to-l from-purple-600 to-blue-600 hover:text-white
                        justify-center items-center flex rounded-md text-blue-800 h-12"
                      >
                        <h1 className="font-bold">{category.name}</h1>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))
              ) : (
                <div>No categories available.</div>
              )}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryMain;
