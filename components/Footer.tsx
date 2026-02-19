import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="font-display font-bold text-3xl tracking-tighter text-white">
              YASAI<span className="text-yasai-orange">.</span>
            </span>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              自然の力でエナジーを再定義。サステナブルで健康的、そして大胆に。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">CONTENTS</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-yasai-orange transition-colors">ABOUT</a></li>
              <li><a href="#concept" className="hover:text-yasai-orange transition-colors">CONCEPT</a></li>
              <li><a href="#products" className="hover:text-yasai-orange transition-colors">ITEM</a></li>
              <li><a href="#news" className="hover:text-yasai-orange transition-colors">NEWS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">LEGAL</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yasai-orange transition-colors">PRIVACY POLICY</a></li>
              <li><a href="#" className="hover:text-yasai-orange transition-colors">TERMS OF USE</a></li>
              <li><a href="#" className="hover:text-yasai-orange transition-colors">CONTACT</a></li>
              <li><a href="#" className="hover:text-yasai-orange transition-colors">特定商取引法に基づく表記</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">NEWSLETTER</h4>
            <p className="text-gray-500 text-sm mb-4">新作や割引情報をお届けします。</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="メールアドレス" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-yasai-orange w-full"
              />
              <button className="bg-yasai-orange text-black px-4 font-bold hover:bg-white transition-colors">
                GO
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2024 YASAI ENERGY INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 text-gray-600 text-xs uppercase">
            <a href="#" className="hover:text-white">PRIVACY</a>
            <a href="#" className="hover:text-white">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;