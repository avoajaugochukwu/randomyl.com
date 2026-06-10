'use client';

import { useState } from 'react';
import { Shuffle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { trivia, categoryLabels, TriviaCategory, TriviaItem } from './trivia';

function sample<T>(arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

const categoryKeys = Object.keys(categoryLabels) as TriviaCategory[];

export default function TriviaGenerator() {
  const [category, setCategory] = useState<'all' | TriviaCategory>('all');
  const [count, setCount] = useState(5);
  const [results, setResults] = useState<TriviaItem[]>([]);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const generate = () => {
    const pool =
      category === 'all'
        ? categoryKeys.flatMap((k) => trivia[k])
        : trivia[category];
    const n = Math.max(1, Math.min(count, 20));
    setResults(sample(pool, Math.min(n, pool.length)));
    setRevealed(new Set());
  };

  const toggle = (i: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  return (
    <div className="panel flex flex-col gap-5 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="category">Category</Label>
          <select id="category" value={category}
            onChange={(e) => setCategory(e.target.value as 'all' | TriviaCategory)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="all">All categories</option>
            {categoryKeys.map((k) => (
              <option key={k} value={k}>{categoryLabels[k]}</option>
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
        <Shuffle className="mr-2 h-4 w-4" /> Generate Trivia
      </Button>

      {results.length > 0 && (
        <div className="flex flex-col gap-3 mt-1">
          {results.map((item, i) => (
            <div key={i} className="p-4 border rounded bg-card text-card-foreground">
              <p className="font-medium">{i + 1}. {item.q}</p>
              {revealed.has(i) ? (
                <p className="mt-2 text-sm"><span className="font-semibold">Answer:</span> {item.a}</p>
              ) : (
                <Button variant="outline" size="sm" className="mt-2" onClick={() => toggle(i)}>
                  <Eye className="mr-2 h-4 w-4" /> Show answer
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
