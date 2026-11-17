import React from "react";
import PageIntro from "../components/PageIntro.jsx";
import { galleryImages } from "../data/siteContent.js";

export default function GalleryPage() {
  return (
    <div className="page-shell gallery-page">
      <PageIntro
        eyebrow="A few lovely moments"
        title={<>The world of <em>Frost &amp; Fable.</em></>}
        description="Real scoops, happy cones and little moments worth keeping."
      />
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <figure className={`gallery-image ${image.shape}`} key={image.caption}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
