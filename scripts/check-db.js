/* scripts/check-db.js */
const { PrismaClient } = require('@prisma/client');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

async function main() {
    // Use absolute path for dev.db in local testing
    const path = require('path');
    const dbPath = path.resolve(__dirname, '../dev.db');
    const url = `file:${dbPath}`;

    console.log('Using SQLite URL:', url);

    try {
        // Correct usage for Prisma 7 with Better-SQLite3 adapter
        const adapter = new PrismaBetterSqlite3({ url });

        const prisma = new PrismaClient({
            adapter,
            log: ['query', 'error', 'warn']
        });
        console.log('Prisma Client Instance Created');

        const count = await prisma.chapter.count();
        console.log('Success! Chapter count:', count);
        await prisma.$disconnect();
    } catch (e) {
        console.error('--- ERROR CAUGHT ---');
        console.error('Name:', e.name);
        console.error('Message:', e.message);
        if (e.stack) console.error('Stack:', e.stack);
        process.exit(1);
    }
}
main();
