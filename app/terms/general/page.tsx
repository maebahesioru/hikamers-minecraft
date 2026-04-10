import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AnimatedSection } from '../../components/AnimatedContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約',
  description: 'ヒカマーズマイクラの基本的な利用規約です。',
};

export default function GeneralTermsPage() {
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

          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-blue-700/50">
            <h1 className="text-4xl font-bold text-blue-400 mb-6">利用規約</h1>
            
            <div className="text-white space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">第1条（適用）</h2>
                <p className="leading-relaxed">
                  本規約は、ヒカマーズマイクラ（以下「当サーバー」）が提供するMinecraftサーバーおよび関連サービス（以下「本サービス」）の利用条件を定めるものです。
                  利用者は、本サービスを利用することにより、本規約に同意したものとみなされます。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">第2条（禁止事項）</h2>
                <p className="mb-2">利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>他の利用者、第三者、または当サーバーの権利を侵害する行為</li>
                  <li>他の利用者に対する嫌がらせや誹謗中傷</li>
                  <li>不正アクセスやサーバーに過度な負荷をかける行為</li>
                  <li>チート、改造クライアント、不正なツールの使用</li>
                  <li>バグやグリッチの悪用</li>
                  <li>当サーバーの運営を妨害する行為</li>
                  <li>その他、当サーバーが不適切と判断する行為</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">第3条（アカウント管理）</h2>
                <p className="leading-relaxed">
                  利用者は、自己の責任においてアカウントを管理するものとします。
                  アカウントの不正利用により生じた損害について、当サーバーは一切の責任を負いません。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">第4条（サービスの変更・停止）</h2>
                <p className="leading-relaxed">
                  当サーバーは、事前の通知なく本サービスの内容を変更、または提供を停止することができるものとします。
                  これにより利用者に生じた損害について、当サーバーは一切の責任を負いません。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">第5条（免責事項）</h2>
                <p className="leading-relaxed mb-2">
                  当サーバーは、本サービスに関して以下の事項について一切の責任を負いません。
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>本サービスの利用により生じた損害</li>
                  <li>サーバーの停止、データの消失等により生じた損害</li>
                  <li>利用者間のトラブルにより生じた損害</li>
                  <li>第三者による不正アクセス等により生じた損害</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">第6条（利用制限・アカウント停止）</h2>
                <p className="leading-relaxed">
                  当サーバーは、利用者が本規約に違反した場合、事前の通知なく利用制限またはアカウント停止（BAN）の措置を取ることができます。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">第7条（規約の変更）</h2>
                <p className="leading-relaxed">
                  当サーバーは、必要に応じて本規約を変更することができます。
                  変更後の規約は、当サーバーのウェブサイトに掲載した時点で効力を生じるものとします。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-300 mb-3">第8条（準拠法・管轄裁判所）</h2>
                <p className="leading-relaxed">
                  本規約の解釈にあたっては、日本法を準拠法とします。
                  本サービスに関して紛争が生じた場合には、当サーバーの所在地を管轄する裁判所を専属的合意管轄とします。
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-blue-700/50">
                <p className="text-sm text-blue-200">
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
