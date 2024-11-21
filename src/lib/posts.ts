import { posts } from '#site/content';
import { supabase } from '@/lib/analytics';

export async function syncPosts() {
  try {
    for (const post of posts) {
      // First, ensure post exists
      const { data: existingPost, error: postError } = await supabase
        .from('posts')
        .select('id')
        .eq('slug', post.slugAsParams)
        .single();

      if (postError || !existingPost) {
        // Create post if not exists
        const { error: insertError } = await supabase
          .from('posts')
          .insert({
            slug: post.slugAsParams,
          })
          .select()
          .single();

        if (insertError) {
          console.error(
            `Error creating post ${post.slugAsParams}:`,
            insertError
          );
        }
      }
    }
    console.log('All posts synced successfully');
  } catch (error) {
    console.error('Error syncing posts:', error);
  }
}
