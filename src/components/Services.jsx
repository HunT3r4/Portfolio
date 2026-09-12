import { LayoutGrid, Server, Gauge, Wrench } from 'lucide-react'

const SERVICES = [
  {
    icon: LayoutGrid,
    title: 'Product interfaces',
    desc: 'Design systems and front-end builds that stay consistent as a product grows past its first ten screens.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    desc: 'Schema design, REST/GraphQL services, and the background jobs that keep them from falling over.',
  },
  {
    icon: Gauge,
    title: 'Performance audits',
    desc: 'Finding what is actually slow — load time, queries, render blocking — and fixing the cause, not the symptom.',
  },
  {
    icon: Wrench,
    title: 'Legacy rebuilds',
    desc: 'Migrating aging codebases to something maintainable, one working slice at a time, without a big-bang rewrite.',
  },
]

function Services() {
  return (
    <section id="services" className="relative py-28 border-t border-[var(--blueprint-line)]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ink)] tracking-tight mb-14">
          What I do
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bp-panel p-7">
              <Icon size={22} className="text-[var(--amber)] mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-[var(--ink)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
