import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Download, Menu, X } from 'lucide-react'

const LINKS = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'services', label: 'Services' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#101f35]/95 border-b border-[var(--blueprint-line)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link
          to="hero"
          smooth
          duration={500}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="w-8 h-8 border border-[var(--amber)] flex items-center justify-center font-mono text-sm text-[var(--amber)]">
            MR
          </span>
          <span className="font-display text-sm text-[var(--ink)] tracking-tight hidden sm:block">
            Mrigendra Rao
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-64}
              spy
              activeClass="text-[var(--amber)]"
              className="relative font-mono text-[13px] text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[var(--amber)] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-64}
            className="cursor-pointer border border-[var(--amber)] text-[var(--amber)] text-[13px] font-mono px-4 py-1.5 hover:bg-[var(--amber)] hover:text-[var(--blueprint)] transition-colors duration-200"
          >
            Let&apos;s talk
          </Link>
          <a
            href="/Mrigendra_Prasad_Rao_CV.docx"
            download
            className="inline-flex items-center gap-2 border border-[var(--blueprint-line)] text-[var(--ink)] text-[13px] font-mono px-4 py-1.5 hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors duration-200"
          >
            <Download size={14} />
            CV
          </a>
        </nav>

        <button
          className="md:hidden text-[var(--ink)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--blueprint-panel)] border-t border-[var(--blueprint-line)] px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-64}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Mrigendra_Prasad_Rao_CV.docx"
            download
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 font-mono text-sm text-[var(--amber)]"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
