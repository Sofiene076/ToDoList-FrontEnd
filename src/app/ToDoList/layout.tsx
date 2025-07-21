import PromptNavbar from "../../../Components/NavBar/PromptNabar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" grid grid-cols-2 items-center gap-1.5 w-screen h-screen">
      <PromptNavbar />
      {children}
    </div>
  );
}
