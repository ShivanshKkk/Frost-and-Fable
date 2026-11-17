import React from "react";
import PageIntro from "../components/PageIntro.jsx";
import FlavorCard from "../components/FlavorCard.jsx";
import { flavors } from "../data/siteContent.js";

export default function FlavorsPage() {
  return (
    <div className="page-shell flavors-page">
      <PageIntro
        eyebrow="The flavor catalogue"
        title={<>Find your next <em>favorite.</em></>}
        description="A little something for every kind of daydream. Ask us about the current batch and ingredient details."
      />
      <p className="image-note">Flavor images are illustrative; flavors and availability may vary by batch.</p>
      <div className="flavor-grid flavor-grid--catalogue">
        {flavors.map((flavor, index) => (
          <FlavorCard flavor={flavor} index={index} key={flavor.name} />
        ))}
      </div>
    </div>
  );
}
