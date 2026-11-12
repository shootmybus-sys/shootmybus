import React, { Fragment, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, Clock } from "lucide-react";
import SeoHead from "../../Component/SeoHead/SeoHead";
import {
  SITE_SEO,
  buildBreadcrumbSchema,
  toAbsoluteUrl,
} from "../../config/seoConfig";
import { getBlogPostBySlug, getRelatedBlogPosts } from "../../data/blogPosts";
import NotFoundPage from "../NotFoundPage";
import "../Blog/BlogPage.css";
import "./BlogDetailPage.css";

function renderParagraphWithLinks(text) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    parts.push(
      <Link key={`${href}-${match.index}`} to={href} className="smb-article-inline-link">
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.map((part, idx) => <Fragment key={idx}>{part}</Fragment>);
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  const relatedPosts = useMemo(
    () => (post ? getRelatedBlogPosts(post.slug, 3) : []),
    [post]
  );

  const schemas = useMemo(() => {
    if (!post) return [];

    const articlePath = `/blog/${post.slug}`;
    const list = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        image: toAbsoluteUrl(post.imageSrc),
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
        inLanguage: "en-IN",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": toAbsoluteUrl(articlePath),
        },
        author: {
          "@type": "Organization",
          name: SITE_SEO.brandName,
          url: SITE_SEO.siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_SEO.brandName,
          logo: {
            "@type": "ImageObject",
            url: toAbsoluteUrl(SITE_SEO.logoUrl),
          },
        },
        keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: articlePath },
      ]),
    ];

    if (post.faqs && post.faqs.length > 0) {
      list.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
    }

    return list;
  }, [post]);

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SeoHead
        title={post.seoTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.imageSrc}
        ogType="article"
        schemas={schemas}
      />

      <article className="smb-article-page">
        <div className="smb-article-shell">
          <nav className="smb-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/blog">Blog</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{post.category}</span>
          </nav>

          <header className="smb-article-header">
            <div className="smb-article-meta">
              <span className="smb-category-pill">{post.category}</span>
              <span>
                <Calendar size={14} style={{ verticalAlign: "-2px", marginRight: 5 }} />
                {post.displayDate}
              </span>
              <span>
                <Clock size={14} style={{ verticalAlign: "-2px", marginRight: 5 }} />
                {post.readTime}
              </span>
            </div>
            <h1 className="smb-article-title">{post.title}</h1>
            <p className="smb-article-excerpt">{post.excerpt}</p>
          </header>

          <figure className="smb-article-cover">
            <img
              src={post.imageSrc}
              alt={post.imageAlt}
              width={post.imageWidth}
              height={post.imageHeight}
              loading="eager"
            />
          </figure>

          <div className="smb-article-body">
            {post.sections.map((section) => (
              <section key={section.heading} className="smb-article-section">
                <h2>{section.heading}</h2>

                {section.paragraphs?.map((paragraph, pIndex) => (
                  <p key={pIndex}>{renderParagraphWithLinks(paragraph)}</p>
                ))}

                {section.subheadings?.map((sub) => (
                  <div key={sub.title}>
                    <h3>{sub.title}</h3>
                    <p>{renderParagraphWithLinks(sub.text)}</p>
                  </div>
                ))}

                {section.list && (
                  <ul className="smb-article-list">
                    {section.list.map((item, iIndex) => (
                      <li key={iIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {post.faqs && post.faqs.length > 0 && (
              <section className="smb-article-faq" aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions</h2>
                <div className="smb-faq-list">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="smb-faq-item">
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="smb-article-cta" aria-label="Production inquiry">
            <div>
              <h2>Plan Your Next Bus Shoot with Shootmybus</h2>
              <p>
                From luxury sleeper reels to drone films and rolling highway photography across
                India.
              </p>
            </div>
            <div className="smb-article-cta-actions">
              <Link to="/services" className="smb-btn-secondary-light">
                Explore Services
              </Link>
              <Link to="/contact" className="smb-cta-pill-btn">
                Book Your Shoot <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </aside>

          <section className="smb-related-posts" aria-label="More articles">
            <div className="smb-related-heading">
              <h2>More from Shootmybus Blog</h2>
              <Link to="/blog" className="smb-read-link">
                <ArrowLeft size={16} aria-hidden="true" /> All Articles
              </Link>
            </div>

            <div className="smb-related-grid">
              {relatedPosts.map((rel) => (
                <article key={rel.slug} className="smb-blog-card">
                  <Link
                    to={`/blog/${rel.slug}`}
                    className="smb-blog-card-media"
                    aria-label={rel.title}
                  >
                    <img
                      src={rel.imageSrc}
                      alt={rel.imageAlt}
                      width={rel.imageWidth}
                      height={rel.imageHeight}
                      loading="lazy"
                    />
                  </Link>
                  <div className="smb-blog-card-body">
                    <div className="smb-post-meta">
                      <span className="smb-category-pill">{rel.category}</span>
                      <span>{rel.readTime}</span>
                    </div>
                    <h3 className="smb-blog-card-title">
                      <Link to={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <Link to={`/blog/${rel.slug}`} className="smb-read-link">
                      Read Guide <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

