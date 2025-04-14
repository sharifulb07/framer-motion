"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

import { motion } from 'motion/react';


export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataJ = await data.json();
      setPosts(dataJ);
    };

    dataFetch();
  }, []);
  return (


    <div className="space-y-4 mx-10 flex justify-center items-center flex-col py-10 ">
      {posts.map((post) => (

        <motion.div initial={{y:100, opacity:0 }}  whileInView={{y:0, opacity:1}} key={post.id} className="shadow p-10 w-[50%] rounded-2xl flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-blue-900">{post.title}</h1>
          <p>{post.body} </p>
        </motion.div>
      ))}
     
    </div>


  );
}
