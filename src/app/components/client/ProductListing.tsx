"use client";

import { useState, useEffect } from "react";
import { Product } from "@/app/models";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

export default function ProductListing({ products }: { products: Product[] }) {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [sortOrder, setSortOrder] = useState<"default" | "price-asc" | "price-desc" | "rating">("default");

    // Extract unique categories
    const categories = [...new Set(products.map(product => product.category))];

    const handleFilterChange = (category: string) => {
        if (category === "all") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value as any);
    };

    useEffect(() => {
        let sortedProducts = [...filteredProducts];

        switch (sortOrder) {
            case "price-asc":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                // Keep original order
                sortedProducts = filteredProducts.slice();
        }

        setFilteredProducts(sortedProducts);
    }, [sortOrder]);

    return (
        <div>
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <ProductFilter categories={categories} onFilterChange={handleFilterChange} />

                <div className="flex items-center">
                    <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
                    <select
                        id="sort"
                        value={sortOrder}
                        onChange={handleSortChange}
                        className="border rounded-md px-3 py-2"
                    >
                        <option value="default">Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}