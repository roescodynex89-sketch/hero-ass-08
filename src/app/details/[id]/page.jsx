"use client";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";

import { authClient } from "@/lib/auth-client";

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!isPending && !user) {
      router.push(`/login?redirect=/details/${id}`);
    }
  }, [user, isPending, router, id]);

  if (isPending || !user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading.............</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">Product Not Found</h2>
        <Link href="/products" className="mt-4 text-blue-600 underline">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl bg-[#FFFBEB] mx-auto px-4 py-12 min-h-screen">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-xl text-gray-500 hover:shadow transition font-medium"
      >
        ← Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6 items-start">
        <div className="bg-gray-100 rounded-2xl p-6">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-xl object-cover w-full h-75 md:h-100"
          />
        </div>

        <div className="space-y-6 pb-10">
          <div className="text-sm text-gray-500">
            {product.brand} • {product.category}
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span className="text-gray-700 font-medium">{product.rating}</span>
          </div>

          <div className="text-2xl font-semibold text-gray-900">
            ${product.price}
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <p className="text-sm text-gray-500">
            Stock: {product.stock} available
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-4 border-t border-gray-100">
            <button className="flex-1 bg-[#111827] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#F59E0B]">
              Add to Cart
            </button>

            <button className="flex-1 bg-[#F59E0B] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#111827]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
