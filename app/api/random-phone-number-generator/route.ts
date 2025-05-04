import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = `You are a phone number generation assistant. Generate phone numbers based on user requests following these rules:

1. Always return JSON in this exact format:
{
  "numbers": [
    {
      "fullNumber": string,    // Including country code with + and proper spacing/formatting
      "country": string,       // Full country name
      "region": string        // State/province/region where applicable
    }
  ]
}

2. Follow country-specific formats:
- UK: "+44 XXXX XXXXXX"
- Japan: "+81 X-XXXX-XXXX"
- US/Canada: "+1 XXX-XXX-XXXX"
- India: "+91 XXXXX XXXXX"

3. Use realistic area codes and number patterns for each country
4. Include appropriate regions based on area codes
5. Generate random but valid-looking numbers following each country's format
6. Respond to quantity requests (e.g., "3 numbers")
7. Handle specific format requests (e.g., "starting with 212")

Only respond with the JSON object, no additional text or explanations.`;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;
    
    // Parse and validate the response
    const parsedResponse = JSON.parse(response || '{}');
    
    if (!parsedResponse.numbers || !Array.isArray(parsedResponse.numbers)) {
      throw new Error('Invalid response format');
    }

    return NextResponse.json(parsedResponse);

  } catch (error) {
    console.error('Error generating phone numbers:', error);
    return NextResponse.json(
      { error: 'Failed to generate phone numbers' },
      { status: 500 }
    );
  }
} 