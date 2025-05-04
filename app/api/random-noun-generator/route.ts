import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a noun generator. Generate nouns based on the user's request. 
          Return a JSON array of noun objects with properties: word, type (e.g., concrete, abstract, proper, collective), 
          and optionally a brief definition. Format should match: {"nouns": [{"word": "example", "type": "concrete", "definition": "optional explanation"}]}`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const data = completion.choices[0].message.content;
    if (!data) {
      return NextResponse.json(
        { error: 'No response from OpenAI' },
        { status: 500 }
      );
    }
    return NextResponse.json(JSON.parse(data));

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate nouns' },
      { status: 500 }
    );
  }
} 