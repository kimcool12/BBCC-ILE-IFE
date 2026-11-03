import siteContent from "./data/siteContent.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Reveal from "./components/Reveal.jsx";
import Img from "./components/Img.jsx";
import Slideshow from "./components/Slideshow.jsx";

export default function App() {
  const c = siteContent; // short name for readability

  return (
    <>
      <Navbar name={c.churchName} logo={c.logo} links={c.nav} />
      <Hero {...c.hero} />

      {/* WHO ARE WE */}
      <section className="section vision">
        <Reveal className="vision__text">
          <h2>{c.about.title}</h2>
          {c.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <div className="vision__line" />

        <Reveal className="vision__logo" delay={200}>
          <img src={c.about.logo} alt={`${c.churchName} logo`} />
        </Reveal>
      </section>

      {/* THE TOP 1% */}
      <section className="section section--dark section--center">
        <Reveal>
          <h2>{c.top1.title}</h2>
        </Reveal>
        <div className="grid grid--people">
          {c.top1.categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 150}>
              <div className="category">
                <Slideshow images={cat.images} startDelay={i * 1300} />
                <h3>{cat.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <a
            className="btn"
            href={c.top1.buttonLink}
            target="_blank"
            rel="noreferrer"
          >
            {c.top1.buttonText}
          </a>
        </Reveal>
      </section>

      {/* ANNOUNCEMENTS */}
      {/* <section id="announcements" className="section section--cream">
        <Reveal><h2>{c.announcements.title}</h2></Reveal>
        <div className="grid grid--cards">
          {c.announcements.items.map((a, i) => (
            <Reveal key={a.title} delay={i * 150}>
              <article className="card card--text">
                <small>{a.date}</small>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* EVENTS */}
      {/* <section id="events" className="section section--dark section--center">
        <Reveal>
          <h2>{c.events.title}</h2>
        </Reveal>
        <div className="grid grid--cards">
          {c.events.cards.map((e, i) => (
            <Reveal key={e.title} delay={i * 120}>
              <a
                className="card"
                href={e.link}
                target="_blank"
                rel="noreferrer"
              >
                <Img src={e.image} className="img-box--wide" />
                <div className="card__body">
                  <h3>{e.title}</h3>
                  <p>{e.subtitle}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <a
            className="btn"
            href={c.events.viewAllLink}
            target="_blank"
            rel="noreferrer"
          >
            {c.events.viewAllText}
          </a>
        </Reveal>
      </section> */}

      {/* LEADERSHIP */}
      {/* <section id="leadership" className="section section--center">
        <Reveal><h2>{c.leadership.title}</h2></Reveal>
        <div className="grid grid--cards">
          {c.leadership.people.map((p, i) => (
            <Reveal key={p.name + i} delay={i * 150}>
              <div className="card">
                <Img src={p.image} className="img-box--tall" />
                <div className="card__body"><h3>{p.name}</h3><p>{p.role}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* PASTOR'S CORNER */}
      {/* <section id="pastor" className="section section--dark">
        <Reveal><h2 className="center">{c.pastor.title}</h2></Reveal>
        <Reveal>
          <div className="pastor">
            <Img src={c.pastor.image} className="img-box--tall" />
            <div><h3>{c.pastor.name}</h3><p>{c.pastor.message}</p></div>
          </div>
        </Reveal>
      </section> */}

      {/* CREED */}
      <section className="section section--center">
        <Reveal>
          <h2>{c.creed.title}</h2>
        </Reveal>
        <div className="creed">
          {c.creed.lines.map((line, i) => (
            <Reveal key={i} delay={(i % 6) * 60}>
              <p>{line}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section--dark section--center">
        <Reveal>
          <h2>{c.contact.title}</h2>
          <p>{c.contact.email}</p>
          <p>{c.contact.phone}</p>
          <p>{c.contact.address}</p>
        </Reveal>
      </section>

      <Footer name={c.churchName} socials={c.socials} />
    </>
  );
}
