'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { words } from './words';

function sample<T>(arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

export default function WordGenerator() {
  const [count, setCount] = useState(5);
  const [letters, setLetters] = useState(0); // 0 = any length
  const [startsWith, setStartsWith] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setError('');
    let pool = words;
    if (letters > 0) pool = pool.filter((w) => w.length === letters);
    if (startsWith.trim()) {
      const p = startsWith.trim().toLowerCase();
      pool = pool.filter((w) => w.startsWith(p));
    }
    if (!pool.length) {
      setError('No words match those filters. Try loosening the length or starting letter.');
      setResults([]);
      return;
    }
    const n = Math.max(1, Math.min(count, 50));
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="count">How many words</Label>
          <Input id="count" type="number" min={1} max={50} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="letters">Word length</Label>
          <select id="letters" value={letters}
            onChange={(e) => setLetters(parseInt(e.target.value, 10))}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value={0}>Any length</option>
            {[3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} letters</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="starts">Starts with</Label>
          <Input id="starts" type="text" maxLength={3} placeholder="any"
            value={startsWith}
            onChange={(e) => setStartsWith(e.target.value.replace(/[^a-zA-Z]/g, ''))} />
        </div>
      </div>

      <Button onClick={generate} className="w-full">
        <Shuffle className="mr-2 h-4 w-4" /> Generate Words
      </Button>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">{results.length} word{results.length > 1 ? 's' : ''}</p>
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
          <div className="flex flex-wrap gap-2">
            {results.map((w, i) => (
              <span key={i} className="px-3 py-1.5 border rounded bg-card text-card-foreground font-medium capitalize">
                {w}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
