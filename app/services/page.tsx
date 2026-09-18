import type { Metadata } from "next";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { CAL_LINK } from "@/components/SocialIcons";
import { services, servicesMarqueeItems, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — B.E. Classics",
  description:
    "Lead generation, campaign management, ROI tracking, and all-inclusive SEO built for automotive repair shops.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="hero page-hero">
        <div className="wrap hero-inner">
          <p className="hero-eyebrow">What We Do</p>
          <h1 className="headline">
            <span>Our</span>
            <span>Services</span>
          </h1>

          <p className="hero-sub">
            A focused set of services built to do one thing: keep your service bays booked with
            paying customers.
          </p>
        </div>

        <div className="wrap hero-foot">
          <span>B.E. Classics</span>
          <span className="scroll-cue">
            <span className="scroll-cue-line"></span>Scroll to Explore
          </span>
        </div>
      </header>

      <Marquee items={servicesMarqueeItems} />

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <p className="section-label">The Offering</p>
              <h2 className="section-title">Four Services, One Focus</h2>
            </div>
            <p className="section-desc">
              Every service below works together toward a single outcome — more booked
              appointments on your calendar.
            </p>
          </Reveal>

          <div className="grid services-grid">
            {services.map((s) => (
              <ServiceCard key={s.index} index={s.index} title={s.title} text={s.servicesText} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <p className="section-label">How It Works</p>
              <h2 className="section-title">From Strategy Call to Booked Bays</h2>
            </div>
          </Reveal>

          <Reveal>
            <>
              {processSteps.map((p) => (
                <div className="process-row" key={p.step}>
                  <span className="process-step">{p.step}</span>
                  <h3 className="process-title">{p.title}</h3>
                  <p className="process-text">{p.text}</p>
                </div>
              ))}
            </>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="cta-band">
            <>
              <p className="section-label">Let&apos;s Talk</p>
              <h2 className="section-title">
                Ready to See What&apos;s
                <br />
                <span>Possible for Your Shop?</span>
              </h2>
              <p className="cta-sub">
                Book a free Google audit — no obligation, no long-term contract, just a plan for
                filling your bays.
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
