/* src/app/api/exams/route.ts */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { chapters, difficulty } = await req.json();

        // In a real app, this would call the AI API to generate a structured exam
        // For now, we return a success response with a mock exam ID
        return NextResponse.json({
            success: true,
            examId: "EX-" + Math.random().toString(36).substr(2, 9),
            message: `Génération d'un examen de niveau ${difficulty} pour les chapitres: ${chapters.join(", ")}`
        });
    } catch (error) {
        return NextResponse.json({ error: 'Erreur lors de la génération' }, { status: 500 });
    }
}
