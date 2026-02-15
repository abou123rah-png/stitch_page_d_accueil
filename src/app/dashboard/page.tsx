/* src/app/dashboard/page.tsx */
import { Book, Zap, FileJson, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Tableau de bord</h1>
        <p>Bienvenue sur ta plateforme de Physique Seconde S</p>
      </header>

      <div className="stats-grid">
        <div className="card stat-card">
          <h3>Progression globale</h3>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '25%' }}></div>
          </div>
          <span className="stat-value">25%</span>
        </div>
        <div className="card stat-card">
          <h3>Score Moyen</h3>
          <span className="stat-value">--/20</span>
        </div>
        <div className="card stat-card">
          <h3>Chapitres Commencés</h3>
          <span className="stat-value">1 / 12</span>
        </div>
      </div>

      <h2 className="section-title">Accès Rapide</h2>
      <div className="quick-actions">
        <Link href="/chapters" className="card action-card">
          <Book className="icon" />
          <h3>Cours</h3>
          <p>Consulter les leçons de physique</p>
        </Link>
        <Link href="/exercises" className="card action-card">
          <Zap className="icon" />
          <h3>Exercices</h3>
          <p>Pratiquer avec des quiz interactifs</p>
        </Link>
        <Link href="/exam-generator" className="card action-card">
          <FileJson className="icon" />
          <h3>Générer un devoir</h3>
          <p>Créer un sujet de révision personnalisé</p>
        </Link>
        <Link href="/ai-assistant" className="card action-card">
          <MessageCircle className="icon" />
          <h3>Assistant IA</h3>
          <p>Poser une question à l'expert</p>
        </Link>
      </div>
    </div>
  );
}
