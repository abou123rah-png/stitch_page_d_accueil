import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = "google/gemini-2.0-flash-001";

export async function POST(req: NextRequest) {
    if (!OPENROUTER_API_KEY) {
        return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    try {
        const { prompt, systemPrompt } = await req.json();

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "HTTP-Referer": "http://localhost:3000", // Optional, for OpenRouter rankings
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": MODEL,
                "messages": [
                    {
                        "role": "system",
                        "content": systemPrompt || "Tu es un assistant pédagogique expert en Physique-Chimie pour le niveau Seconde S au Sénégal. Réponds toujours en français de manière claire et structurée."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "stream": true
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('OpenRouter Error:', errorText);
            return NextResponse.json({ error: errorText }, { status: response.status });
        }

        // Proxy the stream
        return new Response(response.body, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });

    } catch (error) {
        console.error('AI API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
