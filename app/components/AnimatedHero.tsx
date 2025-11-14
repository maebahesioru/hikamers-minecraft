'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, Gamepad2, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// ギャラリー画像のリスト（今後追加可能）
const galleryImages = [
  '/gallery/screenshot-1.jpg',
  // 今後画像を追加する場合はここに追加
];

export function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // ランダムに画像を選択
    const randomImage = galleryImages[Math.floor(Math.random() * galleryImages.length)];
    setBackgroundImage(randomImage);
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden h-[calc(100vh-4rem)] flex items-center">
      {/* Background Image with Blur */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="ヒカマーズマイクラの背景"
            fill
            className="object-cover"
            style={{ filter: 'blur(8px) brightness(0.7)' }}
            priority
            quality={75}
          />
          {/* Multi-layer gradient overlay for smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-green-950/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-transparent to-green-900/40"></div>
        </div>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-15"></div>
      
      <div className="relative w-full h-full flex items-center">
        <div className="w-full px-4">
          {/* Main Title */}
          <div className="text-center mb-8 md:mb-12">
            <div 
              className={`inline-block mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
            >
              <div className="bg-green-500/20 backdrop-blur-md border-2 border-green-400/50 rounded-lg px-6 py-3">
                <p className="text-green-300 font-semibold text-base md:text-lg flex items-center gap-2 justify-center">
                  <Sparkles size={20} className="animate-pulse" />
                  NOW OPEN
                </p>
              </div>
            </div>
            
            <h1 
              className={`text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 drop-shadow-[0_0_40px_rgba(34,197,94,0.6)] leading-tight transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              ヒカマーズマイクラ
            </h1>
            
            <p 
              className={`text-2xl md:text-3xl lg:text-4xl text-green-200 mb-8 md:mb-10 font-medium transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              統合版&Java版どちらも参加可能
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-12">
            <div 
              className={`bg-black/40 backdrop-blur-md border border-green-500/30 rounded-lg p-6 md:p-8 text-center hover:border-green-400/50 transition-all hover:scale-105 duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Gamepad2 className="mx-auto mb-3 text-green-400" size={40} />
              <h3 className="text-white font-semibold mb-2 text-lg md:text-xl">クロスプレイ対応</h3>
              <p className="text-green-200 text-sm md:text-base">Java版・統合版どちらでもOK</p>
            </div>
            
            <div 
              className={`bg-black/40 backdrop-blur-md border border-green-500/30 rounded-lg p-6 md:p-8 text-center hover:border-green-400/50 transition-all hover:scale-105 duration-700 delay-[800ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Users className="mx-auto mb-3 text-green-400" size={40} />
              <h3 className="text-white font-semibold mb-2 text-lg md:text-xl">充実のプラグイン</h3>
              <p className="text-green-200 text-sm md:text-base">便利機能が盛りだくさん</p>
            </div>
            
            <div 
              className={`bg-black/40 backdrop-blur-md border border-green-500/30 rounded-lg p-6 md:p-8 text-center hover:border-green-400/50 transition-all hover:scale-105 duration-700 delay-[900ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <ExternalLink className="mx-auto mb-3 text-green-400" size={40} />
              <h3 className="text-white font-semibold mb-2 text-lg md:text-xl">Webマップ</h3>
              <p className="text-green-200 text-sm md:text-base">リアルタイムで世界を確認</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link 
              href="/server-info"
              className="inline-block bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-lg font-bold text-xl md:text-2xl transition-all hover:scale-105 shadow-2xl shadow-green-900/50"
            >
              サーバー情報を見る
            </Link>
            <Link 
              href="/features"
              className="inline-block bg-green-700 hover:bg-green-600 text-white px-10 py-5 rounded-lg font-bold text-xl md:text-2xl transition-all hover:scale-105 shadow-2xl shadow-green-900/50"
            >
              機能一覧を見る
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div 
            className={`text-center mt-8 md:mt-12 animate-bounce transition-all duration-700 delay-[1100ms] ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="inline-block text-green-400">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
