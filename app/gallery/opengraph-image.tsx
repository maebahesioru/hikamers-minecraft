import { ImageResponse } from 'next/og';

export const alt = 'ギャラリー | ヒカマーズマイクラ';
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
              fontSize: 80,
              marginBottom: 40,
            }}
          >
            📸
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
            ギャラリー
          </div>
          
          <div
            style={{
              fontSize: 40,
              color: '#86efac',
              textAlign: 'center',
              marginBottom: 50,
            }}
          >
            プレイヤーの建築物や冒険の様子
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 15,
              fontSize: 32,
              color: '#bbf7d0',
              background: 'rgba(0,0,0,0.3)',
              padding: '20px 40px',
              borderRadius: '15px',
            }}
          >
            <span style={{ color: '#4ade80' }}>#ヒカマーズマイクラ</span>
            <span>で投稿しよう！</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
