import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '利用規約・ガイドライン';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '20px',
            padding: '60px',
            border: '3px solid rgba(74, 222, 128, 0.5)',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#4ade80',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            利用規約・ガイドライン
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#bbf7d0',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            ヒカマーズマイクラ
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            サーバールール・Discordルール・チャットガイドライン
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
