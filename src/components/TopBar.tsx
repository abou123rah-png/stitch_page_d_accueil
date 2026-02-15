import Link from 'next/link';
import { Home, BookOpen, LayoutDashboard } from 'lucide-react';

const TopBar = () => {
    return (
        <header className="top-bar" style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem 3rem',
            background: 'white',
            borderBottom: '1px solid #e2e8f0',
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
                <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-muted)' }}>
                    <LayoutDashboard size={18} />
                    <span>Tableau de bord</span>
                </Link>
                <Link href="/chapters" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-muted)' }}>
                    <BookOpen size={18} />
                    <span>Chapitres</span>
                </Link>
            </nav>
        </header>
    );
};

export default TopBar;
