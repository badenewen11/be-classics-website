import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CAL_LINK } from "@/components/SocialIcons";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — B.E. Classics`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <header className="hero page-hero post-hero">
        <div className="wrap hero-inner">
          <Link href="/blog" className="post-back">
            ← Back to Blog
          </Link>
          <p className="hero-eyebrow">{post.tag}</p>
          <h1 className="headline post-headline">{post.title}</h1>
          <p className="hero-sub">
            {formatDate(post.date)} · {post.readTime}
          </p>
        </div>
      </header>

      <section>
        <div className="wrap post-wrap">
          {post.cover && (
            <Reveal>
              <div className="post-cover">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 800px) 760px, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          )}

          <Reveal>
            <article className="post-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </Reveal>
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
