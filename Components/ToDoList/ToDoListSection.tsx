import { todo } from "@/models/todo";
import React from "react";

function ToDoListSection({ color, items }: { color: string; items: todo[] }) {
  return (
    <div className={`bg-${color}-200 p-4 rounded-lg shadow-lg w-full`}>
      <h2 className={`text-2xl font-bold text-${color}-900 mb-4`}>
        To-Do List
      </h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`bg-white p-3 rounded border-l-4 border-${color}-500`}
          >
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoListSection;
