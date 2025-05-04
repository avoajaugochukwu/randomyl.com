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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { bibleThemes } from './bibleThemes';

interface BibleVerse {
  verse: string;
  reference: string;
  translation: string;
  context?: string;
  theme?: string;
}

interface GeneratorResponse {
  verses: BibleVerse[];
}

const translations = [
  { value: 'KJV', label: 'King James Version' },
  { value: 'NIV', label: 'New International Version' },
  { value: 'ESV', label: 'English Standard Version' },
  { value: 'NLT', label: 'New Living Translation' },
];

const tooltipContent = (
  <div>
    <p className="text-sm">Example Prompts</p>
    <p>-------</p>
    <p>Give me 3 verses about love</p>
    <p>A verse about wisdom from Proverbs</p>
    <p>2 encouraging verses from the New Testament</p>
    <p>Verses about faith from Pauls letters</p>
    <p>A Psalm about praise</p>
    <p>3 verses about hope and strength</p>
  </div>
);

export default function BibleVerseGenerator() {
  const [prompt, setPrompt] = useState('');
  const [translation, setTranslation] = useState('KJV');
  const [{ response, loading, error }, handleSubmit] = 
    useGenerator<GeneratorResponse>(prompt, "bible", { translation });
  const [showAllThemes, setShowAllThemes] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const initialThemesCount = 5;
  
  const visibleThemes = showAllThemes 
    ? bibleThemes 
    : bibleThemes.slice(0, initialThemesCount);

  const handleThemeClick = (theme: string) => {
    setPrompt(`Give me verses about ${theme.toLowerCase()}`);
    const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
    handleSubmit(syntheticEvent);
  };

  const getVerseWithReference = (verse: BibleVerse) => {
    return `${verse.verse} - ${verse.reference}`;
  };
  
  const handleCopy = (text: string, verseId: number) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(String(verseId));
        setTimeout(() => setCopied(null), 2000);
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
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 items-center">
          {visibleThemes.map((theme) => (
            <button
              key={theme}
              onClick={() => handleThemeClick(theme)}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm text-gray-700"
            >
              {theme}
            </button>
          ))}
          {!showAllThemes && (
            <button
              onClick={() => setShowAllThemes(true)}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm text-gray-700"
            >
              More
            </button>
          )}
        </div>

        <form
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium">What kind of Bible verses are you looking for?</p>
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
                placeholder="e.g., Give me 3 verses about love"
                rows={3}
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Select Translation</p>
              <Select
                value={translation}
                onValueChange={(value) => setTranslation(value || 'KJV')}
                disabled={loading}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a translation" />
                </SelectTrigger>
                <SelectContent>
                  {translations.map(trans => (
                    <SelectItem key={trans.value} value={trans.value}>
                      {trans.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={loading || prompt.length === 0}
              >
                {loading ? 'Generating...' : 'Generate Verses'}
              </Button>
            </div>
          </div>
        </form>
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {response && response.verses.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Generated Verses:</p>
          {response.verses.map((verse, index) => (
            <div key={index} className="p-4 border rounded-md mb-3 relative bg-card text-card-foreground">
              <div className="flex justify-between items-center gap-4 mb-2">
                <Badge variant="secondary" className="px-2 py-1">
                  {verse.translation}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(getVerseWithReference(verse), index)}
                >
                  {copied === String(index) ? (
                    <CopyCheck className="mr-2 h-4 w-4" />
                  ) : (
                    <Copy className="mr-2 h-4 w-4" />
                  )}
                  {copied === String(index) ? 'Copied!' : 'Copy Verse'}
                </Button>
              </div>
              <p className="text-lg italic mb-2">&quot;{verse.verse}&quot;</p>
              <div className="flex justify-end mt-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {verse.reference}
                </p>
              </div>
              {(verse.context || verse.theme) && (
                <div className="mt-4 bg-muted/50 p-3 rounded-md">
                  {verse.context && (
                    <p className="text-sm text-muted-foreground">
                      Context: {verse.context}
                    </p>
                  )}
                  {verse.theme && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Theme: {verse.theme}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 