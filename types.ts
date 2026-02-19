export interface Product {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  color: string;
  accent: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot',
  SYSTEM = 'system'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}
