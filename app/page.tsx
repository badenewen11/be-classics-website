import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { CAL_LINK } from "@/components/SocialIcons";
import { services, marqueeItems, differentiators, partners } from "@/lib/content";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap hero-inner">
          <p className="hero-eyebrow">Marketing for Auto Repair Shops</p>
          <h1 className="headline">
            <span>Guaranteed</span>
            <span>Booked</span>
            <span>Appointments</span>
          </h1>

          <p className="hero-sub">
            We build targeted Google &amp; Facebook ad campaigns that put your shop in front of
            customers actively searching for repairs — so your bays stay booked, not empty.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={CAL_LINK} target="_blank" rel="noopener">
              Book a Free Google Audit
            </a>
            <a className="btn btn-ghost" href="/services">
              View Services
            </a>
          </div>
        </div>

        <div className="wrap hero-foot">
          <span>B.E. Classics</span>
          <span className="scroll-cue">
            <span className="scroll-cue-line"></span>Scroll to Explore
          </span>
        </div>
      </header>

      <Marquee items={marqueeItems} />

      <section id="services">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="section-title">Everything Your Shop Needs to Stay Booked</h2>
            </div>
            <p className="section-desc">
              A month-to-month, performance-driven approach — built specifically for automotive
              repair shops, not agencies chasing every industry.
            </p>
          </Reveal>

          <div className="grid services-grid">
            {services.map((s) => (
              <ServiceCard key={s.index} index={s.index} title={s.title} text={s.homeText} />
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <p className="section-label">Why Shop Owners Choose Us</p>
              <h2 className="section-title">Built Specifically for Auto Repair</h2>
            </div>
            <p className="section-desc">
              We don&apos;t spread ourselves across every industry. Every campaign, landing page,
              and report is built around how repair shops actually book work.
            </p>
          </Reveal>

          <Reveal className="diff-list">
            <>
              {differentiators.map((d) => (
                <div className="diff-row" key={d.num}>
                  <span className="diff-num">{d.num}</span>
                  <span className="diff-name">{d.name}</span>
                  <span className="diff-text">{d.text}</span>
                </div>
              ))}
            </>
          </Reveal>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <p className="section-label">Shop Partners</p>
              <h2 className="section-title">Shops We&apos;re Proud to Work With</h2>
            </div>
            <p className="section-desc">
              A few of the repair shops we&apos;ve partnered with to keep their service bays booked.
            </p>
          </Reveal>

          <Reveal className="grid testi-grid">
            <>
              {partners.map((p) => (
                <TestimonialCard key={p.name} {...p} />
              ))}
            </>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="cta-band">
            <>
              <p className="section-label">Get Started</p>
              <h2 className="section-title">
                Ready to Fill
                <br />
                <span>Your Service Bays?</span>
              </h2>
              <p className="cta-sub">
                Book a free Google audit and we&apos;ll walk through exactly how we&apos;d fill
                your calendar with booked appointments — no long-term contract required.
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
