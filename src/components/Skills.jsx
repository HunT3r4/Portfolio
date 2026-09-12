const GROUPS = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 92 },
      { name: 'Php', level: 85 },
      { name: 'REST / GraphQL', level: 85 },
      { name: 'Python', level: 70 },
    ],
  },
  {
    category: 'Infra',
    items: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 78 },
      { name: 'Terraform', level: 40 },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-[var(--blueprint-line)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--ink)] tracking-tight">
            Skills
          </h2>
          <p className="font-mono text-[12px] text-[var(--muted)]">Materials &amp; tooling list</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {GROUPS.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-[12px] text-[var(--amber)] mb-4 pb-2 border-b border-[var(--blueprint-line)]">
                {group.category}
              </p>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between text-sm text-[var(--ink)] mb-1.5">
                      <span>{item.name}</span>
                      <span className="font-mono text-[var(--muted)]">{item.level}%</span>
                    </div>
                    <div className="h-[3px] bg-[var(--blueprint-line)]">
                      <div
                        className="h-full bg-[var(--amber)]"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
