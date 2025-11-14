import { Lock, Languages, ArrowUpDown, Fish, Skull, Armchair, Users as UsersIcon, Pickaxe, Moon, MessageSquare, Map, Lightbulb, Package } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プラグイン・データパック',
  description: 'ヒカマーズマイクラで利用できる便利な機能一覧。チェストロック、自動日本語変換、エレベーター、全自動釣り、墓チェスト、座るモーション、肩車、鉱石一括破壊など13種類以上のプラグイン。',
  keywords: ['マインクラフト', 'プラグイン', 'データパック', '便利機能', 'チェストロック', '自動釣り', '墓チェスト'],
  openGraph: {
    title: 'プラグイン・データパック | ヒカマーズマイクラ',
    description: '便利な機能が13種類以上！チェストロック、自動日本語変換、エレベーター、全自動釣りなど。',
    url: 'https://hikamerscraft.f5.si/features',
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">プラグイン・データパック</h1>
          <p className="text-green-200 text-lg">ヒカマーズマイクラで利用できる便利な機能一覧</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            slug="chest-lock"
            icon={<Lock className="text-green-400" size={32} />}
            title="チェスト・かまどロック"
            description="しゃがむ＋触るでチェストやかまどのロックができます。"
          />

          <FeatureCard
            slug="auto-japanese"
            icon={<Languages className="text-green-400" size={32} />}
            title="自動日本語変換"
            description="ローマ字でチャット打つと自動で日本語訳されます。"
          />

          <FeatureCard
            slug="iron-elevator"
            icon={<ArrowUpDown className="text-green-400" size={32} />}
            title="鉄ブロックエレベーター"
            description="同じXZ座標に鉄ブロックを置くことでエレベーターが作れます。(ジャンプで上昇・しゃがみで下降)"
          />

          <FeatureCard
            slug="auto-fishing"
            icon={<Fish className="text-green-400" size={32} />}
            title="全自動釣り"
            description="釣り竿を投げるだけで全自動で釣りをしてくれます。"
          />

          <FeatureCard
            slug="grave-chest"
            icon={<Skull className="text-green-400" size={32} />}
            title="墓チェスト"
            description="盗難対策のため死亡してもアイテムが飛び散らずに墓チェストが生成されます。制限時間は10分です。"
          />

          <FeatureCard
            slug="sitting"
            icon={<Armchair className="text-green-400" size={32} />}
            title="座るモーション"
            description="ハーフブロック・階段ブロック等に触ることで座るモーションができます。"
          />

          <FeatureCard
            slug="piggyback"
            icon={<UsersIcon className="text-green-400" size={32} />}
            title="肩車モーション"
            description="他プレイヤーに触ることで肩車モーションができます。"
          />

          <FeatureCard
            slug="vein-miner"
            icon={<Pickaxe className="text-green-400" size={32} />}
            title="鉱石一括破壊"
            description="しゃがみながら鉱石を掘ることで一括破壊ができます。"
          />

          <FeatureCard
            slug="one-player-sleep"
            icon={<Moon className="text-green-400" size={32} />}
            title="一人でスキップ"
            description="一人だけでもベットで寝ることで夜を過ごせます。"
          />

          <FeatureCard
            slug="discord-chat"
            icon={<MessageSquare className="text-green-400" size={32} />}
            title="Discord連携チャット"
            description="#📮-チャット でリアルタイムのマイクラチャットがDiscord上で閲覧できます。Discordからマイクラにチャットを送ることも可能です。"
          />

          <FeatureCard
            slug="webmap"
            icon={<Map className="text-green-400" size={32} />}
            title="WebMap"
            description="リアルタイムのマイクラ地上マップがWeb上で閲覧できます。"
          />

          <FeatureCard
            slug="dynamic-light"
            icon={<Lightbulb className="text-green-400" size={32} />}
            title="ダイナミックライト"
            description="松明を持っているだけで周りが明るくなります。"
          />

          <FeatureCard
            slug="true-crafter"
            icon={<Package className="text-green-400" size={32} />}
            title="真のクラフターモード"
            description="バランス調整のため、「真のクラフターモード」データパックを導入しています。"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function FeatureCard({ 
  slug,
  icon, 
  title, 
  description 
}: { 
  slug: string;
  icon: React.ReactNode; 
  title: string; 
  description: React.ReactNode;
}) {
  return (
    <a 
      href={`/features/${slug}`}
      className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-700/50 hover:border-green-500/50 transition-all hover:scale-105 block"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-green-200">{description}</p>
          <span className="text-green-400 text-sm mt-2 inline-block">詳しく見る →</span>
        </div>
      </div>
    </a>
  );
}
