import { ImageResponse } from 'next/og';

export const alt = 'サーバー情報 | ヒカマーズマイクラ';
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
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 30,
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            サーバー情報
          </div>
          
          <div
            style={{
              fontSize: 40,
              color: '#86efac',
              textAlign: 'center',
              marginBottom: 50,
            }}
          >
            接続方法・IPアドレス・対応プラットフォーム
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              fontSize: 32,
              color: '#bbf7d0',
              background: 'rgba(0,0,0,0.3)',
              padding: '40px 60px',
              borderRadius: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#4ade80', marginRight: 15, width: 180 }}>IPアドレス:</span>
              <span style={{ fontWeight: 'bold' }}>hikamerscraft.f5.si</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#4ade80', marginRight: 15, width: 180 }}>Java版:</span>
              <span>25565</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#4ade80', marginRight: 15, width: 180 }}>統合版:</span>
              <span>19132</span>
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
