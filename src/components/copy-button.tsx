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
        className="absolute right-4 top-4 rounded bg-gray-800 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
      >
        {isCopied ? (
          <FaCheck className="h-4 w-4 text-white" />
        ) : (
          <FiClipboard className="h-4 w-4 text-white" />
        )}
      </button>
      <pre ref={preRef} {...props} className="m-0 overflow-auto">
        {children}
      </pre>
    </div>
  );
}
