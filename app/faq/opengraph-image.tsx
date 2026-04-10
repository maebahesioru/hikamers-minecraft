import { ImageResponse } from 'next/og';

export const alt = 'よくある質問（Q&A）| ヒカマーズマイクラ';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 60px),
                             repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 60px)`,
          }}
        />
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: 'rgba(34, 197, 94, 0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60,
              color: '#4ade80',
              marginBottom: 40,
              border: '4px solid rgba(74, 222, 128, 0.5)',
            }}
          >
            ?
          </div>
          
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 30,
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            よくある質問（Q&A）
          </div>
          
          <div
            style={{
              fontSize: 40,
              color: '#86efac',
              textAlign: 'center',
              marginBottom: 50,
            }}
          >
            20以上の質問と回答を掲載
          </div>
          
          <div
            style={{
              display: 'flex',
              gap: 30,
              fontSize: 28,
              color: '#bbf7d0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: '#4ade80' }}>✓</span>
              接続方法
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: '#4ade80' }}>✓</span>
              ゲームプレイ
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: '#4ade80' }}>✓</span>
              プラグイン
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
