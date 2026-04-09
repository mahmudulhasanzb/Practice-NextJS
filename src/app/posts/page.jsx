import Posts from "@/components/Posts";
import { Suspense } from "react";


const PostsPage = () => {

  const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

  return (
    <div>
      <Suspense fallback={<div className="text-2xl">Loading...</div>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
    </div>
  );
};

export default PostsPage;