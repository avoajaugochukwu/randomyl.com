'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
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

export default function ToolSearch({
  index,
  children,
}: {
  index: SearchItem[];
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState('');
  const trimmed = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!trimmed) return [];
    const terms = trimmed.split(/\s+/).filter(Boolean);
    return index
      .map((item) => ({ item, s: score(item, terms, trimmed) }))
      .filter((r) => r.s >= 0)
      .sort((a, b) => b.s - a.s)
      .map((r) => r.item);
  }, [index, trimmed]);

  const searching = trimmed.length > 0;

  return (
    <div className="tool-search-wrap">
      <div className="wrap">
        <div className="tool-search">
          <Search className="tool-search-icon" size={18} aria-hidden />
          <input
            type="search"
            className="tool-search-input"
            placeholder="Search tools, variants, and articles…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search the site"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              className="tool-search-clear"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              <X size={16} aria-hidden />
            </button>
          )}
        </div>
      </div>

      {searching ? (
        <div className="wrap">
          {results.length > 0 ? (
            <div className="search-results">
              <div className="search-results-meta mono">
                {results.length} result{results.length === 1 ? '' : 's'}
              </div>
              {results.map((item) => (
                <Link key={`${item.type}:${item.href}`} className="search-row" href={item.href}>
                  <span className={`search-badge badge-${item.type}`}>{TYPE_LABEL[item.type]}</span>
                  <span className="search-row-main">
                    <span className="tname">{item.title}</span>
                    <span className="tdesc">{item.description}</span>
                  </span>
                  <span className="tgo">→</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="search-empty">
              <p>
                No matches for <strong>“{query.trim()}”</strong>.
              </p>
              <p className="mono">Try a tool name, a topic, or a word like “number”.</p>
            </div>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
