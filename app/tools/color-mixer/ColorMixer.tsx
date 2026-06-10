'use client';

import { useMemo, useState } from 'react';
import { Label } from '@/components/ui/label';
import { colors, mix } from './colorMix';

function Swatch({ hex, caption }: { hex: string; caption: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="rounded-full border"
        style={{ width: 84, height: 84, background: hex, borderColor: 'rgba(0,0,0,0.12)' }}
        aria-hidden="true"
      />
      <span className="text-sm font-medium">{caption}</span>
    </div>
  );
}

export default function ColorMixer() {
  const [a, setA] = useState('blue');
  const [b, setB] = useState('yellow');

  const result = useMemo(() => mix(a, b), [a, b]);
  const labelOf = (k: string) => colors.find((c) => c.key === k)?.label ?? k;
  const hexOf = (k: string) => colors.find((c) => c.key === k)?.hex ?? '#ccc';

  return (
    <div className="panel flex flex-col gap-6 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="colorA">First color</Label>
          <select id="colorA" value={a} onChange={(e) => setA(e.target.value)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            {colors.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="colorB">Second color</Label>
          <select id="colorB" value={b} onChange={(e) => setB(e.target.value)}
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
            {colors.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Swatch hex={hexOf(a)} caption={labelOf(a)} />
        <span className="text-2xl font-semibold text-muted-foreground">+</span>
        <Swatch hex={hexOf(b)} caption={labelOf(b)} />
        <span className="text-2xl font-semibold text-muted-foreground">=</span>
        <Swatch hex={result.hex} caption={result.name} />
      </div>

      <p className="text-center text-lg">
        {result.same ? (
          <>Mixing <strong>{labelOf(a)}</strong> with itself just gives you <strong>{labelOf(a)}</strong>.</>
        ) : (
          <><strong>{labelOf(a)}</strong> and <strong>{labelOf(b)}</strong> make <strong>{result.name}</strong>.</>
        )}
      </p>
      <p className="text-center text-sm text-muted-foreground">
        Based on paint / pigment (subtractive) mixing — the kind you do with paints, markers, and dyes.
      </p>
    </div>
  );
}
