'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

type LetterSet = 'all' | 'vowels' | 'consonants';
type LetterCase = 'upper' | 'lower';

const POOLS: Record<LetterSet, string[]> = {
  all: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  vowels: 'aeiou'.split(''),
  consonants: 'bcdfghjklmnpqrstvwxyz'.split(''),
};

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function LetterGenerator() {
  const [count, setCount] = useState(1);
  const [letterSet, setLetterSet] = useState<LetterSet>('all');
  const [letterCase, setLetterCase] = useState<LetterCase>('upper');
  const [noRepeats, setNoRepeats] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setError('');
    const n = Math.max(1, Math.min(count, 50));
    const pool = POOLS[letterSet];

    if (noRepeats && n > pool.length) {
      setError(`Can't pick ${n} unique letters — there are only ${pool.length} to choose from. Lower the count or turn off "no repeats".`);
      return;
    }

    let out: string[] = [];
    if (noRepeats) {
      const shuffled = [...pool];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = randInt(0, i);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      out = shuffled.slice(0, n);
    } else {
      for (let i = 0; i < n; i++) out.push(pool[randInt(0, pool.length - 1)]);
    }

    out = out.map((l) => (letterCase === 'upper' ? l.toUpperCase() : l.toLowerCase()));
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
          <Label htmlFor="count">How many letters</Label>
          <Input id="count" type="number" min={1} max={50} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="set">Letters</Label>
          <select id="set" value={letterSet}
            onChange={(e) => setLetterSet(e.target.value as LetterSet)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="all">Whole alphabet (A–Z)</option>
            <option value="vowels">Vowels only</option>
            <option value="consonants">Consonants only</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="case">Case</Label>
          <select id="case" value={letterCase}
            onChange={(e) => setLetterCase(e.target.value as LetterCase)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="upper">Uppercase</option>
            <option value="lower">Lowercase</option>
          </select>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
        <input type="checkbox" checked={noRepeats} onChange={(e) => setNoRepeats(e.target.checked)} />
        No repeats (unique letters only)
      </label>

      <Button onClick={generate} className="w-full">
        <Shuffle className="mr-2 h-4 w-4" /> Generate
      </Button>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">
              {results.length === 1 ? 'Your letter' : `${results.length} letters`}
            </p>
            <Button variant="outline" size="sm" onClick={copy}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          {results.length === 1 ? (
            <div className="p-6 border rounded bg-card text-card-foreground text-center">
              <span className="text-5xl font-bold">{results[0]}</span>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {results.map((letter, i) => (
                <span key={i}
                  className="px-3 py-1.5 border rounded bg-card text-card-foreground font-semibold">
                  {letter}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
