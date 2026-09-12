import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    code: 'PRJ-01',
    title: 'Ledgerline',
    desc: 'A shared expense tracker for small teams, built to reconcile hundreds of transactions without spreadsheet drift.',
    stack: ['React', 'Node', 'PostgreSQL', 'Stripe'],
    url: '#',
  },
  {
    code: 'PRJ-02',
    title: 'Harborcast',
    desc: 'Real-time weather and tide dashboards for small marinas, pulling live sensor data into a single console.',
    stack: ['Next.js', 'WebSockets', 'Redis'],
    url: '#',
  },
  {
    code: 'PRJ-03',
    title: 'Fieldnote',
    desc: 'An offline-first inspection app for utility crews, syncing photo reports the moment a signal comes back.',
    stack: ['React Native', 'GraphQL', 'AWS'],
    url: '#',
  },
  {
    code: 'PRJ-04',
    title: 'Quietloop',
    desc: 'A focus-timer and task board for freelancers, with billing built directly into the session log.',
    stack: ['TypeScript', 'Express', 'SQLite'],
    url: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="relative py-28 border-t border-[var(--blueprint-line)]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--ink)] tracking-tight mb-14">
          Selected work
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <a
              key={p.code}
              href={p.url}
              className="bp-panel p-7 flex flex-col justify-between group hover:border-[var(--amber)] transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[11px] text-[var(--muted)]">{p.code}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--muted)] group-hover:text-[var(--amber)] transition-colors duration-200"
                  />
                </div>
                <h3 className="font-display text-xl text-[var(--ink)] mb-3">{p.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-[var(--amber)]/80 border-t border-[var(--blueprint-line)] pt-4">
                {p.stack.map((s) => (
                  <span key={s}>[{s}]</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
