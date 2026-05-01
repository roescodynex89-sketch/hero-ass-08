"use client";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const PopularProducts = () => {
  const popularItems = products.slice(0, 3);

  return (
    <section className="py-16 bg-[#FFFBEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-4">
            🔥 Popular Products
          </h2>
          <div className="w-20 h-1.5 bg-[#F59E0B] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Check out our most in-demand summer products. Style and protection
            together..
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {popularItems.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* image */}
              <div className="relative h-72 w-full overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#111827] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.category}
                </div>
              </div>

              {/*detailsss */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#F59E0B] transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-[#F59E0B] mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <span className="text-gray-400 text-sm ml-1">
                    ({product.rating})
                  </span>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-black text-[#111827]">
                    ${product.price}
                  </span>

                  <Link
                    href={`/details/${product.id}`}
                    className="bg-[#111827] text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#F59E0B] transition-all shadow-md active:scale-95"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
