import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const url = process.env.DATABASE_URL || 'file:./dev.db'
const adapter = new PrismaBetterSqlite3({ url })
const prisma = new PrismaClient({ adapter })

async function main() {
    const chapters = await prisma.chapter.findMany({
        include: { lessons: true },
        orderBy: { order: 'asc' }
    })

    console.log(`Total Chapters: ${chapters.length}`)
    chapters.forEach(c => {
        console.log(`[Order ${c.order}] ${c.title} (${c.category})`)
        console.log(`  - Lessons: ${c.lessons.length}`)
        c.lessons.forEach(l => {
            console.log(`    * ${l.title} (Content Length: ${l.content.length})`)
            if (l.formulas) {
                console.log(`      Formulas: ${l.formulas}`)
            }
        })
    })
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect())
