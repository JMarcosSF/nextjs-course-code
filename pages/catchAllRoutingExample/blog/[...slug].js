/** Catch-All Routes Example */
import { useRouter } from "next/router";
import { useEffect } from "react";

function BlogPostsPage() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, [router]);


  return (
    <div>
      <h1>The Blog Post</h1>
    </div>
  );
}

export default BlogPostsPage;