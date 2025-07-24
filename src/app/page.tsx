import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-purple-900 via-indigo-800 to-gray-800 p-6">
      <header className="w-full max-w-2xl flex flex-row items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold text-purple-300 tracking-tight">
            PromptLy
          </h1>
          <span className="text-sm text-purple-200">
            AI Task Splitter
          </span>
        </div>
      </header>

      <main className="flex flex-col items-center w-full max-w-lg bg-gray-800/90 rounded-2xl shadow-xl p-10 border border-purple-700/50">
        <h2 className="text-xl font-semibold text-white mb-4">
          Get started in 3 steps
        </h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-start gap-3">
            <span className="bg-purple-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">
              1
            </span>
            <span className="text-purple-100">
              Describe your goal or project.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-indigo-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">
              2
            </span>
            <span className="text-purple-100">
              AI breaks it into actionable tasks.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-pink-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">
              3
            </span>
            <span className="text-purple-100">
              Track and complete your to-dos.
            </span>
          </div>
        </div>
        <Link
          href="/prompt"
          className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 px-10 rounded-lg shadow-lg transition-all text-lg"
        >
          Start Now
        </Link>
      </main>

      <footer className="w-full max-w-2xl flex flex-row items-center justify-between mt-16 text-purple-300 text-xs">
        <p>&copy; {new Date().getFullYear()} PromptLy</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-300"
          >
            GitHub
          </a>
          <a
            href="mailto:support@promptly.app"
            className="hover:underline hover:text-pink-300"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}