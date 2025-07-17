import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-50 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6">
      <header className="w-full max-w-2xl flex flex-row items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300 tracking-tight">
            PromptLy
          </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            AI Task Splitter
          </span>
        </div>
        {/* <Image src="/promptly-logo.svg" alt="PromptLy Logo" width={48} height={48} /> */}
      </header>

      <main className="flex flex-col items-center w-full max-w-lg bg-white/90 dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-blue-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Get started in 3 steps
        </h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-start gap-3">
            <span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">
              1
            </span>
            <span className="text-gray-700 dark:text-gray-200">
              Describe your goal or project.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-pink-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">
              2
            </span>
            <span className="text-gray-700 dark:text-gray-200">
              AI breaks it into actionable tasks.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-yellow-400 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">
              3
            </span>
            <span className="text-gray-700 dark:text-gray-200">
              Track and complete your to-dos.
            </span>
          </div>
        </div>
        <Link
          href="/prompt"
          className="mt-8 bg-blue-600 hover:bg-pink-500 text-white font-semibold py-3 px-10 rounded-lg shadow-lg transition-all text-lg"
        >
          Start Now
        </Link>
      </main>

      <footer className="w-full max-w-2xl flex flex-row items-center justify-between mt-16 text-gray-500 dark:text-gray-400 text-xs">
        <p>&copy; {new Date().getFullYear()} PromptLy</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href="mailto:support@promptly.app"
            className="hover:underline hover:text-pink-500"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
