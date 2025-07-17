import { User } from "./user";

export interface todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: number;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}
