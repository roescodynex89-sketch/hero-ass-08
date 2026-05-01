"use client";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "animate.css";

const AllProductsPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFBEB] pb-20">
      {/* Header */}
      <header className="bg-[#FFFBEB] border-b border-gray-100 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-[#111827] uppercase tracking-tighter animate__animated animate__fadeInDown">
            All <span className="text-[#F59E0B]">Collections</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto animate__animated animate__fadeInUp">
            Explore our complete range of premium summer essentials designed for
            your comfort and style.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 transform hover:-translate-y-2 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* image  */}
              <div className="relative h-80 w-full overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* badges */}
                <div className="absolute top-5 left-5 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-[#111827] text-[10px] font-black px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-widest">
                    {product.category}
                  </span>
                  {product.stock < 10 && (
                    <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-widest">
                      Low Stock
                    </span>
                  )}
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-1">
                      {product.brand}
                    </p>
                    <h3 className="text-2xl font-black text-[#111827] leading-tight group-hover:text-[#F59E0B] transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* rating */}
                <div className="flex items-center gap-1.5 text-[#F59E0B] mb-6">
                  <div className="flex text-sm">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaStarHalfAlt />
                  </div>
                  <span className="text-gray-400 text-xs font-bold font-mono">
                    [{product.rating}]
                  </span>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-[10px] font-bold uppercase">
                      Price
                    </span>
                    <span className="text-2xl font-black text-[#111827]">
                      ${product.price}
                    </span>
                  </div>

                  <Link
                    href={`/details/${product.id}`}
                    className="bg-[#111827] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#F59E0B] transition-all shadow-lg active:scale-95 flex items-center gap-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
