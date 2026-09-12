const ROLES = [
  {
 
    year: '2025 — Present',
    title: 'Full-Stack Developer',
    org: 'Farrow & Co',
    desc: 'Built the customer-facing dashboard from zero to 30,000 monthly users, owning both the API and the interface.',
  },
  {
    year: '2024 — 2025',
    title: 'Frontend Developer',
    org: 'Studio Pine',
    desc: 'Shipped marketing sites and internal tools for a small agency, mostly in React and a lot of Sass.',
  },
 
]

function Experience() {
  return (
    <section id="experience" className="relative py-28 border-t border-[var(--blueprint-line)]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ink)] tracking-tight mb-14">
          Experience
        </h2>

        <div className="relative pl-8 max-w-3xl">
          <div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-[var(--blueprint-line)]" />
          <div className="space-y-12">
            {ROLES.map((role) => (
              <div key={role.title} className="relative">
                <span className="absolute -left-8 top-1.5 w-[7px] h-[7px] bg-[var(--amber)]" />
                <p className="font-mono text-[12px] text-[var(--muted)] mb-1.5">{role.year}</p>
                <h3 className="font-display text-lg text-[var(--ink)]">
                  {role.title} <span className="text-[var(--muted)] font-sans text-base">at {role.org}</span>
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mt-2 max-w-xl">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
