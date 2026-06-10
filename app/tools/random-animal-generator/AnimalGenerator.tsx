'use client';

import { useState } from 'react';
import { Copy, CopyCheck, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { animals, categoryLabels, type AnimalCategory } from './animals';

function sample<T>(arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

const categories = Object.keys(animals) as AnimalCategory[];

export default function AnimalGenerator() {
  const [category, setCategory] = useState<'all' | AnimalCategory>('all');
  const [count, setCount] = useState(1);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const pool = category === 'all'
      ? categories.flatMap((c) => animals[c])
      : animals[category];
    const n = Math.max(1, Math.min(count, 20));
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
            onChange={(e) => setCategory(e.target.value as 'all' | AnimalCategory)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="all">All animals</option>
            {categories.map((c) => (
              <option key={c} value={c}>{categoryLabels[c]}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="count">How many</Label>
          <Input id="count" type="number" min={1} max={20} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
      </div>

      <Button onClick={generate} className="w-full">
        <PawPrint className="mr-2 h-4 w-4" /> Generate Animal{count > 1 ? 's' : ''}
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">{results.length} animal{results.length > 1 ? 's' : ''}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => copy(results.join(', '))}>
                {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                Copy with commas
              </Button>
              <Button variant="outline" size="sm" onClick={() => copy(results.join('\n'))}>
                <Copy className="mr-2 h-4 w-4" /> Copy line by line
              </Button>
            </div>
          </div>
          {results.length === 1 ? (
            <div className="p-6 border rounded bg-card text-card-foreground text-center">
              <span className="text-3xl font-bold capitalize">{results[0]}</span>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {results.map((a, i) => (
                <span key={i} className="px-3 py-1.5 border rounded bg-card text-card-foreground font-medium capitalize">
                  {a}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
