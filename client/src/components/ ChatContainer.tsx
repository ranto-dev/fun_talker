import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";

export function ChatContainer() {
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);

  function sendMessage(text: string) {
    setMessages((m) => [...m, { from: "user", text }]);

    // simulate bot reply
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Réponse IA en cours..." },
      ]);
    }, 600);
  }

  return (
    <div className=" sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[25%] border border-neutral-200/10 flex flex-col bg-neutral-50 dark:bg-neutral-900">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} from={msg.from}>
            {msg.text}
          </MessageBubble>
        ))}
      </div>

      <ChatInput onSubmit={sendMessage} />
    </div>
  );
}
