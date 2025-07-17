"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.replace("/auth/login"); // Redirect to login page
  }, [router]);

  return null;
}
