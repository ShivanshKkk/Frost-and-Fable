import React from "react";

const flavors = [
  {
    name: "Strawberry daydream",
    note: "Roasted berries · vanilla bean",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=85",
    className: "flavor-card--pink",
  },
  {
    name: "Honey moon",
    note: "Wildflower honey · toasted oat",
    image:
      "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=900&q=85",
    className: "flavor-card--yellow",
  },
  {
    name: "Midnight brownie",
    note: "Dark chocolate · brownie bits",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85",
    className: "flavor-card--blue",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Frost and Fable home">
        frost <span>&amp;</span> fable
        <span className="wordmark-sparkle" aria-hidden="true">✳</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#flavors">Our flavors</a>
        <a href="#story">Our little story</a>
      </nav>
      <a className="header-link" href="#visit">
        Come say hello <ArrowIcon />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span aria-hidden="true">✳</span> A happier kind of homemade</p>
        <h1>
          A little scoop
          <br />
          of <em>wonder.</em>
        </h1>
        <p className="hero-description">
          Small-batch ice cream for big daydreams. Made slowly, scooped
          generously, and always with a little bit of magic.
        </p>
        <a className="button button--primary" href="#flavors">
          Find your favorite <ArrowIcon />
        </a>
        <div className="hero-note">
          <span className="hero-note-star" aria-hidden="true">✳</span>
          <span>Real ingredients.<br />Unreal little moments.</span>
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=1300&q=90"
            alt="Colorful scoops of ice cream ready to enjoy"
          />
        </div>
        <div className="hero-sticker">
          <span>made with</span>
          <strong>a little<br />wonder</strong>
          <span aria-hidden="true">♡</span>
        </div>
        <span className="hero-doodle hero-doodle--one" aria-hidden="true">✳</span>
        <span className="hero-doodle hero-doodle--two" aria-hidden="true">✦</span>
      </div>
    </section>
  );
}

function Flavors() {
  return (
    <section className="flavors-section section-wrap" id="flavors">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The current daydreams</p>
          <h2>Meet the <em>scoops.</em></h2>
        </div>
        <p className="section-intro">
          Made in little batches, with ingredients that have a story of their own.
        </p>
      </div>
      <div className="flavor-grid">
        {flavors.map((flavor, index) => (
          <article className={`flavor-card ${flavor.className}`} key={flavor.name}>
            <div className="flavor-image-wrap">
              <img src={flavor.image} alt="" loading="lazy" />
              <span className="flavor-number">0{index + 1}</span>
            </div>
            <div className="flavor-details">
              <div>
                <h3>{flavor.name}</h3>
                <p>{flavor.note}</p>
              </div>
              <span className="flavor-heart" aria-hidden="true">♡</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story-section" id="story">
      <div className="story-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=1100&q=85"
          alt="Rows of colorful ice cream flavors in a shop display"
          loading="lazy"
        />
      </div>
      <div className="story-copy">
        <p className="eyebrow">A small scoop, a big story</p>
        <h2>Made for the<br /><em>in-between</em> moments.</h2>
        <p>
          The walk home on a sunny day. One more story before bed. That first
          bite that makes everyone at the table go quiet. That’s our kind of
          magic.
        </p>
        <a className="text-link" href="#visit">
          A little more about us <ArrowIcon />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="visit">
      <div className="footer-main">
        <div>
          <p className="eyebrow">There’s always room</p>
          <h2>Save us a <em>scoop.</em></h2>
        </div>
        <a className="button button--light" href="mailto:hello@frostandfable.com">
          Say hello <ArrowIcon />
        </a>
      </div>
      <div className="footer-bottom">
        <a className="wordmark wordmark--footer" href="#home">
          frost <span>&amp;</span> fable<span className="wordmark-sparkle" aria-hidden="true">✳</span>
        </a>
        <p>Little batches. Lovely days. © {new Date().getFullYear()} Frost &amp; Fable.</p>
        <a href="#home" className="back-to-top">Back to the top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Flavors />
        <Story />
      </main>
      <Footer />
    </>
  );
}
