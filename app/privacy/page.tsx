import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — B.E. Classics",
  description: "How B.E. Classics collects, uses, and protects information on this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="hero page-hero post-hero">
        <div className="wrap hero-inner">
          <p className="hero-eyebrow">Legal</p>
          <h1 className="headline post-headline">Privacy Policy</h1>
          <p className="hero-sub">Last updated: September 29, 2026</p>
        </div>
      </header>

      <section>
        <div className="wrap post-wrap">
          <article className="post-body">
            <p>
              B.E. Classics (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
              beclassics.co (the &quot;Site&quot;). This page explains what information we
              collect when you visit, how we use it, and the choices you have. This Site is
              informational only, it doesn&apos;t have accounts, logins, or a way to submit
              personal information directly to us through a form.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We don&apos;t operate any forms on this Site that collect personal information
              directly. Booking a consultation happens through Cal.com, an external scheduling
              service, and contacting us by email happens through your own email provider, not
              through this Site. Neither of those submissions passes through our servers.
            </p>
            <p>
              Like most websites, we use a couple of third-party tools that automatically collect
              some information about visits to help us understand how the Site is used and
              measure the performance of our advertising:
            </p>
            <ul>
              <li>
                <strong>Google Analytics</strong> collects information such as pages visited, how
                long you stayed, and general location and device information.
              </li>
              <li>
                <strong>Meta Pixel</strong> (from Meta/Facebook) helps us understand which visits
                came from our Facebook and Instagram ads, and lets us show relevant ads to people
                who&apos;ve visited the Site.
              </li>
            </ul>
            <p>These tools use cookies and similar technology, described below.</p>

            <h2>Cookies</h2>
            <p>
              Cookies are small text files stored on your device. Google Analytics and Meta
              Pixel each set their own cookies to recognize repeat visits and measure ad
              performance. You can block or delete cookies through your browser settings at any
              time. Doing so may not affect how the Site displays, since we don&apos;t rely on
              cookies for anything functional, only for analytics and advertising measurement.
            </p>

            <h2>How We Use Information</h2>
            <p>We use the information described above to:</p>
            <ul>
              <li>Understand how visitors use the Site so we can improve it</li>
              <li>Measure how well our Google and Facebook ad campaigns are performing</li>
              <li>Show relevant ads to people who have visited the Site (remarketing)</li>
            </ul>
            <p>We do not sell your information to anyone.</p>

            <h2>Third-Party Services</h2>
            <p>
              Google and Meta process the analytics and advertising data described above under
              their own privacy policies:
            </p>
            <ul>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/privacy/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meta Privacy Policy
                </a>
              </li>
            </ul>
            <p>
              When you book a consultation, that happens entirely on Cal.com&apos;s platform,
              under their own{" "}
              <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer">
                privacy policy
              </a>
              .
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              This Site is intended for business owners and is not directed at children. We do
              not knowingly collect information from anyone under 13.
            </p>

            <h2>Your Choices</h2>
            <p>
              You can opt out of Google Analytics using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              , and manage the ads you see from Meta through your{" "}
              <a
                href="https://www.facebook.com/adpreferences/ad_settings/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook ad settings
              </a>
              . Most browsers also let you block third-party cookies entirely.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this page from time to time as the Site changes. The date at the top
              reflects the most recent update.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:baden@b-e-classics.com">baden@b-e-classics.com</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
