import React from "react";
import PageIntro from "../components/PageIntro.jsx";
import { contactEmail } from "../data/siteContent.js";

const steps = [
  {
    number: "01",
    title: "Choose with care",
    copy: "We start with ingredients chosen for their flavor and how well they belong in the recipe.",
  },
  {
    number: "02",
    title: "Find the balance",
    copy: "Each recipe is shaped around a clear flavor, a lovely texture and just the right amount of sweetness.",
  },
  {
    number: "03",
    title: "Make the batch",
    copy: "We take our time with the mixing and churning so each batch gets the attention it deserves.",
  },
  {
    number: "04",
    title: "Share the good part",
    copy: "Then comes the best step: scooping it up and sharing it with you.",
  },
];

export default function ProcessPage() {
  return (
    <div className="page-shell process-page">
      <PageIntro
        eyebrow="Our process"
        title={<>A little care in <em>every scoop.</em></>}
        description="Ingredients and craftsmanship come together in a simple idea: make dessert thoughtfully, then make it joyful."
      />
      <section className="process-feature">
        <div className="process-feature-copy">
          <p className="eyebrow">Our approach</p>
          <h2>Good things take a <em>little time.</em></h2>
          <p>
            Ice cream is simple at heart. We give each recipe room to find its
            balance, pay attention to the details, and keep the focus on the
            flavor in your spoon.
          </p>
        </div>
        <div className="process-feature-image">
          <img
            src="https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=1200&q=90"
            alt="Freshly made ice cream in a shop display"
            loading="lazy"
          />
        </div>
      </section>
      <section className="process-steps" aria-label="How we make our ice cream">
        {steps.map((step) => (
          <article className="process-step" key={step.number}>
            <span className="process-step-number">{step.number}</span>
            <h2>{step.title}</h2>
            <p>{step.copy}</p>
          </article>
        ))}
      </section>
      <p className="ingredient-note">
        Need ingredient or allergen information for a particular flavor?{" "}
        <a href={`mailto:${contactEmail}`}>Ask us directly.</a>
      </p>
    </div>
  );
}
