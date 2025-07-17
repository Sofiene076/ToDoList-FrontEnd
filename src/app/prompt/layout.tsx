import { ReactNode } from "react";
import PromptNavbar from "../../../Components/PromptNabar";

export default function Prompt({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <PromptNavbar />
      <main className="flex-1 flex items-center justify-center px-4 bg-white">
      {children}
      </main>
    </div>
  );
}
