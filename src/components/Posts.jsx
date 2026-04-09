"use client";

import { use } from "react";

const Posts = ({postsPromise}) => {
  const posts = use(postsPromise);
  console.log("posts in post component", posts);
  return (
    <div>
      <h2 className="text-4xl">Posts { posts.length}</h2>
      {posts.map(post => (
        <div key={post.id} className="border border-gray-200 p-4 my-4">
          <h3 className="text-2xl">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;