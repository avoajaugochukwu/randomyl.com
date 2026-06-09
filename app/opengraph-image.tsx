import { ImageResponse } from 'next/og';

export const alt = 'Randomyl - Generate Random Data Instantly';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(90deg, #818cf8 0%, #ec4899 50%, #38bdf8 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
          }}
        >
          Randomyl
        </div>
        <div
          style={{
            fontSize: 40,
            marginTop: 16,
            color: '#cbd5e1',
            display: 'flex',
          }}
        >
          Generate Random Data Instantly
        </div>
      </div>
    ),
    { ...size }
  );
}
