"use client";

import { useState } from "react";

interface FilterProps {
    categories: string[];
    onFilterChange: (category: string) => void;
}

export default function ProductFilter({ categories, onFilterChange }: FilterProps) {
    const [activeCategory, setActiveCategory] = useState("all");

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        onFilterChange(category);
    };

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => handleCategoryClick("all")}
                    className={`px-4 py-2 rounded-full ${
                        activeCategory === "all"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                    All
                </button>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`px-4 py-2 rounded-full ${
                            activeCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}