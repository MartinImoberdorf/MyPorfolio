import { useRef } from 'react'
import Nav from '../components/Nav.jsx'
import HeroScene from '../components/HeroScene.jsx'
import useReveal from '../hooks/useReveal.js'
import useTilt from '../hooks/useTilt.js'
import useFitWidth from '../hooks/useFitWidth.js'
import { GITHUB_URL, LINKEDIN_URL } from '../data/links.js'
import me from '../assets/me.webp'

const MARQUEE = ['Java', 'Spring', 'Docker', 'PostgreSQL', 'Python', 'Bash', 'Git', 'JavaScript']
const STACK_HOT = ['Java', 'Spring']
const STACK = ['Docker', 'PostgreSQL', 'Git', 'Bash', 'Python', 'HTML5', 'CSS3', 'JavaScript']
const SECURITY_STEPS = [
  'Networking, Linux & scripting',
  'Reconnaissance & enumeration',
  'Web & system exploitation',
  'Security applied to the code I write',
]
const LABORA_URL = 'https://uselabora.vercel.app/'
const LABORA_PDF = 'https://www.institucional.frc.utn.edu.ar/SISTEMAS/NOTICIAS/PF/PROYECTOS/BFC_5k2g10_labora_1.pdf'

const external = { target: '_blank', rel: 'noopener' }

function Arrow() {
  return <span className="go" aria-hidden="true">→</span>
}

