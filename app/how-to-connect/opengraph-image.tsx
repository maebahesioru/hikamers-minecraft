import { ImageResponse } from 'next/og';

export const alt = '接続方法 | ヒカマーズマイクラ';
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
            接続方法
          </div>
          
          <div
            style={{
              fontSize: 40,
              color: '#86efac',
              textAlign: 'center',
              marginBottom: 50,
            }}
          >
            Java版・統合版の詳しい接続手順
          </div>
          
          <div
            style={{
              display: 'flex',
              gap: 40,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.3)',
                padding: '40px 50px',
                borderRadius: '20px',
                border: '3px solid rgba(74, 222, 128, 0.3)',
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  color: '#4ade80',
                  marginBottom: 20,
                }}
              >
                💻
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: 15,
                }}
              >
                Java版
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: '#bbf7d0',
                  textAlign: 'center',
                }}
              >
                PC (Windows/Mac/Linux)
              </div>
            </div>
            
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.3)',
                padding: '40px 50px',
                borderRadius: '20px',
                border: '3px solid rgba(74, 222, 128, 0.3)',
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  color: '#4ade80',
                  marginBottom: 20,
                }}
              >
                📱
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: 15,
                }}
              >
                統合版
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: '#bbf7d0',
                  textAlign: 'center',
                }}
              >
                Xbox/PS/Switch/Mobile
              </div>
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
