import { db } from '@/lib/db'
import { posts } from '@/lib/schema'

async function seed() {
  await db.insert(posts).values([
    { title: 'Hello World', content: 'First blog post' },
    { title: 'Next.js + Drizzle', content: 'How to use Drizzle with Next.js' },
  ])
  console.log('Seeded successfully')
}

seed()
