import { getProducts } from "@/app/lib/products";
import ProductCard from "@/app/components/client/ProductCard";

export default async function ProductGrid() {
    // This data fetching happens on the server
    const products = await getProducts();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}