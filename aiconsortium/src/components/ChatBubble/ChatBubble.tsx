import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import './ChatBubble.css';
import axios from 'axios';

interface Message {
  text: string;
  sender: string;
  isLoading?: boolean;
}

// Loading animation component
const LoadingDots = () => (
  <div className="loading-dots">
    <div className="loading-dot"></div>
    <div className="loading-dot"></div>
    <div className="loading-dot"></div>
  </div>
);

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! How can I help you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message to chat
    const userMessage = inputValue;
    setMessages(prev => [...prev, { text: userMessage, sender: "user" }]);
    setInputValue('');

    try {
      // Show typing indicator
      setMessages(prev => [...prev, { text: "...", sender: "bot", isLoading: true }]);

      // Format chat history as a single string
      const chatHistory = messages.map(msg =>
        `${msg.sender === 'user' ? 'User' : 'AI'}: ${msg.text}`
      ).join('\n');

      // Make API call to the new endpoint with updated structure
      const response = await axios.post('http://localhost:8000/chat/chat', {
        chat_history: chatHistory,
        query: userMessage
      });

      // Remove typing indicator and add bot response
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => !msg.isLoading);
        return [...filteredMessages, { text: response.data.message, sender: "bot" }];
      });
    } catch (error: any) {
      console.error('Error communicating with chat service:', error);

      // Extract error message from the response if available
      const errorMessage = error.response?.data?.error ||
        "Sorry, I couldn't connect to the AI service. Please try again later.";

      // Remove typing indicator and add error message
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => !msg.isLoading);
        return [...filteredMessages, { text: errorMessage, sender: "bot" }];
      });
    }
  };

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`chat-bubble-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="chat-bubble-overlay">
          <div className="chat-bubble-header">
            <h3>AI Assistant</h3>
            <button className="chat-bubble-close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-bubble-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-bubble-message ${message.sender}`}>
                {message.isLoading ? <LoadingDots /> : message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="chat-bubble-input-container" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="chat-bubble-input"
            />
            <button type="submit" className="chat-bubble-send-btn">Send</button>
          </form>
        </div>
      )}
      <button className="chat-bubble-button" onClick={toggleChat}>
        <MessageCircle className="chat-bubble-icon" />
      </button>
    </div>
  );
};

export default ChatBubble;
