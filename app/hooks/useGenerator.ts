/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FormEvent } from 'react';
import { ToolKey, tools } from '../config/tools';

type UseGeneratorReturn<T> = [
  {
    response: T | null;
    loading: boolean;
    error: string;
  },
  (e: FormEvent) => Promise<void>
];

export const useGenerator = <T>(
  prompt: string, 
  type: ToolKey,
  additionalParams?: Record<string, any>
): UseGeneratorReturn<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const tool = tools.find(tool => tool.key === type);
      if (!tool) {
        throw new Error('Tool not found');
      }
      const res = await fetch(`/api/${tool.route}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          ...additionalParams
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate');
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return [
    { response, loading, error },
    handleSubmit
  ];
}; 