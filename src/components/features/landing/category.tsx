import { Link } from "@tanstack/react-router";

const categories = [
  {
    name: "New Arrivals",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Productivity",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Workspace",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-03.jpg",
  },
  {
    name: "Accessories",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-04.jpg",
  },
];

export default function Category() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.name} className="group">
              <div className="overflow-hidden transition duration-300 bg-gray-100 rounded-lg shadow-md group-hover:shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-[300px]"
                />
                <div className="p-4 bg-slate-800">
                  <h3 className="text-lg font-semibold text-white ">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
