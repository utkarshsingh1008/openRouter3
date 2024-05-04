'use client'
import { useState } from 'react';

type Message = {
  id: number;
  content: string;
  sender: 'user' | 'bot';
};

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleMessageSend = () => {
    if (inputValue.trim() === '') return;
    const newMessage: Message = {
      id: messages.length,
      content: inputValue,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
    // Here you can call your API to fetch bot response
    // and add it to the messages state
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <div style={{ marginBottom: '10px', overflowY: 'auto', height: '300px' }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              padding: '8px 12px',
              marginBottom: '8px',
              borderRadius: '6px',
              backgroundColor: message.sender === 'user' ? '#007bff' : '#f0f0f0',
              color: message.sender === 'user' ? '#fff' : '#333',
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: '1', padding: '8px', borderRadius: '4px', marginRight: '10px', border: '1px solid #ccc' }}
        />
        <button onClick={handleMessageSend} style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
