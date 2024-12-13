import { Link } from "@tanstack/react-router";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className="w-full text-white bg-slate-800">
      <div className="container flex items-center justify-between p-5 mx-auto">
        <div>
          <Logo />
        </div>
        <div className="font-custom">
          <Link to="/products">Products</Link>
        </div>
      </div>
    </div>
  );
}
