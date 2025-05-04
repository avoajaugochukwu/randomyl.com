import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';
import QRCode from 'qrcode';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { type, prompt, size, errorCorrection, foregroundColor, backgroundColor } = await req.json();

    // Generate content based on type and prompt
    let systemPrompt = `Generate a realistic ${type} content`;
    if (prompt) {
      systemPrompt += ` related to: ${prompt}`;
    }

    systemPrompt += `. For URLs, ensure they start with http:// or https://. For contact info, use vCard format. For WiFi, use WiFi URI scheme.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    const content = completion.choices[0].message.content || '';

    // Generate QR code
    const qrCode = await QRCode.toDataURL(content, {
      width: size,
      margin: 1,
      errorCorrectionLevel: errorCorrection,
      color: {
        dark: foregroundColor,
        light: backgroundColor,
      },
    });

    return NextResponse.json({
      qrCode,
      content,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate QR code' },
      { status: 500 }
    );
  }
} 