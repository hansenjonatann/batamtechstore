"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const CategoryMain = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await axios.get("/api/v1/categories");
    if (res) {
      setCategories(res.data.data);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <div className="flex-col m-4">
        <div className="my-8">
          <h1 className="font-bold">Our Categories</h1>
        </div>
        <div className="mt-2 flex">
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: -2, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
            >
              {categories.map((category: any, index: number) => (
                <SwiperSlide key={index}>
                  <Link href={"/category/"}>
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
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CategoryMain;
