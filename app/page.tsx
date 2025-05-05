/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchPages } from "@/lib/notion";
import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPostCard } from "@/components/BlogPostCard";
import Hero from "@/components/common/Hero";

export default async function Home() {
  const pages = await fetchPages();

  if (!pages || pages.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground">No posts found</div>
      </div>
    );
  }

  const posts = pages.map((page: any) => {
    const dateStr = page.properties.Created?.created_time || new Date().toISOString();

    let featuredImageUrl = 'https://placehold.co/600x400';
    const featuredImageProp = page.properties["Featured Image"]?.files;
    if (featuredImageProp && featuredImageProp.length > 0) {
      if (featuredImageProp[0].type === 'external') {
        featuredImageUrl = featuredImageProp[0].external.url;
      } else if (featuredImageProp[0].type === 'file') {
        featuredImageUrl = featuredImageProp[0].file.url;
      }
    }

    // Extract author names from multi-select
    const authorMultiSelect = page.properties.Author?.multi_select;
    let authorNames = 'Randomyl Team'; // Default author
    if (authorMultiSelect && authorMultiSelect.length > 0) {
      // Map over the array and get the name of each selected author
      authorNames = authorMultiSelect.map((author: any) => author.name).join(', ');
    }

    return {
      id: page.id,
      title: page.properties.Title?.title[0]?.plain_text || 'Untitled Post',
      slug: page.properties.Slug?.rich_text[0]?.plain_text || page.id,
      excerpt: page.properties.Excerpt?.rich_text[0]?.plain_text || 'No excerpt available.',
      formattedDate: format(new Date(dateStr), 'MMM d, yyyy'),
      featuredImageUrl: featuredImageUrl,
      author: authorNames, // Assign the joined author names string
    };
  }).sort((a, b) => new Date(b.formattedDate).getTime() - new Date(a.formattedDate).getTime());

  console.log(posts);

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
      <Hero
        title="Generate Random Data Instantly"
        description="Stop wasting time. Generate random data in seconds. Focus on what you do best."
      />

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
