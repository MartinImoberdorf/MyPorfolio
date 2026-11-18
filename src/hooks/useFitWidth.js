import { useEffect } from 'react'

// Scales the element's font size so its text fills the parent's full width.
export default function useFitWidth(ref) {
  useEffect(() => {
    const el = ref.current
    let active = true
    const fit = () => {
      if (!active) return
      el.style.fontSize = '100px'
      const k = el.parentElement.clientWidth / el.scrollWidth
      el.style.fontSize = `${100 * k}px`
    }
    fit()
    document.fonts.ready.then(fit)
    window.addEventListener('resize', fit)
    return () => {
      active = false
      window.removeEventListener('resize', fit)
    }
  }, [ref])
}
