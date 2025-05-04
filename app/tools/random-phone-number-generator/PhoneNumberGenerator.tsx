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

interface PhoneNumber {
  fullNumber: string;
  country: string;
  region: string;
}

interface GeneratorResponse {
  numbers: PhoneNumber[];
}

const tooltipContent = (
  <div>
    <p className="text-sm">Example Prompts</p>
    <p>-------</p>
    <p>Generate 3 UK mobile numbers</p>
    <p>Give me a New York phone number</p>
    <p>2 phone numbers from Tokyo, Japan</p>
    <p>Generate an Ontario, Canada number</p>
    <p>5 mobile numbers from Maharashtra, India</p>
    <p>US number with area code 212</p>
  </div>
);

export default function PhoneNumberGenerator() {
  const [prompt, setPrompt] = useState('');
  const [{ response, loading, error }, handleSubmit] =
    useGenerator<GeneratorResponse>(prompt, 'phone');
  const [copiedComma, setCopiedComma] = useState(false);
  const [copiedNumbers, setCopiedNumbers] = useState(false);

  const getAllNumbers = () => {
    if (!response?.numbers) return '';
    return response.numbers
      .map(number => number.fullNumber.replace(/\s+/g, ''))
      .join('\n');
  };

  const getNumbersWithComma = () => {
    if (!response?.numbers) return '';
    return response.numbers
      .map(number => number.fullNumber.replace(/\s+/g, ''))
      .join(', ');
  };

  const handleCopy = (text: string, type: 'comma' | 'numbers') => {
    navigator.clipboard.writeText(text).then(
      () => {
        if (type === 'comma') {
          setCopiedComma(true);
          setTimeout(() => setCopiedComma(false), 2000);
        } else {
          setCopiedNumbers(true);
          setTimeout(() => setCopiedNumbers(false), 2000);
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
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <p className="text-sm font-medium">
            What kind of phone numbers do you need?
          </p>
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
          onChange={(e) => setPrompt(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (!loading && prompt.length > 0) {
                const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
                handleSubmit(syntheticEvent);
              }
            }
          }}
          disabled={loading}
          placeholder="e.g., Generate 3 UK phone numbers"
          rows={3}
        />
        <div className="flex justify-end mt-4">
          <Button
            type="submit"
            disabled={loading || prompt.length === 0}
          >
            {loading ? 'Generating...' : 'Generate Numbers'}
          </Button>
        </div>
      </form>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {response && response.numbers.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">Generated Numbers:</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(getNumbersWithComma(), 'comma')}
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
                onClick={() => handleCopy(getAllNumbers(), 'numbers')}
              >
                {copiedNumbers ? (
                  <CopyCheck className="mr-2 h-4 w-4" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                {copiedNumbers ? 'Copied!' : 'Copy Only Numbers'}
              </Button>
            </div>
          </div>
          {response.numbers.map((number, index) => (
            <div key={index} className="p-3 border rounded mb-2 bg-card text-card-foreground">
              <p className="font-semibold">{number.fullNumber}</p>
              <p className="text-sm text-muted-foreground">
                {number.country}, {number.region}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 