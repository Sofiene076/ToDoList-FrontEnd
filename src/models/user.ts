import { todo } from "./todo";

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  todos: todo[];
  createdAt: Date;
  updatedAt: Date;
  provider: string;
  providerId: string;
  role: "USER" | "ADMIN";
}
