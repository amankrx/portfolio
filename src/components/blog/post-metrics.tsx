'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

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
  const [isAnimating, setIsAnimating] = useState(false);

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
    if (isLoading || metrics.userLiked) return;

    try {
      setIsLoading(true);
      setIsAnimating(true);
      const cleanSlug = getCleanSlug(slug);

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

      if (response.ok) {
        setMetrics({
          likeCount: data.likeCount,
          userLiked: true,
        });
      }
    } catch (error) {
      console.error('Error adding like:', error);
      fetchMetrics();
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
          relative flex flex-col items-center justify-center
          w-12 h-12 rounded-full
          transition-all duration-300
          ${
            metrics.userLiked
              ? 'bg-pink-100 dark:bg-pink-900'
              : 'bg-gray-100 hover:bg-pink-50 dark:bg-gray-800 dark:hover:bg-pink-900/30'
          }
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart
          className={`
            w-6 h-6 transition-colors duration-300
            ${
              metrics.userLiked
                ? 'fill-pink-500 stroke-pink-500'
                : 'stroke-gray-500 dark:stroke-gray-400'
            }
          `}
        />

        {/* Like animation particles */}
        <AnimatePresence>
          {isAnimating && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-pink-500 rounded-full"
                  initial={{
                    opacity: 1,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: 0,
                    scale: 1,
                    x: Math.cos((i * 60 * Math.PI) / 180) * 20,
                    y: Math.sin((i * 60 * Math.PI) / 180) * 20,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.button>

      <motion.span
        className="text-sm font-medium text-gray-600 dark:text-gray-400"
        animate={{ scale: isAnimating ? 1.2 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {metrics.likeCount}
      </motion.span>
    </div>
  );
}
