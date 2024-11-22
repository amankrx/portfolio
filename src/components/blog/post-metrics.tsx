'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Metrics {
  likeCount: number;
  userLiked: boolean;
}

interface LikeResponse {
  likeCount: number;
  userLiked: boolean;
  error?: string;
}

export default function PostMetrics({ slug }: { slug: string }) {
  const [metrics, setMetrics] = useState<Metrics>({
    likeCount: 0,
    userLiked: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoized function to clean slug
  const getCleanSlug = useCallback((slugPath: string) => {
    return slugPath.split('/').pop() || slugPath;
  }, []);

  // Memoized metrics fetching
  const fetchMetrics = useCallback(async () => {
    try {
      const cleanSlug = getCleanSlug(slug);
      const response = await fetch(`/api/blog/${cleanSlug}/likes`, {
        cache: 'no-store', // Ensures fresh data
        next: { revalidate: 0 } // NextJS 13+ cache control
      });

      if (!response.ok) {
        throw new Error('Failed to fetch metrics');
      }

      const data: LikeResponse = await response.json();
      setMetrics({
        likeCount: data.likeCount,
        userLiked: data.userLiked,
      });
      setError(null);
    } catch (error) {
      console.error('Error fetching metrics:', error);
      setError('Failed to load post metrics');
    }
  }, [slug, getCleanSlug]);

  // Fetch metrics on component mount or slug change
  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  // Optimistic UI update with error handling
  const handleLike = async () => {
    if (isLoading || metrics.userLiked) return;

    // Optimistic update
    const optimisticUpdate = {
      likeCount: metrics.likeCount + 1,
      userLiked: true,
    };

    try {
      setIsLoading(true);
      setIsAnimating(true);
      setMetrics(optimisticUpdate);
      setError(null);

      const cleanSlug = getCleanSlug(slug);
      const response = await fetch(`/api/blog/${cleanSlug}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data: LikeResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to like post');
      }

      // Confirm server-side update
      setMetrics({
        likeCount: data.likeCount,
        userLiked: true,
      });
    } catch (error) {
      // Rollback on error
      setMetrics(prev => ({
        ...prev,
        userLiked: false,
        likeCount: prev.likeCount - 1
      }));

      console.error('Error adding like:', error);
      setError('Failed to like post. Please try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.button
        onClick={handleLike}
        disabled={isLoading || metrics.userLiked}
        className={`
          relative flex items-center justify-center
          w-14 h-14 rounded-full 
          transition-all duration-300 group
          ${
            metrics.userLiked
            ? 'bg-pink-100 dark:bg-pink-900'
            : 'bg-gray-100 hover:bg-pink-50 dark:bg-gray-800 dark:hover:bg-pink-900/30'
        }
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Like post"
        aria-pressed={metrics.userLiked}
      >
        <Heart
          className={`
            w-7 h-7 transition-all duration-300
            ${
            metrics.userLiked
              ? 'fill-pink-500 stroke-pink-500 scale-110'
              : 'stroke-gray-500 dark:stroke-gray-400 group-hover:text-pink-500'
          }
          `}
        />

        {/* Like animation particles */}
        <AnimatePresence>
          {isAnimating && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-pink-500 rounded-full"
                  initial={{
                    opacity: 1,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: 0,
                    scale: 1,
                    x: Math.cos((i * 45 * Math.PI) / 180) * 25,
                    y: Math.sin((i * 45 * Math.PI) / 180) * 25,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.button>

      <div className="flex flex-col items-center">
        <motion.span
          className="text-sm font-medium text-gray-600 dark:text-gray-400"
          animate={{ scale: isAnimating ? 1.2 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {metrics.likeCount}
        </motion.span>
        {error && (
          <span className="text-xs text-red-500 mt-1">
            {error}
          </span>
        )}
      </div>
    </div>
  );
}