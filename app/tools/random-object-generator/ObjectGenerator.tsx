'use client';

import { useState } from 'react';
import { Copy, CopyCheck, ChevronDown, ChevronUp } from 'lucide-react';

import { useGenerator } from '@/app/hooks/useGenerator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from 'sonner';

interface GeneratorResponse {
  results: string[];
  error?: string;
}

interface AdvancedOptions {
  startsWith: string;
  contains: string;
  endsWith: string;
  pattern: string;
  numberOfLetters: number | '';
  numberOfSyllables: number | '';
}

const dataTypes = [
  { value: 'string', label: 'String' },
  { value: 'number', label: 'Number' },
  { value: 'name', label: 'Name' },
  { value: 'sentence', label: 'Sentence' },
  { value: 'word', label: 'Word' },
  { value: 'email', label: 'Email' },
  { value: 'date', label: 'Date' },
];

export default function ObjectGenerator() {
  const [type, setType] = useState<string>('word');
  const [count, setCount] = useState<number>(1);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState<AdvancedOptions>({
    startsWith: '',
    contains: '',
    endsWith: '',
    pattern: '',
    numberOfLetters: '',
    numberOfSyllables: ''
  });

  const [{ response, loading, error }, handleSubmit] = useGenerator<GeneratorResponse>(
    prompt,
    'object',
    {
      type,
      count,
      advancedOptions: showAdvanced ? advancedOptions : undefined
    }
  );

  const handleAdvancedOptionChange = (key: keyof AdvancedOptions, value: string | number) => {
    setAdvancedOptions(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const showAdvancedControls = type === 'word' || type === 'string';
  
  const handleCopy = () => {
    if (!response?.results) return;
    navigator.clipboard.writeText(response.results.join('\n')).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
        className="space-y-4"
      >
        <div>
          <p className="text-sm font-medium mb-1">Type of value to generate</p>
          <Select
            value={type}
            onValueChange={(value) => setType(value || 'word')}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {dataTypes.map(dataType => (
                <SelectItem key={dataType.value} value={dataType.value}>
                  {dataType.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <p className="text-sm font-medium mb-1">Number of values to generate</p>
          <Input
            type="number"
            value={count}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount(Number(e.target.value))}
            min={1}
            max={10}
          />
        </div>

        <div>
          <p className="text-sm font-medium mb-1">Context or prompt (optional)</p>
          <Input
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
            placeholder="e.g., scientific terms, fantasy names, etc."
          />
        </div>

        {showAdvancedControls && (
          <div>
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <p className="text-sm font-medium underline">Advanced Options</p>
              {showAdvanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showAdvanced && (
              <div className="mt-4 space-y-4 p-4 bg-muted/50 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Starts with</p>
                    <Input
                      value={advancedOptions.startsWith}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        handleAdvancedOptionChange('startsWith', e.target.value)}
                      placeholder="Starts with"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-1">Contains</p>
                    <Input
                      value={advancedOptions.contains}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        handleAdvancedOptionChange('contains', e.target.value)}
                      placeholder="Contains"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-1">Ends with</p>
                    <Input
                      value={advancedOptions.endsWith}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        handleAdvancedOptionChange('endsWith', e.target.value)}
                      placeholder="Ends with"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-1">Pattern (_t_s)</p>
                    <Input
                      value={advancedOptions.pattern}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        handleAdvancedOptionChange('pattern', e.target.value)}
                      placeholder="Pattern (_t_s)"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Number of letters</p>
                    <Select
                      value={advancedOptions.numberOfLetters === '' ? '' : String(advancedOptions.numberOfLetters)}
                      onValueChange={(value) => handleAdvancedOptionChange('numberOfLetters', Number(value) || '')}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="EQUALS" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any</SelectItem>
                        {Array.from({length: 15}, (_, i) => (
                          <SelectItem key={i} value={(i + 1).toString()}>
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-1">Number of syllables</p>
                    <Select
                      value={advancedOptions.numberOfSyllables === '' ? '' : String(advancedOptions.numberOfSyllables)}
                      onValueChange={(value) => handleAdvancedOptionChange('numberOfSyllables', Number(value) || '')}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="EQUALS" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any</SelectItem>
                        {Array.from({length: 8}, (_, i) => (
                          <SelectItem key={i} value={(i + 1).toString()}>
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={loading}
            className="flex-1"
            size="lg"
            variant="default"
          >
            {loading ? 'Generating...' : 'Generate'}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setAdvancedOptions({
                startsWith: '',
                contains: '',
                endsWith: '',
                pattern: '',
                numberOfLetters: '',
                numberOfSyllables: ''
              });
              setPrompt('');
              setCount(1);
            }}
          >
            Clear
          </Button>
        </div>
      </form>

      {loading && (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center p-4">
          {error}
        </div>
      )}

      {response?.results && response.results.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">Generated Values:</p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
            >
              {copied ? (
                <CopyCheck className="mr-2 h-4 w-4" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="bg-muted/50 p-4 rounded-md overflow-auto">
            {response.results.map((result, index) => (
              <div key={index} className="py-1">
                {result}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 