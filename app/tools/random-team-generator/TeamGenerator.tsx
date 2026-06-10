'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export interface TeamPreset {
  unitLabel?: 'Team' | 'Group';
  units?: number;
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function TeamGenerator({ preset }: { preset?: TeamPreset } = {}) {
  const unit = preset?.unitLabel ?? 'Team';
  const unitLower = unit.toLowerCase();
  const unitPlural = `${unitLower}s`;

  const [names, setNames] = useState('');
  const [units, setUnits] = useState(preset?.units ?? 2);
  const [results, setResults] = useState<string[][]>([]);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setError('');
    const parsed = names
      .split(/[\n,]+/)
      .map((n) => n.trim())
      .filter((n) => n.length > 0);

    if (parsed.length < 2) {
      setError('Please enter at least 2 names (one per line, or separated by commas).');
      setResults([]);
      return;
    }

    const n = Math.max(2, Math.min(units, parsed.length));
    const shuffled = shuffle(parsed);
    const buckets: string[][] = Array.from({ length: n }, () => []);
    shuffled.forEach((name, i) => {
      buckets[i % n].push(name);
    });

    setResults(buckets);
  };

  const copy = () => {
    if (!results.length) return;
    const text = results
      .map((members, i) => `${unit} ${i + 1}: ${members.join(', ')}`)
      .join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Copied to clipboard!');
    }).catch(() => toast.error('Failed to copy.'));
  };

  return (
    <div className="panel flex flex-col gap-5 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="names">Enter names (one per line)</Label>
        <Textarea
          id="names"
          rows={8}
          placeholder={`Alice\nBob\nCharlie\nDana`}
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="units">Number of {unitPlural}</Label>
        <Input
          id="units"
          type="number"
          min={2}
          value={units}
          onChange={(e) => setUnits(parseInt(e.target.value, 10) || 2)}
        />
      </div>

      <Button onClick={generate} className="w-full">
        <Users className="mr-2 h-4 w-4" /> Generate {unitPlural}
      </Button>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">
              {results.length} {results.length === 1 ? unitLower : unitPlural}
            </p>
            <Button variant="outline" size="sm" onClick={copy}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((members, i) => (
              <div key={i} className="p-4 border rounded bg-card text-card-foreground">
                <h3 className="font-semibold mb-2">{unit} {i + 1}</h3>
                <ul className="flex flex-col gap-1 text-sm">
                  {members.map((member, j) => (
                    <li key={j}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
