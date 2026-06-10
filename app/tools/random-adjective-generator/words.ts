// Word banks for the Part-of-Speech generator (adjective / verb / noun / adverb).
// Client-side, deterministic, family-friendly.

export type PartOfSpeech = 'adjective' | 'verb' | 'noun' | 'adverb';

export const partsOfSpeech: Record<PartOfSpeech, string[]> = {
  adjective: [
    'brave', 'clever', 'gentle', 'fierce', 'silent', 'curious', 'radiant', 'humble', 'restless', 'vivid',
    'gloomy', 'cheerful', 'ancient', 'fragile', 'mighty', 'tender', 'shiny', 'rugged', 'graceful', 'awkward',
    'bold', 'crisp', 'dizzy', 'eager', 'frosty', 'glossy', 'hollow', 'icy', 'jolly', 'keen',
    'lively', 'mellow', 'nimble', 'odd', 'plush', 'quaint', 'rusty', 'sleek', 'timid', 'untamed',
    'velvety', 'witty', 'zany', 'breezy', 'cozy', 'dreamy', 'electric', 'fuzzy', 'golden', 'hazy',
    'jagged', 'luminous', 'misty', 'noble', 'opaque', 'playful', 'quiet', 'rapid', 'serene', 'thorny',
    'vibrant', 'weary', 'youthful', 'zealous', 'crooked', 'dapper', 'elegant', 'feeble', 'grumpy', 'honest',
  ],
  verb: [
    'sprint', 'whisper', 'gather', 'shatter', 'wander', 'tumble', 'sparkle', 'wrestle', 'juggle', 'flutter',
    'scramble', 'mumble', 'pounce', 'glide', 'scribble', 'stomp', 'twirl', 'vanish', 'wobble', 'yank',
    'bounce', 'crawl', 'dash', 'explore', 'flick', 'grumble', 'hustle', 'invent', 'jostle', 'kindle',
    'leap', 'march', 'nudge', 'observe', 'plunge', 'quiver', 'ramble', 'shuffle', 'tiptoe', 'unfold',
    'venture', 'wiggle', 'yawn', 'zoom', 'balance', 'clutch', 'dodge', 'embrace', 'fumble', 'gallop',
    'hover', 'ignite', 'jingle', 'knit', 'linger', 'mingle', 'navigate', 'orbit', 'pedal', 'rescue',
    'scatter', 'trudge', 'untangle', 'wander', 'yodel', 'zigzag', 'blink', 'carve', 'drift', 'echo',
  ],
  noun: [
    'lantern', 'meadow', 'thunder', 'compass', 'harbor', 'ribbon', 'cavern', 'beacon', 'satchel', 'trellis',
    'puzzle', 'glacier', 'orchard', 'whistle', 'feather', 'marble', 'bracket', 'cinder', 'pebble', 'quarry',
    'anchor', 'bridge', 'candle', 'dolphin', 'engine', 'fountain', 'gadget', 'hammer', 'island', 'jacket',
    'kettle', 'ladder', 'magnet', 'needle', 'ocean', 'parade', 'quilt', 'rocket', 'saddle', 'tunnel',
    'umbrella', 'valley', 'wagon', 'zipper', 'acorn', 'badge', 'cobweb', 'dragon', 'ember', 'fossil',
    'goblet', 'helmet', 'igloo', 'jungle', 'kernel', 'locket', 'mantle', 'nugget', 'opal', 'plume',
    'quiver', 'raven', 'shadow', 'timber', 'urchin', 'vortex', 'willow', 'yacht', 'zenith', 'attic',
  ],
  adverb: [
    'quickly', 'silently', 'boldly', 'gently', 'eagerly', 'rarely', 'wildly', 'calmly', 'sharply', 'briskly',
    'clumsily', 'gracefully', 'loudly', 'softly', 'bravely', 'lazily', 'neatly', 'fiercely', 'happily', 'grimly',
    'abruptly', 'cheerfully', 'dimly', 'easily', 'faintly', 'gladly', 'hastily', 'innocently', 'jovially', 'kindly',
    'lightly', 'merrily', 'nervously', 'openly', 'politely', 'quietly', 'rapidly', 'smoothly', 'tenderly', 'urgently',
    'vaguely', 'warmly', 'yearly', 'zealously', 'awkwardly', 'bitterly', 'cautiously', 'deeply', 'evenly', 'freely',
  ],
};

export const posMeta: Record<PartOfSpeech, { label: string; hint: string }> = {
  adjective: { label: 'Adjectives', hint: 'describing words (color, size, mood)' },
  verb: { label: 'Verbs', hint: 'action words' },
  noun: { label: 'Nouns', hint: 'people, places, things' },
  adverb: { label: 'Adverbs', hint: 'words that modify verbs (usually -ly)' },
};
