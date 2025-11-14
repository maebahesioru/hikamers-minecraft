import { notFound } from 'next/navigation';
import { Lock, Languages, ArrowUpDown, Fish, Skull, Armchair, Users as UsersIcon, Pickaxe, Moon, MessageSquare, Map, Lightbulb, Package } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import type { Metadata } from 'next';

interface Feature {
  slug: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: React.ReactNode;
  usage?: React.ReactNode[];
  tips?: React.ReactNode[];
}

const features: Feature[] = [
  {
    slug: 'chest-lock',
    title: 'チェスト・かまどロック',
    icon: <Lock className="text-green-400" size={48} />,
    description: 'しゃがむ＋触るでチェストやかまどのロックができます。',
    details: (
      <>
        <p>チェストやかまどを保護し、他のプレイヤーからアイテムを守ることができます。</p>
        <p>ロックされたチェストは、ロックしたプレイヤーのみが開けることができます。</p>
      </>
    ),
    usage: [
      'しゃがみながらチェストまたはかまどを右クリック',
      'ロックが完了すると通知が表示されます',
      '再度しゃがみながら右クリックでロック解除',
    ],
    tips: [
      '大切なアイテムは必ずロックしましょう',
      'かまどもロックできるので、精錬中のアイテムも安全です',
    ],
  },
  {
    slug: 'auto-japanese',
    title: '自動日本語変換',
    icon: <Languages className="text-green-400" size={48} />,
    description: 'ローマ字でチャット打つと自動で日本語訳されます。',
    details: (
      <>
        <p>ローマ字入力で日本語チャットができる便利な機能です。</p>
        <p>日本語入力が難しい環境でも、スムーズにコミュニケーションが取れます。</p>
      </>
    ),
    usage: [
      'チャット欄にローマ字で入力',
      '自動的に日本語に変換されて送信されます',
      '例: "konnichiwa" → "こんにちは"',
    ],
    tips: [
      '長音は "ou" や "oo" で入力できます',
      '小文字は "x" を前につけます（例: "xa" → "ぁ"）',
    ],
  },
  {
    slug: 'iron-elevator',
    title: '鉄ブロックエレベーター',
    icon: <ArrowUpDown className="text-green-400" size={48} />,
    description: '同じXZ座標に鉄ブロックを置くことでエレベーターが作れます。',
    details: (
      <>
        <p>鉄ブロックを縦に並べるだけで、簡単にエレベーターが作れます。</p>
        <p>レッドストーン回路不要で、高層建築に最適です。</p>
      </>
    ),
    usage: [
      '同じXZ座標に鉄ブロックを縦に配置',
      '鉄ブロックの上に立つ',
      'ジャンプキーで上昇',
      'しゃがみキーで下降',
    ],
    tips: [
      '最低2つの鉄ブロックが必要です',
      '途中に障害物があると動作しません',
    ],
  },
  {
    slug: 'auto-fishing',
    title: '全自動釣り',
    icon: <Fish className="text-green-400" size={48} />,
    description: '釣り竿を投げるだけで全自動で釣りをしてくれます。',
    details: (
      <>
        <p>釣り竿を投げるだけで、自動的に魚を釣り上げてくれます。</p>
        <p>放置しながら効率的にアイテムを集められます。</p>
      </>
    ),
    usage: [
      '釣り竿を持って水辺に立つ',
      '右クリックで釣り竿を投げる',
      '自動的に釣りが開始されます',
    ],
    tips: [
      '釣り竿の耐久値に注意しましょう',
      '宝釣りのエンチャントがあるとレアアイテムも入手できます',
    ],
  },
  {
    slug: 'grave-chest',
    title: '墓チェスト',
    icon: <Skull className="text-green-400" size={48} />,
    description: '死亡してもアイテムが飛び散らずに墓チェストが生成されます。',
    details: (
      <>
        <p>死亡時にアイテムが飛び散らず、墓チェストとして保管されます。</p>
        <p>盗難対策として、10分間は本人のみが開けることができます。</p>
      </>
    ),
    usage: [
      '死亡すると自動的に墓チェストが生成されます',
      '死亡地点に戻って墓チェストを開ける',
      '10分以内に回収しましょう',
    ],
    tips: [
      '10分経過後は誰でも開けられるようになります',
      '座標をメモしておくと回収しやすいです',
    ],
  },
  {
    slug: 'sitting',
    title: '座るモーション',
    icon: <Armchair className="text-green-400" size={48} />,
    description: 'ハーフブロック・階段ブロック等に触ることで座るモーションができます。',
    details: (
      <>
        <p>ハーフブロックや階段ブロックに座ることができます。</p>
        <p>椅子を作って、よりリアルな建築を楽しめます。</p>
      </>
    ),
    usage: [
      'ハーフブロックまたは階段ブロックを設置',
      'しゃがみながら右クリック',
      '座るモーションが開始されます',
      '再度しゃがみキーで立ち上がります',
    ],
    tips: [
      'カフェやレストランの建築に最適です',
      '他のプレイヤーと一緒に座って会話を楽しめます',
    ],
  },
  {
    slug: 'piggyback',
    title: '肩車モーション',
    icon: <UsersIcon className="text-green-400" size={48} />,
    description: '他プレイヤーに触ることで肩車モーションができます。',
    details: (
      <>
        <p>他のプレイヤーを肩車して一緒に移動できます。</p>
        <p>協力プレイやロールプレイに最適な機能です。</p>
      </>
    ),
    usage: [
      'しゃがみながら他のプレイヤーを右クリック',
      '肩車が開始されます',
      '再度しゃがみキーで降ろします',
    ],
    tips: [
      '高い場所への移動に便利です',
      '相手の同意を得てから使いましょう',
    ],
  },
  {
    slug: 'vein-miner',
    title: '鉱石一括破壊',
    icon: <Pickaxe className="text-green-400" size={48} />,
    description: 'しゃがみながら鉱石を掘ることで一括破壊ができます。',
    details: (
      <>
        <p>しゃがみながら鉱石を掘ると、繋がっている鉱石を一括で破壊できます。</p>
        <p>採掘効率が大幅に向上し、時間を節約できます。</p>
      </>
    ),
    usage: [
      'しゃがみキーを押しながら鉱石を掘る',
      '繋がっている同じ種類の鉱石が一括破壊されます',
    ],
    tips: [
      'ツルハシの耐久値に注意しましょう',
      '幸運のエンチャントと組み合わせると効率的です',
    ],
  },
  {
    slug: 'one-player-sleep',
    title: '一人でスキップ',
    icon: <Moon className="text-green-400" size={48} />,
    description: '一人だけでもベットで寝ることで夜を過ごせます。',
    details: (
      <>
        <p>一人でベッドに入るだけで、夜をスキップできます。</p>
        <p>全員が寝る必要がないので、ソロプレイでも快適です。</p>
      </>
    ),
    usage: [
      '夜になったらベッドに入る',
      '自動的に朝になります',
    ],
    tips: [
      'ファントム対策にも有効です',
      '他のプレイヤーが作業中でも気にせず寝られます',
    ],
  },
  {
    slug: 'discord-chat',
    title: 'Discord連携チャット',
    icon: <MessageSquare className="text-green-400" size={48} />,
    description: 'リアルタイムのマイクラチャットがDiscord上で閲覧できます。',
    details: (
      <>
        <p>マイクラのチャットがDiscordの #📮-チャット チャンネルに表示されます。</p>
        <p>Discordからマイクラにメッセージを送ることもできます。</p>
      </>
    ),
    usage: [
      'Discordサーバーに参加',
      '#📮-チャット チャンネルを開く',
      'マイクラのチャットがリアルタイムで表示されます',
      'Discordからメッセージを送信すると、マイクラ内に表示されます',
    ],
    tips: [
      'ゲーム外からでもコミュニケーションが取れます',
      'ログインしていなくてもチャットを確認できます',
    ],
  },
  {
    slug: 'webmap',
    title: 'WebMap',
    icon: <Map className="text-green-400" size={48} />,
    description: 'リアルタイムのマイクラ地上マップがWeb上で閲覧できます。',
    details: (
      <>
        <p>ブラウザでマイクラの地図をリアルタイムで確認できます。</p>
        <p>建築物の位置確認や探検に便利です。</p>
      </>
    ),
    usage: [
      <a key="webmap-link" href="http://hikamerscraft.f5.si/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">
        WebMap
      </a>,
      ' にアクセス',
      'マップ上でプレイヤーの位置や建築物を確認',
      'ズームイン・ズームアウトで詳細を確認',
    ],
    tips: [
      '建築計画を立てるのに便利です',
      '他のプレイヤーの位置も確認できます',
    ],
  },
  {
    slug: 'dynamic-light',
    title: 'ダイナミックライト',
    icon: <Lightbulb className="text-green-400" size={48} />,
    description: '松明を持っているだけで周りが明るくなります。',
    details: (
      <>
        <p>松明やランタンなどの光源を手に持つだけで、周囲が明るくなります。</p>
        <p>洞窟探検がより快適になります。</p>
      </>
    ),
    usage: [
      '松明、ランタン、グロウストーンなどを手に持つ',
      '自動的に周囲が明るくなります',
    ],
    tips: [
      '洞窟探検時に松明を設置する手間が省けます',
      '暗い場所での建築作業も楽になります',
    ],
  },
  {
    slug: 'true-crafter',
    title: '真のクラフターモード',
    icon: <Package className="text-green-400" size={48} />,
    description: 'バランス調整のため、「真のクラフターモード」データパックを導入しています。',
    details: (
      <>
        <p>ゲームバランスを調整し、よりチャレンジングなプレイ体験を提供します。</p>
        <p>詳細は公式動画をご覧ください。</p>
      </>
    ),
    usage: [
      '自動的に適用されています',
      '特別な操作は不要です',
    ],
    tips: [
      <>
        詳しくは{' '}
        <a href="https://www.youtube.com/watch?v=7oI4bwtSQUQ" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">
          動画1
        </a>
        {' '}と{' '}
        <a href="https://www.youtube.com/watch?v=ELwIPUAsdDs" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">
          動画2
        </a>
        {' '}をご覧ください
      </>,
    ],
  },
];

