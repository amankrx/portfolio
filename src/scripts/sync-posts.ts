// scripts/sync-posts.ts
import { syncPosts } from '@/lib/posts';
import 'dotenv/config';

async function main() {
  // Validate environment variables
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    throw new Error('Supabase environment variables are not set');
  }

  console.log('Starting post sync...');
  await syncPosts();
  console.log('Post sync completed');
  process.exit(0);
}

main().catch((error) => {
  console.error('Error running sync:', error);
  process.exit(1);
});
