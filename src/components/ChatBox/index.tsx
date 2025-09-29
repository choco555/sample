import React, { useState } from 'react';

interface ChatBoxProps {
  placeholder?: string;
  onSubmit?: (message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ 
  placeholder = "What do you want to know?", 
  onSubmit 
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && onSubmit) {
      onSubmit(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="w-full max-w-[800px] max-[768px]:max-w-full mx-auto my-20 px-4">
      <div className="relative">
        {/* Input Field */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className="w-full h-[150px] bg-gray-800 text-white placeholder-gray-400 px-6 py-4 pr-20 pb-16 rounded-[30px] border border-gray-700 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 transition-all duration-200 text-base resize-none"
        ></textarea>
        
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="absolute bottom-4 right-4 bg-gray-300 hover:bg-gray-200 active:bg-gray-400 text-gray-700 rounded-full p-3 transition-all duration-200 flex items-center justify-center group"
          disabled={!message.trim()}
        >
          {/* Arrow Icon */}
          <svg
            className="w-5 h-5 transform group-hover:translate-y-[-1px] transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
