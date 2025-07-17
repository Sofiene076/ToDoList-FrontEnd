import PromptNavbar from "../../../Components/PromptNabar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cyan-950 grid grid-cols-3 items-center gap-1.5 w-screen h-screen">
    <PromptNavbar />
     {children}
    </div>
  );
}
