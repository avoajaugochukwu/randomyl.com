'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { banks, templates } from './sentenceWords';

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildSentence(): string {
  const template = pick(templates);
  let sentence = template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const bank = banks[key as keyof typeof banks];
    return bank ? pick(bank) : key;
  });
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  if (!/[.!?]$/.test(sentence)) sentence += '.';
  return sentence;
}

export default function SentenceGenerator() {
  const [count, setCount] = useState(3);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const n = Math.max(1, Math.min(count, 10));
    const out: string[] = [];
    for (let i = 0; i < n; i++) out.push(buildSentence());
    setResults(out);
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
          <Label htmlFor="count">How many sentences</Label>
          <Input id="count" type="number" min={1} max={10} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
      </div>

      <Button onClick={generate} className="w-full">
        <Shuffle className="mr-2 h-4 w-4" /> Generate Sentences
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">{results.length} sentence{results.length > 1 ? 's' : ''}</p>
            <Button variant="outline" size="sm" onClick={() => copy(results.join('\n'))}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              Copy
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            {results.map((s, i) => (
              <div key={i} className="p-3 border rounded bg-card text-card-foreground">
                {s}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
