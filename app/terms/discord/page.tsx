import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AnimatedSection } from '../../components/AnimatedContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discordルール',
  description: 'ヒカマーズマイクラのDiscordコミュニティのルールです。',
};

export default function DiscordRulesPage() {
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

          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-purple-700/50">
            <h1 className="text-4xl font-bold text-purple-400 mb-6">Discordルール</h1>
            
            <div className="text-white space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">基本方針</h2>
                <p className="leading-relaxed mb-3">
                  ヒカマーズマイクラのDiscordサーバーは、プレイヤー同士が交流し、情報を共有するためのコミュニティです。
                  全てのメンバーが快適に過ごせるよう、以下のルールを守ってください。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">禁止事項</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-200 mb-2">🚫 不適切な発言</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>誹謗中傷、暴言、差別的な発言</li>
                      <li>政治的・宗教的な議論</li>
                      <li>性的な発言や画像の投稿</li>
                      <li>グロテスクな画像や動画の投稿</li>
                      <li>他人を不快にさせる発言</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-200 mb-2">🚫 スパム・荒らし</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>同じメッセージの連投</li>
                      <li>意味のない文字列の投稿</li>
                      <li>過度なメンション（@everyone、@hereの乱用）</li>
                      <li>チャンネルの趣旨に合わない投稿</li>
                      <li>絵文字・スタンプの連投</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-200 mb-2">🚫 個人情報・プライバシー</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>自分や他人の個人情報の公開</li>
                      <li>他人のプライバシーを侵害する行為</li>
                      <li>無断でのDM送信（特に営業・勧誘）</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-200 mb-2">🚫 宣伝・勧誘</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>他サーバーへの無断勧誘</li>
                      <li>商品・サービスの宣伝</li>
                      <li>アフィリエイトリンクの投稿</li>
                      <li>許可のない外部リンクの投稿</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">チャンネルの使い分け</h2>
                <div className="space-y-3">
                  <div className="bg-purple-900/20 rounded p-4">
                    <h3 className="font-semibold text-purple-200 mb-2">💬 #雑談</h3>
                    <p>一般的な雑談はこちらで。マイクラ以外の話題もOKです。</p>
                  </div>
                  <div className="bg-purple-900/20 rounded p-4">
                    <h3 className="font-semibold text-purple-200 mb-2">🎮 #マイクラ</h3>
                    <p>マイクラに関する話題専用チャンネル。建築の相談や情報共有など。</p>
                  </div>
                  <div className="bg-purple-900/20 rounded p-4">
                    <h3 className="font-semibold text-purple-200 mb-2">🆘 #サポート</h3>
                    <p>サーバーに関する質問や問題の報告はこちら。</p>
                  </div>
                  <div className="bg-purple-900/20 rounded p-4">
                    <h3 className="font-semibold text-purple-200 mb-2">📸 #スクリーンショット</h3>
                    <p>ゲーム内のスクリーンショットや建築物の共有。</p>
                  </div>
                  <div className="bg-purple-900/20 rounded p-4">
                    <h3 className="font-semibold text-purple-200 mb-2">📢 #お知らせ</h3>
                    <p>運営からの重要なお知らせ。読み専用です。</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">ボイスチャット</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>他の参加者に配慮した音量で話しましょう</li>
                  <li>騒音や雑音が入らないよう注意しましょう</li>
                  <li>Push to Talk（プッシュトゥトーク）の使用を推奨します</li>
                  <li>深夜の大声は控えましょう</li>
                  <li>他人の会話を録音・配信する場合は事前に許可を得てください</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">ニックネーム・アイコン</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>不適切なニックネームは変更をお願いする場合があります</li>
                  <li>他人になりすますニックネームは禁止です</li>
                  <li>アイコンは不適切な画像を使用しないでください</li>
                  <li>マイクラのユーザー名と同じか近いニックネームを推奨します</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">罰則</h2>
                <div className="space-y-3">
                  <div className="bg-yellow-900/20 rounded p-4">
                    <h3 className="font-semibold text-yellow-200 mb-2">⚠️ 警告</h3>
                    <p>軽微な違反に対して警告を行います。</p>
                  </div>
                  <div className="bg-orange-900/20 rounded p-4">
                    <h3 className="font-semibold text-orange-200 mb-2">🔇 ミュート</h3>
                    <p>一定期間、発言ができなくなります。</p>
                  </div>
                  <div className="bg-red-900/20 rounded p-4">
                    <h3 className="font-semibold text-red-200 mb-2">🚫 キック・BAN</h3>
                    <p>重大な違反や繰り返しの違反に対して、サーバーから追放します。</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-purple-300 mb-3">その他</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Discordの利用規約も遵守してください</li>
                  <li>モデレーターの指示には必ず従ってください</li>
                  <li>ルールに記載のない事項でも、常識的な判断をお願いします</li>
                  <li>不明な点があれば、遠慮なく管理者に質問してください</li>
                </ul>
              </section>

              <div className="mt-8 pt-6 border-t border-purple-700/50">
                <p className="text-sm text-purple-200">
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
