import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon.jsx";
import FlavorCard from "../components/FlavorCard.jsx";
import { flavors } from "../data/siteContent.js";

export default function HomePage() {
  return (
    <>
      <section className="hero">
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
          <Link className="button button--primary" to="/flavors">
            Find your favorite <ArrowIcon />
          </Link>
          <div className="hero-note">
            <span className="hero-note-star" aria-hidden="true">✳</span>
            <span>Real ingredients.<br />Unreal little moments.</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=1300&q=90"
              alt="Scoops of ice cream with colorful sprinkles"
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

      <section className="flavors-section section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The current daydreams</p>
            <h2>Meet the <em>scoops.</em></h2>
          </div>
          <p className="section-intro">
            Little-batch favorites made for a happy pause in your day.
          </p>
        </div>
        <div className="flavor-grid flavor-grid--featured">
          {flavors.slice(0, 3).map((flavor, index) => (
            <FlavorCard flavor={flavor} index={index} key={flavor.name} />
          ))}
        </div>
        <Link className="text-link flavors-more-link" to="/flavors">
          See all our flavors <ArrowIcon />
        </Link>
      </section>

      <section className="story-section">
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
          <Link className="text-link" to="/about">
            A little more about us <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
