import Link from "next/link";
import ConnectedUser from "../ConnectedUser";

export default function PromptNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0  bg-gradient-to-r from-purple-800 via-indigo-900 to-gray-900 text-white px-8 py-4 flex items-center justify-between shadow-lg border-b border-purple-700">
      <div className="flex items-center space-x-4">
        <Link href="/prompt">
          <span className="text-2xl font-extrabold tracking-tight text-purple-300 hover:text-white transition-colors duration-200 cursor-pointer drop-shadow-lg">
            Promptly
          </span>
        </Link>
        {/* <span className="ml-1 px-2 py-0.5 rounded bg-purple-700 text-xs font-semibold tracking-wide shadow-sm">
          Beta
        </span> */}
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
