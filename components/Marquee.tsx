import React from 'react';
import { Zap } from 'lucide-react';

const Marquee: React.FC = () => {
  const items = [
    "人工甘味料不使用",
    "100% 植物由来",
    "サステナブルなエナジー",
    "カフェインクラッシュなし",
    "グルテンフリー",
    "非遺伝子組み換え",
    "ケトジェニック対応"
  ];

  return (
    <div className="bg-yasai-orange py-4 overflow-hidden relative z-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <React.Fragment key={`${i}-${index}`}>
                <span className="text-black font-display font-bold text-xl md:text-2xl px-6 md:px-12 tracking-tight">
                  {item}
                </span>
                <Zap className="text-black fill-black w-6 h-6" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;