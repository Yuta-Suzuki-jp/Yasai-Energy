import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

const ProductLineup: React.FC = () => {
  const products: Product[] = [
    {
      id: 'original',
      name: 'オリジナルブレンド',
      description: 'ほうれん草、ケール、リンゴ、レモン',
      ingredients: ['ほうれん草', 'ケール', '緑茶'],
      color: 'bg-yasai-green',
      accent: 'text-yasai-green',
      imageAlt: 'Green Can'
    },
    {
      id: 'red',
      name: 'レッドラッシュ',
      description: 'ビーツ、人参、ハイビスカス',
      ingredients: ['ビーツ', '高麗人参', 'ガラナ'],
      color: 'bg-yasai-red',
      accent: 'text-yasai-red',
      imageAlt: 'Red Can'
    },
    {
      id: 'yellow',
      name: 'ゴールデンスパーク',
      description: 'ターメリック、生姜、パイナップル',
      ingredients: ['ターメリック', '生姜', 'マテ茶'],
      color: 'bg-yasai-yellow',
      accent: 'text-yasai-yellow',
      imageAlt: 'Yellow Can'
    }
  ];

  const getHueRotate = (id: string) => {
    // Base image is Orange (approx hue 30)
    // We rotate the hue to match the flavor colors while keeping the silver can relatively neutral
    switch (id) {
      case 'original': return 'hue-rotate(120deg)'; // To Green
      case 'red': return 'hue-rotate(-30deg)'; // To Red
      case 'yellow': return 'hue-rotate(35deg)'; // To Yellow
      default: return 'none';
    }
  };

  return (
    <section id="products" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">フレーバー</h2>
            <p className="text-gray-400">あなたの燃料を選んでください。</p>
          </div>
          <a href="#" className="hidden md:block text-yasai-orange font-bold uppercase tracking-widest hover:underline">
            栄養成分表示を見る
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Card Container */}
              <div className="relative h-[500px] rounded-3xl bg-yasai-gray overflow-hidden border border-white/5 transition-all duration-500 hover:translate-y-[-10px]">
                
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${product.color}`}></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white">{product.name}</h3>
                    <p className={`font-mono text-sm tracking-wider mt-2 ${product.accent}`}>{product.description}</p>
                  </div>

                  <div className="self-center relative flex justify-center items-center h-64 w-full">
                    {/* Glow effect */}
                    <div className={`absolute w-32 h-32 ${product.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    
                    {/* Can Image with Color Filter */}
                    <img 
                        src="./yasai-can.png" 
                        alt={product.imageAlt}
                        className="h-full w-auto object-contain drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{ filter: getHueRotate(product.id) }}
                    />
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                       {product.ingredients.map((ing, i) => (
                           <span key={i} className="block text-xs font-mono text-gray-500 uppercase">{ing}</span>
                       ))}
                    </div>
                    <button className={`w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:${product.color} transition-colors`}>
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLineup;