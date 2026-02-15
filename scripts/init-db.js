/* scripts/init-db.js */
const { PrismaClient } = require('@prisma/client');
const path = require('path');

const dbPath = path.join(__dirname, '../prisma/dev.db');
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: `file:${dbPath}`
        }
    }
});

async function main() {
    console.log('--- INITIALIZING DATABASE ---');
    console.log('Path:', dbPath);

    try {
        const curriculum = [
            { title: 'Atomes et Éléments', category: 'CHIMIE', order: 1, description: 'Structure microscopique.' },
            { title: 'La Mole', category: 'CHIMIE', order: 2, description: 'Quantité de matière.' },
            { title: 'Cinématique', category: 'MÉCANIQUE', order: 3, description: 'Étude du mouvement.' },
            { title: 'Forces et Équilibre', category: 'MÉCANIQUE', order: 4, description: 'Dynamique.' },
            { title: 'Électricité', category: 'ÉLECTRICITÉ', order: 5, description: 'Circuits continus.' },
            { title: 'Optique', category: 'OPTIQUE', order: 6, description: 'Lumière.' }
        ];

        await prisma.chapter.deleteMany({});

        for (const item of curriculum) {
            const ch = await prisma.chapter.create({
                data: {
                    ...item,
                    lessons: {
                        create: [{ title: 'Leçon 1', content: '<p>Contenu introductif.</p>', order: 1 }]
                    }
                }
            });
            console.log(`Created: ${ch.title}`);
        }

        console.log('--- SUCCESS: Database populated! ---');
    } catch (err) {
        console.error('--- ERROR ---');
        console.error(err);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
