interface Props {
  from: "user" | "bot";
  children: React.ReactNode;
}

export function MessageBubble({ from, children }: Props) {
  const isUser = from === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} gap- mb-3`}>
      <div
        className={`
          max-w-[70%] px-4 py-2 rounded-xl text-sm leading-relaxed
          ${
            isUser
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-white text-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-bl-none"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}
