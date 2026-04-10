import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'ヒカマーズマイクラ';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
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
        {/* Grid Pattern */}
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
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: 120,
              height: 120,
              background: '#16a34a',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 40,
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            H
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 20,
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            ヒカマーズマイクラ
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 36,
              color: '#86efac',
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            統合版&Java版どちらも参加可能
          </div>
          
          {/* Server Info */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              fontSize: 28,
              color: '#bbf7d0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#4ade80', marginRight: 10 }}>IP:</span>
              hikamerscraft.f5.si
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
