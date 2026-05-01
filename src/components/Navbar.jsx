"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiUserCircle } from "react-icons/hi";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // user
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "My Profile", path: "/my-profile" },
  ];

  const activeClass = "text-[#F59E0B] font-bold";
  const inactiveClass = "text-[#111827] hover:text-[#F59E0B] transition-colors";

  // logout function add
  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="bg-[#FFFBEB] shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl font-black text-[#111827] tracking-tighter"
            >
              SUN<span className="text-[#F59E0B]">CART</span>
            </Link>
          </div>

          {/* desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium ${
                  pathname === link.path ? activeClass : inactiveClass
                }`}
              >
                {link.name}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center gap-3">
                {/*  user image */}
                {user.image ? (
                  <Image
                    alt="Image"
                    width={32}
                    height={32}
                    src={user.image}
                    className="rounded-full"
                  />
                ) : (
                  <HiUserCircle className="text-3xl text-[#F59E0B]" />
                )}

                <button
                  onClick={handleLogout}
                  className="text-sm font-semibold text-[#111827] hover:text-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  href="/login"
                  className="bg-[#F59E0B] text-white px-4 py-2 rounded-md font-semibold"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="border border-[#F59E0B] text-[#F59E0B] px-4 py-2 rounded-md font-semibold"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* mobile button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-70 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold text-[#F59E0B]">
                SUN<span className="text-[#111827]">CART</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-gray-50 rounded-full"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 font-medium text-lg hover:text-[#F59E0B] transition-colors py-2 border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-100">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-bold active:scale-95 transition-all"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3 font-bold text-[#111827] border border-[#111827] rounded-xl active:scale-95 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3 font-bold bg-[#111827] text-white rounded-xl shadow-lg active:scale-95 transition-all"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
