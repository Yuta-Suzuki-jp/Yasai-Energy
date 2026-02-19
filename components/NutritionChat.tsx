import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage, ChatSender } from '../types';
import { sendMessageToGemini } from '../services/gemini';

const NutritionChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "こんにちは！Dr. Yasai 🥕 です。成分や健康効果について何でも聞いてください！",
      sender: ChatSender.BOT,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: ChatSender.USER,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: ChatSender.BOT,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-yasai-orange text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Modal */}
      <div 
        className={`fixed bottom-8 right-4 md:right-8 w-[90vw] md:w-[400px] h-[500px] bg-yasai-gray border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-yasai-orange p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-black rounded-full text-white">
              <Bot size={18} />
            </div>
            <div>
               <h3 className="font-bold text-black text-sm">Dr. Yasai AI</h3>
               <p className="text-black/70 text-xs flex items-center gap-1">
                 <span className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></span>
                 オンライン
               </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-black hover:bg-black/10 p-1 rounded">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.sender === ChatSender.USER
                    ? 'bg-white text-black rounded-tr-none'
                    : 'bg-white/10 text-white rounded-tl-none border border-white/5'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-2 h-2 bg-yasai-orange rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-yasai-orange rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-yasai-orange rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-yasai-gray border-t border-white/10">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="栄養について聞く..."
              className="w-full bg-black/50 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-yasai-orange placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yasai-orange rounded-full text-black hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="flex items-center gap-1 justify-center mt-2">
            <Sparkles size={10} className="text-gray-500" />
            <p className="text-[10px] text-gray-500 text-center">Powered by Gemini AI</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default NutritionChat;