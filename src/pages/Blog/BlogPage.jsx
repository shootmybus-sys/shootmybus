import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronRight, Clock } from "lucide-react";
import SeoHead from "../../Component/SeoHead/SeoHead";
import {
  PAGE_SEO,
  SITE_SEO,
  buildBreadcrumbSchema,
  toAbsoluteUrl,
} from "../../config/seoConfig";
import { BLOG_POSTS } from "../../data/blogPosts";
import "./BlogPage.css";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));
    return ["All", ...unique];
  }, []);

  const featuredPost = useMemo(
    () => BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0],
    []
  );

  const visibleGridPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return BLOG_POSTS.filter((post) => post.slug !== featuredPost.slug);
    }
    return BLOG_POSTS.filter((post) => post.category === selectedCategory);
  }, [selectedCategory, featuredPost]);

  const blogSchema = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `${SITE_SEO.brandName} Blog`,
        url: toAbsoluteUrl("/blog"),
        description: PAGE_SEO.blog.description,
        inLanguage: "en-IN",
        publisher: {
          "@type": "Organization",
          name: SITE_SEO.brandName,
          logo: {
            "@type": "ImageObject",
            url: toAbsoluteUrl(SITE_SEO.logoUrl),
          },
        },
        blogPost: BLOG_POSTS.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: toAbsoluteUrl(`/blog/${post.slug}`),
          datePublished: post.publishedDate,
          image: toAbsoluteUrl(post.imageSrc),
        })),
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
    []
  );

  return (
    <>
      <SeoHead
        title={PAGE_SEO.blog.title}
        description={PAGE_SEO.blog.description}
        path={PAGE_SEO.blog.path}
        image={PAGE_SEO.blog.image}
        schemas={blogSchema}
      />

      <main className="smb-blog-page">
        <div className="smb-blog-container">
          <nav className="smb-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Blog</span>
          </nav>

          <header className="smb-blog-header">
            <span className="smb-blog-eyebrow">SHOOTMYBUS JOURNAL</span>
            <h1 className="smb-blog-title">
              Bus Photography, Cinematic Reels &amp; Fleet Visual Guides
            </h1>
            <p className="smb-blog-subtitle">
              Practical insights for Indian intercity operators, tour fleets, and coach
              bodybuilders looking to showcase luxury coaches with clarity and authority.
            </p>
          </header>

          <div className="smb-blog-filters" role="group" aria-label="Filter articles by topic">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`smb-filter-btn ${selectedCategory === category ? "is-active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {selectedCategory === "All" && featuredPost && (
            <article className="smb-featured-card">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="smb-featured-media"
                aria-label={featuredPost.title}
              >
                <img
                  src={featuredPost.imageSrc}
                  alt={featuredPost.imageAlt}
                  width={featuredPost.imageWidth}
                  height={featuredPost.imageHeight}
                  loading="eager"
                />
              </Link>
              <div className="smb-featured-body">
                <div className="smb-post-meta">
                  <span className="smb-category-pill">{featuredPost.category}</span>
                  <span>
                    <Calendar size={13} style={{ verticalAlign: "-2px", marginRight: 4 }} />
                    {featuredPost.displayDate}
                  </span>
                  <span>
                    <Clock size={13} style={{ verticalAlign: "-2px", marginRight: 4 }} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="smb-featured-heading">
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="smb-featured-excerpt">{featuredPost.excerpt}</p>
                <Link to={`/blog/${featuredPost.slug}`} className="smb-read-link">
                  Read Full Guide <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          )}

          <section aria-label="Blog articles">
            <div className="smb-blog-grid">
              {visibleGridPosts.map((post) => (
                <article key={post.slug} className="smb-blog-card">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="smb-blog-card-media"
                    aria-label={post.title}
                  >
                    <img
                      src={post.imageSrc}
                      alt={post.imageAlt}
                      width={post.imageWidth}
                      height={post.imageHeight}
                      loading="lazy"
                    />
                  </Link>
                  <div className="smb-blog-card-body">
                    <div className="smb-post-meta">
                      <span className="smb-category-pill">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="smb-blog-card-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="smb-blog-card-excerpt">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="smb-read-link">
                      Read Article <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="smb-blog-cta-box" aria-label="Book a shoot">
            <div>
              <h2>Ready to Capture Your Fleet Across India?</h2>
              <p>
                Explore our tailored bus photography, cinematic reels, drone coverage, and highway
                running-shot services designed specifically for luxury coaches.
              </p>
            </div>
            <Link to="/contact" className="smb-cta-pill-btn">
              Book Your Shoot <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

