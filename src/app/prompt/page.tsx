"use client";
import { useState, useEffect } from "react";
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
  // const [count, setCount] = useState(0);
  // const [isConnected, setIsConnected] = useState(false);
  const handleExportClick = async () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      alert("You must be logged in to export tasks.");
      return;
    }
    const user = userStr ? JSON.parse(userStr) : null;
    try {
      const res = await fetch("http://localhost:3000/todo/createfromexport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <div className="flex flex-col items-center justify-start p-6 min-h-screen w-full mt-20">
      {/* Show Action Button here once tasks are generated */}
      {showActionButton && (
        <Link href="/todolist">
          {" "}
          <button
            onClick={handleExportClick}
            className="absolute top-27 right-3/16 transform -translate-x-1/2 z-40 bg-gray-300/21 backdrop-blur-md border border-purple-200 shadow-2xl hover:shadow-purple-900/40 hover:text-amber-100 text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-purple-0 transition-all duration-450 flex items-center  animate-slide-down hover:scale-[1.02] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-600"
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
            {/* <span>Export Tasks</span> */}
            <span className="absolute -right-2 -top-2 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
              {tasks.length}
            </span>
          </button>
        </Link>
      )}
      {/* Main content area */}
      <div className="w-full max-w-4xl mb-24 ">
        {" "}
        {/* Space for fixed prompt */}
        <ResponsePrompt tasks={tasks} />
        {response && !tasks.length && (
          <div className="mt-2   bg-gradient-to-br from-purple-50/70 to-indigo-50/70 rounded-xl p-6 text-gray-900 shadow-inner border border-purple-100/70 backdrop-blur">
            <span className="block font-semibold text-purple-700 mb-2">
              AI Response:
            </span>
            <span className="whitespace-pre-line">{response}</span>
          </div>
        )}
      </div>
      {/* Fixed prompt input */}
      <div className="fixed inset-x-0 bottom-0 flex justify-center pb-8 bg-gradient-to-t from-white via-white/80 to-transparent mt-1/3 ">
        <div className="w-full max-w-4xl rounded-3xl  p-6 mx-2 border-none items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-5"
          >
            <div className="relative w-full items-center">
              <textarea
                className="w-full border border-gray-300 rounded-xl p-5 text-lg text-gray-800 focus:ring-2 focus:ring-purple-500 pr-16 resize-none transition-shadow shadow-md focus:shadow-xl bg-white/60 backdrop-blur placeholder:text-gray-400 h-30"
                rows={2}
                placeholder="Type your question or prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
                disabled={loading}
                // style={{ minHeight: 40, maxHeight: 90 }}
              />
              <button
                type="submit"
                className="absolute top-1/3 cursor-pointer -translate-y-1/2 right-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-3 rounded-full shadow-xl hover:scale-105 hover:from-purple-700 hover:to-indigo-600 transition-all duration-150 flex items-center justify-center disabled:opacity-60"
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
            <div
              className="absolute left-0 w-full flex justify-center top"
              style={{ top: "-4.5rem" }}
            >
              <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-xl shadow-lg font-medium text-center max-w-xl animate-slide-up">
                {error}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from {
            transform: translateY(60px);
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
