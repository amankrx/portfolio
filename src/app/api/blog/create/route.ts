import { supabase } from '@/lib/analytics';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, title, description } = body;

    // Check if post already exists
    const { data: existingPost } = await supabase
      .from('posts')
      .select('id')
      .eq('slug', slug)
      .single();

    if (existingPost) {
      return NextResponse.json(
        { error: 'Post already exists' },
        { status: 409 }
      );
    }

    // Create new post
    const { data: post, error: postError } = await supabase
      .from('posts')
      .insert([
        {
          slug,
          title,
          description,
          published: true, // You can make this configurable
        },
      ])
      .select()
      .single();

    if (postError) throw postError;

    // Initialize metrics for the post
    const { error: metricsError } = await supabase.from('post_metrics').insert([
      {
        post_id: post.id,
        view_count: 0,
        like_count: 0,
      },
    ]);

    if (metricsError) throw metricsError;

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
