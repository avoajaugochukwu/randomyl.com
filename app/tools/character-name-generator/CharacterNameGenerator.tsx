'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Drama } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { firstNames, lastNames, Style, Gender } from './names';

const genders: Gender[] = ['male', 'female', 'neutral'];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function CharacterNameGenerator() {
  const [style, setStyle] = useState<Style>('fantasy');
  const [gender, setGender] = useState<string>('any');
  const [count, setCount] = useState(6);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const n = Math.max(1, Math.min(count, 20));
    const out: string[] = [];
    const seen = new Set<string>();
    let attempts = 0;

    while (out.length < n && attempts < n * 50) {
      attempts++;
      const g = gender === 'any' ? pick(genders) : (gender as Gender);
      const first = pick(firstNames[style][g]);
      const last = pick(lastNames[style]);
      const full = `${first} ${last}`;
      if (seen.has(full)) continue;
      seen.add(full);
      out.push(full);
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="style">Style</Label>
          <select id="style" value={style}
            onChange={(e) => setStyle(e.target.value as Style)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="fantasy">Fantasy</option>
            <option value="realistic">Realistic</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="gender">Gender</Label>
          <select id="gender" value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="any">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="count">How many</Label>
          <Input id="count" type="number" min={1} max={20} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
      </div>

      <Button onClick={generate} className="w-full">
        <Drama className="mr-2 h-4 w-4" /> Generate Names
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">{results.length} name{results.length > 1 ? 's' : ''}</p>
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
            {results.map((name, i) => (
              <span key={i} className="px-3 py-1.5 border rounded bg-card text-card-foreground font-medium">
                {name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
