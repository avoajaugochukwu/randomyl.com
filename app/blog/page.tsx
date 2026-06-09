import { getAllPosts } from '@/lib/posts';
import { BlogPostCard } from "@/components/BlogPostCard"; // Import the card component
import { baseUrl } from '../metadata';

// Optional: Add metadata for the blog page
export const metadata = {
  title: 'Blog',
  description: 'Guides and articles on random data generation, QR codes, Bible study tools, data privacy, and more from the Randomyl team.',
  openGraph: {
    title: 'Blog | Randomyl',
    description: 'Guides and articles on random data generation, QR codes, Bible study tools, data privacy, and more from the Randomyl team.',
    url: `${baseUrl}/blog`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
    languages: {
      'en-US': `${baseUrl}/blog`,
      'x-default': `${baseUrl}/blog`
    },
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="text-center text-muted-foreground">No posts found.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Blog Posts
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          All our latest articles and updates.
        </p>
        {/* Optional: Breadcrumbs or link back home */}
        {/* <nav className="mt-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span>Blog</span>
        </nav> */}
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}