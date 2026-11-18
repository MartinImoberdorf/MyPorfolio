import { useEffect } from 'react'

// Subtle 3D tilt that follows the pointer on every .tile inside the container.
export default function useTilt(containerRef) {
  useEffect(() => {
    const tiles = [...containerRef.current.querySelectorAll('.tile')]
    const cleanups = tiles.map((tile) => {
      const onMove = (e) => {
        const r = tile.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        tile.style.transform = `perspective(1000px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`
      }
      const onLeave = () => {
        tile.style.transform = ''
      }
      tile.addEventListener('pointermove', onMove)
      tile.addEventListener('pointerleave', onLeave)
      return () => {
        tile.removeEventListener('pointermove', onMove)
        tile.removeEventListener('pointerleave', onLeave)
      }
    })
    return () => cleanups.forEach((fn) => fn())
  }, [containerRef])
}
