import { ImageResponse } from 'next/og';

export const alt = 'プラグイン・データパック | ヒカマーズマイクラ';
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
            プラグイン・データパック
          </div>
          
          <div
            style={{
              fontSize: 40,
              color: '#86efac',
              textAlign: 'center',
              marginBottom: 50,
            }}
          >
            便利な機能が13種類以上！
          </div>
          
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 15,
              justifyContent: 'center',
              maxWidth: 900,
            }}
          >
            {['チェストロック', '自動日本語変換', 'エレベーター', '全自動釣り', '墓チェスト', '座るモーション'].map((feature) => (
              <div
                key={feature}
                style={{
                  background: 'rgba(34, 197, 94, 0.2)',
                  border: '2px solid rgba(74, 222, 128, 0.5)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  fontSize: 24,
                  color: '#bbf7d0',
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
