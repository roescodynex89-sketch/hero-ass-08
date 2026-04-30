// import BannerImg from "../assets/bannner-sun.png"
// import Image from "next/image";

// const Banner = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Banner;
import Image from "next/image";
import BannerImg from "../assets/bannner-sun.png";
import "animate.css"; // Animate.css ইমপোর্ট নিশ্চিত করুন

const Banner = () => {
  return (
    <section className="relative w-full bg-[#FFFBEB] overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* বাম পাশ: টেক্সট কন্টেন্ট */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10">
          <div className="animate__animated animate__fadeInDown">
            <span className="inline-block bg-[#F59E0B] text-white px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wider animate__animated animate__pulse animate__infinite">
              Hot Deals 🔥
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-[#111827] leading-tight animate__animated animate__fadeInLeft">
            Summer Sale <br /> 
            <span className="text-[#F59E0B]">50% OFF</span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0 animate__animated animate__fadeInUp animate__delay-1s">
           “Step into summer with style—enjoy 50% OFF on all your favorite essentials! From trendy heart-shaped sunglasses to skin-loving sunscreen, discover it all at SunCart.”
          </p>
          
          <div className="pt-4 animate__animated animate__zoomIn animate__delay-2s">
            <button className="bg-[#111827] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#F59E0B] transition-all transform hover:scale-105 shadow-xl">
              Shop Now
            </button>
          </div>
        </div>

        {/* ডান পাশ: ইমেজ কন্টেন্ট */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center animate__animated animate__fadeInRight">
          {/* পিছনের ডেকোরেটিভ ইফেক্ট */}
          <div className="absolute w-72 h-72 bg-[#F59E0B] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          
          <div className="relative z-10 border-[10px] border-white shadow-2xl rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src={BannerImg}
              alt="Summer Essentials Banner"
              width={500}
              height={400}
              placeholder="blur"
              className="object-cover"
            />
          </div>

          {/* ফ্লোটিং ডিসকাউন্ট ব্যাজ */}
          <div className="absolute -top-4 -right-4 bg-[#F59E0B] text-white w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold shadow-lg animate__animated animate__bounceIn animate__delay-2s">
            <span className="text-xs">UP TO</span>
            <span className="text-xl">50%</span>
            <span className="text-xs">OFF</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;