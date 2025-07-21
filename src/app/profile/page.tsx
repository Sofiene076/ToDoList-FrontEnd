"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ProfilePage() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  } | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // or sessionStorage

        if (!token) {
          setError("No authentication token found");
          setLoading(false);
          return;
        }
        const res = await fetch("http://localhost:3000/auth/profile", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          console.log("Profile data:", data);
          setUser(data);
          setEmail(data.email);
          setName(data.name);
        } else {
          setUser(null);
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
  }, []);
  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-teal-100 to-blue-100">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md border border-purple-100">
        <h2 className=" self-start text-4xl font-extrabold mb-8 text-center text-purple-800 tracking-tight drop-shadow">
          Profile
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center text-sm font-medium">
            {error}
          </p>
        )}

        <div className="space-y-6">
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
              value={name}
              disabled
              className="w-full bg-white/70 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition opacity-70 cursor-not-allowed"
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
              value={email}
              disabled
              className="w-full bg-white/70 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition opacity-70 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-purple-800 mt-8 bg-purple-50/70 rounded-lg px-4 py-3 shadow-inner hover:shadow-md transition-shadow duration-300">
          <Link href="/">
            <span className="text-purple-600 hover:text-teal-500 hover:underline font-semibold cursor-pointer transition-colors">
              Back to Home
            </span>
          </Link>
          <span>|</span>
          <Link href="/auth/logout">
            <span className="text-red-500 hover:text-red-700 hover:underline font-semibold cursor-pointer transition-colors">
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
