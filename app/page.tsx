import { BookOpen, ArrowRight, Server, HelpCircle, Camera } from 'lucide-react';
import Link from 'next/link';
import { AnimatedHero } from './components/AnimatedHero';
import { AnimatedSection } from './components/AnimatedContent';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ホーム',
  description: 'ヒカマーズマイクラは統合版&Java版どちらも参加可能なマインクラフトサーバー。便利なプラグイン13種類以上、クロスプレイ対応、24時間稼働。IPアドレス: hikamerscraft.f5.si',
  openGraph: {
    title: 'ヒカマーズマイクラ - 統合版&Java版対応マインクラフトサーバー',
    description: '統合版&Java版どちらも参加可能なマインクラフトサーバー。便利なプラグイン13種類以上、クロスプレイ対応。',
    url: 'https://hikamerscraft.f5.si',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      {/* Header */}
      <Header />
      
      {/* Hero Header */}
      <AnimatedHero />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Quick Links */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Server Info Link */}
            <Link 
              href="/server-info"
              className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-green-700/50 hover:border-green-500/50 transition-all hover:scale-105 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Server className="text-green-400" size={32} />
                    <h2 className="text-3xl font-bold text-green-400">サーバー情報</h2>
                  </div>
                  <p className="text-white text-lg mb-2">
                    接続方法・IPアドレス・対応プラットフォーム
                  </p>
                  <p className="text-green-300 font-mono text-sm">
                    hikamerscraft.f5.si
                  </p>
                </div>
                <ArrowRight className="text-green-400 flex-shrink-0 group-hover:translate-x-2 transition-transform" size={24} />
              </div>
            </Link>

            {/* Features Link */}
            <Link 
              href="/features"
              className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-green-700/50 hover:border-green-500/50 transition-all hover:scale-105 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="text-green-400" size={32} />
                    <h2 className="text-3xl font-bold text-green-400">プラグイン・データパック</h2>
                  </div>
                  <p className="text-white text-lg">
                    便利な機能が13種類以上！詳細はこちら
                  </p>
                </div>
                <ArrowRight className="text-green-400 flex-shrink-0 group-hover:translate-x-2 transition-transform" size={24} />
              </div>
            </Link>
          </div>
        </AnimatedSection>

        {/* Gallery Link */}
        <AnimatedSection delay={100}>
          <Link 
            href="/gallery"
            className="block bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50 hover:border-green-500/50 transition-all hover:scale-105 group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="text-green-400" size={32} />
                  <h2 className="text-3xl font-bold text-green-400">ギャラリー</h2>
                </div>
                <p className="text-white text-lg mb-2">
                  プレイヤーの建築物や冒険の様子を紹介
                </p>
                <p className="text-green-300 text-sm">
                  #ヒカマーズマイクラ で投稿しよう！
                </p>
              </div>
              <ArrowRight className="text-green-400 flex-shrink-0 group-hover:translate-x-2 transition-transform" size={24} />
            </div>
          </Link>
        </AnimatedSection>

        {/* Q&A Link */}
        <AnimatedSection delay={200}>
          <Link 
            href="/faq"
            className="block bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-green-700/50 hover:border-green-500/50 transition-all hover:scale-105 group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle className="text-green-400" size={32} />
                  <h2 className="text-3xl font-bold text-green-400">よくある質問（Q&A）</h2>
                </div>
                <p className="text-white text-lg mb-2">
                  接続方法、ゲームプレイ、プラグインなど
                </p>
                <p className="text-green-300 text-sm">
                  20以上の質問と回答を掲載
                </p>
              </div>
              <ArrowRight className="text-green-400 flex-shrink-0 group-hover:translate-x-2 transition-transform" size={24} />
            </div>
          </Link>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


