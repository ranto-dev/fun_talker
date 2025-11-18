import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";

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
  return data.bot_response; // <- très important : correspond à ta structure JSON
}

export function ChatContainer() {
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);

  async function sendMessage(text: string) {
    // Afficher le message utilisateur
    setMessages((m) => [...m, { from: "user", text }]);

    // Ajouter une bulle "typing..."
    setMessages((m) => [...m, { from: "bot", text: "⋯" }]);

    try {
      const botReply = await sendToLocalModel(text);

      // Remplace la bulle "⋯" par la réponse réelle
      setMessages((m) => [
        ...m.slice(0, -1), // supprime la bulle typing
        { from: "bot", text: botReply },
      ]);
    } catch (error) {
      setMessages((m) => [
        ...m.slice(0, -1),
        {
          from: "bot",
          text: "❌ Erreur de connexion au modèle local." + error,
        },
      ]);
    }
  }

  return (
    <div className="w-[35%] flex flex-col bg-neutral-50 dark:bg-neutral-900">
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
