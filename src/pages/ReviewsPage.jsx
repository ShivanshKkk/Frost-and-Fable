import React from "react";
import PageIntro from "../components/PageIntro.jsx";
import { contactEmail, reviews } from "../data/siteContent.js";

export default function ReviewsPage() {
  return (
    <div className="page-shell reviews-page">
      <PageIntro
        eyebrow="Kind words, good scoops"
        title={<>The scoop <em>notes.</em></>}
        description="A few sample review drafts for the page layout. These are not verified customer testimonials."
      />
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <span className="sample-review-badge">Sample review</span>
            <p className="review-stars" aria-label="Sample five-star rating">★★★★★</p>
            <blockquote>“{review.quote}”</blockquote>
            <p className="review-name">{review.name}</p>
          </article>
        ))}
      </div>
      <p className="review-invite">
        Have a scoop note of your own?{" "}
        <a href={`mailto:${contactEmail}?subject=Frost%20%26%20Fable%20review`}>
          Send us your feedback.
        </a>
      </p>
    </div>
  );
}
