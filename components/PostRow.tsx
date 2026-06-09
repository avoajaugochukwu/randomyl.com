import Link from 'next/link';

interface PostRowProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    formattedDate: string;
    readingTime: string;
    tags: string[];
  };
}

function categoryLabel(tag?: string): string {
  if (!tag) return 'Article';
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

export function PostRow({ post }: PostRowProps) {
  return (
    <Link className="post-row" href={`/blog/${post.slug}`}>
      <span className="pmeta">
        <span className="cat">{categoryLabel(post.tags[0])}</span>
        {post.formattedDate}
        <br />
        {post.readingTime}
      </span>
      <span>
        <span className="ptitle">{post.title}</span>
        <span className="pdesc">{post.excerpt}</span>
      </span>
      <span className="pgo">READ →</span>
    </Link>
  );
}
