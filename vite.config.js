import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { PAGE_SEO, SITE_SEO, toAbsoluteUrl } from './src/config/seoConfig.js'
import { BLOG_POSTS } from './src/data/blogPosts.js'

function escapeHtmlAttr(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function replaceMetaContent(html, selectorAttr, selectorVal, content) {
  const escaped = escapeHtmlAttr(content)
  const regex = new RegExp(
    `(<meta\\s+[^>]*${selectorAttr}="${selectorVal}"[^>]*content=")[^"]*("[^>]*>)`,
    'i'
  )
  if (regex.test(html)) {
    return html.replace(regex, (_match, p1, p2) => `${p1}${escaped}${p2}`)
  }
  return html
}

function applyRouteSeoToHtml(templateHtml, seo) {
  const canonicalUrl = toAbsoluteUrl(seo.path)
  const imageUrl = toAbsoluteUrl(seo.image || SITE_SEO.defaultImage)
  const imageAlt = seo.imageAlt || SITE_SEO.defaultImageAlt

  let html = templateHtml.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtmlAttr(seo.title)}</title>`
  )
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    () => `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />`
  )
  html = replaceMetaContent(html, 'name', 'description', seo.description)
  html = replaceMetaContent(html, 'property', 'og:type', seo.ogType || 'website')
  html = replaceMetaContent(html, 'property', 'og:title', seo.title)
  html = replaceMetaContent(html, 'property', 'og:description', seo.description)
  html = replaceMetaContent(html, 'property', 'og:url', canonicalUrl)
  html = replaceMetaContent(html, 'property', 'og:image', imageUrl)
  html = replaceMetaContent(html, 'property', 'og:image:alt', imageAlt)
  html = replaceMetaContent(html, 'name', 'twitter:title', seo.title)
  html = replaceMetaContent(html, 'name', 'twitter:description', seo.description)
  html = replaceMetaContent(html, 'name', 'twitter:image', imageUrl)
  html = replaceMetaContent(html, 'name', 'twitter:image:alt', imageAlt)
  return html
}

function generateRouteSocialHtmlPlugin() {
  return {
    name: 'shootmybus-route-social-html',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist')
      const baseHtmlPath = path.join(distDir, 'index.html')
      if (!fs.existsSync(baseHtmlPath)) return

      const templateHtml = fs.readFileSync(baseHtmlPath, 'utf8')
      const routes = [
        PAGE_SEO.services,
        PAGE_SEO.portfolio,
        PAGE_SEO.about,
        PAGE_SEO.blog,
        PAGE_SEO.contact,
        ...BLOG_POSTS.map((post) => ({
          title: post.seoTitle || post.title,
          description: post.metaDescription,
          path: `/blog/${post.slug}`,
          image: post.imageSrc || SITE_SEO.defaultImage,
          imageAlt: post.imageAlt || post.title,
          ogType: 'article',
        })),
      ]

      for (const routeSeo of routes) {
        const cleanSegment = routeSeo.path.replace(/^\/+/, '')
        if (!cleanSegment) continue
        const targetDir = path.join(distDir, cleanSegment)
        fs.mkdirSync(targetDir, { recursive: true })
        fs.writeFileSync(
          path.join(targetDir, 'index.html'),
          applyRouteSeoToHtml(templateHtml, routeSeo),
          'utf8'
        )
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    generateRouteSocialHtmlPlugin(),
  ],
})
