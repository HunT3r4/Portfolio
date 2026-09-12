const STATS = [
  { value: '5+', label: 'Products shipped' },
  { value: '1', label: 'Years building' },
  { value: '3', label: 'Teams worked with' },
]

function About() {
  return (
    <section id="about" className="relative py-28 border-t border-[var(--blueprint-line)]">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--ink)] tracking-tight mb-6">
            About
          </h2>
          <div className="w-10 h-px bg-[var(--amber)] mb-8" />
          <div className="grid grid-cols-3 gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-[var(--amber)]">{s.value}</p>
                <p className="text-sm text-[var(--muted)] mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 text-[var(--muted)] leading-relaxed max-w-[62ch]">
          <p>
            I started out fixing WordPress themes for local businesses and got hooked on the
            moment code stops being an exercise and starts being something people actually use.
            That's still what I'm chasing — the point where an interface disappears and the
            product just works.
          </p>
          <p>
            Most of my time is spent in React and Node, but I care more about the decisions
            underneath the framework: how data moves through a system, where it can break, and
            what happens when ten thousand people show up at once instead of ten. I write code
            like someone else has to read it tomorrow, because someone usually does.
          </p>
          <p>
            Outside of client work I maintain a couple of open-source tooling libraries and spend
            an unreasonable amount of time re-soldering a mechanical keyboard that was already
            fine.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
