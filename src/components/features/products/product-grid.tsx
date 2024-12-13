import { Product } from "@/types";
import { Star } from "lucide-react";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden border rounded-lg shadow-sm"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            width={300}
            height={200}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
            <p className="mb-2 text-gray-600">${product.price.toFixed(2)}</p>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
