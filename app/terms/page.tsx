import { FileText, Server, MessageCircle, MessageSquare, Palette, Shield } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AnimatedSection } from '../components/AnimatedContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約',
  description: 'ヒカマーズマイクラの利用規約、サーバールール、Discordルール、チャットガイドライン、二次創作ガイドラインをご確認ください。',
};

export default function TermsPage() {
  const sections = [
    {
      title: '利用規約',
      description: 'サービス全体の基本的な利用規約',
      icon: FileText,
      href: '/terms/general',
      color: 'text-blue-400',
      borderColor: 'border-blue-700/50 hover:border-blue-500/50',
    },
    {
      title: 'Minecraftサーバー個別規定',
      description: 'マインクラフトサーバー固有の規定',
      icon: Server,
      href: '/terms/minecraft',
      color: 'text-green-400',
      borderColor: 'border-green-700/50 hover:border-green-500/50',
    },
    {
      title: 'サーバールール',
      description: 'ゲーム内で守るべきルール',
      icon: Shield,
      href: '/terms/server-rules',
      color: 'text-yellow-400',
      borderColor: 'border-yellow-700/50 hover:border-yellow-500/50',
    },
    {
      title: 'Discordルール',
      description: 'Discordコミュニティのルール',
      icon: MessageCircle,
      href: '/terms/discord',
      color: 'text-purple-400',
      borderColor: 'border-purple-700/50 hover:border-purple-500/50',
    },
    {
      title: 'チャットガイドライン',
      description: 'チャットでのコミュニケーションガイド',
      icon: MessageSquare,
      href: '/terms/chat',
      color: 'text-pink-400',
      borderColor: 'border-pink-700/50 hover:border-pink-500/50',
    },
    {
      title: '二次創作ガイドライン',
      description: '動画配信・二次創作に関するガイドライン',
      icon: Palette,
      href: '/terms/fanwork',
      color: 'text-orange-400',
      borderColor: 'border-orange-700/50 hover:border-orange-500/50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              利用規約・ガイドライン
            </h1>
            <p className="text-green-200 text-lg">
              ヒカマーズマイクラをご利用いただく前に、必ずお読みください
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <AnimatedSection key={section.href} delay={index * 50}>
                <Link
                  href={section.href}
                  className={`block bg-black/40 backdrop-blur-md rounded-lg p-6 border ${section.borderColor} transition-all hover:scale-105 group`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className={`${section.color} flex-shrink-0`} size={32} />
                    <div className="flex-1">
                      <h2 className={`text-2xl font-bold ${section.color} mb-2`}>
                        {section.title}
                      </h2>
                      <p className="text-white">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-12 bg-black/40 backdrop-blur-md rounded-lg p-6 border border-red-700/50">
            <h2 className="text-2xl font-bold text-red-400 mb-4">重要なお知らせ</h2>
            <ul className="text-white space-y-2">
              <li>• 規約に違反した場合、警告なしにBANされる可能性があります</li>
              <li>• 規約は予告なく変更される場合があります</li>
              <li>• サーバーを利用することで、これらの規約に同意したものとみなされます</li>
              <li>• 不明な点がある場合は、管理者にお問い合わせください</li>
            </ul>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
