import React from "react";
import PageIntro from "../components/PageIntro.jsx";

const values = [
  {
    title: "Ingredients with a purpose",
    copy: "We want every ingredient to earn its place in the recipe—and to be easy to ask us about.",
  },
  {
    title: "Thoughtful, not overcomplicated",
    copy: "Good dessert doesn't need a long list of extras. We focus on flavor, texture and care.",
  },
  {
    title: "A scoop worth sharing",
    copy: "The best part is the little moment around the bowl: a pause, a laugh, one more bite.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell about-page">
      <PageIntro
        eyebrow="Our little story"
        title={<>A better kind of <em>daydream.</em></>}
        description="Frost & Fable began with a simple question: what if dessert could feel a little more thoughtful?"
      />
      <section className="about-story">
        <div className="about-photo">
          <img
            src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1300&q=90"
            alt="A freshly scooped ice cream cone"
            loading="lazy"
          />
          <span className="photo-caption">A little joy, one scoop at a time</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Why Frost &amp; Fable</p>
          <h2>We wanted a scoop that felt <em>closer to the good stuff.</em></h2>
          <p>
            Our team was disappointed by desserts that leaned on palm oil and
            ingredients that felt far removed from the foods we knew. We
            imagined another option: ice cream made with familiar ingredients,
            thoughtful recipes and care in every batch.
          </p>
          <p>
            That idea became Frost &amp; Fable. We’re here for honest flavor,
            small moments and the kind of treat you’re happy to share. No big
            health promises—just a little more thought behind every scoop.
          </p>
        </div>
      </section>
      <section className="values-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The things we scoop by</p>
            <h2>Our <em>philosophy.</em></h2>
          </div>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <article className="value-card" key={value.title}>
              <span className="value-number">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
