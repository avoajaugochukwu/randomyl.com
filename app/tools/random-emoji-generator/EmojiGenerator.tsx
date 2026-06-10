'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { emojis, categoryLabels, type EmojiCategory } from './emojis';

function sample<T>(arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

function pick<T>(arr: T[], n: number): T[] {
  const out: T[] = [];
  for (let i = 0; i < n; i++) {
    out.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return out;
}

const categories = Object.keys(emojis) as EmojiCategory[];

export default function EmojiGenerator() {
  const [category, setCategory] = useState<'all' | EmojiCategory>('all');
  const [count, setCount] = useState(5);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const pool = category === 'all'
      ? categories.flatMap((c) => emojis[c])
      : emojis[category];
    const n = Math.max(1, Math.min(count, 30));
    setResults(n <= pool.length ? sample(pool, n) : pick(pool, n));
  };

  const copy = (text: string, message: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(message);
    }).catch(() => toast.error('Failed to copy.'));
  };

  const copyAll = () => {
    navigator.clipboard.writeText(results.join('')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Copied all emojis!');
    }).catch(() => toast.error('Failed to copy.'));
  };

  return (
    <div className="panel flex flex-col gap-5 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="category">Category</Label>
          <select id="category" value={category}
            onChange={(e) => setCategory(e.target.value as 'all' | EmojiCategory)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="all">All emojis</option>
            {categories.map((c) => (
              <option key={c} value={c}>{categoryLabels[c]}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="count">How many</Label>
          <Input id="count" type="number" min={1} max={30} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
      </div>

      <Button onClick={generate} className="w-full">
        <Smile className="mr-2 h-4 w-4" /> Generate Emoji{count > 1 ? 's' : ''}
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">{results.length} emoji{results.length > 1 ? 's' : ''}</p>
            <Button variant="outline" size="sm" onClick={copyAll}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              Copy all
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {results.map((e, i) => (
              <button
                key={i}
                type="button"
                onClick={() => copy(e, 'Emoji copied!')}
                className="flex h-14 w-14 items-center justify-center rounded-md border bg-card text-3xl transition-colors hover:bg-accent"
                title="Click to copy"
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
