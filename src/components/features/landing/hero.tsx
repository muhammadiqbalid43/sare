import { Link } from "@tanstack/react-router";

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="container flex flex-col items-center gap-10 px-4 py-16 mx-auto md:flex-row">
        <div className="mb-8 md:w-1/2 md:mb-0">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Find the Best Solution for Your Needs
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            High quality products designed to meet every challenge and
            opportunity.
          </p>
          <Link
            href="/products"
            className="px-6 py-3 font-semibold text-white transition duration-300 rounded-md bg-slate-800 hover:bg-slate-700"
          >
            Shop Now
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-hero-full-width.jpg"
            alt="Featured Product"
            className="rounded-lg shadow-md h-[300px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
