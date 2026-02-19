import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Subtle Gradient/Texture mimicking the veggie background in dark mode */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-transparent to-[#0F0F0F] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <p className="text-gray-500 text-xs tracking-[0.3em] font-light mb-8 font-display uppercase">( CONCEPT )</p>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight tracking-tight text-white mb-12">
            "攻める"から"馴染む"へ。<br />
            新しいエナジードリンク。
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              刺激・炭酸感・味の満足度はそのままに、<br />
              野菜・果実由来のエキスを配合することで、<br />
              "罪悪感の少ない飲用体験"を提供します。
            </p>
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Item 01 */}
          <div className="flex flex-col items-center group">
            <span className="text-6xl md:text-7xl font-display font-light text-yasai-orange mb-6 block group-hover:scale-110 transition-transform duration-300">01</span>
            <h3 className="text-xl font-bold text-white mb-4">美味しさ最優先</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              従来のエナドリの味域。<br />
              爽快感ある炭酸。<br />
              野菜や青臭さは完全排除。
            </p>
          </div>

          {/* Item 02 */}
          <div className="flex flex-col items-center group">
            <span className="text-6xl md:text-7xl font-display font-light text-yasai-orange mb-6 block group-hover:scale-110 transition-transform duration-300">02</span>
            <h3 className="text-xl font-bold text-white mb-4">健康成分配合</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              大麦若葉・フルーツエキス。<br />
              ビタミンB群・ビタミンC配合。<br />
              日常的な健康感をサポート。
            </p>
          </div>

          {/* Item 03 */}
          <div className="flex flex-col items-center group">
            <span className="text-6xl md:text-7xl font-display font-light text-yasai-orange mb-6 block group-hover:scale-110 transition-transform duration-300">03</span>
            <h3 className="text-xl font-bold text-white mb-4">しっかり覚醒</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              カフェインは従来の<br />
              エナジードリンクと同等。<br />
              効き目はそのまま。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;