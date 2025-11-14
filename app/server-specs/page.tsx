import { Cpu, HardDrive, Database, Cloud, Wifi, Server, Users, Package } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サーバースペック',
  description: 'ヒカマーズマイクラのハードウェア・ソフトウェア構成。CPU: Intel N100、RAM: 32GB（割り当て16GB）、SSD: M.2 SATA 500GB、回線: nuro光 1Gbps、サーバーソフト: PurPurMC 1.21.10、定員: 20人。',
  keywords: ['サーバースペック', 'Intel N100', 'PurPurMC', 'nuro光', 'サーバー構成'],
  openGraph: {
    title: 'サーバースペック | ヒカマーズマイクラ',
    description: 'Intel N100、RAM 32GB、PurPurMC 1.21.10で稼働。高速・安定のサーバー環境。',
    url: 'https://hikamerscraft.f5.si/server-specs',
  },
};

export default function ServerSpecsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">サーバースペック</h1>
          <p className="text-green-200 text-lg">ヒカマーズマイクラのハードウェア・ソフトウェア構成</p>
        </div>

        {/* Hardware Specs */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Server className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">ハードウェア構成</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <SpecCard
              icon={<Cpu className="text-green-400" size={28} />}
              title="CPU"
              value="Intel N100"
              description="省電力で高効率な4コアプロセッサ"
            />

            <SpecCard
              icon={<Database className="text-green-400" size={28} />}
              title="RAM"
              value="32GB"
              subtitle="サーバー割り当て: 16GB"
              description="十分なメモリで快適な動作を実現"
            />

            <SpecCard
              icon={<HardDrive className="text-green-400" size={28} />}
              title="ストレージ"
              value="M.2 SATA 500GB"
              description="高速SSDで読み込み時間を短縮"
            />

            <SpecCard
              icon={<Cloud className="text-green-400" size={28} />}
              title="バックアップ"
              value="Google Drive"
              description="定期的なバックアップで安心"
            />
          </div>
        </section>

        {/* Network Specs */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Wifi className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">ネットワーク構成</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <SpecCard
              icon={<Wifi className="text-green-400" size={28} />}
              title="ルーター"
              value="SGP200W"
              description="安定した接続を提供"
            />

            <SpecCard
              icon={<Wifi className="text-green-400" size={28} />}
              title="回線"
              value="nuro光 有線LAN 1Gbps"
              description="高速・低遅延の光回線"
            />
          </div>
        </section>

        {/* Software Specs */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Package className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-green-400">ソフトウェア構成</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <SpecCard
              icon={<Package className="text-green-400" size={28} />}
              title="サーバーソフトウェア"
              value="PurPurMC 1.21.10"
              description="高性能なマインクラフトサーバー"
            />

            <SpecCard
              icon={<Users className="text-green-400" size={28} />}
              title="定員"
              value="20人"
              description="同時接続可能なプレイヤー数"
            />
          </div>
        </section>

        {/* Performance Info */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-green-700/50">
          <h2 className="text-3xl font-bold text-green-400 mb-6">パフォーマンス情報</h2>
          
          <div className="space-y-4">
            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">安定性</h3>
              <p className="text-white">
                Intel N100の省電力設計により、24時間安定稼働を実現。定期的なバックアップでデータの安全性も確保しています。
              </p>
            </div>

            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">応答速度</h3>
              <p className="text-white">
                nuro光の高速回線とM.2 SSDの組み合わせにより、低遅延で快適なプレイ環境を提供します。
              </p>
            </div>

            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">拡張性</h3>
              <p className="text-white">
                PurPurMCは高性能なサーバーソフトウェアで、多数のプラグインに対応。16GBのメモリ割り当てにより、重いプラグインも快適に動作します。
              </p>
            </div>

            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">バックアップ体制</h3>
              <p className="text-white">
                Google Driveへの自動バックアップにより、万が一のトラブル時もデータを復旧可能。プレイヤーの建築物や進行状況を守ります。
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

function SpecCard({ 
  icon, 
  title, 
  value,
  subtitle,
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string;
  subtitle?: string;
  description: string;
}) {
  return (
    <div className="bg-green-900/30 rounded-lg p-6">
      <div className="flex items-start gap-4 mb-3">
        <div className="flex-shrink-0 mt-1">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-green-300 font-semibold mb-1">{title}</h3>
          <p className="text-white text-2xl font-bold mb-1">{value}</p>
          {subtitle && <p className="text-green-200 text-sm mb-2">{subtitle}</p>}
        </div>
      </div>
      <p className="text-green-200 text-sm">{description}</p>
    </div>
  );
}
