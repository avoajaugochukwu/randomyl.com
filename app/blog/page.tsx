import { getAllPosts } from '@/lib/posts';
import { PostRow } from '@/components/PostRow';
import Hero from '@/components/common/Hero';
import { baseUrl } from '../metadata';

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
      'x-default': `${baseUrl}/blog`,
    },
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Hero
        title="The Blog"
        description="Guides and articles on random data, QR codes, Bible study tools, data privacy, and the craft of building useful generators."
        tag="Writing"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="posts-a" style={{ paddingTop: 'clamp(24px,3vw,40px)' }}>
        <div className="wrap">
          {posts.length > 0 ? (
            <div className="posts-list">
              {posts.map((post) => (
                <PostRow key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="lede">No posts found.</p>
          )}
        </div>
      </section>
    </>
  );
}
