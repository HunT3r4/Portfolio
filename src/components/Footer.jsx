function Footer() {
  return (
    <footer className="border-t border-[var(--blueprint-line)] py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[var(--muted)]">
        <p>© {new Date().getFullYear()} Mrigendra Rao. Built by love.</p>
        
      </div>
    </footer>
  )
}

export default Footer
