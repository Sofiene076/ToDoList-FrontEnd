"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
export default function ConnectedUser() {
  const [name, setName] = useState("?");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        const firstChar = user.name?.charAt(0).toUpperCase();
        setName(firstChar || "?");
        return;
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const initial = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div
        className="bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-400 hover:scale-105 transition-all duration-300 text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold shadow-2xl cursor-pointer text-lg border-4 border-white ring-2 ring-purple-300"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          boxShadow:
            "0 4px 24px 0 rgba(128,0,128,0.25), 0 1.5px 4px 0 rgba(0,0,0,0.10)",
        }}
      >
        <span className="drop-shadow-lg">{initial}</span>
      </div>
      <div
        className={`absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-2xl z-20 py-2 border border-purple-100 transition-all duration-300 origin-top-right ${
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
        style={{
          transformOrigin: "top right",
        }}
      >
        <button className="block w-full text-left px-5 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors font-medium flex items-center gap-2">
          <svg
            className="w-5 h-5 text-purple-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <Link href={"/profile"}>Profile </Link>
        </button>
        <button className="block w-full text-left px-5 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors font-medium flex items-center gap-2">
          <svg
            className="w-5 h-5 text-shadow-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
            />
          </svg>
          <Link href="/auth/logout">Logout</Link>
        </button>
      </div>
    </div>
  );
}
