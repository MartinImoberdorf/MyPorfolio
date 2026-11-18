import { useEffect } from 'react'

// Adds the "in" class to every .reveal element inside the container once it scrolls into view.
export default function useReveal(containerRef) {
  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 60}ms`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [containerRef])
}
