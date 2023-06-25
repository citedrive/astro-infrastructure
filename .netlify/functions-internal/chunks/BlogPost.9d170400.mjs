import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, g as renderComponent, e as renderSlot } from './astro.a5cde4d3.mjs';
import 'html-escaper';
import { $ as $$BaseLayout, R as ReactAccordion, a as $$RightSidebar } from './prerender.1c18f05d.mjs';
/* empty css                                                                                                                                                   */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                          *//* empty css                                                                                                                                                   *//* empty css                                  *//* empty css                                  */import 'react';
import 'framer-motion';
import 'react/jsx-runtime';
/* empty css                                *//* empty css                                */
const $$Astro$1 = createAstro("https://pages.citedrive.com");
const $$LeftSidebarBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeftSidebarBlog;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.j),"../../pages/blog/citation-keys-in-bibtex.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.F),"../../pages/blog/citedrive-3.0-information-on-the-upcoming-version.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.s),"../../pages/blog/citedrive-31-announcement-and-roadmap.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.y),"../../pages/blog/citedrive-companion-for-overleaf-and-rstudio.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.x),"../../pages/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.k),"../../pages/blog/citedrive-forum-has-moved-to-github-discussions.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.v),"../../pages/blog/citedrive-january-2022-release.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.D),"../../pages/blog/citedrive-november-2021-release.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.B),"../../pages/blog/codemirror-6-a-new-source-editor-for-overleaf.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.w),"../../pages/blog/data-visualization-packages-for-r-you-should-check-out.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.n),"../../pages/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.m),"../../pages/blog/how-to-cite-a-website-in-bibtex.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.C),"../../pages/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.l),"../../pages/blog/literature-management-with-overleaf.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.A),"../../pages/blog/managing-citations-and-bibliographies-with-biblatex-using-overleaf.mdx": () => import('./pages/managing-citations-and-bibliographies-with-biblatex-using-overleaf.mdx.3736125a.mjs'),"../../pages/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.o),"../../pages/blog/overleaf-source-editor-upgrade.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.E),"../../pages/blog/parenthetical-vs-narrative-citations-in-citedrive.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.u),"../../pages/blog/test-blog-post.mdx": () => import('./pages/test-blog-post.mdx.1d000906.mjs'),"../../pages/blog/using-natbib-with-bibtex-and-overleaf.mdx": () => import('./prerender.1c18f05d.mjs').then(n => n.z)}), () => "../../pages/blog/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  return renderTemplate`${maybeRenderHead($$result)}<nav class="leftSideBar astro-6ZJRUKCJ">
<div style="padding-bottom: 4rem" class="astro-6ZJRUKCJ">
    <h4 style="margin-bottom: 1rem; font-weight: 500; color: hsl(var(--clr-secondary));" class="astro-6ZJRUKCJ">All Blog Posts</h4>
	<ul class="list astro-6ZJRUKCJ">
		${posts.map((post) => renderTemplate`<li class="astro-6ZJRUKCJ">
            
				<a class="link truncate astro-6ZJRUKCJ"${addAttribute(post.url, "href")}>${post.frontmatter.title}</a>
			</li>`)}

  </ul>
</div>
</nav>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/docs/LeftSidebarBlog.astro");

const $$Astro = createAstro("https://pages.citedrive.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, lang, dir, desc, type, frontmatter, headings } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "lang": frontmatter.lang, "description": frontmatter.description, "blog": true, "class": "astro-BVZIHDZO" }, { "default": ($$result2) => renderTemplate`

   ${maybeRenderHead($$result2)}<div class="astro-BVZIHDZO">

      <section class="grid astro-BVZIHDZO">

         <aside class="left astro-BVZIHDZO">
            ${renderComponent($$result2, "LeftSidebarBlog", $$LeftSidebarBlog, { "lang": lang ?? frontmatter.lang, "class": "astro-BVZIHDZO" })}
         </aside>

         <article class="article astro-BVZIHDZO">
            <div class="mobileAnchor astro-BVZIHDZO">
               <div style="margin-top: 2rem;" class="astro-BVZIHDZO">
                  ${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "On this page", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-BVZIHDZO" }, { "default": ($$result3) => renderTemplate`
                     <div style="margin-top: .75rem;" class="astro-BVZIHDZO">
                        ${renderComponent($$result3, "RightSidebar", $$RightSidebar, { "headings": headings, "githubEditUrl": "githubEditUrl", "class": "astro-BVZIHDZO" })}
                     </div>
                  ` })}
               </div>

            </div>
               <div class="astro-BVZIHDZO">
                     ${renderSlot($$result2, $$slots["default"])}
               </div>
         </article>

         <aside class="right astro-BVZIHDZO">
            ${renderComponent($$result2, "RightSidebar", $$RightSidebar, { "headings": headings, "githubEditUrl": "githubEditUrl", "class": "astro-BVZIHDZO" })}
         </aside>

      </section>

   </div>

` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/BlogPost.astro");

export { $$BlogPost as default };
