import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Lime wireframe torus knot rendered inside the red hero tile.
export default function HeroScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    camera.position.z = 10
    const group = new THREE.Group()
    scene.add(group)

    const knotGeo = new THREE.TorusKnotGeometry(2, 0.62, 180, 22, 2, 3)
    const solidMat = new THREE.MeshStandardMaterial({ color: 0xb00500, roughness: 0.35, metalness: 0.2, flatShading: true })
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xc8ff00, wireframe: true, transparent: true, opacity: 0.55 })
    const solid = new THREE.Mesh(knotGeo, solidMat)
    const wire = new THREE.Mesh(knotGeo, wireMat)
    wire.scale.setScalar(1.01)
    group.add(solid, wire)

    const ringGeo = new THREE.TorusGeometry(3.6, 0.015, 8, 200)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = 1.2
    group.add(ring)

    const ballGeo = new THREE.SphereGeometry(0.16, 24, 24)
    const ballMat = new THREE.MeshBasicMaterial({ color: 0xc8ff00 })
    const ball = new THREE.Mesh(ballGeo, ballMat)
    ball.position.x = 3.6
    ring.add(ball)

    scene.add(new THREE.AmbientLight(0xffffff, 0.9))
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2)
    dirLight.position.set(4, 5, 6)
    scene.add(dirLight)
    const pointLight = new THREE.PointLight(0xc8ff00, 30, 20)
    pointLight.position.set(-4, -2, 4)
    scene.add(pointLight)

    const mouse = { x: 0, y: 0 }
    const onPointerMove = (e) => {
      mouse.x = e.clientX / window.innerWidth - 0.5
      mouse.y = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('pointermove', onPointerMove)

    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      const wide = w > 640
      group.position.set(wide ? 2.9 : 1.3, wide ? 0.3 : 1.9, 0)
      group.scale.setScalar(wide ? 0.78 : 0.55)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()

    const clock = new THREE.Clock()
    let frameId
    const loop = () => {
      const t = clock.getElapsedTime()
      group.rotation.y = t * 0.35 + mouse.x * 0.9
      group.rotation.x = t * 0.15 + mouse.y * 0.6
      ring.rotation.z = t * 0.8
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      ;[knotGeo, ringGeo, ballGeo, solidMat, wireMat, ringMat, ballMat].forEach((r) => r.dispose())
      renderer.dispose()
    }
  }, [])

  return <canvas id="scene" ref={canvasRef} aria-hidden="true" />
}
