import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import './ChatBubble.css';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue('');

    // Here you would integrate with your API
    // For now, let's just add a placeholder response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "This is a placeholder response. API integration will be implemented later.", sender: "bot" }
      ]);
    }, 1000);
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
                {message.text}
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
