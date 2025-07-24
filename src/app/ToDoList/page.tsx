"use client";
import React, { useEffect, useState } from "react";
import ToDoListSection from "../../../Components/ToDoList/ToDoListSection";
import { todo } from "@/models/todo";

function ToDoListpage() {
  const [tasks, setTasks] = useState<todo[]>([]);
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;

    if (!user) {
      // Redirect to login if no user is found
      window.location.href = "/auth/login";
      return;
    }

    const userId = user.id;

    const fetchTasks = async () => {
      try {
        const res = await fetch(`http://localhost:3000/todo/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Failed to fetch tasks");

        const data = await res.json();
        setTasks(data); // store tasks in state
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);
  // const items: todo[] = [
  //   {
  //     id: 1,
  //     title: "Buy groceries",
  //     status: "todo",
  //     createdAt: new Date("2025-07-15T10:00:00Z"),
  //     updatedAt: new Date("2025-07-15T10:00:00Z"),
  //   },
  //   {
  //     id: 2,
  //     title: "Finish report",
  //     status: "in-progress",
  //     createdAt: new Date("2025-07-14T14:30:00Z"),
  //     updatedAt: new Date("2025-07-15T09:00:00Z"),
  //   },
  //   {
  //     id: 3,
  //     title: "Call mom",
  //     status: "done",
  //     userId: 101,
  //     createdAt: new Date("2025-07-16T18:00:00Z"),
  //     updatedAt: new Date("2025-07-16T18:00:00Z"),
  //   },
  // ];
  return (
    <div className="container bg-amber-100 flex flex-row gap-2 w-screen h-screen p-1.5 pt-20">
      {/* <div className="self-start blur-3xl bg-purple w-full"></div> */}
      {/* Column 1 - Fresh gradient complement */}
      <div className="column flex-1 rounded-bl-3xl rounded-tr-3xl flex items-center justify-center mt-4 ml-1 mb-1 shadow-lg bg-gradient-to-br from-cyan-400 to-indigo-500">
        <div className="text-center p-4 text-gray-800">
          <div id="todo-root" className="w-full max-w-400">
            <ToDoListSection color="indigo" items={tasks} />
          </div>
        </div>
      </div>

      {/* Column 2 - Navbar-matching gradient */}
      <div className="column flex-1 flex rounded-br-3xl rounded-tl-3xl items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 mt-4 ml-1 mb-1 shadow-lg">
        <div className="text-center p-4 text-white">
          <h2 className="text-2xl font-bold mb-2">Second Column</h2>
          <p className="text-indigo-100">
            Matching your navbar&apos;s elegance
          </p>
        </div>
      </div>

      {/* Column 3 - Luxe deep gradient */}
      <div className="column flex-1 rounded-bl-3xl rounded-tr-3xl overflow-hidden relative bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 mt-4 ml-1 mb-1 shadow-lg mr-1">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/5 flex items-center justify-center">
          <div className="text-center p-4 text-white">
            <h2 className="text-2xl font-bold mb-2">Third Column</h2>
            <p className="text-purple-100">Deep luxurious tones</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoListpage;
