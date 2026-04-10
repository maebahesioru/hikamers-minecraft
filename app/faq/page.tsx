import { HelpCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'よくある質問（Q&A）',
  description: 'ヒカマーズマイクラに関するよくある質問と回答。接続方法、ゲームプレイ、プラグイン、トラップの仕様、バージョン互換性など20以上のQ&Aを掲載。',
  keywords: ['よくある質問', 'Q&A', 'FAQ', 'マインクラフト', 'サーバー', 'トラブルシューティング', '接続', 'プラグイン'],
  openGraph: {
    title: 'よくある質問（Q&A）| ヒカマーズマイクラ',
    description: '接続方法、ゲームプレイ、プラグインなど20以上の質問と回答を掲載。',
    url: 'https://hikamerscraft.f5.si/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">よくある質問（Q&A）</h1>
          <p className="text-green-200 text-lg">ヒカマーズマイクラに関するよくある質問と回答</p>
        </div>

        {/* General Questions */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">一般的な質問</h2>
          </div>

          <div className="space-y-6">
            <FAQItem
              question="トラップ等の装置は統合版とJava版どちらの仕様のを作ればいいですか？"
              answer="基本サーバーはJava版仕様なので、Java版の仕様のトラップを作ってください。統合版のプレイヤーも参加できますが、サーバー自体はJava版として動作しています。"
            />

            <FAQItem
              question="どのバージョンで接続できますか？"
              answer="Java版は1.7.10から1.21.10まで対応しています。ただし、最新バージョン（1.21.10）での接続を推奨します。古いバージョンでも接続可能ですが、一部機能が制限される場合があります。"
            />

            <FAQItem
              question="統合版とJava版のプレイヤーは一緒に遊べますか？"
              answer="はい、クロスプレイに対応しているため、統合版とJava版のプレイヤーが同じサーバーで一緒に遊ぶことができます。"
            />

            <FAQItem
              question="サーバーの定員は何人ですか？"
              answer="サーバーの定員は20人です。同時に最大20人のプレイヤーが接続できます。"
            />

            <FAQItem
              question="サーバーは24時間稼働していますか？"
              answer="はい、基本的に24時間稼働しています。メンテナンスやアップデート時には一時的に停止する場合がありますが、事前にお知らせします。"
            />
          </div>
        </section>

        {/* Connection Questions */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">接続に関する質問</h2>
          </div>

          <div className="space-y-6">
            <FAQItem
              question="統合版で接続する場合、どの方法がおすすめですか？"
              answer="ゲーマータグ「hikamaniserver」をフレンド追加する方法が最も簡単でおすすめです。ポート番号の入力も不要で、フレンドリストから直接接続できます。"
            />

            <FAQItem
              question="接続できない場合はどうすればいいですか？"
              answer={
                <>
                  以下の点を確認してください：
                  <ul className="list-disc list-inside mt-2 space-y-1 text-green-200">
                    <li>サーバーアドレスとポート番号が正しいか</li>
                    <li>インターネット接続が安定しているか</li>
                    <li>ファイアウォールやセキュリティソフトがブロックしていないか</li>
                    <li>統合版の場合、ゲーマータグ方式を試してみる</li>
                  </ul>
                </>
              }
            />

            <FAQItem
              question="Java版でポート番号は必要ですか？"
              answer="Java版では基本的にポート番号（25565）の入力は不要です。サーバーアドレス「hikamerscraft.f5.si」のみで接続できます。"
            />

            <FAQItem
              question="統合版のポート番号は何番ですか？"
              answer="統合版のポート番号は19132です。IPアドレスで接続する場合は、この番号を入力してください。"
            />
          </div>
        </section>

        {/* Gameplay Questions */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">ゲームプレイに関する質問</h2>
          </div>

          <div className="space-y-6">
            <FAQItem
              question="PvP（プレイヤー対プレイヤー戦闘）は可能ですか？"
              answer="サーバーのルールに従ってください。基本的には平和的なプレイを推奨していますが、合意の上でのPvPは可能な場合があります。"
            />

            <FAQItem
              question="自分の建築物を保護できますか？"
              answer="はい、チェストロック機能があります。しゃがみながらチェストやかまどに触れることでロックできます。また、墓チェスト機能により、死亡時のアイテムも保護されます。"
            />

            <FAQItem
              question="一人でも夜をスキップできますか？"
              answer="はい、一人でもベッドで寝ることで夜をスキップできます。全員が寝る必要はありません。"
            />

            <FAQItem
              question="Discordとの連携機能はありますか？"
              answer="はい、#📮-チャット チャンネルでリアルタイムのマイクラチャットを閲覧できます。Discordからマイクラにチャットを送ることも可能です。"
            />

            <FAQItem
              question="Webマップはどこで見られますか？"
              answer={
                <>
                  <a 
                    href="http://hikamerscraft.f5.si" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    http://hikamerscraft.f5.si
                  </a>
                  {' '}でリアルタイムのマイクラ地上マップを閲覧できます。プレイヤーの位置や建築物を確認できます。
                </>
              }
            />
          </div>
        </section>

        {/* Plugin Questions */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">プラグイン・機能に関する質問</h2>
          </div>

          <div className="space-y-6">
            <FAQItem
              question="どんなプラグインが導入されていますか？"
              answer={
                <>
                  13種類以上の便利なプラグインが導入されています。詳しくは{' '}
                  <Link href="/features" className="text-green-400 hover:text-green-300 underline">
                    プラグイン・データパックページ
                  </Link>
                  {' '}をご覧ください。
                </>
              }
            />

            <FAQItem
              question="鉱石一括破壊はどうやって使いますか？"
              answer="しゃがみながら鉱石を掘ることで、一括破壊機能が発動します。効率的に採掘できます。"
            />

            <FAQItem
              question="エレベーターの作り方を教えてください"
              answer="同じXZ座標に鉄ブロックを縦に配置することでエレベーターが作れます。ジャンプで上昇、しゃがみで下降します。"
            />

            <FAQItem
              question="チャットで日本語が使えますか？"
              answer="はい、ローマ字で入力すると自動で日本語に変換されます。日本語入力が難しい環境でも快適にチャットできます。"
            />

            <FAQItem
              question="真のクラフターモードとは何ですか？"
              answer={
                <>
                  ゲームバランスを調整するデータパックです。詳しくは{' '}
                  <a 
                    href="https://www.youtube.com/watch?v=7oI4bwtSQUQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    動画1
                  </a>
                  {' '}と{' '}
                  <a 
                    href="https://www.youtube.com/watch?v=ELwIPUAsdDs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    動画2
                  </a>
                  {' '}をご覧ください。
                </>
              }
            />
          </div>
        </section>

        {/* Other Questions */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">その他の質問</h2>
          </div>

          <div className="space-y-6">
            <FAQItem
              question="スクリーンショットを共有したいのですが"
              answer={
                <>
                  ぜひ{' '}
                  <a 
                    href="https://x.com/search?q=ヒカマーズマイクラ&f=live" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    #ヒカマーズマイクラ
                  </a>
                  {' '}のハッシュタグをつけて投稿してください！他のプレイヤーの建築物や冒険を見ることもできます。
                </>
              }
            />

            <FAQItem
              question="サーバーのスペックを知りたいです"
              answer={
                <>
                  <Link href="/server-specs" className="text-green-400 hover:text-green-300 underline">
                    サーバースペックページ
                  </Link>
                  {' '}で詳細なハードウェア・ソフトウェア構成を確認できます。Intel N100、RAM 32GB、PurPurMC 1.21.10で稼働しています。
                </>
              }
            />

            <FAQItem
              question="ここに載っていない質問があります"
              answer="Discordやソーシャルメディアで #ヒカマーズマイクラ のハッシュタグをつけて質問してみてください。コミュニティのメンバーや管理者が回答してくれるかもしれません。"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  return (
    <div className="bg-green-900/30 rounded-lg p-6 hover:bg-green-900/40 transition-colors">
      <h3 className="text-xl font-semibold text-green-300 mb-3 flex items-start gap-2">
        <span className="text-green-400 flex-shrink-0">Q.</span>
        <span>{question}</span>
      </h3>
      <div className="text-white ml-6">
        <span className="text-green-400 font-semibold">A. </span>
        {answer}
      </div>
    </div>
  );
}
