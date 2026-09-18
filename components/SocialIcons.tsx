import { CAL_LINK } from "@/lib/content";

const links = {
  instagram: "https://www.instagram.com/b.e.classicss/",
  tiktok: "https://www.tiktok.com/@b.e.classics",
  youtube: "https://www.youtube.com/@Beclassics-Baden",
};

export default function SocialIcons({ nav = false }: { nav?: boolean }) {
  return (
    <div className={`social-links ${nav ? "social-links--nav" : ""}`}>
      <a
        className="social-link social-link--instagram"
        href={links.instagram}
        target="_blank"
        rel="noopener"
        aria-label="B.E. Classics on Instagram"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        className="social-link social-link--tiktok"
        href={links.tiktok}
        target="_blank"
        rel="noopener"
        aria-label="B.E. Classics on TikTok"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </a>
      <a
        className="social-link social-link--youtube"
        href={links.youtube}
        target="_blank"
        rel="noopener"
        aria-label="B.E. Classics on YouTube"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
          <path d="M10.5 9.2v5.6l5-2.8-5-2.8z" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}

export { CAL_LINK };
