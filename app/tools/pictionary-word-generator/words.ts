// Word banks for the Pictionary & Charades generator.
// Client-side, family-friendly, grouped by mode and difficulty.

export type PictionaryMode = 'pictionary' | 'charades';
export type Difficulty = 'easy' | 'medium' | 'hard';

export const pictionary: Record<Difficulty, string[]> = {
  easy: [
    'cat', 'dog', 'sun', 'tree', 'house', 'car', 'ball', 'fish', 'star', 'book',
    'apple', 'hat', 'cup', 'shoe', 'door', 'moon', 'cake', 'boat', 'bird', 'flower',
    'clock', 'chair', 'cloud', 'frog', 'snake', 'kite', 'bell', 'leaf', 'spoon', 'sock',
    'duck', 'bee', 'egg', 'key', 'ring', 'cow', 'pig', 'rain', 'snow', 'eye',
  ],
  medium: [
    'airplane', 'rainbow', 'lighthouse', 'dinosaur', 'sandwich', 'umbrella', 'volcano', 'snowman', 'campfire', 'mailbox',
    'guitar', 'penguin', 'rocket', 'castle', 'octopus', 'windmill', 'scarecrow', 'treasure', 'fireworks', 'waterfall',
    'telescope', 'hammock', 'lighthouse', 'butterfly', 'skateboard', 'jellyfish', 'pinwheel', 'birthday', 'haircut', 'sneeze',
    'whisper', 'shadow', 'gravity', 'magnet', 'recycle', 'compass', 'anchor', 'igloo', 'cactus', 'tornado',
  ],
  hard: [
    'photosynthesis', 'democracy', 'gravity', 'evaporation', 'imagination', 'electricity', 'hibernation', 'camouflage', 'orchestra', 'avalanche',
    'metamorphosis', 'constellation', 'archaeology', 'hieroglyphics', 'thermometer', 'kaleidoscope', 'procrastinate', 'claustrophobia', 'extraterrestrial', 'entrepreneur',
    'echo', 'mirage', 'eclipse', 'origami', 'paradox', 'satellite', 'turbulence', 'symphony', 'velocity', 'whirlpool',
    'time travel', 'black hole', 'déjà vu', 'stage fright', 'brain freeze', 'wishful thinking', 'cold feet', 'couch potato', 'bucket list', 'food chain',
  ],
};

export const charades: Record<Difficulty, string[]> = {
  easy: [
    'sleeping', 'eating', 'running', 'swimming', 'dancing', 'laughing', 'crying', 'jumping', 'clapping', 'waving',
    'brushing teeth', 'tying shoes', 'reading a book', 'driving a car', 'flying a kite', 'washing dishes', 'riding a bike', 'playing guitar', 'taking a photo', 'blowing bubbles',
  ],
  medium: [
    'fishing', 'skateboarding', 'painting a wall', 'building a sandcastle', 'milking a cow', 'climbing a ladder', 'playing tennis', 'conducting an orchestra', 'walking a dog', 'shoveling snow',
    'doing laundry', 'making a pizza', 'scuba diving', 'rock climbing', 'juggling', 'tightrope walking', 'cheerleading', 'bowling', 'archery', 'karate',
  ],
  hard: [
    'directing traffic', 'performing surgery', 'launching a rocket', 'taming a lion', 'defusing a bomb', 'sleepwalking', 'arguing with a referee', 'winning the lottery', 'getting a flu shot', 'parallel parking',
    'auditioning for a play', 'teaching a class', 'haggling at a market', 'meditating', 'proposing marriage', 'sneaking past a guard', 'losing a contact lens', 'stuck in an elevator', 'running from a bee', 'forgetting a password',
  ],
};

export function bank(mode: PictionaryMode, difficulty: Difficulty): string[] {
  return mode === 'charades' ? charades[difficulty] : pictionary[difficulty];
}
