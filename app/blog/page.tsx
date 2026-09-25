import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import BlogCardIcon from "@/components/BlogCardIcon";
import { CAL_LINK } from "@/components/SocialIcons";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — B.E. Classics",
  description:
    "Marketing insights and strategy for auto repair shop owners — lead generation, ad campaigns, retention, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <header className="hero page-hero">
        <div className="wrap hero-inner">
          <p className="hero-eyebrow">Insights &amp; Strategy</p>
          <h1 className="headline">
            <span>The</span>
            <span>Blog</span>
          </h1>

          <p className="hero-sub">
            Practical marketing advice for auto repair shop owners — no fluff, just what actually
            fills bays.
          </p>
        </div>

        <div className="wrap hero-foot">
          <span>B.E. Classics</span>
          <span className="scroll-cue">
            <span className="scroll-cue-line"></span>Scroll to Explore
          </span>
        </div>
      </header>

      <section>
        <div className="wrap">
          {posts.length === 0 && (
            <Reveal>
              <div className="empty-state">
                <p className="section-label">Coming Soon</p>
                <h2 className="section-title">No posts yet — check back soon.</h2>
                <p className="section-desc" style={{ marginTop: "1rem", maxWidth: "480px" }}>
                  We&apos;re working on our first articles. In the meantime, book a free Google
                  audit and we&apos;ll walk you through the same strategies in person.
                </p>
              </div>
            </Reveal>
          )}

          {featured && (
            <Reveal>
              <Link href={`/blog/${featured.slug}`} className="blog-featured">
                <div>
                  <p className="section-label">Featured</p>
                  <h3 className="blog-title">{featured.title}</h3>
                  <p className="blog-excerpt">{featured.excerpt}</p>
                  <p className="blog-meta" style={{ marginTop: "1rem" }}>
                    {formatDate(featured.date)} · {featured.tag}
                  </p>
                </div>
                <div className="blog-featured-media">
                  {featured.cover ? (
                    <Image
                      src={featured.cover}
                      alt={featured.title}
                      fill
                      sizes="(min-width: 860px) 40vw, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <BlogCardIcon className="blog-featured-media-icon" />
                  )}
                </div>
              </Link>
            </Reveal>
          )}

          {rest.length > 0 && (
            <>
              <Reveal className="section-head">
                <div>
                  <p className="section-label">Latest Posts</p>
                  <h2 className="section-title">Marketing Notes From the Bay</h2>
                </div>
              </Reveal>

              <div className="grid blog-grid">
                {rest.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="cta-band">
            <>
              <p className="section-label">Enjoying the Blog?</p>
              <h2 className="section-title">
                Let&apos;s Put It
                <br />
                <span>Into Practice</span>
              </h2>
              <p className="cta-sub">
                Book a free Google audit and we&apos;ll show you exactly how these ideas apply to
                your shop.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={CAL_LINK} target="_blank" rel="noopener">
                  Book a Free Google Audit
                </a>
                <a className="btn btn-ghost" href="mailto:baden@b-e-classics.com">
                  Email Us
                </a>
              </div>
            </>
          </Reveal>
        </div>
      </section>
    </>
  );
}
