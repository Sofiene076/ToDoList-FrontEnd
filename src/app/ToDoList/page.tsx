import React from "react";
import ToDoListSection from "../../../Components/ToDoList/ToDoListSection";
import { todo } from "@/models/todo";

function page() {
const items: todo[] = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, eggs, bread, and fruits",
    completed: false,
    createdAt: new Date("2025-07-15T10:00:00Z"),
    updatedAt: new Date("2025-07-15T10:00:00Z"),
  },
  {
    id: 2,
    title: "Finish report",
    description: "Complete the Q2 financial report",
    completed: true,
    createdAt: new Date("2025-07-14T14:30:00Z"),
    updatedAt: new Date("2025-07-15T09:00:00Z"),
  },
  {
    id: 3,
    title: "Call mom",
    description: "Check in and say hello",
    completed: false,
    userId: 101,
    createdAt: new Date("2025-07-16T18:00:00Z"),
    updatedAt: new Date("2025-07-16T18:00:00Z"),
  },
];
  return (
    <div className="container bg-cyan-950 flex flex-row gap-1.5 w-screen h-screen p-1.5">
      {/* Column 1 with amber background */}
      <div className="column bg-amber-400 flex-1 rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <div id="todo-root" className="w-full max-w-400">
            <ToDoListSection color="amber" items={items} />
          </div>
        </div>
      </div>

      {/* Column 2 with gradient background */}
      <div className="column flex-1 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="text-center p-4 text-white">
          <h2 className="text-2xl font-bold mb-2">Second Column</h2>
          <p>
            This column features a modern gradient background for visual appeal.
          </p>
        </div>
      </div>

      {/* Column 3 with image background */}
      <div className="column flex-1 rounded-lg overflow-hidden relative">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1ee7811d-ca42-4e37-950c-bb698d7c565c.png"
          alt="Abstract geometric pattern with cyan and amber colors matching the theme"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center p-4 text-white">
            <h2 className="text-2xl font-bold mb-2">Third Column</h2>
            <p>
              This column combines imagery with overlay text for maximum impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
