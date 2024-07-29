import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  if (!Array.isArray(products)) {
    console.error('Products should be an array.');
    return null;
  }

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="mt-8 bg-white pb-2 mx-4 md:mx-0 transition-all ease-in-out duration-200 aspect-square rounded-lg shadow-md hover:shadow-2xl hover:shadow-purple-600 hover:ring-purple-600 "
        >
          <div className="flex-col">
            <div className="w-full bg-black h-32 hover:opacity-45 transition-all ease-in-out duration-200 hover:rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain object-center" />
            </div>
            <div className="mt-2 px-4">
              <h1 className="text-xs">{product.name}</h1>
              <p className="font-bold text-sm md:text-base text-blue-800">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(product.price)}
              </p>
              <Link
                href={`/products/${product.id}`}
                className="px-2 py-2 w-full bg-purple-500 flex justify-center text-white items-center mt-4 rounded-lg hover:bg-purple-700 transition-all ease-in-out duration-200 text-xs md:text-base"
              >
                <ShoppingCart size={18} className="mr-1" />
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
