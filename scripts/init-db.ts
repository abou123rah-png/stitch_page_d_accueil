/* scripts/init-db.ts */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('--- INITIALIZING DATABASE VIA SCRIPT ---');

    try {
        // Clear
        await prisma.score.deleteMany({});
        await prisma.progress.deleteMany({});
        await prisma.exercise.deleteMany({});
        await prisma.lesson.deleteMany({});
        await prisma.chapter.deleteMany({});

        // Seconde S Senegal Curriculum
        const curriculum = [
            {
                title: 'Mélanges et Corps Purs',
                category: 'MATIÈRE',
                order: 1,
                description: 'Introduction à la chimie de base.',
            },
            {
                title: 'Atomes et Classification Périodique',
                category: 'MATIÈRE',
                order: 2,
                description: 'La structure de la matière.',
            },
            {
                title: 'Cinématique du Point',
                category: 'MÉCANIQUE',
                order: 3,
                description: 'Étude du mouvement.',
            },
            {
                title: 'Actions Mécaniques et Forces',
                category: 'MÉCANIQUE',
                order: 4,
                description: 'Les causes du mouvement.',
            },
            {
                title: 'Le Courant Électrique',
                category: 'ÉLECTRICITÉ',
                order: 5,
                description: 'Généralités sur les circuits.',
            },
            {
                title: 'Optique Géométrique',
                category: 'OPTIQUE',
                order: 6,
                description: 'Lumière et miroirs.',
            }
        ];

        for (const item of curriculum) {
            await prisma.chapter.create({
                data: {
                    ...item,
                    lessons: {
                        create: [
                            {
                                title: 'Leçon 1 : Introduction',
                                content: `<p>Contenu principal pour ${item.title}. Bienvenue dans ce module.</p>`,
                                order: 1
                            }
                        ]
                    }
                }
            });
        }

        console.log('--- SUCCESS: Database populated! ---');
    } catch (err) {
        console.error('--- ERROR: Seeding failed ---');
        console.error(err);
    } finally {
        await prisma.$disconnect();
    }
}

main();
