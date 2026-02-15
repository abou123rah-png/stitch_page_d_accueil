/* scripts/list-chapters.js */
const { PrismaClient } = require('@prisma/client');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
const path = require('path');

async function main() {
    const dbPath = path.resolve(__dirname, '../dev.db');
    const url = `file:${dbPath}`;
    const adapter = new PrismaBetterSqlite3({ url });
    const prisma = new PrismaClient({ adapter });

    try {
        const chapters = await prisma.chapter.findMany({
            select: { id: true, title: true }
        });
        console.log('Chapters in DB:');
        console.log(JSON.stringify(chapters, null, 2));
        await prisma.$disconnect();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
main();
