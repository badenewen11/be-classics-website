import Image from "next/image";

export default function TestimonialCard({
  quote,
  city,
  logo,
  name,
  role,
}: {
  quote: string;
  city: string;
  logo: string;
  name: string;
  role: string;
}) {
  return (
    <div className="testi-card">
      <p className="testi-quote">{quote}</p>
      <p className="testi-cities">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        {city}
      </p>
      <div className="testi-author">
        <span className="testi-avatar testi-avatar--logo">
          <Image src={logo} alt={`${name} logo`} width={42} height={42} />
        </span>
        <div>
          <div className="testi-name">{name}</div>
          <div className="testi-role">{role}</div>
        </div>
      </div>
    </div>
  );
}
