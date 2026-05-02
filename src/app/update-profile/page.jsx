"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    setLoading(false);

    if (error) {
      alert(error.message || "Update failed ");
    } else {
      alert("Profile updated successfully! ");
      router.push("/my-profile");
      router.refresh();
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FFFBEB] px-4 py-12">
      <div className="w-full max-w-md bg-[#FFFBEB] p-8 rounded-3xl shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#111827] uppercase tracking-tight">
            Update Profile
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            Update your account details
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-[11px] font-bold text-[#111827]   mb-2 ml-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none transition-all text-sm bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#111827]  mb-2 ml-1">
              Profile Image URL
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none transition-all text-sm bg-gray-50"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#111827] text-white py-4 rounded-xl font-bold text-sm uppercase hover:bg-amber-600 transition-all active:scale-95 shadow-md"
            >
              {loading ? "Saving..." : "Update Information"}
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="w-full  text-[#111827] text-[11px] font-bold  mt-4 hover:text-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
