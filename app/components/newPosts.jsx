
import { db, posts } from "@/lib/db"

export default async function NewPosts() {
    const allposts=await db.select().from(posts);

    
  return (
    <div>
        {allposts.map((post)=>(<h1 key={post.id}>{post.title}</h1>))}
      
    </div>
  )
}
