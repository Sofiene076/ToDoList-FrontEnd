"use client";
import { useState } from "react";
import ResponsePrompt from "../../../Components/promptResponse/ResponsePrompt";
import Link from "next/link";

interface Task {
  title: string;
  status: "todo" | "in-progress" | "completed";
}

export default function PromptPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showActionButton, setShowActionButton] = useState(false);

  const handleExportClick = async () => {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      alert("You must be logged in to export tasks.");
      return;
    }
    const user = userStr ? JSON.parse(userStr) : null;
    console.log("Exporting tasks for user:", user);
    console.log("Tasks to export:", tasks);
    try {
      const res = await fetch("http://localhost:3000/todo/createfromexport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          tasks,
          userId: user.id,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to export tasks");
      }
      const result = await res.json();
      console.log("Exported tasks:", result);
    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to export tasks. Try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResponse("");
    setLoading(true);

    try {
      // Replace this URL with your AI endpoint
      const res = await fetch("http://localhost:3000/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paragraph: prompt }),
      });
      setPrompt("");
      if (!res.ok) throw new Error("Failed to get tasks");
      const data = await res.json();

      setTasks(data.tasks || data);
      setResponse(data.response || "Tasks generated successfully");
      setShowActionButton(true);
    } catch (err) {
      setError("Something went wrong. Please try again!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start p-6 min-h-screen w-full pt-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 backdrop-blur-2xl text-white">
        {/* Action Button */}
      {showActionButton && (
        <Link href="/todolist">
          <button
            onClick={handleExportClick}
            className="absolute top-28 right-8 z-40 flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 shadow-lg hover:shadow-purple-500/60 transition-all duration-300 animate-fade-in hover:scale-[1.08] border border-purple-400/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white drop-shadow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="hidden sm:inline">Export Tasks</span>
            <span className="absolute -right-2 -top-2 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
              {tasks.length}
            </span>
          </button>
        </Link>
      )}

      {/* Main Content */}
      <div className="w-full max-w-4xl mb-24">
        <ResponsePrompt tasks={tasks} />

        {response && !tasks.length && (
          <div className="mt-4 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-2xl p-6 text-white shadow-inner border border-purple-700/60 backdrop-blur-md animate-slide-up">
            <span className="block font-semibold text-purple-300 mb-2">
              AI Response:
            </span>
            <span className="whitespace-pre-line">{response}</span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="fixed inset-x-0 bottom-0 flex justify-center pb-8">
        <div className="w-full max-w-4xl rounded-3xl p-6 mx-2">
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-5"
          >
            <div className="relative w-full">
              <textarea
                className="w-full border border-purple-500/40 rounded-2xl p-5 text-lg text-gray-900 focus:ring-4 focus:ring-purple-500/60 pr-16 resize-none transition-all duration-300 shadow-md focus:shadow-purple-500/30 bg-white/80 backdrop-blur placeholder:text-gray-500"
                rows={3}
                placeholder="Type your question or prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
                disabled={loading}
              />
              <button
                type="submit"
                className="absolute top-1/2 -translate-y-1/2 right-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-60"
                disabled={loading}
                aria-label="Submit"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="absolute left-0 w-full flex justify-center">
              <div className="bg-rose-100/90 border border-rose-400 text-rose-900 px-6 py-3 rounded-xl shadow-lg font-medium text-center max-w-xl animate-slide-up">
                {error}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
        @keyframes slide-up {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
