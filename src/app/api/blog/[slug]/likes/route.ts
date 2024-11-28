// app/api/blog/[slug]/likes/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/utils';
import { getClientHash } from '@/lib/client-hash';

interface ParamsProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPostId(slug: string) {
  const { data: post } = await supabase
    .from('posts')
    .select('id')
    .eq('slug', slug)
    .single();

  return post?.id;
}

export async function POST(request: NextRequest, { params }: ParamsProps) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ message: 'Missing slug' }, { status: 400 });
    }

    const postId = await getPostId(slug);
    if (!postId) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    // Generate secure client hash
    const userIdentifier = await getClientHash();

    // Check if already liked
    const { data: existingLike } = await supabase
      .from('post_likes')
      .select('*')
      .eq('post_id', postId)
      .eq('user_identifier', userIdentifier)
      .single();

    if (existingLike) {
      return NextResponse.json({
        message: 'Already liked',
        likeCount: (await getLikeCount(postId)) || 0,
        userLiked: true,
      });
    }

    // Add new like
    await supabase.from('post_likes').insert({
      post_id: postId,
      user_identifier: userIdentifier,
    });

    const likeCount = await getLikeCount(postId);

    return NextResponse.json({
      likeCount: likeCount || 0,
      userLiked: true,
    });
  } catch (error) {
    console.error('Error in likes handler:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest, { params }: ParamsProps) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ message: 'Missing slug' }, { status: 400 });
    }

    const postId = await getPostId(slug);
    if (!postId) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    const userIdentifier = await getClientHash();

    // Get like count and user's like status
    const [{ count: likeCount }, { data: userLike }] = await Promise.all([
      supabase
        .from('post_likes')
        .select('*', { count: 'exact' })
        .eq('post_id', postId),
      supabase
        .from('post_likes')
        .select('*')
        .eq('post_id', postId)
        .eq('user_identifier', userIdentifier)
        .single(),
    ]);

    return NextResponse.json({
      likeCount: likeCount || 0,
      userLiked: !!userLike,
    });
  } catch (error) {
    console.error('Error fetching likes:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function getLikeCount(postId: number): Promise<number> {
  const { count } = await supabase
    .from('post_likes')
    .select('*', { count: 'exact' })
    .eq('post_id', postId);

  return count || 0;
}
