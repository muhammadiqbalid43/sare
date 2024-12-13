import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import ProductGrid from "./product-grid";
import { fetchPagination } from "@/services/product-api";

const PAGE_LIMIT = 10;

export default function Filter({ products }: { products: Product[] }) {
  const [initialProducts, setInitialsProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);

  const fetchFilteredProducts = async () => {
    const skip = (currentPage - 1) * PAGE_LIMIT;
    const query = new URLSearchParams({
      limit: PAGE_LIMIT.toString(),
      skip: skip.toString(),
      ...(category && { category }),
      ...(search && { search }),
    }).toString();

    const { products, total } = await fetchPagination(
      `https://dummyjson.com/products?${query}`
    );
    setInitialsProducts(products);
    setTotalPages(Math.ceil(total / PAGE_LIMIT));
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [currentPage, category, search, priceRange]);

  const handleReset = () => {
    setCategory("");
    setSearch("");
    setCompany("");
    setSortBy("");
    setPriceRange([0, 1000]);
    setCurrentPage(1);
  };

  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = search
      ? product.title.toLocaleLowerCase().includes(search.toLowerCase())
      : true;
    const matchesCompany = company ? product.brand === company : true;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return (
      matchesCategory &&
      matchesSearch &&
      matchesCompany &&
      matchesPrice &&
      matchesPrice
    );
  });
  return (
    <div className="w-full">
      <div className="container flex gap-5 p-10 mx-auto ring-1">
        <div>
          <Input
            placeholder="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {[...new Set(products.map((p) => p.category))].map(
                (cat, index) => (
                  <SelectItem key={index} value={cat}>
                    {cat}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          <Select value={company} onValueChange={setCompany}>
            <SelectTrigger>
              <SelectValue placeholder="Select company" />
            </SelectTrigger>
            <SelectContent>
              {[...new Set(products.map((p) => p.brand))].map(
                (brand, index) => (
                  <SelectItem key={index} value={brand}>
                    {brand}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="stock">Stock</SelectItem>
            </SelectContent>
          </Select>
          <div className="col-span-full">
            <label className="block mb-2 text-sm font-medium">
              Price Range
            </label>
            <Slider
              min={0}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button>Search</Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>

        <div>
          <ProductGrid products={filteredProducts} />

          <div className="flex justify-between mt-4">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
