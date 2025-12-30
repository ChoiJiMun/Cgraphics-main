
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageSquare, X, Minimize2, Maximize2 } from 'lucide-react';
import { chatWithGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const PortfolioChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I'm Alex's AI assistant. Ask me anything about their design work, process, or availability!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await chatWithGemini([...messages, userMessage]);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "I'm having trouble responding." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3"
        >
          <Sparkles size={24} />
          <span className="hidden md:inline font-medium text-sm pr-2">Ask Alex's AI</span>
        </button>
      ) : (
        <div className={`bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 border border-gray-100 ${isMinimized ? 'h-16 w-64' : 'h-[500px] w-80 md:w-96'}`}>
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-wider">Design AI Assistant</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsMinimized(!isMinimized)} className="text-gray-400 hover:text-black">
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black">
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat Body */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 no-scrollbar bg-white">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-black text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-2 rounded-2xl flex gap-1 items-center">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
                <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about my design process..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 px-5 pr-12 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 disabled:opacity-50 transition-all"
                  >
                    <Send size={14} />
                  </button>
                </div>
                <p className="text-[10px] text-gray-400 mt-3 text-center uppercase tracking-widest font-medium">Powered by Gemini AI</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioChat;
