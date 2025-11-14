import { Server, Globe, Hash, Gamepad2, Code, ExternalLink, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { InfoCard } from '../components/InfoCard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サーバー情報',
  description: 'ヒカマーズマイクラの接続情報。IPアドレス: hikamerscraft.f5.si、Java版ポート: 25565、統合版ポート: 19132、ゲーマータグ: hikamaniserver。対応バージョン1.7.10～1.21.10。',
  keywords: ['マインクラフト', 'サーバー情報', 'IPアドレス', '接続方法', 'hikamerscraft', 'ポート番号', 'ゲーマータグ'],
  openGraph: {
    title: 'サーバー情報 | ヒカマーズマイクラ',
    description: 'IPアドレス: hikamerscraft.f5.si。統合版&Java版どちらも参加可能。接続方法、対応プラットフォーム、技術情報を掲載。',
    url: 'https://hikamerscraft.f5.si/server-info',
  },
};

export default function ServerInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">サーバー情報</h1>
          <p className="text-green-200 text-lg">ヒカマーズマイクラへの接続情報</p>
        </div>

        {/* Connection Info */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Server className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">接続情報</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title="サーバー名" value="自由(なんでも記入可)" />
            <InfoCard title="IPアドレス" value="hikamerscraft.f5.si" copyable />
            <InfoCard title="ポート番号(Java版)" value="25565" subtitle="基本未記入でOK" />
            <InfoCard title="ポート番号(統合版)" value="19132" />
            <InfoCard title="ゲーマータグ(統合版)" value="hikamaniserver" copyable />
            <InfoCard title="サーバーバージョン(Java)" value="1.21.10" subtitle="※古いバージョン(1.7.10~1.21.10)でも入れます。" />
          </div>
        </section>

        {/* Platform Support */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Gamepad2 className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">対応プラットフォーム</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Java版</h3>
              <ul className="space-y-2 text-green-200">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>PC (Windows, Mac, Linux)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>バージョン 1.7.10 ~ 1.21.10 対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>ポート番号は基本的に不要</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">統合版 (Bedrock Edition)</h3>
              <ul className="space-y-2 text-green-200">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Windows 10/11, Xbox, PlayStation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Nintendo Switch, iOS, Android</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>ポート番号: 19132</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WebMap */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">Webマップ</h2>
          </div>
          
          <p className="text-white mb-6 text-lg">
            リアルタイムでサーバーの地図を確認できます。プレイヤーの位置や建築物をブラウザから閲覧可能です。
          </p>

          <a 
            href="http://hikamerscraft.f5.si" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ExternalLink size={20} />
            Webmapを開く
          </a>
        </section>

        {/* Server Specs Link */}
        <Link 
          href="/server-specs"
          className="block bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50 hover:border-green-500/50 transition-all hover:scale-105 group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="text-green-400" size={32} />
                <h2 className="text-3xl font-bold text-green-400">サーバースペック</h2>
              </div>
              <p className="text-white text-lg mb-2">
                ハードウェア・ソフトウェア構成の詳細
              </p>
              <p className="text-green-300 text-sm">
                CPU: Intel N100 | RAM: 32GB | PurPurMC 1.21.10
              </p>
            </div>
            <ArrowRight className="text-green-400 flex-shrink-0 group-hover:translate-x-2 transition-transform" size={24} />
          </div>
        </Link>

        {/* Technical Info */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">技術情報</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">サーバー仕様</h3>
              <p className="text-white">
                基本的にJava版の仕様で動作しています。トラップや装置を作る際はJava版の仕様を参考にしてください。
              </p>
            </div>

            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">バージョン互換性</h3>
              <p className="text-white">
                古いバージョン（1.7.10以降）でも接続可能ですが、最新バージョン（1.21.10）での接続を推奨します。
              </p>
            </div>

            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">クロスプレイ</h3>
              <p className="text-white">
                Java版とBedrock版（統合版）のプレイヤーが同じサーバーで一緒に遊べます。
              </p>
            </div>
          </div>
        </section>

        {/* Connection Guide Link */}
        <Link 
          href="/how-to-connect"
          className="block bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-green-700/50 hover:border-green-500/50 transition-all hover:scale-105 group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Hash className="text-green-400" size={32} />
                <h2 className="text-3xl font-bold text-green-400">接続方法</h2>
              </div>
              <p className="text-white text-lg mb-2">
                Java版・統合版の詳しい接続手順とトラブルシューティング
              </p>
              <p className="text-green-300 text-sm">
                画像付きで分かりやすく解説
              </p>
            </div>
            <ArrowRight className="text-green-400 flex-shrink-0 group-hover:translate-x-2 transition-transform" size={24} />
          </div>
        </Link>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
