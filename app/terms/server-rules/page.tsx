import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AnimatedSection } from '../../components/AnimatedContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サーバールール',
  description: 'ヒカマーズマイクラのゲーム内で守るべきルールです。',
};

export default function ServerRulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <AnimatedSection>
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            利用規約一覧に戻る
          </Link>

          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-yellow-700/50">
            <h1 className="text-4xl font-bold text-yellow-400 mb-6">サーバールール</h1>
            
            <div className="text-white space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-yellow-300 mb-3">基本ルール</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>他のプレイヤーに迷惑をかけない</li>
                  <li>楽しくプレイする</li>
                  <li>ルールを守る</li>
                  <li>管理者・モデレーターの指示に従う</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-300 mb-3">禁止行為</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-200 mb-2">🚫 グリーフィング（荒らし行為）</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>他プレイヤーの建築物の破壊</li>
                      <li>他プレイヤーの土地への無断建築</li>
                      <li>景観を損なう建築物の設置</li>
                      <li>溶岩や水を使った嫌がらせ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-yellow-200 mb-2">🚫 窃盗・略奪</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>他プレイヤーのチェストからアイテムを盗む</li>
                      <li>他プレイヤーのアイテムを無断で使用する</li>
                      <li>落ちているアイテムを無断で拾う（デスアイテムなど）</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-yellow-200 mb-2">🚫 チート・不正行為</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>チートMOD・ハッククライアントの使用</li>
                      <li>X-Ray、Fly、Kill Auraなどの使用</li>
                      <li>バグ・グリッチの悪用</li>
                      <li>アイテム増殖バグの利用</li>
                      <li>自動化ツール（マクロ等）の使用</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-yellow-200 mb-2">🚫 迷惑行為</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>スパム行為（チャット・看板など）</li>
                      <li>過度な連続ログイン・ログアウト</li>
                      <li>サーバーに負荷をかける行為</li>
                      <li>他プレイヤーへのストーカー行為</li>
                      <li>執拗なPvP（キルキャンプ）</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-300 mb-3">推奨事項</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>建築する際は周囲の景観に配慮しましょう</li>
                  <li>公共施設は皆で大切に使いましょう</li>
                  <li>資源は計画的に採取しましょう</li>
                  <li>困っているプレイヤーがいたら助けてあげましょう</li>
                  <li>長期間ログインしない場合は管理者に連絡しましょう</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-300 mb-3">罰則について</h2>
                <div className="space-y-3">
                  <div className="bg-yellow-900/20 rounded p-4">
                    <h3 className="font-semibold text-yellow-200 mb-2">⚠️ 警告</h3>
                    <p>軽微な違反に対して警告を行います。</p>
                  </div>
                  <div className="bg-orange-900/20 rounded p-4">
                    <h3 className="font-semibold text-orange-200 mb-2">⏱️ 一時BAN</h3>
                    <p>繰り返しの違反や中程度の違反に対して、一定期間のアクセス制限を行います。</p>
                  </div>
                  <div className="bg-red-900/20 rounded p-4">
                    <h3 className="font-semibold text-red-200 mb-2">🔒 永久BAN</h3>
                    <p>重大な違反（チート使用、悪質なグリーフィングなど）に対して、永久的なアクセス禁止を行います。</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-300 mb-3">トラブル発生時</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>被害を受けた場合は、すぐに管理者に報告してください</li>
                  <li>スクリーンショットや証拠があると対応がスムーズです</li>
                  <li>自力で報復せず、必ず管理者に相談してください</li>
                  <li>Discordの#サポートチャンネルで相談できます</li>
                </ul>
              </section>

              <div className="mt-8 pt-6 border-t border-yellow-700/50 bg-yellow-900/10 rounded p-4">
                <p className="text-yellow-200 font-semibold mb-2">
                  ⚡ 重要な注意事項
                </p>
                <ul className="text-sm space-y-1">
                  <li>• ルール違反は即座にBANされる可能性があります</li>
                  <li>• 「知らなかった」は理由になりません</li>
                  <li>• 疑問がある場合は事前に管理者に確認してください</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-yellow-700/50">
                <p className="text-sm text-yellow-200">
                  最終更新日: 2024年1月1日
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
