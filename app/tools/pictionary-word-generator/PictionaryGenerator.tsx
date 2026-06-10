'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { bank, type PictionaryMode, type Difficulty } from './words';

function sample<T>(arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

export default function PictionaryGenerator() {
  const [mode, setMode] = useState<PictionaryMode>('pictionary');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [count, setCount] = useState(1);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const pool = bank(mode, difficulty);
    const n = Math.max(1, Math.min(count, 20));
    setResults(sample(pool, Math.min(n, pool.length)));
  };

  const copy = () => {
    if (!results.length) return;
    navigator.clipboard.writeText(results.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Copied to clipboard!');
    }).catch(() => toast.error('Failed to copy.'));
  };

  const seg = (active: boolean) =>
    `px-4 py-2 text-sm rounded-md border transition-colors ${active ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent hover:bg-accent'}`;

  return (
    <div className="panel flex flex-col gap-5 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div className="flex flex-col gap-1.5">
        <Label>Game</Label>
        <div className="flex gap-2">
          <button className={seg(mode === 'pictionary')} onClick={() => setMode('pictionary')}>Pictionary (draw it)</button>
          <button className={seg(mode === 'charades')} onClick={() => setMode('charades')}>Charades (act it)</button>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Difficulty</Label>
        <div className="flex gap-2">
          {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
            <button key={d} className={seg(difficulty === d)} onClick={() => setDifficulty(d)}>
              {d[0].toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="count">How many words</Label>
        <select id="count" value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10))}
          className="h-9 w-fit rounded-md border border-input bg-transparent px-3 text-sm">
          {[1, 3, 5, 10, 15, 20].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>

      <Button onClick={generate} className="w-full">
        <Sparkles className="mr-2 h-4 w-4" /> Generate {mode === 'charades' ? 'Charades' : 'Pictionary'} Word{count > 1 ? 's' : ''}
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium capitalize">{difficulty} · {mode}</p>
            <Button variant="outline" size="sm" onClick={copy}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          {results.length === 1 ? (
            <div className="p-6 border rounded bg-card text-card-foreground text-center">
              <span className="text-3xl font-bold capitalize">{results[0]}</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {results.map((w, i) => (
                <div key={i} className="p-3 border rounded bg-card text-card-foreground font-semibold capitalize">
                  {w}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
