'use client';

import { useState } from 'react';
import { Copy, CopyCheck, HelpCircle } from 'lucide-react';

import { useGenerator } from '@/app/hooks/useGenerator';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from 'sonner';

interface Noun {
  word: string;
  type: string;
  definition?: string;
}

interface GeneratorResponse {
  nouns: Noun[];
}

const tooltipContent = (
  <div>
    <p className="text-sm">Example Prompts</p>
    <p>-------</p>
    <p>Generate 5 random nouns</p>
    <p>Give me 3 abstract nouns</p>
    <p>Generate 4 concrete nouns</p>
    <p>5 nouns related to nature</p>
    <p>Generate 3 collective nouns</p>
    <p>Give me 4 proper nouns</p>
  </div>
);

export default function NounGenerator() {
  const [prompt, setPrompt] = useState('');
  const [{ response, loading, error }, handleSubmit] = 
    useGenerator<GeneratorResponse>(prompt, "noun");
  const [copiedComma, setCopiedComma] = useState(false);
  const [copiedNouns, setCopiedNouns] = useState(false);

  const getAllNouns = () => {
    if (!response?.nouns) return '';
    return response.nouns
      .map(noun => noun.word)
      .join('\n');
  };

  const getNounsWithComma = () => {
    if (!response?.nouns) return '';
    return response.nouns
      .map(noun => noun.word)
      .join(', ');
  };

  const handleCopy = (text: string, type: 'comma' | 'nouns') => {
    navigator.clipboard.writeText(text).then(
      () => {
        if (type === 'comma') {
          setCopiedComma(true);
          setTimeout(() => setCopiedComma(false), 2000);
        } else {
          setCopiedNouns(true);
          setTimeout(() => setCopiedNouns(false), 2000);
        }
        toast.success('Copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
        toast.error('Failed to copy.');
      }
    );
  };

  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto p-4 w-full">
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <p className="text-sm font-medium">What kind of nouns do you need?</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle size={16} className="cursor-help text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="w-60">
                {tooltipContent}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Textarea
          value={prompt}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.currentTarget.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (!loading && prompt.length > 0) {
                const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
                handleSubmit(syntheticEvent);
              }
            }
          }}
          disabled={loading}
          placeholder="e.g., Generate 5 random nouns"
          rows={3}
        />
        <div className="flex justify-end mt-4">
          <Button
            type="submit"
            disabled={loading || prompt.length === 0}
          >
            {loading ? 'Generating...' : 'Generate Nouns'}
          </Button>
        </div>
      </form>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {response && response.nouns.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">Generated Nouns:</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(getNounsWithComma(), 'comma')}
              >
                {copiedComma ? (
                  <CopyCheck className="mr-2 h-4 w-4" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                {copiedComma ? 'Copied!' : 'Copy with Commas'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(getAllNouns(), 'nouns')}
              >
                {copiedNouns ? (
                  <CopyCheck className="mr-2 h-4 w-4" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                {copiedNouns ? 'Copied!' : 'Copy Line by Line'}
              </Button>
            </div>
          </div>
          {response.nouns.map((noun, index) => (
            <div key={index} className="p-3 border rounded mb-2 bg-card text-card-foreground">
              <p className="font-semibold">{noun.word}</p>
              <p className="text-sm text-muted-foreground">
                {noun.type}{noun.definition && ` - ${noun.definition}`}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 