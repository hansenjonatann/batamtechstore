"use client";

const ProductCard = () => {
  return (
    <>
      <div className="mt-8 bg-white pb-0 md:pb-2 mx-4 md:mx-0 transition-all ease-in-out duration-200 aspect-square rounded-lg shadow-md hover:shadow-2xl hover:shadow-purple-600 hover:ring-purple-600 ">
        <div className="flex-col">
          <div className="w-full bg-black h-32 hover:opacity-45 transition-all ease-in-out duration-200">
            <h1>Gambar</h1>
          </div>
          <div className="flex-col m-2">
            <div className="flex items-center justify-between">
              <h1 className="text-black">Nama Produk</h1>
              <div className=" text-blue-800 uppercase font-bold text-xs  ">
                Category
              </div>
            </div>
            <p className="text-slate-400 mt-2 truncate text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus quae voluptate dolorum veniam quasi ipsum laudantium
              optio repudiandae dignissimos labore cupiditate sapiente vel
              voluptatem fugiat consequatur facere temporibus, quam amet
              mollitia minus quod. Sit, facilis non placeat minus sed nesciunt
              numquam culpa, omnis sint labore necessitatibus natus cum quia
              temporibus excepturi, libero maxime aspernatur corrupti voluptatem
              eveniet nemo dolores! Hic accusantium magni illum. Iste, enim
              tempora! Dolor et temporibus saepe ab repellendus maiores sint
              laborum totam beatae rerum illum rem amet reprehenderit sapiente
              molestias esse excepturi nam, similique labore doloremque. Vero
              voluptatibus vel beatae suscipit unde nemo. Explicabo, at ab!
            </p>
            <div className="flex justify-between  mt-16 md:mt-4  items-center">
              <button className="w-24 bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600  text-sm font-bold py-2 rounded-md">
                Add To Cart{" "}
              </button>

              <div className="">
                <h1 className="text-black">
                  Rp <span className="font-bold text-blue-800">50.000</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