export async function generateStaticParams() {
  return features.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug);
  
  if (!feature) {
    return {
      title: '機能が見つかりません',
    };
  }

  return {
    title: `${feature.title} | プラグイン・データパック`,
    description: feature.description,
    openGraph: {
      title: `${feature.title} | ヒカマーズマイクラ`,
      description: feature.description,
      url: `https://hikamerscraft.f5.si/features/${feature.slug}`,
    },
  };
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug);

  if (!feature) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Link */}
        <a 
          href="/features" 
          className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 transition-colors"
        >
          ← 機能一覧に戻る
        </a>

        {/* Feature Header */}
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-green-700/50 mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0">
              {feature.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-3">{feature.title}</h1>
              <p className="text-green-200 text-lg">{feature.description}</p>
            </div>
          </div>

          {/* Details */}
          <div className="text-green-100 space-y-3">
            {feature.details}
          </div>
        </div>

        {/* Usage Section */}
        {feature.usage && (
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-green-700/50 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">使い方</h2>
            <ol className="list-decimal list-inside space-y-2 text-green-200">
              {feature.usage.map((step, index) => (
                <li key={index} className="ml-2">{step}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Tips Section */}
        {feature.tips && (
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-green-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">ヒント・注意点</h2>
            <ul className="list-disc list-inside space-y-2 text-green-200">
              {feature.tips.map((tip, index) => (
                <li key={index} className="ml-2">{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
