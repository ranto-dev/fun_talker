import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";
import { TypingBubble } from "./TypingBubble";

async function sendToLocalModel(message: string): Promise<string> {
  const response = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_message: message }),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la requête au modèle local");
  }

  const data = await response.json();
  return data.bot_response;
}

export function ChatContainer() {
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string; typing?: boolean }[]
  >([]);

  async function sendMessage(text: string) {
    setMessages((m) => [...m, { from: "user", text }]);
    setMessages((m) => [...m, { from: "bot", text: "", typing: true }]);
    try {
      const botReply = await sendToLocalModel(text);
      setTimeout(() => {
        setMessages((m) => [
          ...m.slice(0, -1),
          { from: "bot", text: botReply },
        ]);
      }, 5000);
    } catch {
      setMessages((m) => [
        ...m.slice(0, -1),
        { from: "bot", text: "Erreur de connexion au modèle local." },
      ]);
    }
  }

  return (
    <div className=" sm:w-[80%] md:w-[65%]  lg:w-[45%] xl:w-[30%] flex flex-col border border-neutral-200/10  bg-neutral-50 dark:bg-neutral-900">
      <ChatHeader />

      <div className="flex-1 flex flex-col gap-4 overflow-y-auto p-8">
        {messages.map((msg, i) =>
          msg.typing ? (
            <TypingBubble key={i} />
          ) : (
            <MessageBubble key={i} from={msg.from}>
              {msg.text}
            </MessageBubble>
          )
        )}
      </div>

      <ChatInput onSubmit={sendMessage} />
    </div>
  );
}
