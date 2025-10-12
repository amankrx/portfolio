'use client';

import { FiClipboard } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa6';
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react';

export default function CopyButton({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <div className="group relative">
      <button
        disabled={isCopied}
        onClick={handleClickCopy}
        className="absolute right-3 top-3 z-10 rounded-lg border border-primary/20 bg-background/90 p-2 text-foreground opacity-0 backdrop-blur-sm transition-all hover:bg-primary/10 group-hover:opacity-100"
        aria-label={isCopied ? 'Copied!' : 'Copy code'}
      >
        {isCopied ? (
          <FaCheck className="h-4 w-4 text-green-500" />
        ) : (
          <FiClipboard className="h-4 w-4" />
        )}
      </button>
      <pre ref={preRef} {...props} className="m-0 overflow-auto">
        {children}
      </pre>
    </div>
  );
}
