import Link from 'next/link';
import { Home, BookOpen, LayoutDashboard } from 'lucide-react';

const TopBar = () => {
    return (
        <header className="top-bar" style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem 3rem',
            background: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            gap: '4rem',
            position: 'sticky',
            top: 0,
            zIndex: 40
        }}>
            <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--primary)' }}>
                Physique Seconde S
            </div>

            <nav style={{ display: 'flex', gap: '1.5rem' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500 }}>
                    <Home size={18} />
                    <span>Accueil</span>
                </Link>
                <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                    <LayoutDashboard size={18} />
                    <span>Tableau de bord</span>
                </Link>
                <Link href="/chapters" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                    <BookOpen size={18} />
                    <span>Chapitres</span>
                </Link>
            </nav>
        </header>
    );
};

export default TopBar;
