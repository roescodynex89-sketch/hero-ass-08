"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // ✅ protect this page
  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [user, isPending, router]);

  if (isPending || !user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className=" mx-auto  flex items-center justify-center bg-[#FFFBEB] px-4">
      <div className="bg-[#FFFBEB] p-8 rounded-2xl shadow-xl text-center w-full max-w-sm ">
        
        {/* Image */}
        {user.image && (
          <Image
            src={user.image}
            alt="user"
            width={80}
            height={80}
            className="rounded-full mx-auto mb-4"
          />
        )}

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">
          {user.name}
        </h2>

        {/* Email */}
        <p className="text-gray-500 text-sm mt-1">
          {user.email}
        </p>

        {/* Update button (bonus) */}
        <button
          onClick={() => router.push("/update-profile")}
          className="mt-6 bg-[#F59E0B] text-white px-4 py-2 rounded-lg"
        >
          Update Info
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
