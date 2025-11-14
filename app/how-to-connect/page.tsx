import { Monitor, Smartphone, Users, CheckCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '接続方法',
  description: 'ヒカマーズマイクラへの接続方法を詳しく解説。Java版・統合版それぞれの接続手順、ゲーマータグでの接続方法、IPアドレスでの接続方法、トラブルシューティング。',
  keywords: ['接続方法', 'マインクラフト', 'サーバー接続', 'ゲーマータグ', 'IPアドレス', 'トラブルシューティング'],
  openGraph: {
    title: '接続方法 | ヒカマーズマイクラ',
    description: 'Java版・統合版の詳しい接続手順とトラブルシューティング。初心者でも簡単に接続できます。',
    url: 'https://hikamerscraft.f5.si/how-to-connect',
  },
};

export default function HowToConnectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">接続方法</h1>
          <p className="text-green-200 text-lg">プラットフォーム別の詳しい接続手順</p>
        </div>

        {/* Java Edition */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">Java版（PC）</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-green-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-400" size={24} />
                接続手順
              </h3>
              <ol className="space-y-3 text-green-200">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">マインクラフトを起動</p>
                    <p className="text-sm">Java版のランチャーからゲームを起動します</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">「マルチプレイ」を選択</p>
                    <p className="text-sm">メインメニューから「マルチプレイ」ボタンをクリック</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">「サーバーを追加」をクリック</p>
                    <p className="text-sm">サーバーリストの下部にあるボタンをクリック</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">サーバー情報を入力</p>
                    <div className="mt-2 bg-black/30 rounded p-3 space-y-2">
                      <p className="text-sm">サーバー名: <span className="text-white">自由に入力してOK</span></p>
                      <p className="text-sm">サーバーアドレス: <span className="font-mono text-white">hikamerscraft.f5.si</span></p>
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">5</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">「完了」をクリックして接続</p>
                    <p className="text-sm">サーバーリストに追加されたサーバーをダブルクリックで接続</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-green-900/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-3">対応バージョン</h3>
              <p className="text-white mb-2">
                バージョン <span className="font-mono text-green-400">1.7.10 ~ 1.21.10</span> に対応しています。
              </p>
              <p className="text-green-200 text-sm">
                ※ 最新バージョン（1.21.10）での接続を推奨します
              </p>
            </div>
          </div>
        </section>

        {/* Bedrock Edition */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Smartphone className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">統合版（Bedrock Edition）</h2>
          </div>

          <p className="text-green-200 mb-6">
            統合版では2つの接続方法があります。ゲーマータグでの接続が簡単でおすすめです。
          </p>

          <div className="space-y-8">
            {/* Method 1: Gamertag */}
            <div className="bg-green-900/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-white">方法1: ゲーマータグで接続</h3>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">推奨</span>
              </div>
              
              <ol className="space-y-3 text-green-200 mb-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">マインクラフトを起動</p>
                    <p className="text-sm">統合版のゲームを起動します</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">「遊ぶ」→「フレンド」タブを選択</p>
                    <p className="text-sm">メインメニューから「遊ぶ」を選び、「フレンド」タブに移動</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">「フレンドを追加」を選択</p>
                    <p className="text-sm">フレンド追加画面を開きます</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">ゲーマータグを入力</p>
                    <div className="mt-2 bg-black/30 rounded p-3">
                      <p className="text-sm">ゲーマータグ: <span className="font-mono text-white">hikamaniserver</span></p>
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">5</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">フレンドリストから接続</p>
                    <p className="text-sm">フレンド追加後、フレンドリストに表示されるサーバーをタップして接続</p>
                  </div>
                </li>
              </ol>

              <div className="bg-green-800/30 rounded p-4 border-l-4 border-green-400">
                <p className="text-green-300 text-sm">
                  <strong>💡 ポイント:</strong> この方法が最も簡単で、ポート番号の入力も不要です
                </p>
              </div>
            </div>

            {/* Method 2: IP Address */}
            <div className="bg-green-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">方法2: IPアドレスで接続</h3>
              
              <ol className="space-y-3 text-green-200">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">マインクラフトを起動</p>
                    <p className="text-sm">統合版のゲームを起動します</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">「遊ぶ」→「サーバー」タブを選択</p>
                    <p className="text-sm">メインメニューから「遊ぶ」を選び、「サーバー」タブに移動</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">「サーバーを追加」を選択</p>
                    <p className="text-sm">サーバーリストの下部にあるボタンをタップ</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">サーバー情報を入力</p>
                    <div className="mt-2 bg-black/30 rounded p-3 space-y-2">
                      <p className="text-sm">サーバー名: <span className="text-white">自由に入力してOK</span>（例: ヒカマーズマイクラ）</p>
                      <p className="text-sm">サーバーアドレス: <span className="font-mono text-white">hikamerscraft.f5.si</span></p>
                      <p className="text-sm">ポート: <span className="font-mono text-white">19132</span></p>
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">5</span>
                  <div className="flex-1 pt-1">
                    <p className="text-white font-semibold mb-1">保存して接続</p>
                    <p className="text-sm">サーバーリストに追加されたサーバーをタップして接続</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-green-900/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-3">対応プラットフォーム</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-semibold mb-2">コンソール</p>
                  <ul className="space-y-1 text-green-200 text-sm">
                    <li>• Xbox Series X/S, Xbox One</li>
                    <li>• PlayStation 5, PlayStation 4</li>
                    <li>• Nintendo Switch</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">モバイル・PC</p>
                  <ul className="space-y-1 text-green-200 text-sm">
                    <li>• Windows 10/11</li>
                    <li>• iOS (iPhone/iPad)</li>
                    <li>• Android</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">トラブルシューティング</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">接続できない場合</h3>
              <ul className="space-y-2 text-green-200 text-sm">
                <li>• サーバーアドレスとポート番号が正しいか確認してください</li>
                <li>• インターネット接続が安定しているか確認してください</li>
                <li>• ファイアウォールやセキュリティソフトがブロックしていないか確認してください</li>
                <li>• 統合版の場合、ゲーマータグ方式を試してみてください</li>
              </ul>
            </div>

            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">バージョンが違うと表示される場合</h3>
              <ul className="space-y-2 text-green-200 text-sm">
                <li>• Java版: バージョン 1.7.10 ~ 1.21.10 に対応しています</li>
                <li>• 最新バージョン（1.21.10）での接続を推奨します</li>
                <li>• 古いバージョンでも接続可能ですが、一部機能が制限される場合があります</li>
              </ul>
            </div>

            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">それでも解決しない場合</h3>
              <p className="text-green-200 text-sm">
                Discordやソーシャルメディアで #ヒカマーズマイクラ のハッシュタグをつけて質問してみてください。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
