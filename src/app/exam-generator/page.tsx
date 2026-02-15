/* src/app/exam-generator/page.tsx */
'use client';
import { useState } from 'react';
import { FileText, Download, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { CHAPTERS_DATA } from '@/lib/constants';

export default function ExamGeneratorPage() {
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 1500);
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    const margin = 20;
    let y = 20;

    // Header Helper
    const addLine = (text: string, size = 12, style = "normal", align: "left" | "center" = "left", spacing = 10) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", style);
      if (align === "center") {
        doc.text(text, 105, y, { align: "center" });
      } else {
        doc.text(text, margin, y);
      }
      y += spacing;
    };

    // Header
    addLine("RÉPUBLIQUE DU SÉNÉGAL", 10, "bold", "center", 5);
    addLine("MINISTÈRE DE L'ÉDUCATION NATIONALE", 10, "normal", "center", 5);
    addLine("LYCÉE D'EXCELLENCE", 10, "bold", "center", 15);

    addLine("DEVOIR DE PHYSIQUE ET CHIMIE", 18, "bold", "center", 10);
    addLine("Classe : Seconde S | Durée : 2 Heures", 12, "italic", "center", 5);
    doc.setLineWidth(0.8);
    doc.line(margin, y, 190, y);
    y += 15;

    // CHIMIE SECTION
    addLine("PREMIÈRE PARTIE : CHIMIE (6 points)", 14, "bold", "left", 10);
    addLine("Exercice 1 : Structure de la matière (3 pts)", 12, "bold", "left", 8);
    addLine("1. Donner la définition d'un isotope.", 12, "normal", "left", 7);
    addLine("2. Le noyau d'un atome X contient 17 protons et 18 neutrons.", 12, "normal", "left", 7);
    addLine("   a) Donner son numéro atomique Z et son nombre de masse A.", 11, "normal", "left", 7);
    addLine("   b) Écrire son symbole sous la forme AZX.", 11, "normal", "left", 12);

    addLine("Exercice 2 : Mole et Grandeurs Moléculaires (3 pts)", 12, "bold", "left", 8);
    addLine("1. Calculer la masse molaire de l'eau (H2O). Données : M(H)=1; M(O)=16.", 12, "normal", "left", 7);
    addLine("2. Quelle est la quantité de matière contenue dans 36g d'eau ?", 12, "normal", "left", 15);

    // PHYSIQUE SECTION
    addLine("DEUXIÈME PARTIE : PHYSIQUE (14 points)", 14, "bold", "left", 10);
    addLine("Exercice 3 : Mécanique - Cinématique (7 pts)", 12, "bold", "left", 8);
    addLine("Un mobile ponctuel suit une trajectoire rectiligne. Son équation horaire est :", 12, "normal", "left", 7);
    addLine("x(t) = 4t + 2 (x en mètres et t en secondes).", 12, "italic", "left", 8);
    addLine("1. Quelle est la nature du mouvement ? Justifier.", 12, "normal", "left", 7);
    addLine("2. Préciser la vitesse v du mobile et sa position initiale x0.", 12, "normal", "left", 7);
    addLine("3. Calculer la distance parcourue entre t = 0 et t = 5s.", 12, "normal", "left", 12);

    addLine("Exercice 4 : Électricité - Loi d'Ohm (7 pts)", 12, "bold", "left", 8);
    addLine("On considère un conducteur ohmique de résistance R = 150 ohms.", 12, "normal", "left", 7);
    addLine("1. Énoncer la loi d'Ohm pour un conducteur ohmique.", 12, "normal", "left", 7);
    addLine("2. Calculer la tension U à ses bornes quand il est traversé par un courant I = 0,2 A.", 12, "normal", "left", 7);
    addLine("3. Si la tension devient U' = 45V, quelle est la nouvelle intensité I' ?", 12, "normal", "left", 15);

    // Footer
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("Page 1/1 - Généré par l'Assistant Physique Seconde S", 105, 285, { align: "center" });

    doc.save("Sujet_Physique_Chimie_2S_Senegal.pdf");
  };

  const groupedChapters = CHAPTERS_DATA.reduce((acc, chapter) => {
    if (!acc[chapter.category]) {
      acc[chapter.category] = [];
    }
    acc[chapter.category].push(chapter);
    return acc;
  }, {} as Record<string, typeof CHAPTERS_DATA>);

  const [selectedChapters, setSelectedChapters] = useState<string[]>(CHAPTERS_DATA.map(c => c.id));

  const toggleChapter = (id: string) => {
    setSelectedChapters(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="generator-page">
      <header className="page-header">
        <h1>Générateur de Devoir</h1>
        <p>Génère un sujet complet conforme au programme officiel du Sénégal</p>
      </header>

      <div className="generator-config card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="icon-circle" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
            <FileText />
          </div>
          <div>
            <h3 style={{ margin: 0 }}>Nouveau Sujet</h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Sélectionnez les chapitres à inclure dans le devoir</p>
          </div>
        </div>

        <div className="form-group">
          {Object.entries(groupedChapters).map(([category, chapters]) => (
            <div key={category} style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--primary)', borderBottom: '1px solid #eee', paddingBottom: '0.25rem' }}>{category}</h4>
              <div className="checkbox-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0.5rem' }}>
                {chapters.map(chapter => (
                  <label key={chapter.id} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={selectedChapters.includes(chapter.id)}
                      onChange={() => toggleChapter(chapter.id)}
                      style={{ marginTop: '0.25rem' }}
                    />
                    <span>{chapter.title}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn btn-primary"
          onClick={handleGenerate}
          disabled={loading}
          style={{ width: '100%', gap: '1rem', marginTop: '1rem' }}
        >
          {loading ? <RefreshCw className="spin" /> : <RefreshCw />}
          {loading ? 'Assemblage du sujet...' : 'Générer le sujet complet'}
        </button>
      </div>

      {generated && (
        <div className="result-container animate-fade-in">
          <div className="result card success-border">
            <div className="result-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle size={28} color="var(--success)" />
                <div>
                  <h3 style={{ margin: 0 }}>Sujet Prêt pour Impression</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>Format A4 - Prêt pour téléchargement</p>
                </div>
              </div>
              <button className="btn btn-primary" onClick={handleDownload}>
                <Download size={18} /> Télécharger maintenant (PDF)
              </button>
            </div>
          </div>

          <div className="exam-preview card">
            <div className="preview-watermark">Aperçu</div>
            <div className="preview-content">
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', margin: '2px 0' }}>LYCÉE D'EXCELLENCE - SÉNÉGAL</p>
                <p style={{ fontSize: '0.8rem' }}>DEVOIR DE PHYSIQUE - SECONDE S</p>
                <div style={{ width: '50px', height: '1px', background: '#333', margin: '5px auto' }}></div>
              </div>

              <p><strong>PARTIE CHIMIE :</strong> 1. Atomes et isotopes... 2. Quantité de matière (H2O)...</p>
              <p><strong>PARTIE PHYSIQUE :</strong> 1. Mouvement rectiligne x(t)=4t+2... 2. Loi d'Ohm R=150...</p>

              <div className="preview-overlay">
                <div className="overlay-badge">
                  <AlertCircle size={16} /> Sujet Complet Disponible
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
