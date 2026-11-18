import me from '../assets/me.webp'
import { GITHUB_URL } from '../data/links.js'

// On the home page section links are plain anchors; on other pages they point back to home.
export default function Nav({ current }) {
  const isHome = current === 'home'
  const home = isHome ? '' : '/'

  return (
    <nav aria-label="Main">
      <div className="wrap">
        <a href={isHome ? '#top' : '/'} className="logo">
          <img src={me} alt="" width="44" height="44" />
          MARTÍN IMOBERDORF
        </a>
        <ul>
          <li><a href={`${home}#about`}>About</a></li>
          <li><a href={`${home}#work`}>Work</a></li>
          <li>
            <a href="/story.html" aria-current={current === 'story' ? 'page' : undefined}>
              My story
            </a>
          </li>
          <li><a href={`${home}#contact`}>Contact</a></li>
        </ul>
        <a href={GITHUB_URL} target="_blank" rel="noopener" className="pill pill-ink">
          GitHub ↗
        </a>
      </div>
    </nav>
  )
}
