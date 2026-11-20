import OpenAI from 'openai';

export const CHAT_MODEL = 'gpt-4o-mini';

let client: OpenAI | null = null;

// Lazy so `next build` doesn't need the key. Workers: the SDK's Node HTTP shim fails ("Connection error."), so pass the runtime fetch.
export function getOpenAI(): OpenAI {
  if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY is not set');
  return (client ??= new OpenAI({ apiKey: process.env.OPENAI_API_KEY, fetch: globalThis.fetch.bind(globalThis) }));
}
