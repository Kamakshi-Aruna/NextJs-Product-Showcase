// app/lib/products.ts
import { Product } from "../models";

export async function getProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
        {
            id: "1",
            name: "Wireless Headphones",
            description: "Premium noise-cancelling wireless headphones with 30-hour battery life.",
            price: 249.99,
            category: "electronics",
            image: "/headphone.jpg",
            rating: 4.7,
            inStock: true,
        },
        {
            id: "2",
            name: "Smart Watch",
            description: "Track your fitness, receive notifications, and more with this waterproof smart watch.",
            price: 199.99,
            category: "electronics",
            image: "/watch.jpg",
            rating: 4.5,
            inStock: true,
        },
        {
            id: "3",
            name: "Laptop Backpack",
            description: "Durable, water-resistant backpack with dedicated laptop compartment and USB charging port.",
            price: 79.99,
            category: "accessories",
            image: "/laptop.jpg",
            rating: 4.8,
            inStock: true,
        },
        {
            id: "4",
            name: "Wireless Charger",
            description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
            price: 29.99,
            category: "electronics",
            image: "/charger.webp",
            rating: 4.2,
            inStock: false,
        },
        {
            id: "5",
            name: "Water Bottle",
            description: "Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours.",
            price: 34.99,
            category: "accessories",
            image: "/bottle.jpg",
            rating: 4.6,
            inStock: true,
        },
    ];
}

export async function getProductById(id: string): Promise<Product | null> {
    const products = await getProducts();
    return products.find(product => product.id === id) || null;
}