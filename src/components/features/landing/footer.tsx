import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="text-white bg-slate-800">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full mb-6 md:w-1/3 md:mb-0">
            <h3 className="mb-2 text-xl font-bold">Sare</h3>
            <p className="text-gray-400">
              Find the Best Solution for Your Needs
            </p>
          </div>
          <div className="w-full mb-6 md:w-1/3 md:mb-0">
            <h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="mb-2 text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-700">
          <p>&copy; 2024 Sare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
