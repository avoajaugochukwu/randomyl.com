'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { countries, Country, Region } from './countries';

const regions: Region[] = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];

function sample<T>(arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

export default function CountryGenerator() {
  const [region, setRegion] = useState<string>('all');
  const [count, setCount] = useState(1);
  const [results, setResults] = useState<Country[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const pool = region === 'all' ? countries : countries.filter((c) => c.region === region);
    const n = Math.max(1, Math.min(count, 10));
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="region">Region</Label>
          <select id="region" value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            <option value="all">All regions</option>
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="count">How many</Label>
          <Input id="count" type="number" min={1} max={10} value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
        </div>
      </div>

      <Button onClick={generate} className="w-full">
        <Globe className="mr-2 h-4 w-4" /> Generate Countries
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">{results.length} countr{results.length > 1 ? 'ies' : 'y'}</p>
            <Button variant="outline" size="sm" onClick={() => copy(results.map((c) => c.name).join(', '))}>
              {copied ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              Copy
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-3 border rounded bg-card text-card-foreground">
                <span className="text-4xl leading-none">{c.flag}</span>
                <div className="flex flex-col">
                  <span className="font-bold">{c.name}</span>
                  <span className="text-sm text-muted-foreground">Capital: {c.capital}</span>
                  <span className="text-sm text-muted-foreground">{c.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
