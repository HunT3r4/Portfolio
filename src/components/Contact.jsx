import { Mail } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const CHANNELS = [
  { icon: Mail, label: 'mirgendra5092@gmail.com', href: 'mailto:mirgendra5092@gmail.com' },
  { icon: FiGithub, label: 'github.com/HunT3r4', href: 'https://github.com/HunT3r4' },
  { icon: FiLinkedin, label: 'linkedin.com/in/mrigendra-rao-2b2a71302/', href: 'https://www.linkedin.com/in/mrigendra-rao-2b2a71302/' },
]

function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-[var(--blueprint-line)]">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.2fr_1fr] gap-14 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-5xl text-[var(--ink)] tracking-tight leading-tight">
            Have something worth building?
          </h2>
          <p className="text-[var(--muted)] mt-5 max-w-md leading-relaxed">
            I take on a small number of projects at a time, so I read every message myself.
            Tell me what you're working on and I'll reply within a couple of days.
          </p>
          <a
            href="mailto:mirgendra5092@gmail.com"
            className="inline-flex items-center gap-2 mt-8 bg-[var(--amber)] text-[var(--blueprint)] font-mono text-[13px] px-6 py-3.5 hover:bg-[var(--amber-hover)] transition-colors duration-200"
          >
            Send an email
          </a>
        </div>

        <div className="bp-panel p-6">
          <p className="font-mono text-[11px] text-[var(--muted)] mb-5 pb-3 border-b border-[var(--blueprint-line)]">
            Reach me directly
          </p>
          <ul className="space-y-4">
            {CHANNELS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-3 text-sm text-[var(--ink)] hover:text-[var(--amber)] transition-colors duration-200"
                >
                  <Icon size={16} className="text-[var(--amber)]" strokeWidth={1.5} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
