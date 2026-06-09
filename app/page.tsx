import Link from 'next/link';
import { BlogPostCard } from "@/components/BlogPostCard";
import Hero from "@/components/common/Hero";
import ToolsList from "@/components/tools/ToolsList";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
      <Hero
        title="Generate Random Data Instantly"
        description="Stop wasting time. Generate random data in seconds. Focus on what you do best."
      />

      <ToolsList />

      <section>
        <h2 className="text-3xl font-bold text-center mb-10 md:mb-12">
          Latest Posts
        </h2>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground mb-12">No recent posts found.</div>
        )}
        <div className="text-center">
          <Link href="/blog" className="text-primary hover:underline font-medium">
            View all posts &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
