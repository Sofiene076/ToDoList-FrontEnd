"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";

export default function OAuthSuccess() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userJson = params.get("user");

    if (token && userJson) {
      try {
        // Store both token and user data
        localStorage.setItem("token", token);
        localStorage.setItem("user", userJson);

        // Clear URL parameters
        window.history.replaceState({}, "", "/auth/oauth-success");

        // Force refresh to ensure data is available
        window.location.href = "/prompt";
      } catch (e) {
        router.push("/login?error=storage_failed");
      }
    } else {
      router.push("/login?error=missing_data");
    }
  }, []);

  return (
    <>
      <Loading />
    </>
  );
}
