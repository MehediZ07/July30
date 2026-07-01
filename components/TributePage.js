'use client';

import { useEffect } from 'react';
import { highlights, sections } from '@/lib/tributeContent';

export default function TributePage() {
  useEffect(() => {
    const title = document.title;
    document.title = `${title} • App Router`;

    return () => {
      document.title = title;
    };
  }, []);

  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">July Uprising • Bangladesh</p>
        <h1>৩৬ দিন</h1>
        <h2>The July Uprising</h2>
        <p className="lead">
          A tribute page that captures the courage, pain, and hope of a movement that changed the country.
        </p>

        <div className="stats">
          {highlights.map((item) => (
            <div key={item.label} className="stat-box">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-card">
        {sections.map((section) => (
          <div key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
