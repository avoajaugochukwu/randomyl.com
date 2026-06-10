import Link from 'next/link';
import ToolsList from '@/components/tools/ToolsList';
import ToolSearch from '@/components/tools/ToolSearch';
import { PostRow } from '@/components/PostRow';
import { getAllPosts } from '@/lib/posts';
import { buildSearchIndex } from '@/lib/search';

export default function Home() {
  const posts = getAllPosts().slice(0, 4);
  const searchIndex = buildSearchIndex();

  return (
    <>
      {/* HERO */}
      <header className="hero-a">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot">●</span> RANDOM DATA &nbsp;·&nbsp; ON DEMAND
            &nbsp;·&nbsp; NO SIGN-UP
          </div>
          <div className="hero-grid">
            <h1 className="display">
              Generate
              <br />
              random
              <br />
              <span className="accentword">
                <em>anything</em>
              </span>
              ,<br />
              instantly.
            </h1>
            <div className="hero-aside">
              <p className="lede">
                Stop wasting time fabricating test data, word lists, or
                placeholder content by hand. Randomyl spins up exactly what you
                need in seconds — so you can focus on what you actually do best.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-accent" href="/tools">
                  Browse the tools <span className="arr">→</span>
                </Link>
                <Link className="btn btn-ghost" href="/blog">
                  Read the blog
                </Link>
              </div>
            </div>
          </div>
          <div className="entropy">
            7F2A · noun · +1&nbsp;(415)&nbsp;555·0118 · <b>lighthouse</b> ·
            psalm&nbsp;117:2 · {'{ id: 9X4 }'} · clarity · #E3·QR ·{' '}
            <b>velocity</b> · 0xB1 · meadow · +44&nbsp;7700&nbsp;900 · whisper ·
            A9·F0 · <b>kernel</b> · revival · 3.1415 · tangent · {'{…}'} ·
            horizon · 88·2Z
          </div>
        </div>
      </header>

      {/* TOOLS */}
      <ToolSearch index={searchIndex}>
        <ToolsList />
      </ToolSearch>

      {/* STRIP */}
      <section className="strip">
        <div className="wrap">
          <h3>
            More generators are{' '}
            <span className="accentword">shipping</span> every month.
          </h3>
          <Link className="btn btn-accent" href="/blog">
            Get notified <span className="arr">→</span>
          </Link>
        </div>
      </section>

      {/* POSTS */}
      <section className="posts-a">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Latest from the blog</h2>
            <Link className="link-arrow" href="/blog">
              View all posts →
            </Link>
          </div>
          {posts.length > 0 ? (
            <div className="posts-list">
              {posts.map((post) => (
                <PostRow key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="lede" style={{ marginTop: 24 }}>
              No recent posts found.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
