import { generateRssFeed } from '@/lib/rss';
import { NextResponse } from 'next/server';

export async function GET() {
  const feed = generateRssFeed();

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
