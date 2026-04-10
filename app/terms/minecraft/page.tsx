import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AnimatedSection } from '../../components/AnimatedContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minecraftサーバー個別規定',
  description: 'ヒカマーズマイクラのMinecraftサーバー固有の規定です。',
};

export default function MinecraftTermsPage() {
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

          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-green-700/50">
            <h1 className="text-4xl font-bold text-green-400 mb-6">Minecraftサーバー個別規定</h1>
            
            <div className="text-white space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-green-300 mb-3">1. サーバーの利用について</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>本サーバーは統合版・Java版の両方に対応しています</li>
                  <li>サーバーへの接続には正規版のMinecraftが必要です</li>
                  <li>割れ（海賊版）での接続は固く禁止します</li>
                  <li>サーバーは24時間稼働を目指していますが、メンテナンス等で停止する場合があります</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-green-300 mb-3">2. 建築・土地利用</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>他プレイヤーの建築物を無断で破壊・改変してはいけません</li>
                  <li>公共施設や他プレイヤーの土地に無断で建築してはいけません</li>
                  <li>過度に広大な土地の占有は控えてください</li>
                  <li>建築物は景観を損なわないよう配慮してください</li>
                  <li>放置された建築物は管理者が撤去する場合があります</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-green-300 mb-3">3. アイテム・資源</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>他プレイヤーのアイテムを無断で取得してはいけません</li>
                  <li>チェストの中身を無断で持ち出してはいけません</li>
                  <li>資源の独占や過度な採掘は控えてください</li>
                  <li>アイテム増殖バグの利用は禁止です</li>
                  <li>不正な方法でアイテムを入手してはいけません</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-green-300 mb-3">4. PvP（プレイヤー対戦）</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>PvPは指定されたエリアでのみ許可されます</li>
                  <li>相手の同意なしにPvPを仕掛けてはいけません</li>
                  <li>PvP後の略奪行為は禁止です</li>
                  <li>執拗なキル行為（キルキャンプ）は禁止です</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-green-300 mb-3">5. レッドストーン回路・自動装置</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>サーバーに過度な負荷をかける装置の作成は禁止です</li>
                  <li>大規模な自動装置を作成する場合は事前に管理者に相談してください</li>
                  <li>クロック回路は必要最小限にしてください</li>
                  <li>使用しない装置は停止してください</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-green-300 mb-3">6. MOD・クライアント</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>チート系MODの使用は固く禁止します</li>
                  <li>X-Ray、Fly、Kill Aura等の不正MODは即BANの対象です</li>
                  <li>Optifine、Sodium等の軽量化MODは使用可能です</li>
                  <li>ミニマップMODは使用可能ですが、洞窟表示機能はOFFにしてください</li>
                  <li>使用可能なMODについて不明な場合は管理者に確認してください</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-green-300 mb-3">7. トラップ・モンスター</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>他プレイヤーを陥れるトラップの設置は禁止です</li>
                  <li>スポーンエリア付近でのモンスタートラップは禁止です</li>
                  <li>過度なモンスターの湧き潰しは控えてください</li>
                  <li>トラップタワーは適切な距離を保って建設してください</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-green-300 mb-3">8. ワールド・ディメンション</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ネザーゲートは既存のゲートから十分な距離を取って設置してください</li>
                  <li>エンドポータルは共有施設として利用してください</li>
                  <li>ワールドの端まで移動する際は、サーバー負荷に配慮してください</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-green-300 mb-3">9. データ保護</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>サーバーは定期的にバックアップを取得していますが、データ消失の可能性があります</li>
                  <li>重要なアイテムや建築物は自己責任で管理してください</li>
                  <li>サーバー障害によるデータ消失について、補償は行いません</li>
                </ul>
              </section>

              <div className="mt-8 pt-6 border-t border-green-700/50">
                <p className="text-sm text-green-200">
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
