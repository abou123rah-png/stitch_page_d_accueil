/* src/app/api/init-db/route.ts */
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST() {
    try {
        console.log('--- INITIALIZING DATABASE WITH CORRECTED PDF LINKS ---');

        // Clear existing data
        await prisma.score.deleteMany({});
        await prisma.progress.deleteMany({});
        await prisma.exercise.deleteMany({});
        await prisma.lesson.deleteMany({});
        await prisma.chapter.deleteMany({});

        const chapters = [
            // ÉLECTRICITÉ (5 chapitres) - Sunudaara links except where noted
            {
                title: 'P1. Phénomènes d\'électrisation',
                category: 'ÉLECTRICITÉ',
                order: 1,
                description: 'Étude des trois modes d\'électrisation',
                pdfUrl: 'https://www.sunudaara.com/physique/ph%C3%A9nom%C3%A8nes-d%C3%A9lectrisation-2nd-s',
                content: '<h2>Phénomènes d\'électrisation</h2><p>Étude des trois modes d\'électrisation : par frottement, par contact et par influence.</p>',
                formulas: [
                    { label: "Charge élémentaire", value: "e = 1,6 × 10⁻¹⁹ C" },
                    { label: "Charge d'un corps", value: "Q = n × e" }
                ]
            },
            {
                title: 'P2. Généralité sur le courant électrique',
                category: 'ÉLECTRICITÉ',
                order: 2,
                description: 'Nature du courant électrique',
                pdfUrl: 'https://www.sunudaara.com/physique/g%C3%A9n%C3%A9ralit%C3%A9s-sur-le-courant-%C3%A9lectrique-2nd-s',
                content: '<h2>Le courant électrique</h2><p>Nature du courant électrique dans les métaux et les solutions ioniques.</p>',
                formulas: [
                    { label: "Sens conventionnel", value: "Du + vers le -" },
                    { label: "Sens des électrons", value: "Du - vers le +" }
                ]
            },
            {
                title: 'P3. Intensité du courant électrique',
                category: 'ÉLECTRICITÉ',
                order: 3,
                description: 'Mesure de l\'intensité et loi des nœuds',
                pdfUrl: 'https://www.sunudaara.com/physique/intensit%C3%A9-du-courant-%C3%A9lectrique-2nd-s',
                content: '<h2>Intensité du courant</h2><p>Mesure de l\'intensité et loi des nœuds.</p>',
                formulas: [
                    { label: "Intensité", value: "I = Q/t" },
                    { label: "Loi des nœuds", value: "ΣI_entrantes = ΣI_sortantes" }
                ]
            },
            {
                title: 'P4. Tension électrique',
                category: 'ÉLECTRICITÉ',
                order: 4,
                description: 'Mesure de la tension et loi des mailles',
                pdfUrl: 'https://www.sunudaara.com/physique/tension-%C3%A9lectrique-2nd-s',
                content: '<h2>Tension électrique</h2><p>Mesure de la tension et loi des mailles.</p>',
                formulas: [
                    { label: "Tension", value: "U = W/Q" },
                    { label: "Loi des mailles", value: "ΣU = 0 (circuit fermé)" }
                ]
            },
            {
                title: 'P5-P7. Dipôles passifs, actifs et associations',
                category: 'ÉLECTRICITÉ',
                order: 5,
                description: 'Résistances, générateurs et associations',
                pdfUrl: 'https://www.sunudaara.com/physique/dip%C3%B4les-passifs-2nd-s',
                content: '<h2>Dipôles et associations</h2><p>Résistances, générateurs et leurs associations série/parallèle.</p>',
                formulas: [
                    { label: "Loi d'Ohm", value: "U = R × I" },
                    { label: "Résistances série", value: "R_eq = R₁ + R₂" },
                    { label: "Résistances parallèle", value: "1/R_eq = 1/R₁ + 1/R₂" }
                ]
            },
            // MÉCANIQUE (4 chapitres)
            {
                title: 'P8. Généralité sur le mouvement',
                category: 'MÉCANIQUE',
                order: 6,
                description: 'Trajectoires, référentiels et vitesse',
                pdfUrl: 'https://cissdorosp.wordpress.com/p8-generalite-sur-le-mouvement/', // WordPress link (valid)
                content: '<h2>Le mouvement</h2><p>Trajectoires, référentiels et vitesse.</p>',
                formulas: [
                    { label: "Vitesse moyenne", value: "v = d/t" },
                    { label: "Vitesse instantanée", value: "v = dx/dt" }
                ]
            },
            {
                title: 'P9. Généralité sur les forces',
                category: 'MÉCANIQUE',
                order: 7,
                description: 'Caractéristiques d\'une force',
                pdfUrl: 'https://www.sunudaara.com/physique/g%C3%A9n%C3%A9ralit%C3%A9s-sur-les-forces-2nd-s',
                content: '<h2>Les forces</h2><p>Caractéristiques d\'une force et représentation vectorielle.</p>',
                formulas: [
                    { label: "Force", value: "F (vecteur)" },
                    { label: "Unité", value: "Newton (N)" }
                ]
            },
            {
                title: 'P10. Poids – Masse',
                category: 'MÉCANIQUE',
                order: 8,
                description: 'Relation entre poids et masse',
                pdfUrl: 'https://www.sunudaara.com/physique/poids-masse-2nd-s',
                content: '<h2>Poids et masse</h2><p>Relation entre poids et masse.</p>',
                formulas: [
                    { label: "Poids", value: "P = m × g" },
                    { label: "g (Terre)", value: "g ≈ 9,8 N/kg" }
                ]
            },
            {
                title: 'P11-P12. Équilibre d\'un solide',
                category: 'MÉCANIQUE',
                order: 9,
                description: 'Conditions d\'équilibre et moments',
                pdfUrl: 'https://www.sunudaara.com/physique/%C3%A9quilibre-dun-solide-2nd-s',
                content: '<h2>Équilibre d\'un solide</h2><p>Conditions d\'équilibre et moments de force.</p>',
                formulas: [
                    { label: "Équilibre translation", value: "ΣF = 0" },
                    { label: "Équilibre rotation", value: "ΣM = 0" },
                    { label: "Moment", value: "M = F × d" }
                ]
            },
            // OPTIQUE (2 chapitres)
            {
                title: 'P13. Propagation rectiligne de la lumière',
                category: 'OPTIQUE',
                order: 10,
                description: 'Propagation rectiligne, ombres et éclipses',
                pdfUrl: 'https://www.sunudaara.com/physique/propagation-rectiligne-de-la-lumi%C3%A8re-2nd-s',
                content: '<h2>Propagation de la lumière</h2><p>Propagation rectiligne, ombres et éclipses.</p>',
                formulas: [
                    { label: "Vitesse lumière", value: "c = 3 × 10⁸ m/s" }
                ]
            },
            {
                title: 'P14-P15. Réflexion et réfraction',
                category: 'OPTIQUE',
                order: 11,
                description: 'Lois de Snell-Descartes',
                pdfUrl: 'https://www.sunudaara.com/physique/r%C3%A9flexion-et-r%C3%A9fraction-de-la-lumi%C3%A8re-2nd-s',
                content: '<h2>Réflexion et réfraction</h2><p>Lois de Snell-Descartes.</p>',
                formulas: [
                    { label: "Réflexion", value: "i = r" },
                    { label: "Réfraction", value: "n₁ sin(i₁) = n₂ sin(i₂)" }
                ]
            },
            // CHIMIE (10 chapitres)
            {
                title: 'C1. Mélanges et corps purs',
                category: 'CHIMIE',
                order: 12,
                description: 'Classification de la matière',
                pdfUrl: 'https://cissdorosp.wordpress.com/c1-melanges-et-corps-purs/', // WordPress link (valid)
                content: '<h2>Mélanges et corps purs</h2><p>Classification de la matière.</p>',
                formulas: []
            },
            {
                title: 'C2. Éléments, atomes, classification périodique',
                category: 'CHIMIE',
                order: 13,
                description: 'Atomes, éléments et tableau périodique',
                pdfUrl: 'https://www.sunudaara.com/chimie/%C3%A9l%C3%A9ments-atomes-classification-p%C3%A9riodique-des-%C3%A9l%C3%A9ments-2nd-s',
                content: '<h2>Structure atomique</h2><p>Atomes, éléments et tableau périodique.</p>',
                formulas: [
                    { label: "Numéro atomique", value: "Z = nombre de protons" },
                    { label: "Nombre de masse", value: "A = Z + N" }
                ]
            },
            {
                title: 'C3. Liaisons chimiques',
                category: 'CHIMIE',
                order: 14,
                description: 'Liaisons ioniques et covalentes',
                pdfUrl: 'https://www.sunudaara.com/chimie/liaisons-chimiques-2nd-s',
                content: '<h2>Liaisons chimiques</h2><p>Liaisons ioniques et covalentes.</p>',
                formulas: []
            },
            {
                title: 'C4. Mole, grandeurs molaires',
                category: 'CHIMIE',
                order: 15,
                description: 'Quantité de matière et grandeurs molaires',
                pdfUrl: 'https://www.sunudaara.com/chimie/mole-grandeurs-molaires-2nd-s',
                content: '<h2>La mole</h2><p>Quantité de matière et grandeurs molaires.</p>',
                formulas: [
                    { label: "Nombre d'Avogadro", value: "Nₐ = 6,02 × 10²³ mol⁻¹" },
                    { label: "Quantité de matière", value: "n = m/M" }
                ]
            },
            {
                title: 'C5. Réactions chimiques – Équation – bilan',
                category: 'CHIMIE',
                order: 16,
                description: 'Équations et bilans de matière',
                pdfUrl: 'https://www.sunudaara.com/chimie/r%C3%A9actions-chimiques-%C3%A9quation-bilan-2nd-s',
                content: '<h2>Réactions chimiques</h2><p>Équations et bilans de matière.</p>',
                formulas: []
            },
            {
                title: 'C6. Généralités sur les solutions aqueuses',
                category: 'CHIMIE',
                order: 17,
                description: 'Concentration et dissolution',
                pdfUrl: 'https://www.sunudaara.com/chimie/g%C3%A9n%C3%A9ralit%C3%A9s-sur-les-solutions-aqueuses-2nd-s',
                content: '<h2>Solutions aqueuses</h2><p>Concentration et dissolution.</p>',
                formulas: [
                    { label: "Concentration molaire", value: "C = n/V" }
                ]
            },
            {
                title: 'C7. Solutions aqueuses acides',
                category: 'CHIMIE',
                order: 18,
                description: 'Propriétés des acides',
                pdfUrl: 'https://www.sunudaara.com/chimie/solutions-aqueuses-acides-2nd-s',
                content: '<h2>Solutions acides</h2><p>Propriétés des acides.</p>',
                formulas: []
            },
            {
                title: 'C8. Solutions aqueuses basiques',
                category: 'CHIMIE',
                order: 19,
                description: 'Propriétés des bases',
                pdfUrl: 'https://www.sunudaara.com/chimie/solutions-aqueuses-basiques-2nd-s',
                content: '<h2>Solutions basiques</h2><p>Propriétés des bases.</p>',
                formulas: []
            },
            {
                title: 'C9. Notion de pH – Indicateurs colorés',
                category: 'CHIMIE',
                order: 20,
                description: 'Échelle de pH et indicateurs colorés',
                pdfUrl: 'https://www.sunudaara.com/chimie/notion-de-ph-indicateurs-color%C3%A9s-2nd-s',
                content: '<h2>Le pH</h2><p>Échelle de pH et indicateurs colorés.</p>',
                formulas: [
                    { label: "pH", value: "pH = -log[H₃O⁺]" }
                ]
            },
            {
                title: 'C10. Caractérisation de quelques ions',
                category: 'CHIMIE',
                order: 21,
                description: 'Tests de reconnaissance des ions',
                pdfUrl: 'https://www.sunudaara.com/chimie/caract%C3%A9risation-de-quelques-ions-2nd-s',
                content: '<h2>Caractérisation des ions</h2><p>Tests de reconnaissance des ions.</p>',
                formulas: []
            }
        ];

        // Create each chapter with its lesson
        for (const chapterData of chapters) {
            await prisma.chapter.create({
                data: {
                    title: chapterData.title,
                    category: chapterData.category,
                    order: chapterData.order,
                    description: chapterData.description,
                    lessons: {
                        create: [{
                            title: chapterData.title,
                            content: chapterData.content,
                            formulas: JSON.stringify(chapterData.formulas),
                            pdfUrl: chapterData.pdfUrl,
                            order: 1
                        }]
                    }
                }
            });
        }

        const chapterCount = await prisma.chapter.count();
        const lessonCount = await prisma.lesson.count();

        console.log(`✅ Created ${chapterCount} individual chapters`);
        console.log(`✅ Created ${lessonCount} lessons with corrected PDF links`);
        console.log(`📄 C1 and P8: WordPress links (valid)`);
        console.log(`📄 All others: Sunudaara links`);

        return NextResponse.json({
            success: true,
            message: 'Database initialized with corrected PDF links',
            chapters: chapterCount,
            lessons: lessonCount,
            note: 'C1 and P8 use WordPress links, all others use Sunudaara'
        });

    } catch (error) {
        console.error('Error initializing database:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to initialize database' },
            { status: 500 }
        );
    }
}

// Support GET for browser access
export async function GET() {
    return POST();
}
