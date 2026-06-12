'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import type { SearchItem } from '@/lib/search';

const TYPE_LABEL: Record<SearchItem['type'], string> = {
  tool: 'Tool',
  variant: 'Variant',
  post: 'Blog',
};

function score(item: SearchItem, terms: string[], query: string): number {
  const title = item.title.toLowerCase();
  // Require every term to appear somewhere in the haystack (AND match).
  for (const term of terms) {
    if (!item.keywords.includes(term)) return -1;
  }
  let s = 0;
  if (title === query) s += 1000;
  else if (title.startsWith(query)) s += 500;
  else if (title.includes(query)) s += 250;
  for (const term of terms) {
    if (title.includes(term)) s += 40;
  }
  // Nudge primary tools above variants and posts on ties.
  s += item.type === 'tool' ? 8 : item.type === 'variant' ? 4 : 0;
  return s;
}

export default function HeaderSearch({ index }: { index: SearchItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const trimmed = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!trimmed) return [];
    const terms = trimmed.split(/\s+/).filter(Boolean);
    return index
      .map((item) => ({ item, s: score(item, terms, trimmed) }))
      .filter((r) => r.s >= 0)
      .sort((a, b) => b.s - a.s)
      .map((r) => r.item)
      .slice(0, 8);
  }, [index, trimmed]);

  // Open with Cmd/Ctrl+K, close with Escape.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Focus the input and lock body scroll while open.
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <>
      <button
        type="button"
        className="nav-search-btn"
        onClick={() => setOpen(true)}
        aria-label="Search"
      >
        <Search size={18} aria-hidden />
        <span className="nav-search-btn-label">Search</span>
        <kbd className="nav-search-kbd">⌘K</kbd>
      </button>

      {open && (
        <div
          className="hsearch-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          onClick={() => setOpen(false)}
        >
          <div className="hsearch-panel" onClick={(e) => e.stopPropagation()}>
            <div className="hsearch-bar">
              <Search className="hsearch-icon" size={20} aria-hidden />
              <input
                ref={inputRef}
                type="search"
                className="hsearch-input"
                placeholder="Search tools, variants, and articles…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && results[0]) go(results[0].href);
                }}
                aria-label="Search the site"
                autoComplete="off"
              />
              <button
                type="button"
                className="hsearch-close"
                onClick={() => setOpen(false)}
                aria-label="Close search"
              >
                <X size={18} aria-hidden />
              </button>
            </div>

            {trimmed && (
              <div className="hsearch-results">
                {results.length > 0 ? (
                  results.map((item) => (
                    <button
                      key={`${item.type}:${item.href}`}
                      type="button"
                      className="hsearch-row"
                      onClick={() => go(item.href)}
                    >
                      <span className={`search-badge badge-${item.type}`}>
                        {TYPE_LABEL[item.type]}
                      </span>
                      <span className="hsearch-row-main">
                        <span className="hsearch-row-title">{item.title}</span>
                        <span className="hsearch-row-desc">{item.description}</span>
                      </span>
                      <span className="hsearch-row-go">→</span>
                    </button>
                  ))
                ) : (
                  <div className="hsearch-empty">
                    No matches for <strong>“{query.trim()}”</strong>. Try a tool
                    name or a word like “number”.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
