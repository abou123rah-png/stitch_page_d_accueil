/* src/components/Sidebar.tsx */
import Link from 'next/link';
import { LayoutDashboard, BookOpen, PenTool, MessageSquare, FileText, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Lycée Thiaroye</h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '4px' }}>Mr. Doro Cissé</p>
      </div>

      <nav className="sidebar-nav">
        <Link href="/dashboard" className="nav-item">
          <LayoutDashboard size={20} />
          <span>Tableau de bord</span>
        </Link>
        <Link href="/chapters" className="nav-item">
          <BookOpen size={20} />
          <span>Chapitres</span>
        </Link>
        <Link href="/exercises" className="nav-item">
          <PenTool size={20} />
          <span>Mr. Cissé</span>
        </Link>
        <Link href="/ai-assistant" className="nav-item">
          <MessageSquare size={20} />
          <span>Assistant IA</span>
        </Link>
        <Link href="/exam-generator" className="nav-item">
          <FileText size={20} />
          <span>Générateur</span>
        </Link>
      </nav>

      <div className="sidebar-footer">
        <div className="nav-item">
          <Settings size={20} />
          <span>Paramètres</span>
        </div>
        <Link href="/" className="nav-item" style={{ color: 'var(--accent)' }}>
          <LogOut size={20} style={{ transform: 'rotate(180deg)' }} />
          <span>Retour Accueil</span>
        </Link>
      </div>
    </aside >
  );
};

export default Sidebar;
