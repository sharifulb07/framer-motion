


export default async  function Post() {
    const data=await fetch('https://api.vercel.app/blog')
    const posts=await data.json();

    console.log(posts)
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center">
    {posts.map((post)=>(<div key={post.id} className="  my-5 bg-amber-600 text-white w-[300px] h-[200px] py-5 px-3 rounded-2xl shadow-xl">
        
      <h1 className="font-bold text-xl pb-3 ">
      {post.title}
        </h1>  
        <p>{post.content}</p>

        <div className="flex justify-between items-center mt-3">
            <h3>{post.author}</h3>
            <p>{post.date}</p>
        </div>
        
        </div>))}
    </div>
  )
}
