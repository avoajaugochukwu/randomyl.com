'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Dices } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

type SortMode = 'none' | 'asc' | 'desc';

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function NumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [unique, setUnique] = useState(false);
  const [sort, setSort] = useState<SortMode>('none');
  const [results, setResults] = useState<number[]>([]);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setError('');
    const lo = Math.min(min, max);
    const hi = Math.max(min, max);
    const n = Math.max(1, Math.min(count, 10000));
    const range = hi - lo + 1;

    if (!Number.isFinite(lo) || !Number.isFinite(hi)) {
      setError('Please enter valid numbers.');
      return;
    }
    if (unique && n > range) {
      setError(`Can't pick ${n} unique numbers from a range of only ${range}. Widen the range or turn off "no repeats".`);
      return;
    }

    let out: number[] = [];
    if (unique) {
      const pool = new Set<number>();
      while (pool.size < n) pool.add(randInt(lo, hi));
      out = [...pool];
    } else {
      for (let i = 0; i < n; i++) out.push(randInt(lo, hi));
    }

    if (sort === 'asc') out.sort((a, b) => a - b);
    if (sort === 'desc') out.sort((a, b) => b - a);

    setResults(out);
  };

  const copy = () => {
    if (!results.length) return;
    navigator.clipboard.writeText(results.join(', ')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Copied to clipboard!');
    }).catch(() => toast.error('Failed to copy.'));
  };

  return (
    <div className="panel flex flex-col gap-5 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="min">Minimum</Label>
          <Input id="min" type="number" value={min}
            onChange={(e) => setMin(parseInt(e.target.value, 10) || 0)} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="max">Maximum</Label>
          <Input id="max" type="number" value={max}
            onChange={(e) => setMax(parseInt(e.target.value, 10) || 0)} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="count">How many numbers</Label>
          <Input id="count" type="number" min={1} max={10000} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="sort">Order</Label>
          <select id="sort" value={sort}
            onChange={(e) => setSort(e.target.value as SortMode)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="none">Random order</option>
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
        <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} />
        No repeats (unique numbers only)
      </label>

      <Button onClick={generate} className="w-full">
        <Dices className="mr-2 h-4 w-4" /> Generate
      </Button>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">
              {results.length === 1 ? 'Your number' : `${results.length} numbers`}
            </p>
            <Button variant="outline" size="sm" onClick={copy}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          {results.length === 1 ? (
            <div className="p-6 border rounded bg-card text-card-foreground text-center">
              <span className="text-5xl font-bold tabular-nums">{results[0]}</span>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {results.map((num, i) => (
                <span key={i}
                  className="px-3 py-1.5 border rounded bg-card text-card-foreground font-semibold tabular-nums">
                  {num}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
