"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";

import { Suspense } from "react";








const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    });

    setLoading(false);

    if (error) {
      alert(error.message || "Login failed ");
    } else {
      router.push(redirectPath);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirectPath,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBEB] px-4 py-12">
      <div className="max-w-md w-full bg-[#FFFBEB] rounded-4xl shadow-2xl p-8 md:p-12 border border-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#111827] ">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">
            Log in to your SunCart account
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* email */}
          <div>
            <label className="text-sm font-semibold text-[#111827]   ml-1">
              Email Address
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="w-full px-5 py-3 border border-gray-100 rounded-xl mt-1.5 focus:border-[#F59E0B] 
               outline-none transition-all text-sm"
              placeholder="Example@mail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] mt-1 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password */}
          <div>
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm  font-semibold text-[#111827]">
                Password
              </label>
              <span className="text-[10px] text-[#F59E0B] font-bold uppercase underline cursor-pointer">
                Forgot?
              </span>
            </div>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full px-5 py-3 border border-gray-100 rounded-xl mt-1.5 focus:border-[#F59E0B]  outline-none transition-all text-sm"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-[10px] mt-1 ml-1">
                {errors.password.message}
              </p>
            )}
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

        {/* google Login */}
        <div className="mt-8 text-center">
          <p className="text-[#111827] text-sm font-medium mb-4">
            Or continue with
          </p>
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

        {/* reg-link */}
        <p className="text-center text-gray-500 text-xs mt-8 font-medium">
          New here?{" "}
          <Link href="/register" className="text-[#F59E0B] font-semibold">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

// export default LoginPage;




export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}
