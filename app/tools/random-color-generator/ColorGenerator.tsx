'use client';

import { useState } from 'react';
import { Copy, CopyCheck, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

type Color = {
  hex: string;
  rgb: string;
};

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(): Color {
  const r = randInt(0, 255);
  const g = randInt(0, 255);
  const b = randInt(0, 255);
  const hex = `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`.toUpperCase();
  return { hex, rgb: `rgb(${r}, ${g}, ${b})` };
}

export default function ColorGenerator() {
  const [count, setCount] = useState(5);
  const [results, setResults] = useState<Color[]>([]);
  const [copiedAll, setCopiedAll] = useState(false);

  const generate = () => {
    const n = Math.max(1, Math.min(count, 20));
    const out: Color[] = [];
    for (let i = 0; i < n; i++) out.push(randomColor());
    setResults(out);
    setCopiedAll(false);
  };

  const copyValue = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      toast.success('Copied to clipboard!');
    }).catch(() => toast.error('Failed to copy.'));
  };

  const copyAllHex = () => {
    if (!results.length) return;
    navigator.clipboard.writeText(results.map((c) => c.hex).join(', ')).then(() => {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
      toast.success('Copied to clipboard!');
    }).catch(() => toast.error('Failed to copy.'));
  };

  return (
    <div className="panel flex flex-col gap-5 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="count">How many colors</Label>
        <Input id="count" type="number" min={1} max={20} value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)} />
      </div>

      <Button onClick={generate} className="w-full">
        <Palette className="mr-2 h-4 w-4" /> Generate
      </Button>

      {results.length > 0 && (
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">
              {results.length === 1 ? 'Your color' : `${results.length} colors`}
            </p>
            <Button variant="outline" size="sm" onClick={copyAllHex}>
              {copiedAll ? <CopyCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copiedAll ? 'Copied!' : 'Copy all hex'}
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((color, i) => (
              <div key={i} className="flex items-center gap-3 p-3 border rounded bg-card text-card-foreground">
                <div
                  className="h-14 w-14 shrink-0 rounded-md border"
                  style={{ backgroundColor: color.hex }}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1 min-w-0">
                  <button
                    type="button"
                    onClick={() => copyValue(color.hex)}
                    title="Copy HEX"
                    className="font-mono uppercase text-sm font-semibold text-left hover:underline">
                    {color.hex}
                  </button>
                  <button
                    type="button"
                    onClick={() => copyValue(color.rgb)}
                    title="Copy RGB"
                    className="font-mono text-xs text-muted-foreground text-left hover:underline">
                    {color.rgb}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