export default function Home() {
  const mainRef = useRef(null)
  const nameRef = useRef(null)
  useReveal(mainRef)
  useTilt(mainRef)
  useFitWidth(nameRef)

  return (
    <>
      <Nav current="home" />

      <main className="wrap" id="top" ref={mainRef}>
        <div className="meganame">
          <h1 className="display" ref={nameRef}>Martín <span>Imoberdorf</span></h1>
        </div>

        <div className="bento" id="about">
          <section className="tile t-red hero reveal" aria-label="Intro">
            <HeroScene />
            <h2 className="display">Build.<br />Break.<br /><em>Secure.</em></h2>
            <div className="hero-foot">
              <p>I write software with a builder&apos;s mindset and an attacker&apos;s eye.</p>
              <a href="#work" className="pill pill-lime">See my work →</a>
            </div>
          </section>

          <section className="tile about reveal">
            <img className="avatar" src={me} alt="Martín Imoberdorf" width="96" height="96" />
            <div>
              <span className="label mono">About me</span>
              <h3 className="display">Advanced Information Systems Engineering Student</h3>
              <p>
                Studying at UTN FRC. I work with Java and Spring, care about clean architecture, and treat
                security as part of the design from day one.
              </p>
            </div>
          </section>

          <section className="tile t-lime status reveal">
            <span className="label mono"><i className="blink" />&nbsp; Status</span>
            <div>
              <div className="display big">Open</div>
              <strong>to collaborate on projects of any kind</strong>
            </div>
          </section>

          <a className="tile t-ink gh reveal" href={GITHUB_URL} {...external}>
            <span className="label mono">GitHub</span>
            <div><div className="display big">26</div><small>public repositories →</small></div>
          </a>

          <div className="marquee reveal" aria-hidden="true">
            <div className="track display">
              {[...MARQUEE, ...MARQUEE].map((item, i) => <span key={i}>{item}</span>)}
            </div>
          </div>

          <section className="tile stack reveal">
            <div>
              <h3 className="display">My <span>stack</span></h3>
              <p style={{ fontSize: 18, fontWeight: 500, color: 'var(--muted)', maxWidth: 460 }}>
                Java and Spring for the core, Docker and PostgreSQL around it, Bash and Python for automation.
              </p>
            </div>
            <div className="chips">
              {STACK_HOT.map((s) => <span key={s} className="chip hot">{s}</span>)}
              {STACK.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
          </section>

          <section className="tile t-ink sec reveal">
            <span className="label mono" style={{ color: 'var(--lime)', opacity: 1 }}>Offensive security</span>
            <h3 className="display">eJPT <span style={{ color: 'var(--lime)' }}>certified</span></h3>
            <span className="badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              Junior Penetration Tester
            </span>
            <div className="steps">
              {SECURITY_STEPS.map((step) => <div key={step} className="done"><i>✓</i>{step}</div>)}
            </div>
          </section>
        </div>

        <div className="head" id="work">
          <h2 className="display">Selected <span>work</span></h2>
        </div>

        <div className="bento">
          <a className="tile t-red proj p1 reveal" href="https://stack-sis.vercel.app/" {...external}>
            <span className="pnum display" aria-hidden="true">01</span>
            <div className="ptop" style={{ justifyContent: 'flex-end' }}><Arrow /></div>
            <div>
              <div className="display stat">1,500+</div>
              <div className="stat-label">Registered users</div>
              <h3 className="display">StackSis</h3>
              <p>Academic tracker for Systems Engineering students at UTN FRC. Manages course progress, exams and GPA.</p>
            </div>
          </a>

          <article className="tile t-lime proj p2 reveal">
            <div className="ptop">
              <span className="tag mono">Team project</span>
              <a className="go" href={LABORA_URL} {...external} aria-label="Open Labora">→</a>
            </div>
            <div>
              <h3 className="display">Labora</h3>
              <p>
                Find the nearest workspace or study space, with search, booking and ratings in one place. Smart
                matching pairs the user&apos;s technical profile with the real characteristics of each space.
              </p>
              <div className="plinks">
                <a href={LABORA_URL} {...external}>Open app ↗</a>
                <a className="alt" href={LABORA_PDF} {...external}>Read the project (PDF) ↗</a>
              </div>
            </div>
          </article>

          <a className="tile proj p3 reveal" href="https://github.com/MartinImoberdorf/Microservice-Architecture-Video-Streaming-App" {...external}>
            <div className="ptop"><span className="tag mono" style={{ color: 'var(--red)' }}>Java · Microservices</span><Arrow /></div>
            <div>
              <h3 className="display">Video streaming microservices</h3>
              <p>A video streaming app built as a set of independent microservices.</p>
              <div className="flow dark mono">
                <span>Client</span><em>→</em><span>API Gateway</span><em>→</em><span>[SERVICE A]</span><em>→</em><span>[SERVICE B]</span>
              </div>
            </div>
          </a>

          <a className="tile t-ink proj p4 reveal" href="https://github.com/MartinImoberdorf/ALL-IN-ONE" {...external}>
            <div className="ptop"><span className="tag mono" style={{ color: 'var(--lime)' }}>Java</span><Arrow /></div>
            <div>
              <h3 className="display">All-in-one</h3>
              <p>A Java project that gathers several solutions in a single repository.</p>
            </div>
          </a>

          <a className="tile proj p5 reveal" href="https://github.com/MartinImoberdorf/ForumCommunity-with-Flask" {...external}>
            <div className="ptop"><span className="tag mono" style={{ color: 'var(--red)' }}>Flask · HTML</span><Arrow /></div>
            <div>
              <h3 className="display">Forum community</h3>
              <p>A community forum built with Flask.</p>
            </div>
          </a>

          <a className="tile t-red proj p6 reveal" href="https://github.com/MartinImoberdorf/An-Easy-Way-to-Master-Phrasal-Verbs" {...external}>
            <div className="ptop"><span className="tag mono">JavaScript</span><Arrow /></div>
            <div>
              <h3 className="display">Master phrasal verbs</h3>
              <p>A web app to practise English phrasal verbs.</p>
            </div>
          </a>
        </div>

        <div className="bento" style={{ marginTop: 90 }} id="contact">
          <section className="tile t-red contact reveal">
            <div>
              <h2 className="display">Let&apos;s build<br />something <em>secure.</em></h2>
            </div>
            <div className="links">
              <a href={LINKEDIN_URL} {...external}>LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={GITHUB_URL} {...external}>GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </section>
        </div>

        <footer className="mono"><span>Martín José Imoberdorf</span></footer>
      </main>
    </>
  )
}
