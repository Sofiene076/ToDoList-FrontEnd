import { ReactNode } from "react";
import PromptNavbar from "../../../Components/NavBar/PromptNabar";

export default function Prompt({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full bg-gradient-to-tr from-purple-900 via-indigo-800 to-gray-800">
      <PromptNavbar />

      {children}
    </div>
  );
}
