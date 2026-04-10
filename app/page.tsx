import { BookOpen, ArrowRight, Server, HelpCircle, Camera, FileText } from 'lucide-react';
import Link from 'next/link';
import { AnimatedHero } from './components/AnimatedHero';
import { AnimatedSection } from './components/AnimatedContent';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DiscordWidget } from './components/DiscordWidget';
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

        {/* Q&A and Terms Row */}
        <AnimatedSection delay={200}>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Q&A Link */}
            <Link 
              href="/faq"
              className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-green-700/50 hover:border-green-500/50 transition-all hover:scale-105 group"
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

            {/* Terms Link */}
            <Link 
              href="/terms"
              className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all hover:scale-105 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="text-blue-400" size={32} />
                    <h2 className="text-3xl font-bold text-blue-400">利用規約・ガイドライン</h2>
                  </div>
                  <p className="text-white text-lg mb-2">
                    サーバールール、Discordルールなど
                  </p>
                  <p className="text-blue-300 text-sm">
                    必ずお読みください
                  </p>
                </div>
                <ArrowRight className="text-blue-400 flex-shrink-0 group-hover:translate-x-2 transition-transform" size={24} />
              </div>
            </Link>
          </div>
        </AnimatedSection>

        {/* Discord Widget */}
        <AnimatedSection delay={300}>
          <DiscordWidget />
        </AnimatedSection>

        {/* Vote Banner */}
        <AnimatedSection delay={400}>
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-700/50 mt-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4 text-center">サーバーに投票しよう！</h2>
            <p className="text-white text-center mb-6">
              投票してサーバーを応援してください。ランキング上位を目指しています！
            </p>
            <div className="flex justify-center">
              <a 
                href="https://minecraft.jp/servers/hikamerscraft.f5.si"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform"
              >
                <img 
                  src="https://minecraft.jp/servers/hikamerscraft.f5.si/banner/1/560x95.png"
                  alt="ヒカマーズマイクラに投票"
                  className="rounded-lg shadow-lg"
                  width={560}
                  height={95}
                />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


