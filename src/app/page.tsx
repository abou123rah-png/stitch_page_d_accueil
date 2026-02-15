import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Physique-Chimie <br /> <span style={{ fontSize: '0.6em', color: 'var(--accent)', fontWeight: 500 }}>avec Mr. Doro Cissé</span></h1>
                    <p className="slogan">Bienvenue sur l'espace numérique du Lycée de Thiaroye. Une plateforme dédiée à l'excellence en Sciences Physiques pour les élèves de Seconde S.</p>
                    <div className="hero-cta">
                        <Link href="/dashboard" className="btn btn-primary">Mon Espace Élève</Link>
                        <Link href="/chapters" className="btn btn-outline">Voir les Cours</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="scientific-illustration">
                        <div className="atom">
                            <div className="nucleus"></div>
                            <div className="electron e1"></div>
                            <div className="electron e2"></div>
                            <div className="electron e3"></div>
                        </div>
                        <div className="wave"></div>
                        <div className="formula">E = mc²</div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="card feature-card">
                    <h3>Cours Structurés</h3>
                    <p>Des leçons conformes au programme sénégalais, avec schémas et formules.</p>
                </div>
                <div className="card feature-card">
                    <h3>Discuter avec Mr. Cissé</h3>
                    <p>Pose tes questions à Mr. Cissé, ton prof virtuel, pour comprendre tes leçons.</p>
                </div>
                <div className="card feature-card">
                    <h3>IA Pédagogique</h3>
                    <p>Un assistant intelligent disponible 24/7 pour répondre à toutes tes questions.</p>
                </div>
            </section>
        </div>
    );
}
