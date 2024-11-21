// components/blog/post-metrics.tsx
'use client';

import { useEffect, useState } from 'react';

interface Metrics {
  likeCount: number;
  userLiked: boolean;
}

export default function PostMetrics({ slug }: { slug: string }) {
  const [metrics, setMetrics] = useState<Metrics>({
    likeCount: 0,
    userLiked: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const getCleanSlug = (slugPath: string) => {
    return slugPath.split('/').pop() || slugPath;
  };

  useEffect(() => {
    fetchMetrics();
  }, [slug]);

  const fetchMetrics = async () => {
    try {
      const cleanSlug = getCleanSlug(slug);
      const response = await fetch(`/api/blog/${cleanSlug}/likes`);
      const data = await response.json();

      setMetrics({
        likeCount: data.likeCount,
        userLiked: data.userLiked,
      });
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };

  const handleLike = async () => {
    if (isLoading || metrics.userLiked) return; // Prevent unliking and double clicks

    try {
      setIsLoading(true);
      const cleanSlug = getCleanSlug(slug);

      // Optimistic update for likes only
      setMetrics((prev) => ({
        likeCount: prev.likeCount + 1,
        userLiked: true,
      }));

      const response = await fetch(`/api/blog/${cleanSlug}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      // Update with server response
      if (response.ok) {
        setMetrics({
          likeCount: data.likeCount,
          userLiked: true,
        });
      }
    } catch (error) {
      console.error('Error adding like:', error);
      // Revert optimistic update on error
      fetchMetrics();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={handleLike}
        disabled={isLoading || metrics.userLiked}
        className={`flex items-center gap-1 ${
          metrics.userLiked
            ? 'text-blue-500 cursor-default'
            : 'hover:text-blue-400'
        }`}
        title={metrics.userLiked ? 'Already liked' : 'Click to like'}
      >
        {metrics.userLiked ? '❤️' : '🤍'} {metrics.likeCount} likes
      </button>
    </div>
  );
}
