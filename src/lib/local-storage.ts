// lib/local-storage.ts
const VIEWS_KEY = 'post-views';
const LIKES_KEY = 'post-likes';

interface PostInteraction {
  timestamp: number;
}

const getStorageKey = (slug: string) => {
  // Get the last part of the path
  return slug.split('/').pop() || slug;
};

export const analyticsStorage = {
  // View tracking
  hasViewed(slug: string): boolean {
    try {
      const key = getStorageKey(slug);
      const views = JSON.parse(localStorage.getItem(VIEWS_KEY) || '{}');
      return !!views[key];
    } catch {
      return false;
    }
  },

  markViewed(slug: string): void {
    try {
      const key = getStorageKey(slug);
      const views = JSON.parse(localStorage.getItem(VIEWS_KEY) || '{}');
      views[key] = { timestamp: Date.now() };
      localStorage.setItem(VIEWS_KEY, JSON.stringify(views));
    } catch (error) {
      console.error('Error saving view to localStorage:', error);
    }
  },

  // Like tracking
  hasLiked(slug: string): boolean {
    try {
      const key = getStorageKey(slug);
      const likes = JSON.parse(localStorage.getItem(LIKES_KEY) || '{}');
      return !!likes[key];
    } catch {
      return false;
    }
  },

  toggleLike(slug: string): boolean {
    try {
      const key = getStorageKey(slug);
      const likes = JSON.parse(localStorage.getItem(LIKES_KEY) || '{}');
      const newLikeState = !likes[key];

      if (newLikeState) {
        likes[key] = { timestamp: Date.now() };
      } else {
        delete likes[key];
      }

      localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
      return newLikeState;
    } catch (error) {
      console.error('Error toggling likes in localStorage:', error);
      return false;
    }
  },
};
