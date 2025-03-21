import { getProducts } from "./lib/products";
import ProductListing from "./components/client/ProductListing";

export default async function Home() {
  // Fetch products on the server
  const products = await getProducts();

  return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Featured Products</h1>
        <p className="text-gray-600 mb-8">Discover our selection of top-rated products</p>

        {/* Pass server data to client component */}
        <ProductListing products={products} />
      </main>
  );
}