"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
        credentials: "include",
      });

      if (res.ok) {
        router.push("/auth/login");
      } else {
        const data = await res.json();
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-teal-100 to-blue-100">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md border border-purple-100">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-800 tracking-tight drop-shadow">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center text-sm font-medium">
            {error}
          </p>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-white/70 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
              required
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full bg-white/70 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-base font-semibold text-purple-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-white/70 placeholder:text-gray-400 text-purple-900 border border-purple-200 rounded-xl px-4 py-3 shadow focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-base font-semibold text-purple-900"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat password"
                className={`w-full bg-white/70 placeholder:text-gray-400 text-purple-900 border ${
                  password !== confirmPassword && confirmPassword
                    ? "border-red-400 focus:border-red-400 focus:ring-red-300"
                    : "border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                } rounded-xl px-4 py-3 shadow transition`}
                required
              />
              {confirmPassword && (
                <span
                  className={`absolute right-3 top-1/2 -translate-y-1/2 text-xl ${
                    password === confirmPassword
                      ? "text-green-500"
                      : "text-red-400"
                  }`}
                >
                  {password === confirmPassword ? "✔️" : "❌"}
                </span>
              )}
            </div>
            {password !== confirmPassword && confirmPassword && (
              <p className="mt-2 text-sm text-red-400 font-medium">
                Passwords do not match
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-teal-400 hover:from-purple-600 hover:to-teal-500 text-white font-bold cursor-pointer rounded-xl py-3 shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Register
          </button>
        </form>

        <div className="flex items-center justify-center gap-1 text-sm text-purple-800 mt-8 bg-purple-50/70 rounded-lg px-4 py-3 shadow-inner hover:shadow-md transition-shadow duration-300">
          <span>Already have an account?</span>
          <Link href="/auth/login">
            <span className="text-purple-600 hover:text-teal-500 hover:underline font-semibold cursor-pointer transition-colors">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
