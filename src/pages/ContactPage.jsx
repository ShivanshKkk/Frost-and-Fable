import React from "react";
import PageIntro from "../components/PageIntro.jsx";
import { contactEmail, faqs, locationUrl } from "../data/siteContent.js";
import ArrowIcon from "../components/ArrowIcon.jsx";

export default function ContactPage() {
  return (
    <div className="page-shell contact-page">
      <PageIntro
        eyebrow="Contact & enquiries"
        title={<>Let’s make room for <em>one more scoop.</em></>}
        description="Questions about flavors, ingredients, events or just want to say hello? We’d love to hear from you."
      />
      <section className="contact-options">
        <article className="contact-card contact-card--email">
          <span className="contact-card-icon" aria-hidden="true">✉</span>
          <p className="eyebrow">Email us</p>
          <h2>Let’s talk <em>ice cream.</em></h2>
          <p>For orders, events, ingredient questions and everything in between.</p>
          <a className="button button--primary" href={`mailto:${contactEmail}`}>
            {contactEmail} <ArrowIcon />
          </a>
        </article>
        <article className="contact-card contact-card--location">
          <span className="contact-card-icon" aria-hidden="true">⌖</span>
          <p className="eyebrow">Location &amp; directions</p>
          <h2>Come find <em>your scoop.</em></h2>
          <p>Open the map link for location details and directions.</p>
          <a
            className="button button--light"
            href={locationUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open location <ArrowIcon />
          </a>
        </article>
      </section>
      <section className="faq-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few quick answers</p>
            <h2>Good <em>questions.</em></h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
