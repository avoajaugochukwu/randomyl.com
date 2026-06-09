import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { PostRow } from '@/components/PostRow';
import { getPostBySlug, getPostSlugs, getAllPosts } from '@/lib/posts';
import { baseUrl } from '@/app/metadata';
import { Metadata } from 'next';

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

function categoryLabel(tag?: string): string {
  if (!tag) return 'Article';
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  const url = `${baseUrl}/blog/${slug}`;
  const ogImage = post.featuredImage ? `${baseUrl}${post.featuredImage}` : undefined;

  return {
    title: post.title,
    description: post.metaDescription,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author],
      tags: post.tags,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'x-default': url,
      },
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = categoryLabel(post.tags[0]);

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aShared = a.tags.some((t) => post.tags.includes(t)) ? 0 : 1;
      const bShared = b.tags.some((t) => post.tags.includes(t)) ? 0 : 1;
      return aShared - bShared;
    })
    .slice(0, 2);

  const url = `${baseUrl}/blog/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.lastModified,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Randomyl',
      logo: { '@type': 'ImageObject', url: `${baseUrl}/opengraph-image` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.tags.join(', '),
    ...(post.featuredImage ? { image: `${baseUrl}${post.featuredImage}` } : {}),
  };

  return (
    <article className="article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap">
        <div className="art-head">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            {category}
          </div>
          <span className="tag art-cat">{category}</span>
          <h1 className="art-title">{post.title}</h1>
          {post.excerpt && <p className="art-dek">{post.excerpt}</p>}
          <div className="art-byline">
            <span className="who">{post.author}</span>
            <span className="pipe">|</span>
            <span>{post.formattedDate}</span>
            <span className="pipe">|</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        <MarkdownRenderer content={post.content} className="art-body" />
      </div>

      {related.length > 0 && (
        <section className="related">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h2">Keep reading</h2>
              <Link className="link-arrow" href="/blog">
                All posts →
              </Link>
            </div>
            <div className="posts-list">
              {related.map((p) => (
                <PostRow key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

export const dynamicParams = false;
