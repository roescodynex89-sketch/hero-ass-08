// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { HiMenu, HiX, HiUserCircle } from "react-icons/hi"; // User আইকন যোগ করা হয়েছে

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   // আপাতত লগইন ফলস রাখা হয়েছে
//   const isLoggedIn = false;

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/products" },
//     { name: "My Profile", path: "/my-profile" },
//   ];

//   const activeClass = "text-[#F59E0B] font-bold";
//   const inactiveClass = "text-[#111827] hover:text-[#F59E0B] transition-colors";

//   return (
//     <nav className="bg-[#FFFBEB] shadow-sm sticky top-0 z-50 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="shrink-0">
//             <Link
//               href="/"
//               className="text-2xl font-black text-[#111827] tracking-tighter"
//             >
//               SUN<span className="text-[#F59E0B]">CART</span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.path}
//                 className={`text-sm font-medium ${
//                   pathname === link.path ? activeClass : inactiveClass
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {isLoggedIn ? (
//               <div className="flex items-center gap-3">
//                 {/* ইমেজের বদলে এখন ইউজার আইকন */}
//                 <HiUserCircle className="text-3xl text-[#F59E0B]" />
//                 <button className="text-sm font-semibold text-[#111827] hover:text-red-500 transition-colors">
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <Link
//                 href="/login"
//                 className="bg-[#F59E0B] text-[#FFFFFF] px-6 py-2 rounded-md font-semibold hover:bg-[#e08e0a] transition-all shadow-sm"
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-[#111827] text-2xl focus:outline-none"
//             >
//               {isOpen ? <HiX /> : <HiMenu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       <div
//         className={`md:hidden absolute w-full bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
//           isOpen
//             ? "top-16 opacity-100 shadow-xl"
//             : "-top-100 opacity-0 pointer-events-none"
//         }`}
//       >
//         <div className="px-4 pt-2 pb-6 space-y-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               onClick={() => setIsOpen(false)}
//               className={`block px-3 py-3 text-base font-medium rounded-md ${
//                 pathname === link.path
//                   ? "bg-orange-50 " + activeClass
//                   : inactiveClass
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}

//           <div className="pt-4 border-t border-gray-100">
//             {isLoggedIn ? (
//               <div className="flex items-center gap-3 mb-4 px-3">
//                 <HiUserCircle className="text-3xl text-[#F59E0B]" />
//                 <span className="font-medium text-[#111827]">User Profile</span>
//               </div>
//             ) : null}

//             <Link
//               href={isLoggedIn ? "/logout" : "/login"}
//               onClick={() => setIsOpen(false)}
//               className={`block w-full text-center font-bold py-3 rounded-md shadow-md ${
//                 isLoggedIn
//                   ? "bg-red-50 text-red-600"
//                   : "bg-[#F59E0B] text-white"
//               }`}
//             >
//               {isLoggedIn ? "Logout" : "Login / Register"}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiUserCircle } from "react-icons/hi";
import Image from "next/image";
// ✅ তোমার auth client import করো
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ✅ BetterAuth থেকে user নাও
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "My Profile", path: "/my-profile" },
  ];

  const activeClass = "text-[#F59E0B] font-bold";
  const inactiveClass = "text-[#111827] hover:text-[#F59E0B] transition-colors";

  // ✅ Logout function add
  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="bg-[#FFFBEB] shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-black text-[#111827] tracking-tighter">
              SUN<span className="text-[#F59E0B]">CART</span>
            </Link>
          </div>

          {/* Desktop */}
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
                {/* ✅ user image */}
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
                {/* ✅ Login + Register both */}
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

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white`}>
        <div className="p-4 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}

          {user ? (
            <button onClick={handleLogout} className="text-red-500">
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;