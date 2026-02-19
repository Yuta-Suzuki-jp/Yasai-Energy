import React from 'react';
import { ArrowRight, Zap, Leaf, Apple, Carrot } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-yasai-dark">
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yasai-orange/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yasai-orange/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-yasai-orange animate-pulse"></span>
              <span className="text-xs font-mono text-yasai-orange uppercase tracking-widest">新フレーバー: キャロットチャージ</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.9] tracking-tight">
              植物由来の <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yasai-orange to-yasai-yellow">
                エナジー革命
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-md font-light leading-relaxed">
              人工的な刺激にサヨナラを。YASAIは、有機人参と緑茶から生まれた、クリーンで持続可能なパワーをお届けします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-yasai-orange text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                スターターパックを購入
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                成分を見る
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-gray-500 font-mono uppercase">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                砂糖ゼロ
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                ヴィーガン
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                オーガニック
              </div>
            </div>
          </div>

          {/* Visual Content - The Can Graphic (CSS Rendered) - Resized Smaller & Positioned Lower */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative perspective-1000 translate-y-10 md:translate-y-16">
             {/* Image Container with Float Animation */}
             <div className="relative w-48 h-[360px] md:w-56 md:h-[420px] animate-float">
                
                {/* The Can Body */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#e0e0e0] via-[#f5f5f5] to-[#e0e0e0] rounded-[24px] shadow-2xl overflow-hidden border-t border-white/50 border-b border-black/20">
                  
                  {/* Metallic Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 pointer-events-none z-20"></div>
                  <div className="absolute left-[15%] top-0 bottom-0 w-[30px] bg-white/40 blur-md pointer-events-none z-20"></div>
                  
                  {/* Can Content */}
                  <div className="relative z-10 h-full flex flex-col items-center pt-12 pb-10 px-4">
                    
                    {/* Upper Text */}
                    <div className="text-center mb-6">
                       <p className="text-yasai-orange font-bold text-[10px] tracking-wider uppercase mb-0.5">Charge Vitamin.</p>
                       <p className="text-yasai-orange font-bold text-[10px] tracking-wider uppercase">Charge Energy.</p>
                    </div>

                    {/* Central Graphic */}
                    <div className="relative flex-1 w-full flex items-center justify-center">
                      <Zap className="w-16 h-16 text-yasai-orange fill-yasai-orange z-10" />
                      
                      {/* Floating Veggies */}
                      <Carrot className="absolute top-0 right-2 w-6 h-6 text-yasai-orange/80 stroke-1 rotate-12" />
                      <Leaf className="absolute bottom-4 left-2 w-6 h-6 text-yasai-orange/80 stroke-1 -rotate-12" />
                      <Apple className="absolute top-4 left-0 w-5 h-5 text-yasai-orange/60 stroke-1 -rotate-6" />
                      
                      {/* Decorative dots/shapes */}
                      <div className="absolute bottom-8 right-1 w-1.5 h-1.5 rounded-full bg-yasai-orange/60"></div>
                      <div className="absolute top-8 left-8 w-1 h-1 rounded-full bg-yasai-orange/60"></div>

                      <div className="absolute right-0 top-1/2 text-yasai-orange/80 font-bold text-[10px] rotate-90 origin-right translate-x-3">Energy</div>
                      <div className="absolute left-0 bottom-1/4 text-yasai-orange/80 font-bold text-[10px] -rotate-90 origin-left -translate-x-3">Vitamin</div>
                    </div>

                    {/* Bottom Logo */}
                    <div className="mt-auto text-center">
                      <h3 className="text-yasai-orange font-display font-bold text-2xl tracking-tighter">YASAI ENERGY</h3>
                    </div>

                  </div>
                </div>

                {/* Can Top (Lid) */}
                <div className="absolute -top-3 left-0 right-0 h-6 bg-[#d0d0d0] rounded-[50%] border-t border-white shadow-sm z-0"></div>
                <div className="absolute -top-1 left-2 right-2 h-3 bg-[#e5e5e5] rounded-[50%] border border-gray-400 z-10"></div>
                
                {/* Can Bottom */}
                <div className="absolute -bottom-2 left-1 right-1 h-5 bg-[#b0b0b0] rounded-[50%] -z-10 shadow-lg"></div>

             </div>

             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yasai-orange/20 rounded-full blur-[80px] -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;