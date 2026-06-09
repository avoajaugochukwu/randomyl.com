'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import 'highlight.js/styles/github-dark.css';

export function MarkdownRenderer({
  content,
  className = 'art-body',
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          img({ src, alt }) {
            if (!src || typeof src !== 'string') return null;
            return (
              <Image
                src={src}
                alt={alt || ''}
                width={1100}
                height={620}
                className="mx-auto h-auto max-w-full"
              />
            );
          },
          a({ href, children }) {
            const external = href?.startsWith('http');
            return (
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
