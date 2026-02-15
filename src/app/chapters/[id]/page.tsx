/* src/app/chapters/[id]/page.tsx */
import { ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapter = await prisma.chapter.findUnique({
    where: { id },
    include: { lessons: { orderBy: { order: 'asc' } } }
  });

  if (!chapter) return notFound();

  const lesson = chapter.lessons[0]; // For simplicity, take the first lesson

  return (
    <div className="lesson-page">
      <nav className="lesson-nav">
        <Link href="/chapters" className="back-link">
          <ArrowLeft size={20} /> Retour aux chapitres
        </Link>
      </nav>

      <article className="lesson-content card">
        {lesson ? (
          <>
            <header className="lesson-header">
              <span className="chapter-label">{chapter.title}</span>
              <h1>{lesson.title}</h1>
            </header>

            <section className="lesson-body">
              <div dangerouslySetInnerHTML={{ __html: lesson.content }} />

              {lesson.formulas && (
                <div className="formula-box">
                  <p>Formules clés :</p>
                  {JSON.parse(lesson.formulas).map((f: any, i: number) => (
                    <code key={i} className="formula" style={{ display: 'block', margin: '10px 0' }}>
                      {f.label} : {f.value}
                    </code>
                  ))}
                </div>
              )}

              {lesson.pdfUrl && (
                <div style={{ margin: '20px 0' }}>
                  <a
                    href={lesson.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    📄 Télécharger le PDF complet
                  </a>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '8px' }}>
                    Cours complet du Professeur Doro Cissé
                  </p>
                </div>
              )}

              <div className="alert-box note">
                <Info size={20} />
                <div className="alert-text">
                  <strong>Conseil de l'IA :</strong> Concentre-toi sur les unités (m, s, kg) pour éviter les erreurs bêtes.
                </div>
              </div>
            </section>
          </>
        ) : (
          <p>Aucune leçon trouvée pour ce chapitre.</p>
        )}

        <footer className="lesson-footer">
          <button className="btn btn-primary">Marquer comme terminé</button>
          <Link href="/exercises" className="btn btn-outline">Passer aux exercices</Link>
        </footer>
      </article>
    </div>
  );
}
