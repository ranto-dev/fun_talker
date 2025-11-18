export function ChatHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <h1 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
        Fun Talker
      </h1>
      <button className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
        😎🔥
      </button>
    </header>
  );
}
