'use client';

import { useState } from 'react';

export default function RandomWordPicker({
  words,
  letter,
  relation = 'starting with',
}: {
  words: string[];
  letter: string;
  relation?: string;
}) {
  const [pick, setPick] = useState<string | null>(null);

  function roll() {
    if (!words.length) return;
    let next = pick;
    // avoid repeating the same word twice in a row when possible
    for (let i = 0; i < 5 && (next === pick || next === null); i++) {
      next = words[Math.floor(Math.random() * words.length)];
    }
    setPick(next);
  }

  return (
    <div className="word-picker">
      <button type="button" className="btn btn-accent" onClick={roll}>
        🎲 Random word {relation} {letter.toUpperCase()}
      </button>
      {pick && <span className="word-picker-result">{pick}</span>}
    </div>
  );
}
