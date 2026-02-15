const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('--- SEEDING DATABASE (JS) - PHYSIQUE SECONDE S ---');

    // Clean existing data
    await prisma.exercise.deleteMany({});
    await prisma.lesson.deleteMany({});
    await prisma.chapter.deleteMany({});

    // ========================================
    // ÉLECTRICITÉ ET ÉLECTROCINÉTIQUE
    // ========================================
    const electricite = await prisma.chapter.create({
        data: {
            title: 'Électricité et Électrocinétique',
            category: 'ÉLECTRICITÉ',
            order: 1,
            description: 'Phénomènes électriques, courant et circuits',
            lessons: {
                create: [
                    {
                        title: 'P1. Phénomènes d\'électrisation',
                        content: '<h2>Phénomènes d\'électrisation</h2><p>Étude des trois modes d\'électrisation : par frottement, par contact et par influence.</p>',
                        formulas: JSON.stringify([
                            { label: "Charge élémentaire", value: "e = 1,6 × 10⁻¹⁹ C" },
                            { label: "Charge d'un corps", value: "Q = n × e" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p1-phenomenes-delectrisation/',
                        order: 1
                    },
                    {
                        title: 'P2. Généralité sur le courant électrique',
                        content: '<h2>Le courant électrique</h2><p>Nature du courant électrique dans les métaux et les solutions ioniques.</p>',
                        formulas: JSON.stringify([
                            { label: "Sens conventionnel", value: "Du + vers le -" },
                            { label: "Sens des électrons", value: "Du - vers le +" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p2-generalite-sur-le-courant-electrique/',
                        order: 2
                    },
                    {
                        title: 'P3. Intensité du courant électrique',
                        content: '<h2>Intensité du courant</h2><p>Mesure de l\'intensité et loi des nœuds.</p>',
                        formulas: JSON.stringify([
                            { label: "Intensité", value: "I = Q/t" },
                            { label: "Loi des nœuds", value: "ΣI_entrantes = ΣI_sortantes" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p3-intensite-du-courant-electrique/',
                        order: 3
                    },
                    {
                        title: 'P4. Tension électrique',
                        content: '<h2>Tension électrique</h2><p>Mesure de la tension et loi des mailles.</p>',
                        formulas: JSON.stringify([
                            { label: "Tension", value: "U = W/Q" },
                            { label: "Loi des mailles", value: "ΣU = 0 (circuit fermé)" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p4-tension-electrique/',
                        order: 4
                    },
                    {
                        title: 'P5-P7. Dipôles passifs, actifs et associations',
                        content: '<h2>Dipôles et associations</h2><p>Résistances, générateurs et leurs associations série/parallèle.</p>',
                        formulas: JSON.stringify([
                            { label: "Loi d'Ohm", value: "U = R × I" },
                            { label: "Résistances série", value: "R_eq = R₁ + R₂" },
                            { label: "Résistances parallèle", value: "1/R_eq = 1/R₁ + 1/R₂" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p5-dipoles-passifs-dipoles-actifs/',
                        order: 5
                    }
                ]
            }
        }
    });

    // ========================================
    // MÉCANIQUE
    // ========================================
    const mecanique = await prisma.chapter.create({
        data: {
            title: 'Mécanique',
            category: 'MÉCANIQUE',
            order: 2,
            description: 'Mouvements, forces et équilibre',
            lessons: {
                create: [
                    {
                        title: 'P8. Généralité sur le mouvement',
                        content: '<h2>Le mouvement</h2><p>Trajectoires, référentiels et vitesse.</p>',
                        formulas: JSON.stringify([
                            { label: "Vitesse moyenne", value: "v = d/t" },
                            { label: "Vitesse instantanée", value: "v = dx/dt" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p8-generalite-sur-le-mouvement/',
                        order: 1
                    },
                    {
                        title: 'P9. Généralité sur les forces',
                        content: '<h2>Les forces</h2><p>Caractéristiques d\'une force et représentation vectorielle.</p>',
                        formulas: JSON.stringify([
                            { label: "Force", value: "F (vecteur)" },
                            { label: "Unité", value: "Newton (N)" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p9-generalite-sur-les-forces/',
                        order: 2
                    },
                    {
                        title: 'P10. Poids – Masse',
                        content: '<h2>Poids et masse</h2><p>Relation entre poids et masse.</p>',
                        formulas: JSON.stringify([
                            { label: "Poids", value: "P = m × g" },
                            { label: "g (Terre)", value: "g ≈ 9,8 N/kg" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p10-poids-masse/',
                        order: 3
                    },
                    {
                        title: 'P11-P12. Équilibre d\'un solide',
                        content: '<h2>Équilibre d\'un solide</h2><p>Conditions d\'équilibre et moments de force.</p>',
                        formulas: JSON.stringify([
                            { label: "Équilibre translation", value: "ΣF = 0" },
                            { label: "Équilibre rotation", value: "ΣM = 0" },
                            { label: "Moment", value: "M = F × d" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p11-p12equilibre-dun-solide-soumis-a-des-forces-non-paralleles-equilibre-dun-solide-mobile-autour-dun-axe-fixe/',
                        order: 4
                    }
                ]
            }
        }
    });

    // ========================================
    // OPTIQUE
    // ========================================
    const optique = await prisma.chapter.create({
        data: {
            title: 'Optique',
            category: 'OPTIQUE',
            order: 3,
            description: 'Propagation et comportement de la lumière',
            lessons: {
                create: [
                    {
                        title: 'P13. Propagation rectiligne de la lumière',
                        content: '<h2>Propagation de la lumière</h2><p>Propagation rectiligne, ombres et éclipses.</p>',
                        formulas: JSON.stringify([
                            { label: "Vitesse lumière", value: "c = 3 × 10⁸ m/s" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p13-propagation-rectiligne-de-la-lumiere/',
                        order: 1
                    },
                    {
                        title: 'P14-P15. Réflexion et réfraction',
                        content: '<h2>Réflexion et réfraction</h2><p>Lois de Snell-Descartes.</p>',
                        formulas: JSON.stringify([
                            { label: "Réflexion", value: "i = r" },
                            { label: "Réfraction", value: "n₁ sin(i₁) = n₂ sin(i₂)" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/p14-p15-reflexion-et-refraction-de-la-lumiere/',
                        order: 2
                    }
                ]
            }
        }
    });

    // ========================================
    // CHIMIE
    // ========================================
    const chimie = await prisma.chapter.create({
        data: {
            title: 'Chimie',
            category: 'CHIMIE',
            order: 4,
            description: 'Structure de la matière et réactions chimiques',
            lessons: {
                create: [
                    {
                        title: 'C1. Mélanges et corps purs',
                        content: '<h2>Mélanges et corps purs</h2><p>Classification de la matière.</p>',
                        formulas: JSON.stringify([]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c1-melanges-et-corps-purs/',
                        order: 1
                    },
                    {
                        title: 'C2. Éléments, atomes, classification périodique',
                        content: '<h2>Structure atomique</h2><p>Atomes, éléments et tableau périodique.</p>',
                        formulas: JSON.stringify([
                            { label: "Numéro atomique", value: "Z = nombre de protons" },
                            { label: "Nombre de masse", value: "A = Z + N" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c2-elements-atomes-classification-periodique-des-element/',
                        order: 2
                    },
                    {
                        title: 'C3. Liaisons chimiques',
                        content: '<h2>Liaisons chimiques</h2><p>Liaisons ioniques et covalentes.</p>',
                        formulas: JSON.stringify([]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c3-liaisons-chimiques/',
                        order: 3
                    },
                    {
                        title: 'C4. Mole, grandeurs molaires',
                        content: '<h2>La mole</h2><p>Quantité de matière et grandeurs molaires.</p>',
                        formulas: JSON.stringify([
                            { label: "Nombre d'Avogadro", value: "Nₐ = 6,02 × 10²³ mol⁻¹" },
                            { label: "Quantité de matière", value: "n = m/M" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c4-mole-grandeurs-molaires/',
                        order: 4
                    },
                    {
                        title: 'C5. Réactions chimiques – Équation – bilan',
                        content: '<h2>Réactions chimiques</h2><p>Équations et bilans de matière.</p>',
                        formulas: JSON.stringify([]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c5reactions-chimiques-equation-bilan/',
                        order: 5
                    },
                    {
                        title: 'C6. Généralités sur les solutions aqueuses',
                        content: '<h2>Solutions aqueuses</h2><p>Concentration et dissolution.</p>',
                        formulas: JSON.stringify([
                            { label: "Concentration molaire", value: "C = n/V" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c6-generalites-sur-les-solutions-aqueuses/',
                        order: 6
                    },
                    {
                        title: 'C7. Solutions aqueuses acides',
                        content: '<h2>Solutions acides</h2><p>Propriétés des acides.</p>',
                        formulas: JSON.stringify([]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c7-solutions-aqueuses-acides/',
                        order: 7
                    },
                    {
                        title: 'C8. Solutions aqueuses basiques',
                        content: '<h2>Solutions basiques</h2><p>Propriétés des bases.</p>',
                        formulas: JSON.stringify([]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c8-solutions-aqueuses-basiques/',
                        order: 8
                    },
                    {
                        title: 'C9. Notion de pH – Indicateurs colorés',
                        content: '<h2>Le pH</h2><p>Échelle de pH et indicateurs colorés.</p>',
                        formulas: JSON.stringify([
                            { label: "pH", value: "pH = -log[H₃O⁺]" }
                        ]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c9-notion-de-ph-indicateurs-colores/',
                        order: 9
                    },
                    {
                        title: 'C10. Caractérisation de quelques ions',
                        content: '<h2>Caractérisation des ions</h2><p>Tests de reconnaissance des ions.</p>',
                        formulas: JSON.stringify([]),
                        pdfUrl: 'https://cissdorosp.wordpress.com/c10-caracterisation-de-quelques-ions/',
                        order: 10
                    }
                ]
            }
        }
    });

    console.log(`✅ Created ${await prisma.chapter.count()} chapters`);
    console.log(`✅ Created ${await prisma.lesson.count()} lessons`);
    console.log('--- SEED COMPLETED SUCCESSFULLY ---');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
