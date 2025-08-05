"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { todo } from "@/models/todo";
import { useRouter } from "next/navigation";

interface TaskItemProps {
  task: todo;
  status: string;
  index: number;
  onDelete: (id: number) => void;
}

const TaskItem = React.memo(
  ({ task, status, index, onDelete }: TaskItemProps) => (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-gray-700/50 cursor-grab hover:bg-gray-700/70 p-3 rounded-lg border-l-4 ${
            status === "todo"
              ? "border-purple-500"
              : status === "in-progress"
              ? "border-blue-500"
              : "border-green-500"
          } transition-all duration-200 ${
            status === "done" ? "line-through opacity-80" : ""
          }`}
          aria-label={`Task: ${task.title}, Status: ${status}`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-white">{task.title}</h3>
              <span className="text-xs text-gray-400 ml-2">
                {new Date(task.updatedAt).toLocaleDateString("en-us", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
            </div>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-400 hover:text-red-300 p-3 rounded-full hover:bg-gray-600/50 cursor-pointer transition-colors"
              aria-label={`Delete task: ${task.title}`}
            >
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </li>
      )}
    </Draggable>
  )
);

TaskItem.displayName = "TaskItem";

function ToDoListpage() {
  const [tasks, setTasks] = useState<todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const userStr = localStorage.getItem("user");
      const user = userStr ? JSON.parse(userStr) : null;

      if (!user) {
        router.push("/auth/login");
        return;
      }

      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/auth/login");
        return;
      }

      const res = await fetch(`http://localhost:3000/todo/${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleDelete = useCallback(
    async (taskId: number) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/auth/login");
          return;
        }

        const res = await fetch(`http://localhost:3000/todo/${taskId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to delete task");
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    },
    [router]
  );

  const handleDragEnd = useCallback(
    async (result: DropResult) => {
      const { source, destination } = result;

      if (!destination) return;
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      )
        return;

      const newStatus = destination.droppableId as
        | "todo"
        | "in-progress"
        | "done";
      const draggedTask = tasks.find(
        (task) => task.id.toString() === result.draggableId
      );

      if (!draggedTask) return;

      // Create updated task with new status and current timestamp
      const updatedTask = {
        ...draggedTask,
        status: newStatus,
        updatedAt: new Date().toISOString(),
      };

      // Optimistic update
      setTasks((prev) =>
        prev.map((task) => (task.id === draggedTask.id ? updatedTask : task))
      );

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/auth/login");
          return;
        }

        const res = await fetch(
          `http://localhost:3000/todo/update/${draggedTask.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              status: newStatus,
              updatedAt: updatedTask.updatedAt,
            }),
          }
        );

        if (!res.ok) throw new Error("Failed to update task status");

        // Refresh the task list to ensure consistency
        fetchTasks();
      } catch (error) {
        console.error("Error updating task status:", error);
        // Revert on error
        setTasks((prev) =>
          prev.map((task) => (task.id === draggedTask.id ? draggedTask : task))
        );
      }
    },
    [tasks, router, fetchTasks]
  );

  const { doneTasks, inProgressTasks, toDoTasks } = useMemo(
    () => ({
      doneTasks: tasks.filter((task) => task.status === "done"),
      inProgressTasks: tasks.filter((task) => task.status === "in-progress"),
      toDoTasks: tasks.filter((task) => task.status === "todo"),
    }),
    [tasks]
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-white">Loading tasks...</div>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-gradient-to-br from-gray-9  00 to-gray-800 pt-24 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-purple-300 my-8 text-center">
            To-Do List
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* To Do Column */}
            <Droppable droppableId="todo">
              {(provided) => (
                <div
                  className="bg-gray-800 rounded-lg shadow-lg border border-purple-700/30 p-6 h-max"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2 className="text-xl font-semibold text-purple-300 mb-4 pb-2 border-b border-purple-700/50">
                    To Do
                  </h2>
                  <ul className="space-y-5">
                    {toDoTasks.map((task, index) => (
                      <TaskItem
                        key={task.id}
                        task={task}
                        status="todo"
                        index={index}
                        onDelete={handleDelete}
                      />
                    ))}
                    {toDoTasks.length === 0 && (
                      <p className="text-gray-500 italic">No tasks to do</p>
                    )}
                    {provided.placeholder}
                  </ul>
                </div>
              )}
            </Droppable>

            {/* In Progress Column */}
            <Droppable droppableId="in-progress">
              {(provided) => (
                <div
                  className="bg-gray-800 rounded-lg shadow-lg border border-blue-500/30 p-6 h-max"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2 className="text-xl font-semibold text-blue-300 mb-4 pb-2 border-b border-blue-500/50">
                    In Progress
                  </h2>
                  <ul className="space-y-5">
                    {inProgressTasks.map((task, index) => (
                      <TaskItem
                        key={task.id}
                        task={task}
                        status="in-progress"
                        index={index}
                        onDelete={handleDelete}
                      />
                    ))}
                    {inProgressTasks.length === 0 && (
                      <p className="text-gray-500 italic">
                        No tasks in progress
                      </p>
                    )}
                    {provided.placeholder}
                  </ul>
                </div>
              )}
            </Droppable>

            {/* Done Column */}
            <Droppable droppableId="done">
              {(provided) => (
                <div
                  className="bg-gray-800 rounded-lg shadow-lg border border-green-500/30 p-6 h-max"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2 className="text-xl font-semibold text-green-300 mb-4 pb-2 border-b border-green-500/50">
                    Completed
                  </h2>
                  <ul className="space-y-5">
                    {doneTasks.map((task, index) => (
                      <TaskItem
                        key={task.id}
                        task={task}
                        status="done"
                        index={index}
                        onDelete={handleDelete}
                      />
                    ))}
                    {doneTasks.length === 0 && (
                      <p className="text-gray-500 italic">No completed tasks</p>
                    )}
                    {provided.placeholder}
                  </ul>
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default ToDoListpage;
