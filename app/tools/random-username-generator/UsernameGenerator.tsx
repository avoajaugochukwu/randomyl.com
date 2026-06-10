'use client';

import { useState } from 'react';
import { Copy, CopyCheck, AtSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { adjectives, nouns } from './usernameWords';

type Style = 'adjNoun' | 'adjNounNum' | 'nounNum' | 'underscore';

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(): string {
  const digits = 2 + Math.floor(Math.random() * 3); // 2–4 digits
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return String(min + Math.floor(Math.random() * (max - min + 1)));
}

function buildUsername(style: Style, lowercase: boolean): string {
  const adj = pick(adjectives);
  const noun = pick(nouns);
  let name: string;
  switch (style) {
    case 'adjNounNum':
      name = `${adj}${noun}${randomNumber()}`;
      break;
    case 'nounNum':
      name = `${noun}${randomNumber()}`;
      break;
    case 'underscore':
      name = `${adj.toLowerCase()}_${noun.toLowerCase()}`;
      break;
    case 'adjNoun':
    default:
      name = `${adj}${noun}`;
      break;
  }
  return lowercase ? name.toLowerCase() : name;
}

export default function UsernameGenerator() {
  const [count, setCount] = useState(8);
  const [style, setStyle] = useState<Style>('adjNoun');
  const [lowercase, setLowercase] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const n = Math.max(1, Math.min(count, 20));
    const seen = new Set<string>();
    const out: string[] = [];
    let attempts = 0;
    while (out.length < n && attempts < n * 60) {
      attempts++;
      const name = buildUsername(style, lowercase);
      if (seen.has(name)) continue;
      seen.add(name);
      out.push(name);
    }
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="count">How many</Label>
          <Input id="count" type="number" min={1} max={20} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="style">Style</Label>
          <select id="style" value={style}
            onChange={(e) => setStyle(e.target.value as Style)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="adjNoun">Adjective + Noun (SwiftTiger)</option>
            <option value="adjNounNum">Adjective + Noun + Number (SwiftTiger42)</option>
            <option value="nounNum">Noun + Number (Tiger2048)</option>
            <option value="underscore">With underscores (swift_tiger)</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input id="lowercase" type="checkbox" checked={lowercase}
          onChange={(e) => setLowercase(e.target.checked)}
          className="h-4 w-4 rounded border-input" />
        <Label htmlFor="lowercase" className="cursor-pointer">Make all lowercase</Label>
      </div>

      <Button onClick={generate} className="w-full">
        <AtSign className="mr-2 h-4 w-4" /> Generate Usernames
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">{results.length} username{results.length > 1 ? 's' : ''}</p>
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
            {results.map((u, i) => (
              <button key={i} onClick={() => copy(u)}
                className="px-3 py-1.5 border rounded bg-card text-card-foreground font-medium cursor-pointer hover:bg-accent transition-colors">
                {u}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
