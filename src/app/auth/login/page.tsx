"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const inputClass = `bg-gray-100 border text-gray-900 text-sm rounded-lg w-full py-2.5 px-4 shadow-md transition focus:outline-none ${
    error
      ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-500 shadow-red-300"
      : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
  }`;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.access_token);
      if (data.user) localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/prompt");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Clear any previous errors
    setError("");
    // Redirect to backend OAuth endpoint
    window.location.href = "http://localhost:3000/auth/google";
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

        {/* Google OAuth Button */}
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center cursor-pointer justify-center gap-3 mb-6 py-2.5 px-4 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.667-4.167-2.698-6.735-2.698-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.496 10-10 0-0.671-0.068-1.325-0.182-1.977h-9.818z" />
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Email/Password Form */}
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
            disabled={isLoading}
            className={`w-full py-3 px-5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold shadow-lg focus:ring-4 focus:ring-purple-200 transition ${
              isLoading
                ? "opacity-75 cursor-not-allowed"
                : "hover:from-purple-700 hover:to-blue-600"
            }`}
          >
            {isLoading ? "Signing In..." : "Sign In"}
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
