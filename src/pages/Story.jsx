import Nav from '../components/Nav.jsx'

export default function Story() {
  return (
    <>
      <Nav current="story" />

      <main className="wrap">
        <header>
          <a href="/" className="back">← Back to home</a>
          <h1 className="display">My <span>story</span></h1>
        </header>

        <article>
          <p className="intro">In a few words, I will try to explain what was the beginning of everything...</p>

          <p>
            I can start by saying that I love video games; so when I was a child I played for hours and hours,
            especially with one famous football game. But sometimes this generated discussions or complaints with my
            parents because I never did anything else in my free time. In my defence, I was a good student that
            always had great grades at school.
          </p>

          <p>
            One day, I was in the middle of a game, when my dad appeared and sat behind me. I thought it would be to
            see me play and can show him how good I was at that game, but he said completely the opposite: &quot;with
            all the time you spend on those games you should have already learned how to program it, how to make it
            or even better&quot;, he got up and went away.
          </p>

          <p>
            One night, my dad&apos;s phrase was still in my head, so I decided to search on the internet, especially on
            YouTube, when I found a channel called La Geekipedia De Ernesto. There appeared my first programming
            language, Java, and I remember I only saw one video and then I went to sleep.
          </p>

          <p>
            Over time, I saw one video per day, and everything started to change when the time that I used to spend
            on video games started to use in learning programming. All the things I saw made me feel more and more
            passionate about this journey. Sometimes I can realize everything that I have learned and done, and
            I&apos;m really proud of this amazing change in my life.
          </p>

          <p>
            On other hand, I must highlight the dedication and talent of my mum to Maths; days and nights of doing
            maths exercises together. I remember when I was in primary school and the teacher taught us to divide,
            with a confusing mechanism. I didn&apos;t understand anything, so I came back home and explain to my mum.
            She had already taught to me multiplication tables, so we found a new and more efficient method to
            divide.
          </p>

          <p>So with these experiences, with Maths and Programming, I have decided to study Systems Engineering.</p>

          <div className="thanks">
            <h2 className="display">Thanks,<br />mom and dad!</h2>
            <time className="date display" dateTime="2019-11-02">2/11/2019</time>
          </div>
        </article>

        <footer>Martín José Imoberdorf</footer>
      </main>
    </>
  )
}
