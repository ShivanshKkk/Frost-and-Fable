import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="not-found-page">
      <p className="eyebrow">That page wandered off</p>
      <h1>Let’s get you back to the <em>good stuff.</em></h1>
      <Link className="button button--primary" to="/">Back to home</Link>
    </section>
  );
}
