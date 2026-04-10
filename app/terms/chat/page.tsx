import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AnimatedSection } from '../../components/AnimatedContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'チャットガイドライン',
  description: 'ヒカマーズマイクラのチャットでのコミュニケーションガイドです。',
};

export default function ChatGuidelinesPage() {
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

          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-pink-700/50">
            <h1 className="text-4xl font-bold text-pink-400 mb-6">チャットガイドライン</h1>
            
            <div className="text-white space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-pink-300 mb-3">チャットの基本マナー</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>挨拶は積極的にしましょう（「こんにちは」「よろしく」など）</li>
                  <li>丁寧な言葉遣いを心がけましょう</li>
                  <li>相手の気持ちを考えて発言しましょう</li>
                  <li>質問には優しく答えましょう</li>
                  <li>初心者にも親切に接しましょう</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-pink-300 mb-3">禁止されているチャット内容</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-pink-200 mb-2">🚫 不適切な発言</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>暴言、誹謗中傷</li>
                      <li>差別的な発言</li>
                      <li>性的な発言</li>
                      <li>他人を不快にさせる発言</li>
                      <li>煽り、挑発</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-pink-200 mb-2">🚫 スパム行為</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>同じメッセージの連投</li>
                      <li>意味のない文字列の投稿</li>
                      <li>過度な装飾文字の使用</li>
                      <li>チャット欄を埋め尽くす行為</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-pink-200 mb-2">🚫 個人情報</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>自分や他人の個人情報の公開</li>
                      <li>住所、電話番号、本名などの投稿</li>
                      <li>SNSアカウントの無断公開</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-pink-200 mb-2">🚫 宣伝・勧誘</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>他サーバーへの勧誘</li>
                      <li>商品・サービスの宣伝</li>
                      <li>外部サイトへの誘導</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-pink-300 mb-3">推奨されるチャット内容</h2>
                <div className="space-y-3">
                  <div className="bg-pink-900/20 rounded p-4">
                    <h3 className="font-semibold text-pink-200 mb-2">✅ 建築の相談</h3>
                    <p>「この建物のデザインどう思いますか？」「おすすめの建材はありますか？」</p>
                  </div>
                  <div className="bg-pink-900/20 rounded p-4">
                    <h3 className="font-semibold text-pink-200 mb-2">✅ アイテムの交換</h3>
                    <p>「ダイヤモンドと鉄を交換してくれる人いませんか？」</p>
                  </div>
                  <div className="bg-pink-900/20 rounded p-4">
                    <h3 className="font-semibold text-pink-200 mb-2">✅ 協力の呼びかけ</h3>
                    <p>「一緒にエンダードラゴン討伐しませんか？」「建築を手伝ってくれる人募集！」</p>
                  </div>
                  <div className="bg-pink-900/20 rounded p-4">
                    <h3 className="font-semibold text-pink-200 mb-2">✅ 情報共有</h3>
                    <p>「スライムチャンクを見つけました！」「便利な装置を作ったので見に来てください」</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-pink-300 mb-3">チャットコマンド</h2>
                <div className="bg-gray-900/50 rounded p-4 font-mono text-sm space-y-2">
                  <p><span className="text-green-400">/msg [プレイヤー名] [メッセージ]</span> - プライベートメッセージ</p>
                  <p><span className="text-green-400">/r [メッセージ]</span> - 最後にメッセージを送った人に返信</p>
                  <p><span className="text-green-400">/ignore [プレイヤー名]</span> - 特定のプレイヤーをミュート</p>
                  <p><span className="text-green-400">/help</span> - コマンド一覧を表示</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-pink-300 mb-3">トラブル時の対応</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>不快なメッセージを受け取った場合は、スクリーンショットを撮って管理者に報告してください</li>
                  <li>自分で対応せず、必ず管理者に相談してください</li>
                  <li>感情的にならず、冷静に対処しましょう</li>
                  <li>/ignoreコマンドで一時的にミュートすることもできます</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-pink-300 mb-3">良いコミュニケーションのために</h2>
                <div className="space-y-3">
                  <div className="bg-green-900/20 rounded p-4">
                    <h3 className="font-semibold text-green-200 mb-2">😊 ポジティブな言葉を使う</h3>
                    <p>「ありがとう」「すごい！」「助かります」など、前向きな言葉を積極的に使いましょう。</p>
                  </div>
                  <div className="bg-green-900/20 rounded p-4">
                    <h3 className="font-semibold text-green-200 mb-2">🤝 協力的な姿勢</h3>
                    <p>困っている人がいたら積極的に助けましょう。コミュニティ全体で支え合いましょう。</p>
                  </div>
                  <div className="bg-green-900/20 rounded p-4">
                    <h3 className="font-semibold text-green-200 mb-2">💬 適度なコミュニケーション</h3>
                    <p>チャットは活発に、でも節度を持って。他の人の会話も尊重しましょう。</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-pink-300 mb-3">注意事項</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>チャットログは記録されています</li>
                  <li>違反行為は証拠として保存される場合があります</li>
                  <li>プライベートメッセージでも規約は適用されます</li>
                  <li>言葉の暴力も立派な違反行為です</li>
                </ul>
              </section>

              <div className="mt-8 pt-6 border-t border-pink-700/50 bg-pink-900/10 rounded p-4">
                <p className="text-pink-200 font-semibold mb-2">
                  💡 覚えておいてほしいこと
                </p>
                <p className="text-sm">
                  チャットは文字だけのコミュニケーションです。相手の表情や声のトーンが分からないため、
                  誤解を招きやすいです。常に相手の立場に立って、優しく丁寧な言葉遣いを心がけましょう。
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-pink-700/50">
                <p className="text-sm text-pink-200">
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
