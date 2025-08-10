"use client";
import { User } from "@/models/user";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [provider, setProvider] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found");
          setLoading(false);
          router.push("/auth/login");
          return;
        }

        const res = await fetch("http://localhost:3000/auth/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setFormData((prev) => ({
            ...prev,
            id: data.sub,
            name: data.name,
            email: data.email,
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          }));
          setProvider(data.provider || null);

          if (data.provider) {
            router.push("/profile");
          }
        } else {
          setError("Failed to fetch profile");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("An error occurred while fetching your profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate passwords
    if (formData.newPassword !== formData.confirmNewPassword) {
      setError("New passwords do not match");
      setFormData((prev) => ({
        ...prev,
        newPassword: "",
        confirmNewPassword: "",
      }));
      return;
    }
    // If changing password, current password is required
    if (formData.newPassword && !formData.currentPassword) {
      setError("Current password is required to change password");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found");
        return;
      }

      // Verify we have a valid ID
      if (!formData.id) {
        setError("User ID not found");
        return;
      }
      //   const payload = {
      //     email: formData.email,
      //     name: formData.name,
      //   };
      const payload: Record<string, string> = {
        name: formData.name,
        email: formData.email,
      };
      if (formData.newPassword) {
        payload.currentPassword = formData.currentPassword; // For verification
        payload.password = formData.newPassword; // New password to set
      }

      console.log("Updating profile with payload:", payload);
      const res = await fetch(
        `http://localhost:3000/auth/profile/${formData.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      setSuccess("Profile updated successfully!");
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }));
      router.push("/auth/login");
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(err.message || "An error occurred while updating your profile");
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }));
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (provider) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md border border-purple-100">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-800 tracking-tight drop-shadow">
          Edit Profile
        </h2>

        {error && (
          <div className="flex items-start gap-3 p-4 mb-4 text-sm text-red-800 bg-red-100 border border-red-200 rounded-lg shadow animate-fade-in">
            <svg
              className="w-5 h-5 text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5zm0 6a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0V12.75z"
                clipRule="evenodd"
              />
            </svg>
            <p className="flex-1">{error}</p>
            <button
              onClick={() => setError("")}
              className="text-red-600 hover:text-red-800 transition"
            >
              &times;
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-base font-semibold text-purple-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/90 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
              required
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-purple-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/90 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="currentPassword"
              className="block mb-2 text-base font-semibold text-purple-900"
            >
              Current Password (required for password changes)
            </label>
            <input
              type="password"
              id="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full bg-white/90 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
              autoComplete="current-password"
            />
          </div>

          {formData.currentPassword && (
            <div>
              <label
                htmlFor="newPassword"
                className="block mb-2 text-base font-semibold text-purple-900"
              >
                New Password (leave blank to keep current)
              </label>
              <input
                type="password"
                id="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full bg-white/90 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
                autoComplete="new-password"
              />
            </div>
          )}

          {formData.newPassword && (
            <div>
              <label
                htmlFor="confirmNewPassword"
                className="block mb-2 text-base font-semibold text-purple-900"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                className="w-full bg-white/90 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
                autoComplete="new-password"
              />
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-xl font-semibold shadow-md transition-colors cursor-pointer bg-gradient-to-r from-purple-500 to-teal-400 hover:from-purple-600 hover:to-teal-500 text-white"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="flex-1 px-6 py-3 rounded-xl font-semibold shadow-md transition-colors cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
