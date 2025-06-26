import React, { useState } from "react";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";

import "../../app/globals.css";

const Chat = dynamic(() => import("../../app/components/chat"), { ssr: false });

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

interface TypingIndicator {
  id: string;
  isTyping: boolean;
}

const defaultMessage: string =
  "Lo siento, tuve un problema para responder. ¿Podemos intentarlo de nuevo?";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: uuidv4(), text: "Hola, ¿cómo estás hoy?", isUser: false },
  ]);
  const [typingIndicator, setTypingIndicator] =
    useState<TypingIndicator | null>(null);

  const handleSendMessage = async (text: string) => {
    // Crear y agregar el mensaje del usuario
    const newMessage: Message = {
      id: uuidv4(),
      text,
      isUser: true,
    };

    setMessages([...messages, newMessage]);

    const indicatorId = uuidv4();
    setTypingIndicator({ id: indicatorId, isTyping: true });

    try {
      // Obtener la respuesta de la API
      debugger;
      const botResponseText = await getBotResponse(text);

      setTypingIndicator(null);

      // Agregar la respuesta del bot
      const botResponse: Message = {
        id: uuidv4(),
        text: botResponseText,
        isUser: false,
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error:", error);

      // Quitar el indicador de escritura
      setTypingIndicator(null);

      // Mensaje de error
      const errorMessage: Message = {
        id: uuidv4(),
        text: "Lo siento, algo salió mal. ¿Podemos intentarlo de nuevo?",
        isUser: false,
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const getBotResponse = async (userMessage: string) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        return defaultMessage;
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error obteniendo respuesta:", error);
      return defaultMessage;
    } finally {
    }
  };

  return (
    <Chat
      messages={messages}
      typingIndicator={typingIndicator}
      onSendMessage={handleSendMessage}
    />
  );
};

export default ChatPage;
