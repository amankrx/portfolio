import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const title = searchParams.get('title') ?? siteConfig.name;
    const description =
      searchParams.get('description') ?? siteConfig.description;
    const type = searchParams.get('type') ?? 'website';

    // Since we're using white background, we'll use the light logo (black text)
    const logoUrl = new URL('/logo/light.png', siteConfig.url).toString();

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: 'black',
              marginBottom: 24,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                display: 'flex',
                fontSize: 30,
                color: 'gray',
                whiteSpace: 'pre-wrap',
              }}
            >
              {description}
            </div>
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 'auto',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              paddingTop: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <img
                src={logoUrl}
                alt={siteConfig.name}
                width="120"
                height="40"
                style={{
                  objectFit: 'contain',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <div style={{ fontSize: 16, color: 'gray' }}>
                  {type === 'article' ? 'Blog Post' : 'Portfolio'}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`${e.message}`);
    } else {
      console.log('An unknown error occurred');
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
