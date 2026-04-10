import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ヒカマーズマイクラ - プラグイン・データパック';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const features: Record<string, string> = {
  'chest-lock': 'チェスト・かまどロック',
  'auto-japanese': '自動日本語変換',
  'iron-elevator': '鉄ブロックエレベーター',
  'auto-fishing': '全自動釣り',
  'grave-chest': '墓チェスト',
  'sitting': '座るモーション',
  'piggyback': '肩車モーション',
  'vein-miner': '鉱石一括破壊',
  'one-player-sleep': '一人でスキップ',
  'discord-chat': 'Discord連携チャット',
  'webmap': 'WebMap',
  'dynamic-light': 'ダイナミックライト',
  'true-crafter': '真のクラフターモード',
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = features[slug] || 'プラグイン・データパック';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #14532d, #166534, #14532d)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 40,
              color: '#86efac',
              textAlign: 'center',
            }}
          >
            ヒカマーズマイクラ
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
