'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export interface DecisionPreset {
  mode?: 'options' | 'yesno';
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function parseOptions(raw: string): string[] {
  return raw
    .split(/[\n,]/)
    .map((o) => o.trim())
    .filter((o) => o.length > 0);
}

export default function DecisionMaker({ preset }: { preset?: DecisionPreset } = {}) {
  const mode = preset?.mode ?? 'options';
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const decide = () => {
    setError('');
    setCopied(false);

    if (mode === 'yesno') {
      setResult(pick(['Yes', 'No']));
      return;
    }

    const options = parseOptions(input);
    if (options.length < 2) {
      setResult(null);
      setError('Please enter at least two options, one per line.');
      return;
    }
    setResult(pick(options));
  };

  const copy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Copied to clipboard!');
    }).catch(() => toast.error('Failed to copy.'));
  };

  return (
    <div className="panel flex flex-col gap-5 max-w-2xl mx-auto w-full p-6 md:p-8">
      {mode === 'options' && (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="options">Enter your options (one per line)</Label>
          <Textarea
            id="options"
            rows={6}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'Pizza\nSushi\nTacos\nBurgers'}
          />
        </div>
      )}

      <Button onClick={decide} className="w-full">
        <Scale className="mr-2 h-4 w-4" /> Decide
      </Button>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {result && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">The decision is</p>
            <Button variant="outline" size="sm" onClick={copy}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="p-6 border rounded bg-card text-card-foreground text-center">
            <span className="text-5xl font-bold break-words">{result}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Not happy? Click Decide again.
          </p>
        </div>
      )}
    </div>
  );
}
