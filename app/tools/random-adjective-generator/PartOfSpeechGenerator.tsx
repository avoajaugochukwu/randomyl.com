'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { partsOfSpeech, posMeta, type PartOfSpeech } from './words';

function sample<T>(arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

export default function PartOfSpeechGenerator({ initial = 'adjective' }: { initial?: PartOfSpeech }) {
  const [pos, setPos] = useState<PartOfSpeech>(initial);
  const [count, setCount] = useState(5);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const n = Math.max(1, Math.min(count, 30));
    const pool = partsOfSpeech[pos];
    setResults(sample(pool, Math.min(n, pool.length)));
  };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Copied to clipboard!');
    }).catch(() => toast.error('Failed to copy.'));
  };

  const seg = (active: boolean) =>
    `px-3.5 py-2 text-sm rounded-md border transition-colors ${active ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent hover:bg-accent'}`;

  return (
    <div className="panel flex flex-col gap-5 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div className="flex flex-col gap-1.5">
        <Label>Part of speech</Label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(partsOfSpeech) as PartOfSpeech[]).map((p) => (
            <button key={p} className={seg(pos === p)} onClick={() => setPos(p)}>
              {posMeta[p].label}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-1">{posMeta[pos].hint}</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="count">How many</Label>
        <Input id="count" type="number" min={1} max={30} value={count}
          className="w-28"
          onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
      </div>

      <Button onClick={generate} className="w-full">
        <Shuffle className="mr-2 h-4 w-4" /> Generate {posMeta[pos].label}
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">{results.length} {posMeta[pos].label.toLowerCase()}</p>
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
