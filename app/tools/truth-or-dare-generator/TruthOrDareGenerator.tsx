'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { truths, dares, type Difficulty } from './prompts';

type ToType = 'truth' | 'dare' | 'mixed';

interface Result {
  kind: 'truth' | 'dare';
  text: string;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function TruthOrDareGenerator() {
  const [type, setType] = useState<ToType>('mixed');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let kind: 'truth' | 'dare';
    if (type === 'mixed') {
      kind = Math.random() < 0.5 ? 'truth' : 'dare';
    } else {
      kind = type;
    }
    const pool = kind === 'truth' ? truths[difficulty] : dares[difficulty];
    setResult({ kind, text: pick(pool) });
    setCopied(false);
  };

  const copy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.text).then(() => {
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
        <Label>Type</Label>
        <div className="flex gap-2">
          {(['truth', 'dare', 'mixed'] as ToType[]).map((t) => (
            <button key={t} className={seg(type === t)} onClick={() => setType(t)}>
              {t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Difficulty</Label>
        <div className="flex gap-2">
          {(['easy', 'medium', 'bold'] as Difficulty[]).map((d) => (
            <button key={d} className={seg(difficulty === d)} onClick={() => setDifficulty(d)}>
              {d[0].toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <Button onClick={generate} className="w-full">
        <Flame className="mr-2 h-4 w-4" /> Generate {type === 'mixed' ? 'Truth or Dare' : type[0].toUpperCase() + type.slice(1)}
      </Button>

      {result && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium capitalize">{difficulty}</p>
            <Button variant="outline" size="sm" onClick={copy}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="p-8 border rounded bg-card text-card-foreground text-center flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest text-muted-foreground">
              {result.kind === 'truth' ? 'TRUTH' : 'DARE'}
            </span>
            <span className="text-2xl md:text-3xl font-bold leading-snug">{result.text}</span>
          </div>
        </div>
      )}
    </div>
  );
}
