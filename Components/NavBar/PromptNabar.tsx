import Link from "next/link";
import ConnectedUser from "../ConnectedUser";

export default function PromptNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-800/90 via-indigo-900/90 to-gray-900/90 backdrop-blur-md text-white px-8 py-4 flex items-center justify-between shadow-lg border-b border-purple-700/50">
      <div className="flex items-center space-x-4">
        <Link href="/prompt">
          <span className="text-2xl font-extrabold tracking-tight text-purple-300 hover:text-white transition-colors duration-200 cursor-pointer drop-shadow-lg">
            Promptly
          </span>
        </Link>
      </div>
      <nav className="flex items-center space-x-6">
        <Link
          href="/features"
          className="hover:text-purple-300 transition-colors duration-200 font-medium"
        >
          Features
        </Link>
        <Link
          href="/about"
          className="hover:text-purple-300 transition-colors duration-200 font-medium"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-purple-300 transition-colors duration-200 font-medium"
        >
          Contact
        </Link>
        <ConnectedUser />
      </nav>
    </header>
  );
}
