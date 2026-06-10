'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { moods, Mood } from './moods';

export default function MoodRingGenerator() {
  const [current, setCurrent] = useState<Mood | null>(null);

  const read = () => {
    let next = current;
    for (let i = 0; i < 5 && (next === current || next === null); i++) {
      next = moods[Math.floor(Math.random() * moods.length)];
    }
    setCurrent(next);
  };

  return (
    <div className="panel flex flex-col items-center gap-6 max-w-2xl mx-auto w-full p-6 md:p-8">
      <div
        className="mood-ring"
        style={{
          background: current
            ? `radial-gradient(circle at 35% 30%, #ffffff55, ${current.hex})`
            : 'radial-gradient(circle at 35% 30%, #ffffff55, #9ca3af)',
          boxShadow: current ? `0 0 36px ${current.hex}66` : 'none',
        }}
        aria-hidden="true"
      />

      <Button onClick={read} className="w-full sm:w-auto">
        <Sparkles className="mr-2 h-4 w-4" />
        {current ? 'Read my mood again' : 'Read my mood'}
      </Button>

      {current && (
        <div className="text-center">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">{current.color}</p>
          <p className="text-2xl md:text-3xl font-semibold mt-1">{current.mood}</p>
          <p className="text-base text-muted-foreground mt-2 max-w-md mx-auto">{current.meaning}</p>
        </div>
      )}
    </div>
  );
}
