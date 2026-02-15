/* scripts/final-seed.js */
const { PrismaClient } = eval('require')('@prisma/client');
const path = require('path');

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: 'file:../dev.db'
        }
    }
});

async function main() {
    console.log('--- FINAL SEEDING ATTEMPT ---');
    try {
        const data = [
            { id: 'ch1', title: 'Atomes et Éléments', category: 'CHIMIE', order: 1, description: 'Structure microscopique.' },
            { id: 'ch2', title: 'La Mole', category: 'CHIMIE', order: 2, description: 'Quantité de matière.' },
            { id: 'ch3', title: 'Cinématique', category: 'MÉCANIQUE', order: 3, description: 'Mouvement rectiligne.' },
            { id: 'ch4', title: 'Forces et Équilibre', category: 'MÉCANIQUE', order: 4, description: 'Dynamique.' },
            { id: 'ch5', title: 'Électricité', category: 'ÉLECTRICITÉ', order: 5, description: 'Circuits continus.' },
            { id: 'ch6', title: 'Optique', category: 'OPTIQUE', order: 6, description: 'Lumière.' }
        ];

        await prisma.chapter.deleteMany({});
        for (const item of data) {
            await prisma.chapter.create({
                data: {
                    ...item,
                    lessons: {
                        create: [{ title: 'Introduction', content: '<p>Cours complet sur ' + item.title + '</p>', order: 1 }]
                    }
                }
            });
        }
        console.log('Seeded ' + data.length + ' chapters successfully.');
    } catch (e) {
        console.error('Seed failed:', e.message);
    } finally {
        await prisma.$disconnect();
    }
}
main();
