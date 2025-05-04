import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt, translation } = await req.json();

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a Bible verse generator. Generate verses based on the user's request. 
          Return a JSON array of verse objects with properties: verse (the text), reference (book chapter:verse), 
          translation (${translation}), context (optional brief explanation of the verse's context), 
          and theme (optional category or theme of the verse).
          
          Format should match: {
            "verses": [
              {
                "verse": "For God so loved the world...",
                "reference": "John 3:16",
                "translation": "${translation}",
                "context": "Jesus explaining salvation to Nicodemus",
                "theme": "God's Love"
              }
            ]
          }
          
          Guidelines:
          - Ensure verses are accurate and properly referenced
          - Include context when relevant
          - Categorize verses by theme when possible
          - Use specified translation (${translation})
          - Limit to max 5 verses per request
          - Only use verified Bible translations
          `
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
      { error: 'Failed to generate Bible verses' },
      { status: 500 }
    );
  }
} 