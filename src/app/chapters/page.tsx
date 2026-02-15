/* src/app/chapters/page.tsx */
import { BookOpen, Zap, Target, Layers } from 'lucide-react';
import Link from 'next/link';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

const ICON_MAP: Record<string, any> = {
  'MÉCANIQUE': { icon: <Target />, color: '#2b6cb0' },
  'ÉLECTRICITÉ': { icon: <Zap />, color: '#ed8936' },
  'OPTIQUE': { icon: <BookOpen />, color: '#48bb78' },
  'MATIÈRE': { icon: <Layers />, color: '#9f7aea' },
  'CHIMIE': { icon: <Layers />, color: '#9f7aea' },
};

import { CHAPTERS_DATA, ICON_MAP_DATA } from '@/lib/constants';

const FALLBACK_CHAPTERS = CHAPTERS_DATA;

export default async function ChaptersPage() {
  let chapters: any[] = [];
  try {
    chapters = await prisma.chapter.findMany({
      orderBy: { order: 'asc' },
      include: { lessons: true }
    });
  } catch (e) {
    console.error("Prisma error, falling back to static data.");
  }

  // Use fallback if DB is empty or failed
  const displayChapters = chapters.length > 0 ? chapters : FALLBACK_CHAPTERS;

  return (
    <div className="chapters-page">
      <header className="page-header">
        <h1>Chapitres</h1>
        <p>Explore le programme officiel de Physique-Chimie Seconde S (Sénégal)</p>
      </header>

      <div className="chapters-grid">
        {displayChapters.map((ch) => {
          const theme = ICON_MAP[ch.category] || { icon: <BookOpen />, color: '#1a365d' };
          return (
            <div key={ch.id} className="card chapter-card">
              <div className="chapter-icon" style={{ backgroundColor: theme.color + '20', color: theme.color }}>
                {theme.icon}
              </div>
              <div className="chapter-info">
                <h3>{ch.title}</h3>
                <p>{ch.description || 'Découvrez ce chapitre'}</p>
                <div className="progress-mini">
                  <div className="progress-fill" style={{ width: `0%`, backgroundColor: theme.color }}></div>
                </div>
              </div>
              <Link href={`/chapters/${ch.id}`} className="btn btn-outline btn-sm">Ouvrir</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
