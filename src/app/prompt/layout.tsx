import { ReactNode } from "react";
import PromptNavbar from "../../../Components/NavBar/PromptNabar";

export default function Prompt({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <PromptNavbar />
      <main >
        {children}
      </main>
    </div>
  );
}
