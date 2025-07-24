import { User } from "./user";

export interface todo {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
  userId?: number;
  user?: User;
  createdAt: Date;
  updatedAt: Date;
}
