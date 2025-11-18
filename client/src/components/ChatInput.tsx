import { useState } from "react";

export function ChatInput({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex gap-3"
    >
      <input
        className="
          flex-1 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 
          text-neutral-700 dark:text-neutral-200
          border border-neutral-300 dark:border-neutral-700
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
        placeholder="Envoyer un message…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ➤
      </button>
    </form>
  );
}
