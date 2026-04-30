// "use client";

// import "animate.css";

// const brands = [
//   {
//     name: "SunShade",
//     desc: "Premium Sunglasses",
//   },
//   {
//     name: "CoolWear",
//     desc: "Summer Fashion",
//   },
//   {
//     name: "SkinCare+",
//     desc: "Trusted Skincare",
//   },
//   {
//     name: "BloomFit",
//     desc: "Trendy Outfits",
//   },
// ];

// export default function ExtraSection2() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold animate__animated animate__fadeInUp">
//           🌟 Top Brands
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Trusted brands for your summer essentials
//         </p>
//       </div>

//       <div className="grid md:grid-cols-4 gap-6 px-5 md:px-16">
//         {brands.map((brand, i) => (
//           <div
//             key={i}
//             className="p-6 rounded-2xl border bg-base-100 text-center hover:bg-orange-50 hover:shadow-lg transition duration-300 animate__animated animate__fadeInUp"
//             style={{ animationDelay: `${i * 0.2}s` }}
//           >
//             <div className="text-xl font-semibold text-orange-500">
//               {brand.name}
//             </div>
//             <p className="text-sm text-gray-500 mt-2">
//               {brand.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import "animate.css";

const brands = [
  { name: "SunShade", desc: "Premium Sunglasses", initial: "S" },
  { name: "CoolWear", desc: "Summer Fashion", initial: "C" },
  { name: "SkinCare+", desc: "Trusted Skincare", initial: "S+" },
  { name: "BloomFit", desc: "Trendy Outfits", initial: "B" },
];

export default function ExtraSection2() {
  return (
    <section className="py-24 bg-[#FFFBEB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-gray-200 pb-8 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter animate__animated animate__fadeInLeft">
              TOP <span className="text-[#F59E0B]">BRANDS</span>
            </h2>
            <p className="text-gray-400 mt-2 font-medium tracking-widest uppercase text-xs">
              Our Premium Global Partners
            </p>
          </div>
          <div className="animate__animated animate__fadeInRight">
             <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-500 shadow-sm">
                Established 2026
             </span>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#F59E0B]/30 hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)] transition-all duration-500 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Background Accent - Hover এ দেখা যাবে */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#111827]/5 rounded-bl-[100px] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-3xl opacity-0 group-hover:opacity-100 -z-0"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Brand Initial/Icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-[#111827] text-white text-3xl font-black transition-all duration-500 group-hover:bg-[#F59E0B] group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                  {brand.initial}
                </div>

                {/* Brand Info */}
                <h3 className="text-xl font-black text-[#111827] group-hover:tracking-wider transition-all duration-300 uppercase">
                  {brand.name}
                </h3>
                
                <div className="mt-2 flex items-center gap-2">
                    <div className="h-[2px] w-4 bg-[#F59E0B] rounded-full"></div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        {brand.desc}
                    </p>
                </div>

                {/* Hidden "Explore" text appearing on hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] font-black text-[#F59E0B] border-b-2 border-[#F59E0B] cursor-pointer">
                        EXPLORE COLLECTION
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}