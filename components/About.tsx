import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-yasai-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-yasai-orange text-sm tracking-[0.2em] font-light mb-6 font-display uppercase">( ABOUT )</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight tracking-tight text-white">
            あなたのお悩みを<br />
            二つの要素で解決
          </h2>
        </div>

        {/* Dilemma Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mb-20">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-sm shadow-lg hover:bg-white/10 transition-all duration-300 flex flex-col justify-center">
            <span className="text-yasai-orange font-bold tracking-widest text-xs md:text-sm mb-6 block font-display uppercase">DILEMMA 01</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-snug text-white">
              エナジードリンクは<br />
              美味しいけど...
            </h3>
            <div className="space-y-3 text-gray-400 text-sm md:text-base font-medium leading-relaxed">
              <p>「効くのはわかるけど、健康への不安が強い」</p>
              <p>「毎日飲むのはちょっと...」という罪悪感。</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-sm shadow-lg hover:bg-white/10 transition-all duration-300 flex flex-col justify-center">
            <span className="text-yasai-orange font-bold tracking-widest text-xs md:text-sm mb-6 block font-display uppercase">DILEMMA 02</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-snug text-white">
              健康飲料は<br />
              安心だけど...
            </h3>
            <div className="space-y-3 text-gray-400 text-sm md:text-base font-medium leading-relaxed">
              <p>「野菜系ドリンクは良いけど美味しくない」</p>
              <p>「刺激も飲みごたえも物足りない」という不満。</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-medium tracking-tight text-gray-200">
            このギャップを埋めるために、<span className="text-yasai-orange font-bold">YASAI ENERGY</span>は生まれました。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;