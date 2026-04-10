import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AnimatedSection } from '../../components/AnimatedContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '二次創作ガイドライン',
  description: 'ヒカマーズマイクラの動画配信・二次創作に関するガイドラインです。',
};

export default function FanworkGuidelinesPage() {
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

          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-orange-700/50">
            <h1 className="text-4xl font-bold text-orange-400 mb-6">二次創作ガイドライン</h1>
            
            <div className="text-white space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">基本方針</h2>
                <p className="leading-relaxed mb-3">
                  ヒカマーズマイクラでは、動画配信や二次創作を歓迎しています！
                  以下のガイドラインを守っていただければ、自由に創作活動を楽しんでいただけます。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">動画配信・実況について</h2>
                <div className="space-y-4">
                  <div className="bg-green-900/20 rounded p-4">
                    <h3 className="font-semibold text-green-200 mb-2">✅ 許可されていること</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>YouTube、Twitch、ニコニコ動画等での配信・投稿</li>
                      <li>サーバー内でのゲームプレイの録画・配信</li>
                      <li>建築物や風景のスクリーンショット・動画撮影</li>
                      <li>収益化（広告収入、スーパーチャット等）</li>
                      <li>切り抜き動画の作成</li>
                    </ul>
                  </div>

                  <div className="bg-red-900/20 rounded p-4">
                    <h3 className="font-semibold text-red-200 mb-2">❌ 禁止されていること</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>他プレイヤーの許可なく個人情報を公開すること</li>
                      <li>他プレイヤーを誹謗中傷する内容</li>
                      <li>サーバーの評判を著しく損なう内容</li>
                      <li>規約違反行為を推奨・助長する内容</li>
                      <li>チート・不正行為の実演</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">配信時の推奨事項</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>動画のタイトルや説明欄に「ヒカマーズマイクラ」と記載してください</li>
                  <li>サーバーのウェブサイトURLを記載していただけると嬉しいです</li>
                  <li>ハッシュタグ #ヒカマーズマイクラ の使用を推奨します</li>
                  <li>他プレイヤーが映る場合は、配慮をお願いします</li>
                  <li>ボイスチャットの内容を配信する場合は、参加者の許可を得てください</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">スクリーンショット・画像</h2>
                <div className="space-y-3">
                  <div className="bg-orange-900/20 rounded p-4">
                    <h3 className="font-semibold text-orange-200 mb-2">📸 撮影について</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>自分の建築物は自由に撮影・公開できます</li>
                      <li>他プレイヤーの建築物を撮影する場合は、許可を得ることを推奨します</li>
                      <li>風景や公共施設の撮影は自由です</li>
                    </ul>
                  </div>

                  <div className="bg-orange-900/20 rounded p-4">
                    <h3 className="font-semibold text-orange-200 mb-2">🖼️ 公開について</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Twitter、Instagram等のSNSでの公開は自由です</li>
                      <li>#ヒカマーズマイクラ のハッシュタグをつけていただけると嬉しいです</li>
                      <li>他プレイヤーのスキンやユーザー名が映っている場合は配慮してください</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">イラスト・漫画・小説</h2>
                <div className="bg-green-900/20 rounded p-4">
                  <h3 className="font-semibold text-green-200 mb-2">🎨 創作活動について</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>サーバーを題材にしたイラスト・漫画・小説の作成は大歓迎です</li>
                    <li>自分のキャラクターや建築物を題材にした創作は自由です</li>
                    <li>他プレイヤーをモデルにする場合は、必ず許可を得てください</li>
                    <li>公序良俗に反する内容は避けてください</li>
                    <li>R-18等の年齢制限が必要な作品は適切にタグ付けしてください</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">音楽・楽曲</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>サーバーをテーマにした楽曲の作成は自由です</li>
                  <li>配信のBGMとして使用する場合は、著作権に注意してください</li>
                  <li>サーバー公式のテーマソング等は現在ありません</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">商用利用について</h2>
                <div className="space-y-3">
                  <div className="bg-green-900/20 rounded p-4">
                    <h3 className="font-semibold text-green-200 mb-2">✅ 許可されている商用利用</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>動画配信の広告収入</li>
                      <li>スーパーチャット、投げ銭等の収益</li>
                      <li>同人誌の頒布（適切な範囲内）</li>
                    </ul>
                  </div>

                  <div className="bg-red-900/20 rounded p-4">
                    <h3 className="font-semibold text-red-200 mb-2">❌ 許可が必要な商用利用</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>サーバー名やロゴを使用した商品の販売</li>
                      <li>大規模な商業利用</li>
                      <li>企業案件での使用</li>
                    </ul>
                    <p className="mt-2 text-sm">※上記の場合は事前に管理者にご相談ください</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">著作権について</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>サーバー内の建築物の著作権は、建築者に帰属します</li>
                  <li>サーバー名「ヒカマーズマイクラ」の使用は自由です</li>
                  <li>サーバーロゴがある場合は、適切に使用してください</li>
                  <li>Minecraftの著作権はMojang Studiosに帰属します</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">報告・連絡</h2>
                <div className="bg-blue-900/20 rounded p-4">
                  <p className="mb-2">以下の場合は、管理者に報告していただけると嬉しいです（任意）：</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>動画を投稿した時</li>
                    <li>大きな作品を公開した時</li>
                    <li>サーバーを紹介する記事を書いた時</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    報告いただいた作品は、公式Twitterやウェブサイトで紹介させていただく場合があります。
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-300 mb-3">注意事項</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>このガイドラインは予告なく変更される場合があります</li>
                  <li>不適切な内容の作品については、削除をお願いする場合があります</li>
                  <li>他プレイヤーとのトラブルは当事者間で解決してください</li>
                  <li>疑問点がある場合は、遠慮なく管理者にお問い合わせください</li>
                </ul>
              </section>

              <div className="mt-8 pt-6 border-t border-orange-700/50 bg-orange-900/10 rounded p-4">
                <p className="text-orange-200 font-semibold mb-2">
                  🎉 創作活動を応援しています！
                </p>
                <p className="text-sm">
                  ヒカマーズマイクラでは、皆さんの創作活動を全力で応援しています。
                  ガイドラインを守って、楽しく創作活動を行ってください。
                  素敵な作品ができたら、ぜひ #ヒカマーズマイクラ で共有してくださいね！
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-orange-700/50">
                <p className="text-sm text-orange-200">
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
