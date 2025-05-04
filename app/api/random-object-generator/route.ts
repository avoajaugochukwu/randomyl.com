import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { type, count, prompt, advancedOptions } = await req.json();

    let systemPrompt = `You are a random value generator. Generate ${count} ${type}${count > 1 ? 's' : ''}.`;
    
    if (prompt) {
      systemPrompt += ` Context: ${prompt}`;
    }

    if (advancedOptions) {
      const constraints = [];
      if (advancedOptions.startsWith) constraints.push(`starts with "${advancedOptions.startsWith}"`);
      if (advancedOptions.contains) constraints.push(`contains "${advancedOptions.contains}"`);
      if (advancedOptions.endsWith) constraints.push(`ends with "${advancedOptions.endsWith}"`);
      if (advancedOptions.pattern) constraints.push(`matches pattern "${advancedOptions.pattern}"`);
      if (advancedOptions.numberOfLetters) constraints.push(`has exactly ${advancedOptions.numberOfLetters} letters`);
      if (advancedOptions.numberOfSyllables) constraints.push(`has exactly ${advancedOptions.numberOfSyllables} syllables`);
      
      if (constraints.length > 0) {
        systemPrompt += ` Requirements: ${constraints.join(', ')}.`;
      }
    }

    systemPrompt += ` Return only the generated values, one per line, without any additional text or explanations.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    });

    const results = response.choices[0].message.content?.split('\n').filter(Boolean) || [];

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate values' },
      { status: 500 }
    );
  }
} 