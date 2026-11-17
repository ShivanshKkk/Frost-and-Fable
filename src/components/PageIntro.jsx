import React from "react";

export default function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-intro-description">{description}</p>}
    </header>
  );
}
