import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center border border-[var(--blueprint-line)] bg-[var(--blueprint-panel)] text-[var(--amber)] hover:border-[var(--amber)] transition-colors duration-200"
    >
      <ArrowUp size={16} />
    </button>
  )
}

export default ScrollToTop
