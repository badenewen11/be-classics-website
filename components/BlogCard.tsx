import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";
import BlogCardIcon from "@/components/BlogCardIcon";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card reveal is-visible">
      <div className="blog-media">
        <span className="blog-tag">{post.tag}</span>
        {post.cover ? (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <BlogCardIcon className="blog-media-icon" />
        )}
      </div>
      <div className="blog-body">
        <p className="blog-meta">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <span className="blog-link">
          Read Article
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H9M17 7V15" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
