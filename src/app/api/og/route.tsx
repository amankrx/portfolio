import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';

export async function GET() {
  try {
    // Using dark logo (white text) for dark background
    const logoUrl = new URL('/logo/dark.png', siteConfig.url).toString();

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#141414',
            padding: '40px',
          }}
        >
          <img
            src={logoUrl}
            alt={siteConfig.name}
            width="600" // Adjust size as needed
            height="200" // Adjust size as needed
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log('An unknown error occurred');
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
