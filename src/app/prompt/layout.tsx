import { ReactNode } from "react";
import PromptNavbar from "../../../Components/NavBar/PromptNabar";

export default function Prompt({ children }: { children: ReactNode }) {
  return (
    <section className="bg-[rgb(252,247,255)]">
      <PromptNavbar />
      <main className="relative">{children}</main>
    </section>
  );
}
