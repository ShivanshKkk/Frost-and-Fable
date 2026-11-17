import React from "react";

export default function FlavorCard({ flavor, index }) {
  return (
    <article className={`flavor-card flavor-card--${flavor.color}`}>
      <div className="flavor-image-wrap">
        <img src={flavor.image} alt={flavor.imageAlt} loading="lazy" />
        <span className="flavor-number">0{index + 1}</span>
      </div>
      <div className="flavor-details">
        <div>
          <h2>{flavor.name}</h2>
          <p>{flavor.description}</p>
          <ul className="flavor-variants">
            {flavor.variants.map((variant) => (
              <li key={variant}>{variant}</li>
            ))}
          </ul>
        </div>
        <span className="flavor-heart" aria-hidden="true">♡</span>
      </div>
    </article>
  );
}
