import { getProductById } from "@/app/lib/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProductById(params.id);

    if (!product) {
        notFound();
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
                ← Back to Products
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="relative h-96 w-full">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{product.rating} rating</span>
                    </div>

                    <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                        <p className="text-gray-700">{product.description}</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Details</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Category: {product.category}</li>
                            <li>In Stock: {product.inStock ? "Yes" : "No"}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}