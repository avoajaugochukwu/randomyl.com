'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { statements, categoryLabels, NhieCategory } from './statements';

function sample<T>(arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

const categoryKeys = Object.keys(categoryLabels) as NhieCategory[];

export default function NeverHaveIEverGenerator() {
  const [category, setCategory] = useState<'all' | NhieCategory>('all');
  const [count, setCount] = useState(1);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const pool =
      category === 'all'
        ? categoryKeys.flatMap((k) => statements[k])
        : statements[category];
    const n = Math.max(1, Math.min(count, 10));
    setResults(sample(pool, Math.min(n, pool.length)));
  };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Copied to clipboard!');
    }).catch(() => toast.error('Failed to copy.'));
  };

  return (
    <div className="panel flex flex-col gap-5 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="category">Category</Label>
          <select id="category" value={category}
            onChange={(e) => setCategory(e.target.value as 'all' | NhieCategory)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="all">All categories</option>
            {categoryKeys.map((k) => (
              <option key={k} value={k}>{categoryLabels[k]}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="count">How many</Label>
          <Input id="count" type="number" min={1} max={10} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
      </div>

      <Button onClick={generate} className="w-full">
        <Shuffle className="mr-2 h-4 w-4" /> Generate
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">{results.length} prompt{results.length > 1 ? 's' : ''}</p>
            <Button variant="outline" size="sm" onClick={() => copy(results.join('\n'))}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              Copy
            </Button>
          </div>
          {results.length === 1 ? (
            <div className="p-6 border rounded bg-card text-card-foreground text-center text-lg md:text-xl font-medium">
              {results[0]}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {results.map((s, i) => (
                <div key={i} className="p-3 border rounded bg-card text-card-foreground">
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
