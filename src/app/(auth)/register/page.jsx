
"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // const onSubmit = async (data) => {
  //   setLoading(true);
  //   const { name, email, password, photo } = data;

  //   const { data: res, error } = await authClient.signUp.email({
  //     name,
  //     email,
  //     password,
  //     image: photo,
  //     // callbackURL: "/login",
  //   });

  //   setLoading(false);
  //   if (error) {
  //     alert(error.message || "Registration failed ❌");
  //   } else {
  //     alert("Registration successful ✅");
  //     router.push("/");
  //   }
  // };


const onSubmit = async (data) => {
  setLoading(true);
  const { name, email, password, photo } = data;

  // 1️⃣ Register
  const { error } = await authClient.signUp.email({
    name,
    email,
    password,
    image: photo,
  });

  if (error) {
    setLoading(false);
    alert(error.message || "Registration failed ❌");
    return;
  }

  // 2️⃣ Auto Login
  const loginRes = await authClient.signIn.email({
    email,
    password,
  });

  setLoading(false);

  if (loginRes.error) {
    alert("Auto login failed ❌");
  } else {
    // 3️⃣ Go Home
    router.push("/");
  }
};












  const handleGoogleRegister = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    // ফিক্সড: min-h-screen এবং py-12 ব্যবহার করা হয়েছে যাতে কার্ডটি মাঝখানে থাকে এবং প্যাডিং পায়
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBEB] px-4 py-12">
      <div className="max-w-md w-full bg-[#FFFBEB] rounded-[2rem] shadow-2xl p-8 md:p-12">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-[#111827] uppercase tracking-tighter">
            Create Account
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">
            Join SunCart today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-5 py-3 border border-gray-100 rounded-xl mt-1.5 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 outline-none transition-all text-sm"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="w-full px-5 py-3 border border-gray-100 rounded-xl mt-1.5 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 outline-none transition-all text-sm"
              placeholder="example@mail.com"
            />
            {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.email.message}</p>}
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Photo URL</label>
            <input
              {...register("photo", { required: "Photo URL is required" })}
              className="w-full px-5 py-3 border border-gray-100 rounded-xl mt-1.5 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 outline-none transition-all text-sm"
              placeholder="https://image-url.com"
            />
            {errors.photo && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.photo.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full px-5 py-3 border border-gray-100 rounded-xl mt-1.5 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 outline-none transition-all text-sm"
              placeholder="••••••"
            />
            {errors.password && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.password.message}</p>}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#111827] text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#F59E0B] transition-all shadow-lg active:scale-95 mt-4"
          >
            {loading ? "Creating..." : "Register Now"}
          </button>
        </form>

        {/* Google */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-4">Or continue with</p>

          <button
            onClick={handleGoogleRegister}
            className="w-full border border-gray-100 py-3 rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2 text-xs font-bold transition-all active:scale-95 shadow-sm"
          >
         
            Continue with Google
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-500 text-xs mt-8 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-[#F59E0B] font-black underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;