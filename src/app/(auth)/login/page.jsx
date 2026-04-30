"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import {useSearchParams} from "next/navigation"
const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();



  const searchParams = useSearchParams();
const redirectPath = searchParams.get("redirect") || "/";

  const onSubmit = async (data) => {
  setLoading(true);
  const { email, password } = data;

  const { error } = await authClient.signIn.email({
    email,
    password,
    rememberMe: true,
    // ❌ callbackURL remove
  });

  setLoading(false);

  if (error) {
    alert(error.message || "Login failed ❌");
  } else {
    // ✅ redirect back
    router.push(redirectPath);
  }
};

  const handleGoogleLogin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: redirectPath, // ✅ dynamic redirect
  });
};

  return (
    /* ১. মেইন কন্টেইনারে min-h-screen এবং flex ব্যবহার করা হয়েছে যাতে কার্ডটি মাঝখানে থাকে */
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBEB] px-4 py-12">
      
      {/* ২. max-w-md ব্যবহার করে কার্ডের উইডথ ফিক্সড করা হয়েছে যাতে এটি চ্যাপ্টা না হয় */}
      <div className="max-w-md w-full bg-[#FFFBEB] rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-50">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-[#111827] uppercase tracking-tighter italic">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">
            Log in to your SunCart account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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

          {/* Password */}
          <div>
            <div className="flex justify-between items-center ml-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
              <span className="text-[10px] text-[#F59E0B] font-bold uppercase underline cursor-pointer">Forgot?</span>
            </div>
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
            {loading ? "Authenticating..." : "Login Now"}
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-4">Or continue with</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full border border-gray-100 py-3 rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2 text-xs font-bold transition-all active:scale-95 shadow-sm"
          >
            <Image
              src="https://www.google.com/favicon.ico"
              width={16}
              height={16}
              alt="google"
            />
            Continue with Google
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-gray-500 text-xs mt-8 font-medium">
          New here?{" "}
          <Link href="/register" className="text-[#F59E0B] font-black underline uppercase">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;