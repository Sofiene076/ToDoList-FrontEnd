import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 p-6">
      <header className="w-full max-w-2xl flex flex-row items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-purple-300 tracking-tight drop-shadow-lg">
            PromptLy
          </h1>
          <span className="text-sm text-purple-200 tracking-wide">
            AI Task Splitter
          </span>
        </div>
      </header>

      <main className="flex flex-col items-center w-full max-w-lg bg-gray-800 rounded-3xl shadow-2xl p-12 border border-purple-700/60">
        <h2 className="text-2xl font-semibold text-white mb-6 tracking-wide">
          Get started in 3 easy steps
        </h2>

        <div className="flex flex-col gap-6 w-full">
          {[
            {
              number: 1,
              bg: "bg-purple-600",
              text: "Describe your goal or project.",
            },
            {
              number: 2,
              bg: "bg-indigo-500",
              text: "AI breaks it into actionable tasks.",
            },
            {
              number: 3,
              bg: "bg-pink-500",
              text: "Track and complete your to-dos.",
            },
          ].map(({ number, bg, text }) => (
            <div key={number} className="flex items-start gap-4">
              <span
                className={`${bg} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shadow-md`}
              >
                {number}
              </span>
              <p className="text-purple-100 text-lg leading-snug">{text}</p>
            </div>
          ))}
        </div>

        <Link
          href="/prompt"
          className="mt-10 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-4 px-12 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Start Now
        </Link>
      </main>

      <footer className="w-full max-w-2xl flex flex-row items-center justify-between mt-16 text-purple-300 text-xs tracking-wide select-none">
        <p>&copy; {new Date().getFullYear()} PromptLy</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:support@promptly.app"
            className="hover:underline hover:text-pink-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
