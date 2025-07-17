"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const inputClass = `bg-gray-100 border text-gray-900 text-sm rounded-lg w-full py-2.5 px-4 shadow-md transition focus:outline-none ${
    error
      ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-500 shadow-red-300"
      : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
  }`;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        const access_token = data?.access_token;
        const user = data?.user;
        console.log("Login successful:", data);
        if (!access_token) {
          setError("Access token not returned from server.");
          return;
        }
        localStorage.setItem("token", access_token);
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        router.push("/prompt");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred while logging in");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-100 to-white">
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-purple-700 tracking-tight drop-shadow">
          Welcome Back
        </h2>
        {error && (
          <div className="mb-5">
            <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-center font-medium shadow">
              {error}
            </p>
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-700 tracking-wide"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={inputClass}
              placeholder="andrew@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
              autoComplete="email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold text-gray-700 tracking-wide"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold shadow-lg cursor-pointer hover:from-purple-700 hover:to-blue-600 focus:ring-4 focus:ring-purple-200 transition"
          >
            Sign In
          </button>
        </form>
        <div className="flex flex-col items-center justify-center gap-2 mt-8 text-sm text-gray-700">
          <span>New here?</span>
          <Link href="/auth/register">
            <span className="text-purple-600 hover:text-purple-800 hover:underline font-semibold transition-colors cursor-pointer">
              Create an account
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
