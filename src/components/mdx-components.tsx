// components/mdx-components.tsx
import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import CopyButton from '@/components/copy-button';
import React from 'react';
import { LinkButton } from '@/components/ui/link-button';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  LinkButton,
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <CopyButton {...props} />
  ),
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
