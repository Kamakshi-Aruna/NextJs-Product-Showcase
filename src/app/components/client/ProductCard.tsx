"use client";

import { Product } from "@/app/models";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs mx-auto">
            {/* Product Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* Product Details */}
            <div className="p-4">
                <Link href={`/products/${product.id}`}>
                    <h2 className="text-lg font-semibold hover:text-blue-600 transition-colors cursor-pointer">
                        {product.name}
                    </h2>
                </Link>
                <p className="text-gray-600 mt-2 text-sm line-clamp-2">{product.description}</p>

                {/* Price & Rating */}
                <div className="mt-3 flex justify-between items-center">
                    <span className="text-base font-bold">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-sm">{product.rating}</span>
                    </div>
                </div>

                {/* View Details Button */}
                <Link href={`/products/${product.id}`} passHref>
                    <button className="mt-3 w-full py-1.5 px-3 text-sm rounded bg-blue-600 text-white hover:bg-blue-700">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}
