'use client';
import React, { useState, useRef, useEffect } from "react";
import { isMobile } from 'react-device-detect';
import styles from "./chat.module.css";
import Link from "next/link";
import Sidebar from "../sidebar";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

interface TypingIndicator {
  id: string;
  isTyping: boolean;
}

interface ChatProps {
  messages: Message[];
  typingIndicator: TypingIndicator | null;
  onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ messages, typingIndicator, onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingIndicator]);

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`${isMobile ? styles.chatContainerMobile : styles.chatContainer}`}>
      <div className={styles.header}>
        <Link href={"/"} className={styles.backButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <h1 className={styles.title}>Lumo</h1>
        <div className={styles.menuWrapper}>
          <button
            className={styles.menuButton}
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Abrir menú"
            type="button"
          >
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </button>
          <Sidebar showMenu={showMenu} setShowMenu={setShowMenu}/>
        </div>
      </div>
      
      <div className={styles.messages}>
        {messages.length > 0 ? (
          messages.map((message) => (
            <span 
              key={message.id} 
              className={`${styles.message} ${message.isUser ? styles.userMessage : styles.botMessage}`}
            >
              {message.text}
            </span>
          ))
        ) : (
          <>
            <span className={`${styles.message} ${styles.userMessage}`}>
              Hola, ¿cómo estás hoy?
            </span>
          </>
        )}
        
        {typingIndicator && (
          <div className={`${styles.message} ${styles.botMessage} ${styles.typingIndicator}`}>
            <div className={styles.typingDot}></div>
            <div className={styles.typingDot}></div>
            <div className={styles.typingDot}></div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <form className={styles.inputArea} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribí un mensaje..."
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;