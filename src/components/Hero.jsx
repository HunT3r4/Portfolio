import { Link } from 'react-scroll'
import { ArrowUpRight, Download } from 'lucide-react'

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bp-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full opacity-40" preserveAspectRatio="none">
          <line x1="0" y1="120" x2="100%" y2="120" stroke="var(--blueprint-line)" strokeWidth="1"
            className="bp-draw" style={{ '--len': 1600 }} />
          <line x1="0" y1="0" x2="0" y2="100%" stroke="var(--blueprint-line)" strokeWidth="1"
            className="bp-draw" style={{ '--len': 1200, animationDelay: '0.2s' }} />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 w-full grid md:grid-cols-[1.4fr_1fr] gap-16 items-end">
        <div className="bp-fade">
          <h1 className="font-display text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl text-[var(--ink)] tracking-tight">
            Mrigendra Rao
          </h1>
          <p className="font-display text-2xl md:text-3xl text-[var(--muted)] mt-4">
            builds full-stack products that hold up under real traffic.
          </p>
          <p className="text-[var(--muted)] mt-6 max-w-md leading-relaxed">
            One years designing, wiring up and shipping web applications —
            from the database schema to the pixel on screen. Based in Nepal, working
            with teams everywhere.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-64}
              className="cursor-pointer inline-flex items-center gap-2 bg-[var(--amber)] text-[var(--blueprint)] font-mono text-[13px] px-5 py-3 hover:bg-[var(--amber-hover)] transition-colors duration-200"
            >
              View the work
              <ArrowUpRight size={15} />
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-64}
              className="cursor-pointer font-mono text-[13px] text-[var(--ink)] border-b border-[var(--blueprint-line)] hover:border-[var(--amber)] pb-0.5 transition-colors duration-200"
            >
              Start a project
            </Link>
            <a
              href="/Mrigendra_Prasad_Rao_CV.docx"
              download
              className="inline-flex items-center gap-2 font-mono text-[13px] text-[var(--ink)] border-b border-[var(--blueprint-line)] hover:border-[var(--amber)] hover:text-[var(--amber)] pb-0.5 transition-colors duration-200"
            >
              Download CV
              <Download size={14} />
            </a>
          </div>
        </div>

        {/* Title block, styled after a drafting sheet's info box */}
        <div className="bp-panel p-5 font-mono text-[12px] text-[var(--muted)] hidden md:block">
          <div className="grid grid-cols-2 gap-y-3">
            <span className="text-[var(--ink)]/60">ROLE</span>
            <span className="text-[var(--ink)]">Full-Stack Developer</span>
            <span className="text-[var(--ink)]/60">LOCATION</span>
            <span className="text-[var(--ink)]">Kathmandu, Nepal</span>
            <span className="text-[var(--ink)]/60">EXPERIENCE</span>
            <span className="text-[var(--ink)]">1 years</span>
            <span className="text-[var(--ink)]/60">STACK</span>
            <span className="text-[var(--ink)]">Javascript · React · Php</span>
            <span className="text-[var(--ink)]/60">STATUS</span>
            <span className="text-[var(--amber)] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber)] inline-block" />
              Open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
