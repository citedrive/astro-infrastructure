import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, g as renderSlot } from './astro.14328da9.mjs';
import 'html-escaper';
import { R as ReactAccordion, a as $$BaseLayout } from './pages/all.bebba475.mjs';
import { $ as $$RightSidebar } from './prerender.1fc5c4ce.mjs';
/* empty css                                                                                                                                                   */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'react';
import 'framer-motion';
/* empty css                                                                                                                                                   */import 'react/jsx-runtime';
/* empty css                                *//* empty css                             *//* empty css                          *//* empty css                                  *//* empty css                                  *//* empty css                                */
const $$Astro$1 = createAstro();
const $$LeftSidebarBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeftSidebarBlog;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.m),"../../pages/blog/citation-keys-in-bibtex.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.D),"../../pages/blog/citedrive-3.0-information-on-the-upcoming-version.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.s),"../../pages/blog/citedrive-companion-for-overleaf-and-rstudio.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.w),"../../pages/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.n),"../../pages/blog/citedrive-forum-has-moved-to-github-discussions.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.u),"../../pages/blog/citedrive-january-2022-release.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.B),"../../pages/blog/citedrive-november-2021-release.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.z),"../../pages/blog/codemirror-6-a-new-source-editor-for-overleaf.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.v),"../../pages/blog/data-visualization-packages-for-r-you-should-check-out.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.r),"../../pages/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.q),"../../pages/blog/how-to-cite-a-website-in-bibtex.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.A),"../../pages/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.o),"../../pages/blog/literature-management-with-overleaf.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.y),"../../pages/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.p),"../../pages/blog/overleaf-source-editor-upgrade.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.C),"../../pages/blog/parenthetical-vs-narrative-citations-in-citedrive.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.t),"../../pages/blog/using-natbib-with-bibtex-and-overleaf.mdx": () => import('./prerender.1fc5c4ce.mjs').then(n => n.x)}), () => "../../pages/blog/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-6ZJRUKCJ">
<div style="padding-bottom: 4rem" class="astro-6ZJRUKCJ">
	<ul class="list astro-6ZJRUKCJ">
		${posts.map((post) => renderTemplate`<li class="astro-6ZJRUKCJ">
            
				<a class="link truncate astro-6ZJRUKCJ"${addAttribute(post.url, "href")}>${post.frontmatter.title}</a>
			</li>`)}

  </ul>
</div>
</nav>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/docs/LeftSidebarBlog.astro");

const $$Astro = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, lang, dir, desc, type, frontmatter, headings } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "lang": frontmatter.lang, "description": frontmatter.description, "blog": true, "class": "astro-BVZIHDZO" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="astro-BVZIHDZO">

      <section class="grid astro-BVZIHDZO">

         <aside class="left astro-BVZIHDZO" style="position: fixed;">
          <h4 style="margin-bottom: 1rem; font-weight: 500; color: hsl(var(--clr-secondary));;" class="astro-BVZIHDZO">All Blog Posts</h4>
         <div class="leftSideBar astro-BVZIHDZO">

            ${renderComponent($$result2, "LeftSidebarBlog", $$LeftSidebarBlog, { "lang": lang ?? frontmatter.lang, "class": "astro-BVZIHDZO" })}
         </div>

         </aside>

         <article class="article astro-BVZIHDZO">
            <div class="mobileAnchor astro-BVZIHDZO">
               <div style="margin-top: 2rem;" class="astro-BVZIHDZO">
                  ${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "On this page", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-BVZIHDZO" }, { "default": ($$result3) => renderTemplate`<div style="margin-top: .75rem;" class="astro-BVZIHDZO">
                        ${renderComponent($$result3, "RightSidebar", $$RightSidebar, { "headings": headings, "githubEditUrl": "githubEditUrl", "class": "astro-BVZIHDZO" })}
                     </div>` })}
               </div>

            </div>
               <div class="astro-BVZIHDZO">
                     ${renderSlot($$result2, $$slots["default"])}
               </div>
         </article>

         <aside class="rightSidebar astro-BVZIHDZO">
            <h4 class="astro-BVZIHDZO">On this page</h4>
            ${renderComponent($$result2, "RightSidebar", $$RightSidebar, { "headings": headings, "githubEditUrl": "githubEditUrl", "class": "astro-BVZIHDZO" })}
         </aside>

      </section>

   </div>` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/BlogPost.astro");

const $$file = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/BlogPost.astro";
const $$url = undefined;

export { $$BlogPost as default, $$file as file, $$url as url };
