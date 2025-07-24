import React from "react";

interface Task {
  title: string;
  status: "todo" | "in-progress" | "completed";
  description?: string;
}

function ResponsePrompt({ tasks }: { tasks: Task[] }) {
  if (tasks.length === 0) return null;

  return (
    <div className="w-full mx-auto bg-gradient-to-br from-purple-50/80 via-blue-50/80 to-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-100/70 mb-20">
      <h2 className=" text-3xl text-violet-600 text-cyan-700 mb-6 tracking-tight text-center font-mono font-extrabold">
        Generated To-Do List
      </h2>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-shadow shadow-md hover:shadow-xl
              ${
                task.status === "todo"
                  ? "bg-yellow-50/80 border-yellow-300"
                  : task.status === "in-progress"
                  ? "bg-blue-50/80 border-blue-300"
                  : "bg-green-50/80 border-green-300"
              }
            `}
          >
            <span
              className="flex-shrink-0 w-3 h-3 rounded-full"
              style={{
                background:
                  task.status === "todo"
                    ? "#FBBF24"
                    : task.status === "in-progress"
                    ? "#3B82F6"
                    : "#22C55E",
              }}
            />
            <span className="font-medium text-lg text-gray-800 flex-grow">
              {task.title}
            </span>
            <span
              className={
                "text-sm px-3 py-1 rounded-full font-semibold " +
                (task.status === "todo"
                  ? "bg-yellow-100 text-yellow-700"
                  : task.status === "in-progress"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700")
              }
            >
              {task.status.replace("-", " ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResponsePrompt;
