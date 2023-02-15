import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, h as renderSlot, e as renderComponent, _ as __astro_tag_component__, i as createVNode, F as Fragment } from './astro.421b1de6.mjs';
/* empty css                          */import { $ as $$InternalLink, a as $$BaseLayout, b as $$DocsLayout } from './pages/all.4e5f39c2.mjs';
/* empty css                                                                                                                                                   *//* empty css                                  *//* empty css                                  *//* empty css                                */
const $$Astro$7 = createAstro();
const $$CTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CTA;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a href="https://app.citedrive.com/sign-up/" class="cta btn astro-4XTY6SX2">LET'S .bib YOUR FIRST PROJECT</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/CTA.astro");

const $$Astro$6 = createAstro();
const $$FeatureListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FeatureListItem;
  const { icon, radius, title, text, link, linklabel, hasMargin } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex astro-AKJ2T5JD" style="--gap: 0;">

      <div${addAttribute(`icon-pipe ${Astro2.props.radius} astro-AKJ2T5JD`, "class")}>
         <div class="circle grid astro-AKJ2T5JD" style="place-items: center;">
            <img class="icon astro-AKJ2T5JD"${addAttribute(icon, "src")}>
         </div>
      </div>

      <div class="grid inner-feature-grid astro-AKJ2T5JD">

         <div class="feature-text astro-AKJ2T5JD" style="max-width: 75ch;">
         <h3 class="astro-AKJ2T5JD">${Astro2.props.title}</h3>
         <p class="fs-body-sm astro-AKJ2T5JD">${Astro2.props.text}</p>
         </div>

         <div${addAttribute((hasMargin ? "bullet-points item-margin" : "bullet-points") + " astro-AKJ2T5JD", "class")}>
         <div class="astro-AKJ2T5JD">
         ${renderSlot($$result, $$slots["default"])}
         <!-- <ul style="margin: 0; padding-left: 2rem;">
            <li><InternalLink link={Astro.props.link}  label={Astro.props.linklabel}></InternalLink></li>
            <li><InternalLink link={Astro.props.link}  label={Astro.props.linklabel}>Get started with RStudio</InternalLink></li>
         </ul> -->
         </div>
         </div>

      </div>

    </div>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/FeatureList/FeatureListItem.astro");

const hero = {
	heroTitle: "Your Bibliographic Research, Streamlined",
	heroSubtitle: "Keep your references and teams organized in projects with the world’s most straightforward BibTeX-first reference management tool, built from the ground up to stay out of your way and help you focus on writing.",
	heroBtn: "LET's .bib YOUR FIRST PROJECT",
	starter: [
		{
			label: "Overleaf",
			link: "fs"
		},
		{
			label: "RStudio",
			link: "fs"
		},
		{
			label: "and Quatro",
			link: "fs"
		}
	],
	"start-leftovers": "are great options for getting started."
};
const json = {
	hero: hero
};

const $$Astro$5 = createAstro();
const prerender$H = true;
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Welcome to CiteDrive", "lang": "en", "site": true, "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="container grid astro-J7PV25F6" style="--gap: 5rem; margin-bottom: 5rem;">
      <section class="grid astro-J7PV25F6" style="place-items: center;">
         <div class="grid astro-J7PV25F6" style="place-items: center; --gap: 22px">
            <img width="164px" src="/assets/hero.svg" alt="citedrive-hero-graphic" class="astro-J7PV25F6">
            <h1 class="h1-landing letter-spacing-h1 letter-spacing-text astro-J7PV25F6" style="margin-bottom: 0 !important;">${json.hero.heroTitle}</h1>
            <p class="subtitle-landing-page astro-J7PV25F6" style="margin-bottom: 0 !important; max-width: 66ch;">${json.hero.heroSubtitle}</p>
            ${renderComponent($$result2, "CTA", $$CTA, { "label": json.hero.heroBtn, "class": "astro-J7PV25F6" })}
            <p class="astro-J7PV25F6">
               ${renderComponent($$result2, "InternalLink", $$InternalLink, { "link": "overleaf/", "label": "Overleaf", "class": "astro-J7PV25F6" })}
               ,
               ${renderComponent($$result2, "InternalLink", $$InternalLink, { "link": "r-markdown/", "label": "R Markdown", "class": "astro-J7PV25F6" })}
               and
               ${renderComponent($$result2, "InternalLink", $$InternalLink, { "link": "quarto/", "label": "Quarto", "class": "astro-J7PV25F6" })}
               are great options for getting started.
            </p>
         </div>
      </section>
      <!-- <section class="testimonials">
         // todo: university list
         {testimonials.map((testimonial) => (
         <div>
            <span>{testimonial.feedback}</span>
            <span>{testimonial.author}</span>
         </div>
         ))}
         </section> -->
      <section class="astro-J7PV25F6">
         <img class="video astro-J7PV25F6" src="assets/theapp.png">
      </section>
      <section class="features grid astro-J7PV25F6">
         <div class="grid astro-J7PV25F6" style="place-items: center;">
          <!--   <h2 class="fs-h2 text-accent">Streamline Your Bibliographic Research</h2>
            <p style="max-width: 75ch;">CiteDrive streamlines bibliographic management by being laser-focused and reducing clicks and general tedium. We focus on one thing and do it great - not being an “everything for everyone” reference management tool.
               </p>
               -->
         </div>
         <div class="feature-list astro-J7PV25F6">
            ${renderComponent($$result2, "FeatureListItem", $$FeatureListItem, { "hasMargin": true, "radius": "radius-top", "title": "Cite in Context", "text": "Use the CiteDrive Companion browser add-on to seamlessly collect references as you conduct research across popular platforms, including Google Scholar and Pubmed, or even non-DOI websites\u2013 all without leaving the page.", "link": "https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik", "linklabel": "CiteDrive Companion for Chrome", "icon": "assets/Decoration/SVG/Quote.svg", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<ul class="flex astro-J7PV25F6" style="flex-direction: column;">
                  <li class="astro-J7PV25F6">
                     ${renderComponent($$result3, "InternalLink", $$InternalLink, { "link": "https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik", "label": "CiteDrive Companion for Chrome", "class": "astro-J7PV25F6" })}
                  </li>
                  <li class="astro-J7PV25F6">
                     ${renderComponent($$result3, "InternalLink", $$InternalLink, { "link": "https://addons.mozilla.org/af/firefox/addon/citedrive-companion/", "label": "CiteDrive Companion for Firefox", "class": "astro-J7PV25F6" })}
                  </li>
                  <li class="astro-J7PV25F6">
                     ${renderComponent($$result3, "InternalLink", $$InternalLink, { "link": "https://microsoftedge.microsoft.com/addons/detail/citedrive-bibtex-compan/kpmepfpbjehnlgfbcnbmgihklkkmfnpo", "label": "CiteDrive Companion for Edge", "class": "astro-J7PV25F6" })}
                  </li>
               </ul>` })}
            ${renderComponent($$result2, "FeatureListItem", $$FeatureListItem, { "hasMargin": true, "title": "Connect your bibliography", "text": "CiteDrive links with Overleaf and RStudio seamlessly. When you or your teammates alter your project, the BibTeX .bib file will automatically update your bibliography in your Overleaf or RStudio project if you use CiteDrive to manage it.", "link": "#", "linklabel": "Get started with Overleaf", "icon": "/assets/Decoration/SVG/Connect.svg", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<ul class="flex astro-J7PV25F6" style="flex-direction: column;">
                  <li class="astro-J7PV25F6">
                     ${renderComponent($$result3, "InternalLink", $$InternalLink, { "link": "/overleaf/", "label": "Get started with Overleaf", "class": "astro-J7PV25F6" })}
                  </li>
               </ul>` })}
            ${renderComponent($$result2, "FeatureListItem", $$FeatureListItem, { "hasMargin": true, "title": "Compose in your Browser", "text": "Access your project from any browser: no more software to install, licenses to track, or clunky upgrades. You can make changes on the go, collaborate with team members in real-time, and never worry about losing your work.", "icon": "/assets/Decoration/SVG/Browser.svg", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<ul class="astro-J7PV25F6">
                  <li class="astro-J7PV25F6">Chrome</li>
                  <li class="astro-J7PV25F6">Firefox</li>
                  <li class="astro-J7PV25F6">Edge</li>
                  <li class="astro-J7PV25F6">Safari</li>
               </ul>` })}
            ${renderComponent($$result2, "FeatureListItem", $$FeatureListItem, { "hasMargin": true, "title": "Collaborate Seamlessly", "text": "Add collaborators to your CiteDrive project with a couple of clicks. Collect references, revise and generate citations together and stop sharing stale bibliography files and databases.", "icon": "/assets/Decoration/SVG/Collab.svg", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<ul class="astro-J7PV25F6">
                  <li class="astro-J7PV25F6">Revise and generate Citations together</li>
                  <li class="astro-J7PV25F6">Stop sharing stale bibliography files and databases</li>
               </ul>` })}
            ${renderComponent($$result2, "FeatureListItem", $$FeatureListItem, { "hasMargin": true, "title": "BibTeX empowered", "text": "Do you keep your bibliography in a big text file? If that\u2019s the case, CiteDrive is for you, with a user interface to go alongside it. We didn\u2019t build CiteDrive as an afterthought for BibTeX users; we built it with them in mind.", "icon": "/assets/Decoration/SVG/Bib.svg", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<ul class="astro-J7PV25F6">
                  <li class="astro-J7PV25F6">Project based</li>
               </ul>` })}
            ${renderComponent($$result2, "FeatureListItem", $$FeatureListItem, { "hasMargin": true, "title": "Customize", "text": "Want to leverage extended BibLaTeX or your own bespoke fields? Customize your BibTeX code as you see fit while collecting and editing references, rather than BibTeX support as an afterthought. With our in-built editor, you handle your bibliography, not with opinionated forms.", "icon": "/assets/Decoration/SVG/Edit.svg", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<ul class="astro-J7PV25F6">
                  <li class="astro-J7PV25F6">Custom Citation Keys</li>
                  <li class="astro-J7PV25F6">Built-in BibTeX Editor</li>
                  <li class="astro-J7PV25F6">BibLaTeX</li>
                  <li class="astro-J7PV25F6">Natbib</li>
                  <li class="astro-J7PV25F6">Jurabib</li>
               </ul>` })}
            ${renderComponent($$result2, "FeatureListItem", $$FeatureListItem, { "radius": "radius-bottom", "title": "Control and Error-Handling", "text": "You can easily save papers from your browser with just a few clicks - displaying a preview for you to modify. CiteDrive will notify you if your format is erroneous and there are duplicate papers so that you can collaborate without interfering with one another.", "icon": "/assets/Decoration/SVG/Error.svg", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<ul class="astro-J7PV25F6">
                  <li class="astro-J7PV25F6">Errorhandling</li>
                  <li class="astro-J7PV25F6">Duplicate Controls</li>
               </ul>` })}
         </div>
      </section>
      <section class="grid astro-J7PV25F6" style="place-items: center;">
         <div class="grid astro-J7PV25F6" style="place-items: center; --gap: 22px">
            <h1 class="h1-landing letter-spacing-h1 letter-spacing-text astro-J7PV25F6" style="line-height: 100%">${json.hero.heroTitle}</h1>
            ${renderComponent($$result2, "CTA", $$CTA, { "label": "LET's .bib YOUR FIRST PROJECT", "class": "astro-J7PV25F6" })}
            <p class="astro-J7PV25F6">
               ${renderComponent($$result2, "InternalLink", $$InternalLink, { "link": "overleaf/", "label": "Overleaf", "class": "astro-J7PV25F6" })}
               ,
               ${renderComponent($$result2, "InternalLink", $$InternalLink, { "link": "r-markdown/", "label": "R Markdown", "class": "astro-J7PV25F6" })}
               and
               ${renderComponent($$result2, "InternalLink", $$InternalLink, { "link": "quarto/", "label": "Quarto", "class": "astro-J7PV25F6" })}
               are great options for getting started.
            </p>
         </div>
      </section>
   </div>` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/index.astro");

const $$file$5 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/index.astro";
const $$url$5 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$5,
  prerender: prerender$H,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$B = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$B;
  content.file = file$B;
  content.url = url$B;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$B,
    url: url$B,
    content,
    frontmatter: content,
    headings: getHeadings$B(),
    "server:root": true,
    children
  });
};
const frontmatter$B = {
  "title": "CiteDrive Recommends",
  "layout": "../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "natbib",
  "lang": "en"
};
function getHeadings$B() {
  return [{
    "depth": 1,
    "slug": "citedrive-recommends",
    "text": "CiteDrive Recommends"
  }, {
    "depth": 2,
    "slug": "overleaf",
    "text": "Overleaf"
  }, {
    "depth": 2,
    "slug": "citationsy",
    "text": "Citationsy"
  }];
}
const prerender$G = true;

function _createMdxContent$B(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "citedrive-recommends",
      children: "CiteDrive Recommends"
    }), "\n", createVNode(_components.h2, {
      id: "overleaf",
      children: "Overleaf"
    }), "\n", createVNode(_components.p, {
      children: "Overleaf is a collaborative cloud-based LaTeX editor used for writing, editing and publishing scientific documents. It partners with a wide range of scientific publishers to provide official journal LaTeX templates, and direct submission links."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.overleaf.com/",
        children: "https://www.overleaf.com/"
      })
    }), "\n", createVNode(_components.h2, {
      id: "citationsy",
      children: "Citationsy"
    }), "\n", createVNode(_components.p, {
      children: "With Citationsy you can cite websites, books, papers, articles, podcasts, songs, and much more in a single click. Create perfect references and footnotes every time without having to think of the formatting. We support citations in APA, Harvard, DIN, Chicago, MLA, and thousands of other referencing styles."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://citationsy.com/",
        children: "https://citationsy.com/"
      })
    })]
  });
}

function MDXContent$B(props = {}) {
  return createVNode(MDXLayout$B, { ...props,
    children: createVNode(_createMdxContent$B, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$B, "astro:jsx");

__astro_tag_component__(MDXContent$B, "astro:jsx");
MDXContent$B[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$B.layout);
const url$B = "/citedrive-recommends/";
const file$B = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/citedrive-recommends.mdx";
function rawContent$B() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$B() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$B = MDXContent$B;

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$B,
  compiledContent: compiledContent$B,
  default: MDXContent$B,
  file: file$B,
  frontmatter: frontmatter$B,
  getHeadings: getHeadings$B,
  prerender: prerender$G,
  rawContent: rawContent$B,
  url: url$B
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$A = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$A;
  content.file = file$A;
  content.url = url$A;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$A,
    url: url$A,
    content,
    frontmatter: content,
    headings: getHeadings$A(),
    "server:root": true,
    children
  });
};
const frontmatter$A = {
  "title": "Terms and Conditions",
  "layout": "../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "natbib",
  "lang": "en"
};
function getHeadings$A() {
  return [{
    "depth": 1,
    "slug": "terms-and-conditions",
    "text": "Terms and Conditions"
  }, {
    "depth": 2,
    "slug": "agreement-between-user-and-citedrivecom",
    "text": "Agreement between user and CiteDrive.com"
  }, {
    "depth": 2,
    "slug": "privacy",
    "text": "Privacy"
  }, {
    "depth": 2,
    "slug": "electronic-communications",
    "text": "Electronic Communications"
  }, {
    "depth": 2,
    "slug": "your-account",
    "text": "Your account"
  }, {
    "depth": 2,
    "slug": "free-trial",
    "text": "Free Trial"
  }, {
    "depth": 2,
    "slug": "cancellationrefund-policy",
    "text": "Cancellation/Refund Policy"
  }, {
    "depth": 2,
    "slug": "links-to-third-party-sitesthird-party-services",
    "text": "Links to third party sites/Third party services"
  }, {
    "depth": 2,
    "slug": "no-unlawful-or-prohibited-useintellectual-property",
    "text": "No unlawful or prohibited use/Intellectual Property"
  }, {
    "depth": 2,
    "slug": "international-users",
    "text": "International Users"
  }, {
    "depth": 2,
    "slug": "indemnification",
    "text": "Indemnification"
  }, {
    "depth": 2,
    "slug": "arbitration",
    "text": "Arbitration"
  }, {
    "depth": 2,
    "slug": "class-action-waiver",
    "text": "Class Action Waiver"
  }, {
    "depth": 2,
    "slug": "liability-disclaimer",
    "text": "Liability disclaimer"
  }, {
    "depth": 2,
    "slug": "terminationaccess-restriction",
    "text": "Termination/access restriction"
  }, {
    "depth": 2,
    "slug": "changes-to-terms",
    "text": "Changes to Terms"
  }, {
    "depth": 2,
    "slug": "contact-us",
    "text": "Contact Us"
  }];
}
const prerender$F = true;

function _createMdxContent$A(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "terms-and-conditions",
      children: "Terms and Conditions"
    }), "\n", createVNode(_components.h2, {
      id: "agreement-between-user-and-citedrivecom",
      children: "Agreement between user and CiteDrive.com"
    }), "\n", createVNode(_components.p, {
      children: "Welcome to CiteDrive.com. The CiteDrive.com website (the \u201CSite\u201D) is comprised of various web pages operated by CiteDrive LLC (\u201CCiteDrive\u201D). CiteDrive.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the \u201CTerms\u201D). Your use of CiteDrive.com constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference. CiteDrive provides a collaborative SaaS platform for collecting, annotating and citing references."
    }), "\n", createVNode(_components.h2, {
      id: "privacy",
      children: "Privacy"
    }), "\n", createVNode(_components.p, {
      children: "Your use of CiteDrive.com is subject to CiteDrive\u2019s Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices."
    }), "\n", createVNode(_components.h2, {
      id: "electronic-communications",
      children: "Electronic Communications"
    }), "\n", createVNode(_components.p, {
      children: "Visiting CiteDrive.com or sending emails to CiteDrive constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing."
    }), "\n", createVNode(_components.h2, {
      id: "your-account",
      children: "Your account"
    }), "\n", createVNode(_components.p, {
      children: "If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that CiteDrive is not responsible for third party access to your account that results from theft or misappropriation of your account. CiteDrive and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use CiteDrive.com only with permission of a parent or guardian."
    }), "\n", createVNode(_components.h2, {
      id: "free-trial",
      children: "Free Trial"
    }), "\n", createVNode(_components.p, {
      children: "You may create one (1) free trial account per person for the purpose of evaluating our services. We reserve the right to terminate your account at any time if we find you have attempted to circumvent this limit. Analyzed data generated from a free trial is for personal use only and not authorized for publication."
    }), "\n", createVNode(_components.h2, {
      id: "cancellationrefund-policy",
      children: "Cancellation/Refund Policy"
    }), "\n", createVNode(_components.p, {
      children: ["You may cancel your subscription at any time. You may request a pro-rated refund for unused subject-test-hours for the last month of service. Please contact us at ", createVNode(_components.a, {
        href: "mailto:support@CiteDrive.com",
        children: "support@CiteDrive.com"
      }), " with any questions."]
    }), "\n", createVNode(_components.h2, {
      id: "links-to-third-party-sitesthird-party-services",
      children: "Links to third party sites/Third party services"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive.com may contain links to other websites (\u201CLinked Sites\u201D). The Linked Sites are not under the control of CiteDrive and CiteDrive is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. CiteDrive is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by CiteDrive of the site or any association with its operators."
    }), "\n", createVNode(_components.p, {
      children: "Certain services made available via CiteDrive.com are delivered by third party sites and organizations. By using any product, service or functionality originating from the CiteDrive.com domain, you hereby acknowledge and consent that CiteDrive may share such information and data with any third party with whom CiteDrive has a contractual relationship to provide the requested product, service or functionality on behalf of CiteDrive.com users and customers."
    }), "\n", createVNode(_components.h2, {
      id: "no-unlawful-or-prohibited-useintellectual-property",
      children: "No unlawful or prohibited use/Intellectual Property"
    }), "\n", createVNode(_components.p, {
      children: "You are granted a non-exclusive, non-transferable, revocable license to access and use CiteDrive.com strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to CiteDrive that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party\u2019s use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site. You acknowledge and agree that CiteDrive has the right to monitor any use of its systems by its personnel at any time and maintain copies documenting such monitoring. As a condition of your use of the Site, you grant CiteDrive a non-exclusive license to aggregate data from your account for anonymized use."
    }), "\n", createVNode(_components.p, {
      children: "All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of CiteDrive or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto."
    }), "\n", createVNode(_components.p, {
      children: "You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. CiteDrive content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of CiteDrive and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of CiteDrive or our licensors except as expressly authorized by these Terms."
    }), "\n", createVNode(_components.h2, {
      id: "international-users",
      children: "International Users"
    }), "\n", createVNode(_components.p, {
      children: "The Service is controlled, operated and administered by CiteDrive from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the CiteDrive Content accessed through CiteDrive.com in any country or in any manner prohibited by any applicable laws, restrictions or regulations."
    }), "\n", createVNode(_components.h2, {
      id: "indemnification",
      children: "Indemnification"
    }), "\n", createVNode(_components.p, {
      children: "You agree to indemnify, defend and hold harmless CiteDrive, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney\u2019s fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. CiteDrive reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with CiteDrive in asserting any available defenses."
    }), "\n", createVNode(_components.h2, {
      id: "arbitration",
      children: "Arbitration"
    }), "\n", createVNode(_components.p, {
      children: "In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrators award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney\u2019s fees. The parties agree to arbitrate all disputes and claims in regards to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort claims that are a result of these Terms and Conditions. The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions."
    }), "\n", createVNode(_components.h2, {
      id: "class-action-waiver",
      children: "Class Action Waiver"
    }), "\n", createVNode(_components.p, {
      children: "Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH\u2019S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Employer agree otherwise, the arbitrator may not consolidate more than one person\u2019s claims, and may not otherwise preside over any form of a representative or class proceeding."
    }), "\n", createVNode(_components.h2, {
      id: "liability-disclaimer",
      children: "Liability disclaimer"
    }), "\n", createVNode(_components.p, {
      children: "THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. CiteDrive LLC AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive LLC AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED \u201CAS IS\u201D WITHOUT WARRANTY OR CONDITION OF ANY KIND. CiteDrive LLC AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT."
    }), "\n", createVNode(_components.p, {
      children: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CiteDrive LLC AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF CiteDrive LLC OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE."
    }), "\n", createVNode(_components.h2, {
      id: "terminationaccess-restriction",
      children: "Termination/access restriction"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of Ohio and you hereby consent to the exclusive jurisdiction and venue of courts in Ohio in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section."
    }), "\n", createVNode(_components.p, {
      children: "You agree that no joint venture, partnership, employment, or agency relationship exists between you and CiteDrive as a result of this agreement or use of the Site. CiteDrive\u2019s performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of CiteDrive\u2019s right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by CiteDrive with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect."
    }), "\n", createVNode(_components.p, {
      children: "Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and CiteDrive with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and CiteDrive with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English."
    }), "\n", createVNode(_components.h2, {
      id: "changes-to-terms",
      children: "Changes to Terms"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive reserves the right, in its sole discretion, to change the Terms under which CiteDrive.com is offered. The most current version of the Terms will supersede all previous versions. CiteDrive encourages you to periodically review the Terms to stay informed of our updates."
    }), "\n", createVNode(_components.h2, {
      id: "contact-us",
      children: "Contact Us"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive welcomes your questions or comments regarding the Terms:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "mailto:webmaster@citedrive.com",
        children: "webmaster@citedrive.com"
      })
    })]
  });
}

function MDXContent$A(props = {}) {
  return createVNode(MDXLayout$A, { ...props,
    children: createVNode(_createMdxContent$A, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$A, "astro:jsx");

__astro_tag_component__(MDXContent$A, "astro:jsx");
MDXContent$A[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$A.layout);
const url$A = "/terms-and-conditions/";
const file$A = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/terms-and-conditions.mdx";
function rawContent$A() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$A() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$A = MDXContent$A;

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$A,
  compiledContent: compiledContent$A,
  default: MDXContent$A,
  file: file$A,
  frontmatter: frontmatter$A,
  getHeadings: getHeadings$A,
  prerender: prerender$F,
  rawContent: rawContent$A,
  url: url$A
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$z = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$z;
  content.file = file$z;
  content.url = url$z;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$z,
    url: url$z,
    content,
    frontmatter: content,
    headings: getHeadings$z(),
    "server:root": true,
    children
  });
};
const frontmatter$z = {
  "title": "Privacy Policy",
  "layout": "../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "natbib",
  "lang": "en"
};
function getHeadings$z() {
  return [{
    "depth": 1,
    "slug": "privacy-policy",
    "text": "Privacy Policy"
  }, {
    "depth": 2,
    "slug": "collection-of-your-personal-information",
    "text": "Collection of your Personal Information"
  }, {
    "depth": 2,
    "slug": "use-of-your-personal-information",
    "text": "Use of your Personal Information"
  }, {
    "depth": 3,
    "slug": "use-of-cookies",
    "text": "Use of Cookies"
  }, {
    "depth": 2,
    "slug": "security-of-your-personal-information",
    "text": "Security of your Personal Information"
  }, {
    "depth": 2,
    "slug": "children-under-thirteen",
    "text": "Children Under Thirteen"
  }, {
    "depth": 2,
    "slug": "opt-out--unsubscribe",
    "text": "Opt-Out & Unsubscribe"
  }, {
    "depth": 2,
    "slug": "changes-to-this-statement",
    "text": "Changes to this Statement"
  }, {
    "depth": 2,
    "slug": "contact-information",
    "text": "Contact Information"
  }];
}
const prerender$E = true;

function _createMdxContent$z(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    h3: "h3",
    a: "a"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "privacy-policy",
      children: "Privacy Policy"
    }), "\n", createVNode(_components.p, {
      children: "Protecting your private information is our priority. This Statement of Privacy applies to the CiteDrive.com and CiteDrive LLC and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to CiteDrive LLC include CiteDrive.com and CiteDrive. The CiteDrive website is a SaaS site. By using the CiteDrive website, you consent to the data practices described in this statement."
    }), "\n", createVNode(_components.h2, {
      id: "collection-of-your-personal-information",
      children: "Collection of your Personal Information"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive may collect personally identifiable information, such as your name. If you purchase CiteDrive\u2019s products and services, we collect billing and credit card information. This information is used to complete the purchase transaction. We may gather additional personal or non-personal information in the future."
    }), "\n", createVNode(_components.p, {
      children: "Information about your computer hardware and software may be automatically collected by CiteDrive. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the CiteDrive website."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive encourages you to review the privacy statements of websites you choose to link to from CiteDrive so that you can understand how those websites collect, use and share your information. CiteDrive is not responsible for the privacy statements or other content on websites outside of the CiteDrive website."
    }), "\n", createVNode(_components.h2, {
      id: "use-of-your-personal-information",
      children: "Use of your Personal Information"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive collects and uses your personal information to operate its website(s) and deliver the services you have requested."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive may also use your personally identifiable information to inform you of other products or services available from CiteDrive and its affiliates. CiteDrive may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive does not sell, rent or lease its customer lists to third parties."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to CiteDrive, and they are required to maintain the confidentiality of your information."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive may keep track of the websites and pages our users visit within CiteDrive, in order to determine what CiteDrive services are the most popular. This data is used to deliver customized content and advertising within CiteDrive to customers whose behavior indicates that they are interested in a particular subject area."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on CiteDrive or the site; (b) protect and defend the rights or property of CiteDrive; and, (c) act under exigent circumstances to protect the personal safety of users of CiteDrive, or the public. CiteDrive will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on CiteDrive or the site; (b) protect and defend the rights or property of CiteDrive; and, (c) act under exigent circumstances to protect the personal safety of users of CiteDrive, or the public."
    }), "\n", createVNode(_components.h3, {
      id: "use-of-cookies",
      children: "Use of Cookies"
    }), "\n", createVNode(_components.p, {
      children: "The CiteDrive website may use \u201Ccookies\u201D to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you."
    }), "\n", createVNode(_components.p, {
      children: "One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize CiteDrive pages, or register with CiteDrive site or services, a cookie helps CiteDrive to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same CiteDrive website, the information you previously provided can be retrieved, so you can easily use the CiteDrive features that you customized."
    }), "\n", createVNode(_components.p, {
      children: "You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the CiteDrive services or websites you visit."
    }), "\n", createVNode(_components.h2, {
      id: "security-of-your-personal-information",
      children: "Security of your Personal Information"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive secures your personal information from unauthorized access, use or disclosure. When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol."
    }), "\n", createVNode(_components.h2, {
      id: "children-under-thirteen",
      children: "Children Under Thirteen"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website."
    }), "\n", createVNode(_components.h2, {
      id: "opt-out--unsubscribe",
      children: "Opt-Out & Unsubscribe"
    }), "\n", createVNode(_components.p, {
      children: "We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain information. Users may opt-out of receiving any or all communications from CiteDrive by contacting us here:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "mailto:support@citedrive.com",
        children: "support@citedrive.com"
      })
    }), "\n", createVNode(_components.h2, {
      id: "changes-to-this-statement",
      children: "Changes to this Statement"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive will occasionally update this Statement of Privacy to reflect company and customer feedback. CiteDrive encourages you to periodically review this Statement to be informed of how CiteDrive is protecting your information."
    }), "\n", createVNode(_components.h2, {
      id: "contact-information",
      children: "Contact Information"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive welcomes your questions or comments regarding this Statement of Privacy. If you believe that CiteDrive has not adhered to this Statement, please contact CiteDrive at:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "mailto:webmaster@citedrive.com",
        children: "webmaster@citedrive.com"
      })
    })]
  });
}

function MDXContent$z(props = {}) {
  return createVNode(MDXLayout$z, { ...props,
    children: createVNode(_createMdxContent$z, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$z, "astro:jsx");

__astro_tag_component__(MDXContent$z, "astro:jsx");
MDXContent$z[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$z.layout);
const url$z = "/privacy-policy/";
const file$z = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/privacy-policy.mdx";
function rawContent$z() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$z() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$z = MDXContent$z;

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$z,
  compiledContent: compiledContent$z,
  default: MDXContent$z,
  file: file$z,
  frontmatter: frontmatter$z,
  getHeadings: getHeadings$z,
  prerender: prerender$E,
  rawContent: rawContent$z,
  url: url$z
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const prerender$D = true;
const $$DesignSystem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DesignSystem;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "CiteDrive | Design System", "lang": "en", "class": "astro-DDZZJIGO" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="grid container astro-DDZZJIGO" style="margin-top: 10rem; margin-bottom: 10rem; --gap: 2.5rem;">

    <h1 class="heading-light letter-spacing-h1 astro-DDZZJIGO" style="font: var(--font-h1)">Design System</h1>

    <section id="colors" class="astro-DDZZJIGO">

        <h2 class="grid design-system-seperator astro-DDZZJIGO" style="grid-template-columns: 20px auto;"><span class="text-accent astro-DDZZJIGO">1.</span>Colors</h2>

        <div class="flex astro-DDZZJIGO" style="background-color: white; padding: 3rem 1rem; flex-wrap: wrap">

            <div class="flow ds-color-showcase astro-DDZZJIGO" style="flex: 1 1 400px;">
                <div class="grid primary-background text-dark astro-DDZZJIGO" style="height: 200px; place-items: center;">Primary Light</div>
                <p class="text-light grid astro-DDZZJIGO" style="grid-template-columns: 100px auto;"><span class="text-accent astro-DDZZJIGO">RGB</span>32, 159, 139</p>
                <p class="text-light grid astro-DDZZJIGO" style="grid-template-columns: 100px auto;"><span class="text-accent astro-DDZZJIGO">HSL</span>171, 66.5%, 37.5%</p>
            </div>

            <div class="flow ds-color-showcase astro-DDZZJIGO" style="flex: 1 1 400px;">
                <div class=" grid secondary-background text-dark astro-DDZZJIGO" style="height: 200px; place-items: center;">Primary Dark</div>
                <p class="text-light grid astro-DDZZJIGO" style="grid-template-columns: 100px auto;"><span class="text-accent astro-DDZZJIGO">RGB</span>32, 159, 139</p>
                <p class="text-light grid astro-DDZZJIGO" style="grid-template-columns: 100px auto;"><span class="text-accent astro-DDZZJIGO">HSL</span>171, 66.5%, 37.5%</p>
            </div>

        </div>
    </section>

    <section id="fonts" class="astro-DDZZJIGO">

            <h2 class="grid design-system-seperator astro-DDZZJIGO" style="grid-template-columns: 20px auto;"><span class="text-accent astro-DDZZJIGO">2.</span>Fonts</h2>

            <div class="flex astro-DDZZJIGO" style="background-color: white; padding: 3rem 1rem; flex-wrap: wrap">

            <div class="flow astro-DDZZJIGO" style="flex: 1 1 400px;">

                <div class="ds-font-showcase astro-DDZZJIGO">
                    <strong class="astro-DDZZJIGO">Heading 1 - Mencken Head - 38.4px - 400 </strong>
                    <div class="h1 letter-spacing-h1 astro-DDZZJIGO">Pipeline your Research Data</div>
                </div>

                <div class="ds-font-showcase astro-DDZZJIGO">
                    <strong class="astro-DDZZJIGO">Heading 2 - Sofia Pro - 38.4px - 600</strong>
                    <div class="h2 astro-DDZZJIGO">Not an Afterthought</div>
                </div>

            </div>

            <div class="flow astro-DDZZJIGO" style="flex: 1 1 400px;">

                <div class="ds-font-showcase astro-DDZZJIGO">
                    <strong class="astro-DDZZJIGO">Subtitle Landing - Sofia Pro - 38.4px - 500</strong>
                    <div class="subtitle-landing-page astro-DDZZJIGO">I'm a larger subtitle</div>
                </div>

                <div class="ds-font-showcase astro-DDZZJIGO">
                    <strong class="astro-DDZZJIGO">Subtitle Blog - Sofia Pro - 38.4px - 500</strong>
                    <div class="subtitle-blog-doc astro-DDZZJIGO">I'm a normal subtitle</div>
                </div>

                <div class="ds-font-showcase astro-DDZZJIGO">
                    <strong class="astro-DDZZJIGO">Body Text Normal - Sofia Pro - 16px - 400</strong>
                    <div class="astro-DDZZJIGO">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Diam quam nulla porttitor massa. Hendrerit dolor magna eget est lorem ipsum dolor. Dictum sit amet justo donec. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Posuere urna nec tincidunt praesent semper feugiat nibh. Elementum integer enim neque volutpat ac. Neque convallis a cras semper auctor neque vitae tempus. Lorem dolor sed viverra ipsum nunc aliquet. Lobortis scelerisque fermentum dui faucibus in.</div>
                </div>

                 <div class="ds-font-showcase astro-DDZZJIGO">
                    <strong class="astro-DDZZJIGO">Body Text Small - Sofia Pro - 14px - 400</strong>
                    <div class="fs-body-sm astro-DDZZJIGO">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Diam quam nulla porttitor massa. Hendrerit dolor magna eget est lorem ipsum dolor. Dictum sit amet justo donec. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Posuere urna nec tincidunt praesent semper feugiat nibh. Elementum integer enim neque volutpat ac. Neque convallis a cras semper auctor neque vitae tempus. Lorem dolor sed viverra ipsum nunc aliquet. Lobortis scelerisque fermentum dui faucibus in.</div>
                </div>

            </div>

            </div>

    </section>

     <section id="interactive_elements" class="astro-DDZZJIGO">

            <h2 class="grid design-system-seperator astro-DDZZJIGO" style="grid-template-columns: 20px auto;"><span class="text-accent astro-DDZZJIGO">3.</span>Interactive Elements</h2>
           
            <div class="flex astro-DDZZJIGO" style="background-color: white; padding: 3rem 1rem; flex-wrap: wrap; align-items: center;">
            
            ${renderComponent($$result2, "CallToActionButton", $$CTA, { "class": "astro-DDZZJIGO" })}

            ${renderComponent($$result2, "InternalLink", $$InternalLink, { "link": "#", "label": "I'm a label", "class": "astro-DDZZJIGO" })}

            <div class="flex astro-DDZZJIGO" style="width: 100%; --gap: 2.5rem; justify-content: space-between;">
                
                 <div class="grid astro-DDZZJIGO">

                <!-- <ReactAccordion label="How to cite in Overleaf?" isOpen={false} client:load>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Diam quam nulla porttitor massa. Hendrerit dolor magna eget est lorem ipsum dolor. Dictum sit amet justo donec. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Posuere urna nec tincidunt praesent semper feugiat nibh. Elementum integer enim neque volutpat ac. Neque convallis a cras semper auctor neque vitae tempus. Lorem dolor sed viverra ipsum nunc aliquet. Lobortis scelerisque fermentum dui faucibus in.</p>
                </ReactAccordion>

                <ReactAccordion label="How to cite in R-Markdown?" isOpen={false} client:load>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Diam quam nulla porttitor massa. Hendrerit dolor magna eget est lorem ipsum dolor. Dictum sit amet justo donec. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Posuere urna nec tincidunt praesent semper feugiat nibh. Elementum integer enim neque volutpat ac. Neque convallis a cras semper auctor neque vitae tempus. Lorem dolor sed viverra ipsum nunc aliquet. Lobortis scelerisque fermentum dui faucibus in.</p>
                </ReactAccordion> -->

                </div>
        
            </div>

            </div>

    </section>

    </div>` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/design-system.astro");

const $$file$4 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/design-system.astro";
const $$url$4 = "/design-system/";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DesignSystem,
  file: $$file$4,
  prerender: prerender$D,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$y = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$y;
  content.file = file$y;
  content.url = url$y;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$y,
    url: url$y,
    content,
    frontmatter: content,
    headings: getHeadings$y(),
    "server:root": true,
    children
  });
};
const frontmatter$y = {
  "title": "Reference Manager for Overleaf with CiteDrive",
  "layout": "../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "natbib",
  "lang": "en"
};
function getHeadings$y() {
  return [{
    "depth": 1,
    "slug": "reference-manager-for-r-markdown-with-citedrive",
    "text": "Reference Manager for R Markdown with CiteDrive"
  }, {
    "depth": 2,
    "slug": "step-1-adding-references-to-your-project",
    "text": "Step 1: Adding references to your project"
  }, {
    "depth": 2,
    "slug": "step-2-synchronize-your-r-markdown-document-with-citedrive",
    "text": "Step 2: Synchronize your R Markdown document with CiteDrive"
  }, {
    "depth": 2,
    "slug": "step-3-copy-citation-keys",
    "text": "Step 3: Copy citation keys"
  }];
}
const prerender$C = true;

function _createMdxContent$y(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    img: "img",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "reference-manager-for-r-markdown-with-citedrive",
      children: "Reference Manager for R Markdown with CiteDrive"
    }), "\n", createVNode(_components.p, {
      children: "This tutorial will show you how to get started using CiteDrive for RStudio. This program allows users to easily manage their bibliography and insert references into documents\u2014making citations a breeze! We\u2019ll walk you through setting up a CiteDrive account and importing references into RStudio before diving in on how to incorporate citations into an R Markdown document."
    }), "\n", createVNode(_components.h2, {
      id: "step-1-adding-references-to-your-project",
      children: "Step 1: Adding references to your project"
    }), "\n", createVNode(_components.p, {
      children: "To start using CiteDrive, you first need to create an account by going to the website and clicking the sign-up button. Once your account is completed, you can create an \u201CR-Markdown\u201D project. This involves giving your project a name and filling it with references. Your project might resemble something like this:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/6aaaeb72-adf1-476e-aa26-fe9f480bf865_FZ-PoGiXwAE35Bi.jpg?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-2-synchronize-your-r-markdown-document-with-citedrive",
      children: "Step 2: Synchronize your R Markdown document with CiteDrive"
    }), "\n", createVNode(_components.p, {
      children: "To sync your new CiteDrive with your R Markdown document, follow these steps: click on the \u201Cbib\u201D button, which will open a new tab containing all of your BibTeX entries."
    }), "\n", createVNode(_components.p, {
      children: "From there, copy the URL and paste it after \u2018bibliography\u2019 into the YAML section of your RMD file."
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7EE787"
            },
            children: "bibliography"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "'URL'"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "---"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-3-copy-citation-keys",
      children: "Step 3: Copy citation keys"
    }), "\n", createVNode(_components.p, {
      children: "After you finish importing your references, return to your CiteDrive project. Select one or more references you want to include in your document, then click the cite button. This copies the citation key, so all you have to do is paste it into your R Markdown document!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/1f3b71e6-9746-4c33-91b9-df87be5415be_1_4KGAOkDIyUnvxOYDB58hQw.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "In your R Markdown document, insert your citation key where you want the passage to appear."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/a7483d1e-c708-4bad-b62c-2bb0ecb6d559_Screen_Recording_2022-08-23_at_10_47_45_AdobeExpress.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "After you insert the key in the proper section, click \u201Crender.\u201D The in-text citation will then appear in your specified style, and the reference will be placed at the end of your document."
    }), "\n", createVNode(_components.p, {
      children: "To summarize, CiteDrive is an effective tool for managing your bibliography and adding citations to R Markdown documents. Come give it a try today to experience its benefits firsthand!"
    })]
  });
}

function MDXContent$y(props = {}) {
  return createVNode(MDXLayout$y, { ...props,
    children: createVNode(_createMdxContent$y, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$y, "astro:jsx");

__astro_tag_component__(MDXContent$y, "astro:jsx");
MDXContent$y[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$y.layout);
const url$y = "/r-markdown/";
const file$y = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/r-markdown.mdx";
function rawContent$y() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$y() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$y = MDXContent$y;

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$y,
  compiledContent: compiledContent$y,
  default: MDXContent$y,
  file: file$y,
  frontmatter: frontmatter$y,
  getHeadings: getHeadings$y,
  prerender: prerender$C,
  rawContent: rawContent$y,
  url: url$y
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$x = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$x;
  content.file = file$x;
  content.url = url$x;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$x,
    url: url$x,
    content,
    frontmatter: content,
    headings: getHeadings$x(),
    "server:root": true,
    children
  });
};
const frontmatter$x = {
  "title": "CiteDrive Recommends",
  "layout": "../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "natbib",
  "lang": "en"
};
function getHeadings$x() {
  return [{
    "depth": 1,
    "slug": "citations",
    "text": "Citations"
  }, {
    "depth": 2,
    "slug": "publications",
    "text": "Publications"
  }, {
    "depth": 2,
    "slug": "websites",
    "text": "Websites"
  }];
}
const prerender$B = true;

function _createMdxContent$x(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h2: "h2",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "citations",
      children: "Citations"
    }), "\n", createVNode(_components.p, {
      children: ["Here is a list of works that mention CiteDrive. Would you like your paper/blog post (or similar) to be highlighted here? Please get in touch with us at ", createVNode(_components.a, {
        href: "hello@citedrive.com",
        children: "hello@citedrive.com"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "publications",
      children: "Publications"
    }), "\n", createVNode(_components.p, {
      children: "Brys, Carlos. \u201CDepartamento de Inform\xE1tica Facultad de Ciencias Econ\xF3micas Universidad Nacional de Misiones.\u201D (2019)."
    }), "\n", createVNode(_components.p, {
      children: "Fonseca, William D\u2019Andrea. \u201CIntrodu\xE7\xE3o ao LaTeX e como iniciar um novo projeto no Overleaf: Trabalho com acabamento profissional (diretamente em PDF).\u201D Ac\xFAstica e Vibra\xE7\xF5es 35.52 (2020): 133-140."
    }), "\n", createVNode(_components.h2, {
      id: "websites",
      children: "Websites"
    }), "\n", createVNode(_components.p, {
      children: ["Bilaney, Gareth. \u201CBetter bibliography management with Overleaf, CiteDrive, and BibTeX/BibLaTeX \u2014 about 3.0 and an updated guide\u201D ", createVNode(_components.em, {
        children: "Overleaf.com"
      }), ", 2022, ", createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/better-bibliography-management-with-overleaf-citedrive-and-bibtex-biblatex",
        children: "https://www.overleaf.com/blog/better-bibliography-management-with-overleaf-citedrive-and-bibtex-biblatex"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Bilaney, Gareth. \u201CCiteDrive\u2014Easy Reference Management for Overleaf\u201D ", createVNode(_components.em, {
        children: "Overleaf.com"
      }), ", 2022, ", createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf",
        children: "https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Neumann, Christoph. \u201CWerkzeuge | Prof. Dr. Christoph P. Neumann \u2013 OTH Amberg-Weiden\u201D ", createVNode(_components.em, {
        children: "OTH Amberg-Weiden"
      }), ", 2022 ", createVNode(_components.a, {
        href: "https://www.oth-aw.de/neumann/tools/",
        children: "https://www.oth-aw.de/neumann/tools/"
      }), "."]
    })]
  });
}

function MDXContent$x(props = {}) {
  return createVNode(MDXLayout$x, { ...props,
    children: createVNode(_createMdxContent$x, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$x, "astro:jsx");

__astro_tag_component__(MDXContent$x, "astro:jsx");
MDXContent$x[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$x.layout);
const url$x = "/citations/";
const file$x = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/citations.mdx";
function rawContent$x() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$x() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$x = MDXContent$x;

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$x,
  compiledContent: compiledContent$x,
  default: MDXContent$x,
  file: file$x,
  frontmatter: frontmatter$x,
  getHeadings: getHeadings$x,
  prerender: prerender$B,
  rawContent: rawContent$x,
  url: url$x
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$w = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$w;
  content.file = file$w;
  content.url = url$w;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$w,
    url: url$w,
    content,
    frontmatter: content,
    headings: getHeadings$w(),
    "server:root": true,
    children
  });
};
const frontmatter$w = {
  "title": "Reference Manager for Overleaf with CiteDrive",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "natbib",
  "lang": "en"
};
function getHeadings$w() {
  return [{
    "depth": 1,
    "slug": "reference-manager-for-overleaf-with-citedrive",
    "text": "Reference Manager for Overleaf with CiteDrive"
  }, {
    "depth": 3,
    "slug": "in-text-citations-made-dead-simple",
    "text": "In-text citations, made dead simple."
  }, {
    "depth": 3,
    "slug": "collect-references-from-anywhere",
    "text": "Collect references from anywhere"
  }, {
    "depth": 3,
    "slug": "natively-biblatex---not-an-afterthought",
    "text": "Natively Bib[La]TeX - not an afterthought."
  }, {
    "depth": 3,
    "slug": "collaborative-just-like-overleaf",
    "text": "Collaborative, just like Overleaf"
  }, {
    "depth": 2,
    "slug": "getting-started",
    "text": "Getting started"
  }, {
    "depth": 2,
    "slug": "where-can-i-read-more-overleaf--citedrive",
    "text": "Where can I read more Overleaf + Citedrive?"
  }, {
    "depth": 2,
    "slug": "about-overleaf",
    "text": "About Overleaf"
  }, {
    "depth": 2,
    "slug": "about-citedrive",
    "text": "About CiteDrive"
  }];
}
const prerender$A = true;

function _createMdxContent$w(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    h3: "h3",
    h2: "h2",
    ol: "ol",
    li: "li",
    br: "br",
    a: "a"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "reference-manager-for-overleaf-with-citedrive",
      children: "Reference Manager for Overleaf with CiteDrive"
    }), "\n", createVNode(_components.p, {
      children: "At last, focus on authoring your paper instead of worrying about keeping your references and citations in sync. Thanks to the seamless integration between CiteDrive and Overleaf, you can now effortlessly add in-text citations to your paper without ever leaving your Overleaf project."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "dasd",
        alt: ""
      })
    }), "\n", createVNode(_components.h3, {
      id: "in-text-citations-made-dead-simple",
      children: "In-text citations, made dead simple."
    }), "\n", createVNode(_components.p, {
      children: "With the help of the CiteDrive Companion browser add-on, inserting in-text citations to your Overleaf paper is a snap. Simply place your cursor within the editor, click the \u201Cinsert citation\u201D button along the top of the screen, select the reference of interest and confirm."
    }), "\n", createVNode(_components.h3, {
      id: "collect-references-from-anywhere",
      children: "Collect references from anywhere"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive Companion improves life outside the editor as well by empowering you to quickly collect references where you find them. Whether you prefer to use PubMed, Google Scholar or other resources for discovering references, you can quickly generate, customize and add BibTeX entries to your project and immediately make them available for citation in your Overleaf paper."
    }), "\n", createVNode(_components.h3, {
      id: "natively-biblatex---not-an-afterthought",
      children: "Natively Bib[La]TeX - not an afterthought."
    }), "\n", createVNode(_components.p, {
      children: "Most reference managers with BibTeX / BibLaTeX support do so as a conversion or translation and you lose out on much of the benefit and rich control offered by handcrafting your references. Because CiteDrive is built natively for Bib[La]TeX, you maintain full control and can leverage custom fields as you please. You shouldn\u2019t be forced to choose between ease and utility."
    }), "\n", createVNode(_components.h3, {
      id: "collaborative-just-like-overleaf",
      children: "Collaborative, just like Overleaf"
    }), "\n", createVNode(_components.p, {
      children: "We believe collaborative writing and collaborative reference management go hand-in-hand. Add collaborators to your CiteDrive project just as you would with your Overleaf paper so collecting references can be a team effort."
    }), "\n", createVNode(_components.p, {
      children: "At last, focus on authoring your paper instead of worrying about keeping your references and citations in sync. Thanks to the seamless integration between CiteDrive and Overleaf, you can now effortlessly add in-text citations to your paper without ever leaving your Overleaf project."
    }), "\n", createVNode(_components.h2, {
      id: "getting-started",
      children: "Getting started"
    }), "\n", createVNode(_components.p, {
      children: "Starting to use Overleaf and CiteDrive together can be done in less than a couple of minutes:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "First, sign up for a CiteDrive account (it\u2019s free!) and create your first Overleaf-type project"
      }), "\n", createVNode(_components.li, {
        children: ["Install the CiteDrive Companion plugin appropriate for your browser:", createVNode(_components.br, {}), "\n", createVNode(_components.a, {
          href: "https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik",
          children: "Add-on for chrome"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
          href: "https://addons.mozilla.org/af/firefox/addon/citedrive-companion/",
          children: "Add-on for firefox"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Head over to Google Scholar, Pubmed, or another academic research site and collect your reference or two"
      }), "\n", createVNode(_components.li, {
        children: "Head to Overleaf and start authoring a paper (or open an existing one)"
      }), "\n", createVNode(_components.li, {
        children: "Connect your paper and CiteDrive project"
      }), "\n", createVNode(_components.li, {
        children: "Click Insert Citation at the top of the editing screen to insert your first in-text citation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Complete instructions may be found in the\xA0", createVNode(_components.a, {
        href: "https://docs.citedrive.com/",
        children: "docs"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "where-can-i-read-more-overleaf--citedrive",
      children: "Where can I read more Overleaf + Citedrive?"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf",
        children: "Check out our featured guest post on the Overleaf blog"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://citedrive.medium.com/citedrive-january-2022-release-497d3a5abdb6",
        children: "Read our most recent release announcement"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://docs.citedrive.com/",
        children: "Follow the quick start guide in the docs"
      })
    }), "\n", createVNode(_components.h2, {
      id: "about-overleaf",
      children: "About Overleaf"
    }), "\n", createVNode(_components.p, {
      children: "Overleaf empowers teams of students and researchers to collaboratively write papers from anywhere in an easy-to-use, online LaTeX editor. With the addition of one of many available packages\u2013 such as BibTeX\u2013 Overleaf can also automatically generate in-text citations and bibliographies based on reference keys pulled from a flat BibTeX database file. When combined with CiteDrive and the CiteDrive Companion browser add-on, manually maintaining your BibTeX database as well as the guesswork of writing in-text citation snippets becomes a thing of the past. Focus on the work at hand and Cite The Way You Write."
    }), "\n", createVNode(_components.h2, {
      id: "about-citedrive",
      children: "About CiteDrive"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive was born out of a common refrain among our team, friends, and fellow academics that managing references felt so clunky compared with today\u2019s consumer-grade tools and collaborative editors. Worse yet, there weren\u2019t really any good solutions that were truly built to serve those authoring LaTeX instead of it merely being an afterthought."
    }), "\n", createVNode(_components.p, {
      children: "After a couple of initial failed experiments, the first end-to-end experience focusing on Overleaf users was piloted in fall 2021 and quickly evolved into the platform as it exists today."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive continues to relentlessly focus on refining and simplifying the experience of discovering references and citing as you write. After a couple of initial failed experiments, the first end-to-end experience focusing on Overleaf users was piloted in fall 2021 and quickly evolved into the platform as it exists today."
    })]
  });
}

function MDXContent$w(props = {}) {
  return createVNode(MDXLayout$w, { ...props,
    children: createVNode(_createMdxContent$w, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$w, "astro:jsx");

__astro_tag_component__(MDXContent$w, "astro:jsx");
MDXContent$w[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$w.layout);
const url$w = "/overleaf/";
const file$w = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/overleaf/index.mdx";
function rawContent$w() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$w() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$w = MDXContent$w;

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$w,
  compiledContent: compiledContent$w,
  default: MDXContent$w,
  file: file$w,
  frontmatter: frontmatter$w,
  getHeadings: getHeadings$w,
  prerender: prerender$A,
  rawContent: rawContent$w,
  url: url$w
}, Symbol.toStringTag, { value: 'Module' }));

const pages = [
	{
		type: "Base styles",
		bibtex: "acm",
		overleaf: true
	},
	{
		type: "Base styles",
		bibtex: "unsrt",
		overleaf: true
	},
	{
		type: "Base styles",
		bibtex: "acm",
		overleaf: true
	},
	{
		type: "Base styles",
		bibtex: "abbrv",
		overleaf: true
	},
	{
		type: "Base styles",
		bibtex: "siam",
		overleaf: true
	},
	{
		type: "Base styles",
		bibtex: "alpha",
		overleaf: true
	},
	{
		type: "Base styles",
		bibtex: "apalike",
		overleaf: true
	},
	{
		type: "Base styles",
		bibtex: "ieeetr",
		overleaf: true
	},
	{
		type: "Base styles",
		bibtex: "plain",
		overleaf: true
	},
	{
		type: "abntex2",
		bibtex: "abntex2-num",
		overleaf: true
	},
	{
		type: "abntex2",
		bibtex: "abntex2-alf",
		overleaf: true
	},
	{
		type: "abstyles",
		bibtex: "aplain",
		overleaf: true
	},
	{
		type: "abstyles",
		bibtex: "aabbrv",
		overleaf: true
	},
	{
		type: "abstyles",
		bibtex: "aalpha",
		overleaf: true
	},
	{
		type: "abstyles",
		bibtex: "anotit",
		overleaf: true
	},
	{
		type: "abstyles",
		bibtex: "aunsnot",
		overleaf: true
	},
	{
		type: "abstyles",
		bibtex: "aunsrt",
		overleaf: true
	},
	{
		type: "achemso",
		bibtex: "achemso",
		overleaf: true
	},
	{
		type: "achemso",
		bibtex: "biochem",
		overleaf: true
	},
	{
		type: "adfathesis",
		bibtex: "adfathesis",
		overleaf: true
	},
	{
		type: "adrconv",
		bibtex: "adrbirthday",
		overleaf: true
	},
	{
		type: "adrconv",
		bibtex: "adrfax",
		overleaf: true
	},
	{
		type: "adrconv",
		bibtex: "adrconv",
		overleaf: true
	},
	{
		type: "afthesis",
		bibtex: "thesnumb",
		overleaf: true
	},
	{
		type: "aguplus",
		bibtex: "agufull",
		overleaf: true
	},
	{
		type: "aguplus",
		bibtex: "agufull04",
		overleaf: true
	},
	{
		type: "aguplus",
		bibtex: "agu04",
		overleaf: true
	},
	{
		type: "aguplus",
		bibtex: "agu",
		overleaf: true
	},
	{
		type: "aiaa",
		bibtex: "aiaa",
		overleaf: true
	},
	{
		type: "aichej",
		bibtex: "aichej",
		overleaf: true
	},
	{
		type: "ajl",
		bibtex: "ajl",
		overleaf: true
	},
	{
		type: "ametsoc",
		bibtex: "ametsoc",
		overleaf: true
	},
	{
		type: "ametsoc",
		bibtex: "amsry",
		overleaf: true
	},
	{
		type: "amsrefs",
		bibtex: "amsra",
		overleaf: true
	},
	{
		type: "amsrefs",
		bibtex: "amsrn",
		overleaf: true
	},
	{
		type: "amsrefs",
		bibtex: "amsru",
		overleaf: true
	},
	{
		type: "amsrefs",
		bibtex: "amsrs",
		overleaf: true
	},
	{
		type: "amscls",
		bibtex: "amsalpha",
		overleaf: true
	},
	{
		type: "amscls",
		bibtex: "amsplain",
		overleaf: true
	},
	{
		type: "aomart",
		bibtex: "aomplain",
		overleaf: true
	},
	{
		type: "aomart",
		bibtex: "aomalpha",
		overleaf: true
	},
	{
		type: "apacite",
		bibtex: "apacann",
		overleaf: true
	},
	{
		type: "apacite",
		bibtex: "apacite",
		overleaf: true
	},
	{
		type: "apacite",
		bibtex: "apacitex",
		overleaf: true
	},
	{
		type: "apacite",
		bibtex: "apacannx",
		overleaf: true
	},
	{
		type: "apalike2",
		bibtex: "apalike2",
		overleaf: true
	},
	{
		type: "ascelike",
		bibtex: "ascelike",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "bababbrv-lf",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babunsrt-fl",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "bababbr3-lf",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babalpha-fl",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "bababbr3",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babplai3-fl",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babplai3",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babalpha-lf",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babplai3-lf",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babplain",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babunsrt-lf",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babalpha",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "bababbr3-fl",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babunsrt",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "bababbrv-fl",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babplain-fl",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babamspl",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "bababbrv",
		overleaf: true
	},
	{
		type: "babelbib",
		bibtex: "babplain-lf",
		overleaf: true
	},
	{
		type: "besjournals",
		bibtex: "besjournals",
		overleaf: true
	},
	{
		type: "bibexport",
		bibtex: "export",
		overleaf: true
	},
	{
		type: "bibexport",
		bibtex: "expkeys",
		overleaf: true
	},
	{
		type: "bibexport",
		bibtex: "expcites",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "unsrt-fr",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "siam-fr",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "alpha-fr",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "abbrv-fr",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "unsrtnat-fr",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "abbrvnat-fr",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "apalike-fr",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "plain-fr",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "ieeetr-fr",
		overleaf: true
	},
	{
		type: "bib-fr",
		bibtex: "plainnat-fr",
		overleaf: true
	},
	{
		type: "bibhtml",
		bibtex: "alphahtmldater",
		overleaf: true
	},
	{
		type: "bibhtml",
		bibtex: "alphahtml",
		overleaf: true
	},
	{
		type: "bibhtml",
		bibtex: "alphahtmldate",
		overleaf: true
	},
	{
		type: "bibhtml",
		bibtex: "abbrvhtml",
		overleaf: true
	},
	{
		type: "bibhtml",
		bibtex: "plainhtml",
		overleaf: true
	},
	{
		type: "bibhtml",
		bibtex: "plainhtmldater",
		overleaf: true
	},
	{
		type: "bibhtml",
		bibtex: "unsrthtml",
		overleaf: true
	},
	{
		type: "bibhtml",
		bibtex: "plainhtmldate",
		overleaf: true
	},
	{
		type: "bgteubner",
		bibtex: "bgteuabbr2",
		overleaf: true
	},
	{
		type: "bgteubner",
		bibtex: "bgteuabbr",
		overleaf: true
	},
	{
		type: "bgteubner",
		bibtex: "bgteupln3",
		overleaf: true
	},
	{
		type: "bgteubner",
		bibtex: "bgteupln",
		overleaf: true
	},
	{
		type: "bgteubner",
		bibtex: "bgteupln2",
		overleaf: true
	},
	{
		type: "cascadilla",
		bibtex: "cascadilla",
		overleaf: true
	},
	{
		type: "cell",
		bibtex: "cell",
		overleaf: true
	},
	{
		type: "chembst",
		bibtex: "ChemCommun",
		overleaf: true
	},
	{
		type: "chembst",
		bibtex: "ChemEurJ",
		overleaf: true
	},
	{
		type: "chembst",
		bibtex: "InorgChem",
		overleaf: true
	},
	{
		type: "chembst",
		bibtex: "JAmChemSoc",
		overleaf: true
	},
	{
		type: "chembst",
		bibtex: "cv",
		overleaf: true
	},
	{
		type: "chembst",
		bibtex: "JAmChemSoc_all",
		overleaf: true
	},
	{
		type: "chem-journal",
		bibtex: "pccp",
		overleaf: true
	},
	{
		type: "chem-journal",
		bibtex: "jcc",
		overleaf: true
	},
	{
		type: "chem-journal",
		bibtex: "jpc",
		overleaf: true
	},
	{
		type: "chem-journal",
		bibtex: "revcompchem",
		overleaf: true
	},
	{
		type: "chet",
		bibtex: "chetref",
		overleaf: true
	},
	{
		type: "chscite",
		bibtex: "chscite",
		overleaf: true
	},
	{
		type: "chicago",
		bibtex: "chicago",
		overleaf: true
	},
	{
		type: "chicago-annote",
		bibtex: "chicago-annote",
		overleaf: true
	},
	{
		type: "cmpj",
		bibtex: "cmpj",
		overleaf: true
	},
	{
		type: "cnbwp",
		bibtex: "abbrvcnb",
		overleaf: true
	},
	{
		type: "computational-complexity",
		bibtex: "computational-complexity/cc",
		overleaf: true
	},
	{
		type: "computational-complexity",
		bibtex: "computational-complexity/cc2",
		overleaf: true
	},
	{
		type: "confproc",
		bibtex: "newapave",
		overleaf: true
	},
	{
		type: "datatool",
		bibtex: "databib",
		overleaf: true
	},
	{
		type: "din1505",
		bibtex: "alphadin",
		overleaf: true
	},
	{
		type: "din1505",
		bibtex: "natdin",
		overleaf: true
	},
	{
		type: "din1505",
		bibtex: "abbrvdin",
		overleaf: true
	},
	{
		type: "din1505",
		bibtex: "plaindin",
		overleaf: true
	},
	{
		type: "din1505",
		bibtex: "unsrtdin",
		overleaf: true
	},
	{
		type: "dinat",
		bibtex: "dinat",
		overleaf: true
	},
	{
		type: "directory",
		bibtex: "address-ldif",
		overleaf: true
	},
	{
		type: "directory",
		bibtex: "address-vcard",
		overleaf: true
	},
	{
		type: "directory",
		bibtex: "email-html",
		overleaf: true
	},
	{
		type: "directory",
		bibtex: "address-html",
		overleaf: true
	},
	{
		type: "directory",
		bibtex: "email",
		overleaf: true
	},
	{
		type: "directory",
		bibtex: "birthday",
		overleaf: true
	},
	{
		type: "directory",
		bibtex: "address",
		overleaf: true
	},
	{
		type: "directory",
		bibtex: "letter",
		overleaf: true
	},
	{
		type: "directory",
		bibtex: "phone",
		overleaf: true
	},
	{
		type: "disser",
		bibtex: "gost705s",
		overleaf: true
	},
	{
		type: "disser",
		bibtex: "gost705",
		overleaf: true
	},
	{
		type: "dk-bib",
		bibtex: "dk-alpha",
		overleaf: true
	},
	{
		type: "dk-bib",
		bibtex: "dk-apali",
		overleaf: true
	},
	{
		type: "dk-bib",
		bibtex: "dk-unsrt",
		overleaf: true
	},
	{
		type: "dk-bib",
		bibtex: "dk-plain",
		overleaf: true
	},
	{
		type: "dk-bib",
		bibtex: "dk-abbrv",
		overleaf: true
	},
	{
		type: "dlfltxb",
		bibtex: "dlfltxbbibtex",
		overleaf: true
	},
	{
		type: "dtk",
		bibtex: "dtk",
		overleaf: true
	},
	{
		type: "dvdcoll",
		bibtex: "dcbib",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "regstud",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "worlddev",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "aer",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "ecca",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "ier",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "apecon",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "agecon",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "aertt",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "ecta",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "cje",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "jss2",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "erae",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "oega",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "jpe",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "itaxpf",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "ajae",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "jae",
		overleaf: true
	},
	{
		type: "economic",
		bibtex: "tandfx",
		overleaf: true
	},
	{
		type: "elsarticle",
		bibtex: "elsarticle-harv",
		overleaf: true
	},
	{
		type: "elsarticle",
		bibtex: "elsarticle-num-names",
		overleaf: true
	},
	{
		type: "elsarticle",
		bibtex: "elsarticle-num",
		overleaf: true
	},
	{
		type: "fbs",
		bibtex: "fbs",
		overleaf: true
	},
	{
		type: "figbib",
		bibtex: "figbib1",
		overleaf: true
	},
	{
		type: "figbib",
		bibtex: "figbib",
		overleaf: true
	},
	{
		type: "finbib",
		bibtex: "finplain",
		overleaf: true
	},
	{
		type: "francais-bst",
		bibtex: "francais",
		overleaf: true
	},
	{
		type: "francais-bst",
		bibtex: "francaissc",
		overleaf: true
	},
	{
		type: "frankenstein",
		bibtex: "achicago",
		overleaf: true
	},
	{
		type: "gatech-thesis",
		bibtex: "gatech-thesis-losa",
		overleaf: true
	},
	{
		type: "gatech-thesis",
		bibtex: "gatech-thesis",
		overleaf: true
	},
	{
		type: "germbib",
		bibtex: "gerapali",
		overleaf: true
	},
	{
		type: "germbib",
		bibtex: "gerabbrv",
		overleaf: true
	},
	{
		type: "germbib",
		bibtex: "geralpha",
		overleaf: true
	},
	{
		type: "germbib",
		bibtex: "gerplain",
		overleaf: true
	},
	{
		type: "germbib",
		bibtex: "gerunsrt",
		overleaf: true
	},
	{
		type: "gloss",
		bibtex: "glsplain",
		overleaf: true
	},
	{
		type: "gloss",
		bibtex: "glsshort",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost2008s",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "ugost2008",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost2008l",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost2008",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "ugost2008ls",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost2003",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "ugost2008n",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "ugost2008ns",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "ugost2003s",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost2008ns",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "ugost2003",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "ugost2008s",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost780",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost2008ls",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "ugost2008l",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost780s",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost2003s",
		overleaf: true
	},
	{
		type: "gost",
		bibtex: "gost2008n",
		overleaf: true
	},
	{
		type: "gustlib",
		bibtex: "plunsrt",
		overleaf: true
	},
	{
		type: "gustlib",
		bibtex: "plalpha",
		overleaf: true
	},
	{
		type: "gustlib",
		bibtex: "plplain",
		overleaf: true
	},
	{
		type: "gustlib",
		bibtex: "plabbrv",
		overleaf: true
	},
	{
		type: "harvard",
		bibtex: "dcu",
		overleaf: true
	},
	{
		type: "harvard",
		bibtex: "kluwer",
		overleaf: true
	},
	{
		type: "harvard",
		bibtex: "jphysicsB",
		overleaf: true
	},
	{
		type: "harvard",
		bibtex: "jmr",
		overleaf: true
	},
	{
		type: "harvard",
		bibtex: "agsm",
		overleaf: true
	},
	{
		type: "harvard",
		bibtex: "apsr",
		overleaf: true
	},
	{
		type: "harvard",
		bibtex: "nederlands",
		overleaf: true
	},
	{
		type: "hc",
		bibtex: "hc-de",
		overleaf: true
	},
	{
		type: "hc",
		bibtex: "hc-en",
		overleaf: true
	},
	{
		type: "ieeepes",
		bibtex: "ieeepes",
		overleaf: true
	},
	{
		type: "ieeepes",
		bibtex: "IEEEtranN",
		overleaf: true
	},
	{
		type: "ieeepes",
		bibtex: "IEEEtranS",
		overleaf: true
	},
	{
		type: "ieeepes",
		bibtex: "IEEEtran",
		overleaf: true
	},
	{
		type: "ieeepes",
		bibtex: "IEEEtranSA",
		overleaf: true
	},
	{
		type: "ieeepes",
		bibtex: "IEEEtranSN",
		overleaf: true
	},
	{
		type: "ijmart",
		bibtex: "ijmart",
		overleaf: true
	},
	{
		type: "ijqc",
		bibtex: "ijqc",
		overleaf: true
	},
	{
		type: "imac",
		bibtex: "imac",
		overleaf: true
	},
	{
		type: "index",
		bibtex: "xagsm",
		overleaf: true
	},
	{
		type: "index",
		bibtex: "xplain",
		overleaf: true
	},
	{
		type: "inlinebib",
		bibtex: "inlinebib",
		overleaf: true
	},
	{
		type: "iopart-num",
		bibtex: "iopart-num",
		overleaf: true
	},
	{
		type: "jneurosci",
		bibtex: "jneurosci",
		overleaf: true
	},
	{
		type: "jurabib",
		bibtex: "jurabib",
		overleaf: true
	},
	{
		type: "jurabib",
		bibtex: "jurunsrt",
		overleaf: true
	},
	{
		type: "jurabib",
		bibtex: "jureco",
		overleaf: true
	},
	{
		type: "jurabib",
		bibtex: "jox",
		overleaf: true
	},
	{
		type: "jurarsp",
		bibtex: "jurarsp",
		overleaf: true
	},
	{
		type: "kluwer",
		bibtex: "klunum",
		overleaf: true
	},
	{
		type: "kluwer",
		bibtex: "klunamed",
		overleaf: true
	},
	{
		type: "ksfh_nat",
		bibtex: "ksfh_nat",
		overleaf: true
	},
	{
		type: "listbib",
		bibtex: "listbib",
		overleaf: true
	},
	{
		type: "mciteplus",
		bibtex: "IEEEtranMN",
		overleaf: true
	},
	{
		type: "mciteplus",
		bibtex: "apsrmpM",
		overleaf: true
	},
	{
		type: "mciteplus",
		bibtex: "apsrevM",
		overleaf: true
	},
	{
		type: "mciteplus",
		bibtex: "IEEEtranM",
		overleaf: true
	},
	{
		type: "minitoc",
		bibtex: "fr-mtc",
		overleaf: true
	},
	{
		type: "minitoc",
		bibtex: "en-mtc",
		overleaf: true
	},
	{
		type: "mslapa",
		bibtex: "mslapa",
		overleaf: true
	},
	{
		type: "multibib",
		bibtex: "mbplain",
		overleaf: true
	},
	{
		type: "multibib",
		bibtex: "mbunsrtdin",
		overleaf: true
	},
	{
		type: "multibibliography",
		bibtex: "chronological",
		overleaf: true
	},
	{
		type: "munich",
		bibtex: "munich",
		overleaf: true
	},
	{
		type: "natbib",
		bibtex: "abbrvnat",
		overleaf: true
	},
	{
		type: "natbib",
		bibtex: "unsrtnat",
		overleaf: true
	},
	{
		type: "natbib",
		bibtex: "plainnat",
		overleaf: true
	},
	{
		type: "nature",
		bibtex: "naturemag",
		overleaf: true
	},
	{
		type: "nddiss",
		bibtex: "nddiss2e",
		overleaf: true
	},
	{
		type: "opcit",
		bibtex: "opcit",
		overleaf: true
	},
	{
		type: "pbibtex",
		bibtex: "jabbrv",
		overleaf: true
	},
	{
		type: "pbibtex",
		bibtex: "jname",
		overleaf: true
	},
	{
		type: "pbibtex",
		bibtex: "jplain",
		overleaf: true
	},
	{
		type: "pbibtex",
		bibtex: "tipsj",
		overleaf: true
	},
	{
		type: "pbibtex",
		bibtex: "junsrt",
		overleaf: true
	},
	{
		type: "pbibtex",
		bibtex: "jorsj",
		overleaf: true
	},
	{
		type: "pbibtex",
		bibtex: "tieice",
		overleaf: true
	},
	{
		type: "pbibtex",
		bibtex: "jipsj",
		overleaf: true
	},
	{
		type: "pbibtex",
		bibtex: "jalpha",
		overleaf: true
	},
	{
		type: "perception",
		bibtex: "perception",
		overleaf: true
	},
	{
		type: "persian-bib",
		bibtex: "acm-fa",
		overleaf: true
	},
	{
		type: "persian-bib",
		bibtex: "ieeetr-fa",
		overleaf: true
	},
	{
		type: "persian-bib",
		bibtex: "chicago-fa",
		overleaf: true
	},
	{
		type: "persian-bib",
		bibtex: "asa-fa",
		overleaf: true
	},
	{
		type: "persian-bib",
		bibtex: "unsrt-fa",
		overleaf: true
	},
	{
		type: "persian-bib",
		bibtex: "plainnat-fa",
		overleaf: true
	},
	{
		type: "persian-bib",
		bibtex: "plain-fa",
		overleaf: true
	},
	{
		type: "pnas2009",
		bibtex: "pnas2009",
		overleaf: true
	},
	{
		type: "przechlewski-book",
		bibtex: "papalike",
		overleaf: true
	},
	{
		type: "psu-thesis",
		bibtex: "psuthesis",
		overleaf: true
	},
	{
		type: "resphilosophica",
		bibtex: "resphilosophica",
		overleaf: true
	},
	{
		type: "revtex",
		bibtex: "apsrmp4-1",
		overleaf: true
	},
	{
		type: "revtex",
		bibtex: "aipauth4-1",
		overleaf: true
	},
	{
		type: "revtex",
		bibtex: "apsrev4-1",
		overleaf: true
	},
	{
		type: "revtex",
		bibtex: "aipnum4-1",
		overleaf: true
	},
	{
		type: "revtex4",
		bibtex: "apsrev",
		overleaf: true
	},
	{
		type: "revtex4",
		bibtex: "apsrmp",
		overleaf: true
	},
	{
		type: "rsc",
		bibtex: "angew",
		overleaf: true
	},
	{
		type: "rsc",
		bibtex: "rsc",
		overleaf: true
	},
	{
		type: "sageep",
		bibtex: "sageep",
		overleaf: true
	},
	{
		type: "sapthesis",
		bibtex: "sapthesis",
		overleaf: true
	},
	{
		type: "savetrees",
		bibtex: "savetrees",
		overleaf: true
	},
	{
		type: "seuthesis",
		bibtex: "seuthesis",
		overleaf: true
	},
	{
		type: "shipunov",
		bibtex: "rusnat",
		overleaf: true
	},
	{
		type: "sort-by-letters",
		bibtex: "alpha-letters",
		overleaf: true
	},
	{
		type: "sort-by-letters",
		bibtex: "siam-letters",
		overleaf: true
	},
	{
		type: "sort-by-letters",
		bibtex: "frplainnat-letters",
		overleaf: true
	},
	{
		type: "sort-by-letters",
		bibtex: "abbrv-letters",
		overleaf: true
	},
	{
		type: "sort-by-letters",
		bibtex: "apalike-letters",
		overleaf: true
	},
	{
		type: "sort-by-letters",
		bibtex: "plain-letters",
		overleaf: true
	},
	{
		type: "sort-by-letters",
		bibtex: "plainnat-letters",
		overleaf: true
	},
	{
		type: "spie",
		bibtex: "spiebib",
		overleaf: true
	},
	{
		type: "stellenbosch",
		bibtex: "usmeg-a",
		overleaf: true
	},
	{
		type: "stellenbosch",
		bibtex: "ussagus",
		overleaf: true
	},
	{
		type: "stellenbosch",
		bibtex: "usmeg-n",
		overleaf: true
	},
	{
		type: "swebib",
		bibtex: "sweunsrt",
		overleaf: true
	},
	{
		type: "swebib",
		bibtex: "sweplnat",
		overleaf: true
	},
	{
		type: "swebib",
		bibtex: "sweabbrv",
		overleaf: true
	},
	{
		type: "swebib",
		bibtex: "sweplain",
		overleaf: true
	},
	{
		type: "swebib",
		bibtex: "swealpha",
		overleaf: true
	},
	{
		type: "texsis",
		bibtex: "texsis",
		overleaf: true
	},
	{
		type: "thuthesis",
		bibtex: "thubib",
		overleaf: true
	},
	{
		type: "tugboat",
		bibtex: "ltugbib",
		overleaf: true
	},
	{
		type: "udesoftec",
		bibtex: "udesoftec",
		overleaf: true
	},
	{
		type: "uestcthesis",
		bibtex: "uestcthesis",
		overleaf: true
	},
	{
		type: "unamthesis",
		bibtex: "UNAMThesis",
		overleaf: true
	},
	{
		type: "urlbst",
		bibtex: "abbrvurl",
		overleaf: true
	},
	{
		type: "urlbst",
		bibtex: "unsrturl",
		overleaf: true
	},
	{
		type: "urlbst",
		bibtex: "alphaurl",
		overleaf: true
	},
	{
		type: "urlbst",
		bibtex: "plainurl",
		overleaf: true
	},
	{
		type: "vak",
		bibtex: "vak",
		overleaf: true
	},
	{
		type: "vancouver",
		bibtex: "vancouver",
		overleaf: true
	}
];

const $$Astro$3 = createAstro();
const prerender$z = true;
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": "All BibTeX bibliography styles available on Overleaf", "descpription": "All BibTeX bibliography styles available on Overleaf", "lang": "en" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>All bibliography BibTeX styles available on Overleaf</h1>${pages.map(({ bibtex: bibtex2, type }) => renderTemplate`<a${addAttribute(bibtex2 + "/", "href")}${addAttribute(bibtex2, "title")}><b>${bibtex2}</b> (${type})</a><br>`)}` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/overleaf/bibtex/bibliography-styles/index.astro");

const $$file$3 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/overleaf/bibtex/bibliography-styles/index.astro";
const $$url$3 = "/overleaf/bibtex/bibliography-styles/";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$3,
  prerender: prerender$z,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const prerender$y = true;
async function getStaticPaths() {
  return pages.map(({ bibtex }) => {
    return {
      params: { bibtex },
      props: { bibtex }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$;
  const { bibtex } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": "How to use the BibTeX " + bibtex + " Bibliography style in Overleaf", "descpription": bibtex, "lang": "en", "class": "astro-BTYVL74S" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1 class="astro-BTYVL74S">Can you use the <b class="astro-BTYVL74S">${bibtex}</b> BibTeX bibliography style in Overleaf?</h1><p class="astro-BTYVL74S">The answer is yes! The <b class="astro-BTYVL74S">${bibtex}</b> bibliography style is one of many built-in styles in Overleaf. Use this style by typing <code class="astro-BTYVL74S">\\bibliographystyle(${bibtex})</code> in your tex-document, or use the following example for a new document on Overleaf:</p><pre class="astro-code astro-BTYVL74S" style="background-color: #0d1117; overflow-x: auto;"><code class="astro-BTYVL74S"><span class="line astro-BTYVL74S"><span style="color: #FF7B72" class="astro-BTYVL74S">\\documentclass</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#123;</span><span style="color: #79C0FF" class="astro-BTYVL74S">article</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#125;</span></span>
  <span class="line astro-BTYVL74S"><span style="color: #FF7B72" class="astro-BTYVL74S">\\usepackage</span><span style="color: #C9D1D9" class="astro-BTYVL74S">[utf8]&#123;</span><span style="color: #79C0FF" class="astro-BTYVL74S">inputenc</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#125;</span></span>
  <span class="line astro-BTYVL74S"></span>
  <span class="line astro-BTYVL74S"><span style="color: #79C0FF" class="astro-BTYVL74S">\\title</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#123;A LaTeX example of BibTeX references </span></span>
  <span class="line astro-BTYVL74S"><span style="color: #C9D1D9" class="astro-BTYVL74S">using the ${bibtex} bibliography style.&#125;</span></span>
  <span class="line astro-BTYVL74S"><span style="color: #79C0FF" class="astro-BTYVL74S">\\author</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#123;John Smith&#125;</span></span>
  <span class="line astro-BTYVL74S"></span>
  <span class="line astro-BTYVL74S"><span style="color: #79C0FF" class="astro-BTYVL74S">\\begin</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#123;document&#125;</span></span>
  <span class="line astro-BTYVL74S"></span>
  <span class="line astro-BTYVL74S"><span style="color: #79C0FF" class="astro-BTYVL74S">\\maketitle</span></span>
  <span class="line astro-BTYVL74S"></span>
  <span class="line astro-BTYVL74S"><span style="color: #C9D1D9" class="astro-BTYVL74S">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></span>
  <span class="line astro-BTYVL74S"><span style="color: #C9D1D9" class="astro-BTYVL74S">Praesent enim urna, dapibus et bibendum vel, </span></span>
  <span class="line astro-BTYVL74S"><span style="color: #C9D1D9" class="astro-BTYVL74S">consectetur et turpis. </span></span>
  <span class="line astro-BTYVL74S"><span style="color: #C9D1D9" class="astro-BTYVL74S">Cras a molestie nulla. </span><span style="color: #FF7B72" class="astro-BTYVL74S">\\cite</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#123;</span><span style="color: #79C0FF" class="astro-BTYVL74S">Hemingway1952</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#125;</span></span>
  <span class="line astro-BTYVL74S"><span style="color: #79C0FF" class="astro-BTYVL74S">\\medskip</span></span>
  <span class="line astro-BTYVL74S"></span>
  <span class="line astro-BTYVL74S"><span style="color: #79C0FF" class="astro-BTYVL74S">\\bibliographystyle</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#123;${bibtex}&#125;</span></span>
  <span class="line astro-BTYVL74S"><span style="color: #79C0FF" class="astro-BTYVL74S">\\bibliography</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#123;bibliography&#125;</span></span>
  <span class="line astro-BTYVL74S"></span>
  <span class="line astro-BTYVL74S"><span style="color: #79C0FF" class="astro-BTYVL74S">\\end</span><span style="color: #C9D1D9" class="astro-BTYVL74S">&#123;document&#125;</span></span>
  <span class="line astro-BTYVL74S"></span></code></pre><p class="astro-BTYVL74S">BibTeX is a powerful bibliographic tool used to create bibliographies in LaTeX documents. It is one of the most widely used bibliography tools and supports many different bibliography styles and citation formats.</p><p class="astro-BTYVL74S">While Overleaf does not currently support all bibliography styles compatible with BibTeX, many bibliography styles are included in the bibtex bibliography style library. These bibliography styles include APA, IEEE, CSE, and Chicago citation formats. You can also use custom bibliography styles by creating your bibtex bibliography format file or importing one from another source.</p><p class="astro-BTYVL74S">Whether using BibTeX on your own or through Overleaf, it is an essential tool for creating bibliographies in scientific and technical documents. To learn more about bibliography management with bibtex and Overleaf, visit bibtex.eu or our docs!</p><h2 class="astro-BTYVL74S">Are you looking for a Collaborative Online tool to manage your BibTeX reference, which connects to Overleaf?</h2><p class="astro-BTYVL74S">If you're looking for an online tool to help manage your references, citations, and bibliography in Overleaf, CiteDrive may be perfect! It allows you to collect and organize teams and references in projects while keeping your BibTeX entries up to date in your Overleaf project. </p><p class="astro-BTYVL74S">You can also use CiteDrive to create bibliographies and citations in various styles, including ${bibtex}. So if you're looking for an easy way to manage your bibliography in Overleaf, give CiteDrive a try today!</p><p class="astro-BTYVL74S">You can find more information on how to do this in our online help documentation.</p>` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/overleaf/bibtex/bibliography-styles/[...bibtex].astro");

const $$file$2 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/overleaf/bibtex/bibliography-styles/[...bibtex].astro";
const $$url$2 = "/overleaf/bibtex/bibliography-styles/[...bibtex]/";

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$2,
  getStaticPaths,
  prerender: prerender$y,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const prerender$x = true;
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${maybeRenderHead($$result)}<h1>pricing</h1>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/pricing.astro");

const $$file$1 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/pricing.astro";
const $$url$1 = "/pricing/";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file$1,
  prerender: prerender$x,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$v = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$v;
  content.file = file$v;
  content.url = url$v;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$v,
    url: url$v,
    content,
    frontmatter: content,
    headings: getHeadings$v(),
    "server:root": true,
    children
  });
};
const frontmatter$v = {
  "title": "Reference Manager for Overleaf with CiteDrive",
  "layout": "../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "natbib",
  "lang": "en"
};
function getHeadings$v() {
  return [{
    "depth": 1,
    "slug": "reference-manager-for-quarto-rstudio-with-citedrive",
    "text": "Reference Manager for Quarto (RStudio) with CiteDrive"
  }, {
    "depth": 2,
    "slug": "step-1-adding-references-to-your-project",
    "text": "Step 1: Adding references to your project"
  }, {
    "depth": 2,
    "slug": "step-2-synchronize-your-quarto-document-with-citedrive",
    "text": "Step 2: Synchronize your Quarto document with CiteDrive"
  }, {
    "depth": 2,
    "slug": "step-3-copy-citation-keys",
    "text": "Step 3: Copy citation keys"
  }];
}
const prerender$w = true;

function _createMdxContent$v(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    img: "img",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "reference-manager-for-quarto-rstudio-with-citedrive",
      children: "Reference Manager for Quarto (RStudio) with CiteDrive"
    }), "\n", createVNode(_components.p, {
      children: "If you need to insert citations into your Quarto documents, then CiteDrive for RStudio is a great option. With CiteDrive, you can easily manage your bibliography and insert references into your documents. In this tutorial, we\u2019ll show you how to get started."
    }), "\n", createVNode(_components.p, {
      children: "We\u2019ll walk you through setting up a CiteDrive account and importing references into RStudio. Then we\u2019ll show you how to insert citations into a Quarto document. Let\u2019s get started!"
    }), "\n", createVNode(_components.h2, {
      id: "step-1-adding-references-to-your-project",
      children: "Step 1: Adding references to your project"
    }), "\n", createVNode(_components.p, {
      children: "To get started, you must create a CiteDrive account by going to the website and clicking the sign-up button. Once your account is completed, you can create an \u201CR-Markdown\u201D project. This involves giving your project a name and filling it with references. Your project might resemble the following:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/6aaaeb72-adf1-476e-aa26-fe9f480bf865_FZ-PoGiXwAE35Bi.jpg?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-2-synchronize-your-quarto-document-with-citedrive",
      children: "Step 2: Synchronize your Quarto document with CiteDrive"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s get your new CiteDrive synced up with your Quarto document. To do this, click on the \u201Cbib\u201D button, which will open a new tab containing all your BibTeX entries."
    }), "\n", createVNode(_components.p, {
      children: "Copy the URL from the new tab and paste it into the YAML section of your QMD file."
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7EE787"
            },
            children: "bibliography"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "'URL'"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "---"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-3-copy-citation-keys",
      children: "Step 3: Copy citation keys"
    }), "\n", createVNode(_components.p, {
      children: "After you import your references, go back to your CiteDrive project. Choose one or more references you want to use in your document, and click the cite button. This will copy the citation key onto your clipboard so that you can insert it into your Quarto document."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/1f3b71e6-9746-4c33-91b9-df87be5415be_1_4KGAOkDIyUnvxOYDB58hQw.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "In your Quarto document, paste your citation key in the desired passage."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/a7483d1e-c708-4bad-b62c-2bb0ecb6d559_Screen_Recording_2022-08-23_at_10_47_45_AdobeExpress.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "After you insert the key in the proper section, click \u201Crender.\u201D The in-text citation will then appear in your specified style, and the reference will be placed at the end of your document."
    }), "\n", createVNode(_components.p, {
      children: "In conclusion, CiteDrive is an excellent tool for keeping track of your bibliography and adding citations to your Quarto documents. Try it out today to see how much easier it can make your life."
    })]
  });
}

function MDXContent$v(props = {}) {
  return createVNode(MDXLayout$v, { ...props,
    children: createVNode(_createMdxContent$v, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$v, "astro:jsx");

__astro_tag_component__(MDXContent$v, "astro:jsx");
MDXContent$v[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$v.layout);
const url$v = "/quarto/";
const file$v = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/quarto.mdx";
function rawContent$v() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$v() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$v = MDXContent$v;

const _page13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$v,
  compiledContent: compiledContent$v,
  default: MDXContent$v,
  file: file$v,
  frontmatter: frontmatter$v,
  getHeadings: getHeadings$v,
  prerender: prerender$w,
  rawContent: rawContent$v,
  url: url$v
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const prerender$v = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx": () => Promise.resolve().then(() => _page15),"./citation-keys-in-bibtex.mdx": () => Promise.resolve().then(() => _page32),"./citedrive-3.0-information-on-the-upcoming-version.mdx": () => Promise.resolve().then(() => _page21),"./citedrive-companion-for-overleaf-and-rstudio.mdx": () => Promise.resolve().then(() => _page25),"./citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx": () => Promise.resolve().then(() => _page16),"./citedrive-forum-has-moved-to-github-discussions.mdx": () => Promise.resolve().then(() => _page23),"./citedrive-january-2022-release.mdx": () => Promise.resolve().then(() => _page30),"./citedrive-november-2021-release.mdx": () => Promise.resolve().then(() => _page28),"./codemirror-6-a-new-source-editor-for-overleaf.mdx": () => Promise.resolve().then(() => _page24),"./data-visualization-packages-for-r-you-should-check-out.mdx": () => Promise.resolve().then(() => _page20),"./grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx": () => Promise.resolve().then(() => _page19),"./how-to-cite-a-website-in-bibtex.mdx": () => Promise.resolve().then(() => _page29),"./how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx": () => Promise.resolve().then(() => _page17),"./literature-management-with-overleaf.mdx": () => Promise.resolve().then(() => _page27),"./overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx": () => Promise.resolve().then(() => _page18),"./overleaf-source-editor-upgrade.mdx": () => Promise.resolve().then(() => _page31),"./parenthetical-vs-narrative-citations-in-citedrive.mdx": () => Promise.resolve().then(() => _page22),"./using-natbib-with-bibtex-and-overleaf.mdx": () => Promise.resolve().then(() => _page26)}), () => "../../pages/blog/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  const url = posts[0].url;
  return renderTemplate`<meta http-equiv="refresh"${addAttribute(`0;url=${url}`, "content")}>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/index.astro");

const $$file = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/index.astro";
const $$url = "/blog/";

const _page14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender: prerender$v,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$u = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$u;
  content.file = file$u;
  content.url = url$u;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$u,
    url: url$u,
    content,
    frontmatter: content,
    headings: getHeadings$u(),
    "server:root": true,
    children
  });
};
const frontmatter$u = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Announcing CiteDrive 3.0: keep track of your bibliographies, references, and citations on Overleaf and RStudio",
  "pubDate": "Dec 05 2022",
  "lang": "en"
};
function getHeadings$u() {
  return [{
    "depth": 1,
    "slug": "announcing-citedrive-30-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio",
    "text": "Announcing CiteDrive 3.0: keep track of your bibliographies, references, and citations on Overleaf and RStudio"
  }, {
    "depth": 2,
    "slug": "better-biblatex-overleaf-workflow",
    "text": "Better Bib[La]TeX Overleaf workflow"
  }, {
    "depth": 2,
    "slug": "new-user-interface-and-dark-mode",
    "text": "New user interface and dark mode"
  }, {
    "depth": 2,
    "slug": "reference-bibliography-and-citation-management-in-rstudio-posit-in-quarto-and-r-markdown",
    "text": "Reference, bibliography, and citation management in RStudio (Posit) in Quarto and R Markdown.\xA0"
  }];
}
const prerender$u = true;

function _createMdxContent$u(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "announcing-citedrive-30-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio",
      children: "Announcing CiteDrive 3.0: keep track of your bibliographies, references, and citations on Overleaf and RStudio"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive 3.0 is out now, and it\u2019s better than ever! We\u2019ve made many improvements, including a better design, more focus on reference management with BibTeX, and better performance. If you\u2019re an Overleaf or RStudio user, be sure to check it out."
    }), "\n", createVNode(_components.h2, {
      id: "better-biblatex-overleaf-workflow",
      children: "Better Bib[La]TeX Overleaf workflow"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive has better integration with Overleaf and BibLaTeX support. It\u2019s quick and easy to keep your references well organized, but unlike other modern reference management software, we don\u2019t consider BibTeX an afterthought. References can be added and edited with our BibTeX editor, which offers freedom in terms of fields and types. We are here for you whether you use BibTeX, BibLaTex, jurabib, or JBibTEX.\xA0"
    }), "\n", createVNode(_components.h2, {
      id: "new-user-interface-and-dark-mode",
      children: "New user interface and dark mode"
    }), "\n", createVNode(_components.p, {
      children: "The next update significantly enhances the user experience based on our users\u2019 comments and numerous drafts and prototypes we have been developing for months. Make sure to check out dark mode, too!"
    }), "\n", createVNode(_components.h2, {
      id: "reference-bibliography-and-citation-management-in-rstudio-posit-in-quarto-and-r-markdown",
      children: "Reference, bibliography, and citation management in RStudio (Posit) in Quarto and R Markdown.\xA0"
    }), "\n", createVNode(_components.p, {
      children: "RStudio joins the party and is also compatible with the 3.0 update\u2013adding BibTeX-first referencing to Quarto and R Markdown."
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive allows you to store your references in a different location from your Quarto/R Markdown process. With our RStudio integration, you may wholly and instantly automatically update the status of your bibliography with the Quarto/R Markdown project at any moment - just as with Overleaf."
    })]
  });
}

function MDXContent$u(props = {}) {
  return createVNode(MDXLayout$u, { ...props,
    children: createVNode(_createMdxContent$u, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$u, "astro:jsx");

__astro_tag_component__(MDXContent$u, "astro:jsx");
MDXContent$u[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$u.layout);
const url$u = "/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio/";
const file$u = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx";
function rawContent$u() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$u() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$u = MDXContent$u;

const _page15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$u,
  compiledContent: compiledContent$u,
  default: MDXContent$u,
  file: file$u,
  frontmatter: frontmatter$u,
  getHeadings: getHeadings$u,
  prerender: prerender$u,
  rawContent: rawContent$u,
  url: url$u
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$t = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$t;
  content.file = file$t;
  content.url = url$t;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$t,
    url: url$t,
    content,
    frontmatter: content,
    headings: getHeadings$t(),
    "server:root": true,
    children
  });
};
const frontmatter$t = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "CiteDrive for Bibliography Management in RStudio: Easily Insert References into Quarto Documents",
  "pubDate": "Aug 23 2022",
  "lang": "en"
};
function getHeadings$t() {
  return [{
    "depth": 1,
    "slug": "citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents",
    "text": "CiteDrive for Bibliography Management in RStudio: Easily Insert References into Quarto Documents"
  }, {
    "depth": 2,
    "slug": "step-1-adding-references-to-your-project",
    "text": "Step 1: Adding references to your project"
  }, {
    "depth": 2,
    "slug": "step-2-synchronize-your-quarto-document-with-citedrive",
    "text": "Step 2: Synchronize your Quarto document with CiteDrive"
  }, {
    "depth": 2,
    "slug": "step-3-copy-citation-keys",
    "text": "Step 3: Copy citation keys"
  }];
}
const prerender$t = true;

function _createMdxContent$t(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    a: "a",
    img: "img",
    strong: "strong"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents",
      children: "CiteDrive for Bibliography Management in RStudio: Easily Insert References into Quarto Documents"
    }), "\n", createVNode("i", {
      children: "August 23, 2022 by Gareth"
    }), "\n", createVNode(_components.p, {
      children: "Do you need to insert citations into your Quarto documents? If so, then you\u2019ll want to check out CiteDrive for RStudio. With\xA0CiteDrive, you can easily manage your bibliography and insert references into your documents. In this tutorial, we\u2019ll show you how to get started."
    }), "\n", createVNode(_components.p, {
      children: "We\u2019ll walk you through the steps of setting up a CiteDrive account and importing references into RStudio. Then we\u2019ll show you how to insert citations into a Quarto document. Let\u2019s get started!"
    }), "\n", createVNode(_components.h2, {
      id: "step-1-adding-references-to-your-project",
      children: "Step 1: Adding references to your project"
    }), "\n", createVNode(_components.p, {
      children: ["First, you\u2019ll need to\xA0", createVNode(_components.a, {
        href: "https://app.citedrive.com/sign-up",
        children: "create a CiteDrive account"
      }), ". You can do this by going to the CiteDrive website and clicking on the \u201CSign Up\u201D button. Once you\u2019ve completed your account, you\u2019ll be able to create an\xA0", createVNode(_components.a, {
        href: "https://www.citedrive.com/docs/creating-a-new-project-in-citedrive",
        children: "\u201CR-Markdown\u201D project"
      }), ", give it a name and fill your project with references. Your project could look like this:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/6aaaeb72-adf1-476e-aa26-fe9f480bf865_FZ-PoGiXwAE35Bi.jpg?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-2-synchronize-your-quarto-document-with-citedrive",
      children: "Step 2: Synchronize your Quarto document with CiteDrive"
    }), "\n", createVNode(_components.p, {
      children: ["Now let\u2019s get your new CiteDrive hooked up with your Quarto document. To do this, simply click the \u201C", createVNode(_components.strong, {
        children: "bib"
      }), "\u201D button, which will open up a new tab window containing all your entries in BibTeX format. Copy the URL of the new tab and paste it into the YAML of your QMD file."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/9f8b6b74-81bd-4d01-b4fe-7b7a3c43b139_Screenshot+2022-08-23+at+10.43.39.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-3-copy-citation-keys",
      children: "Step 3: Copy citation keys"
    }), "\n", createVNode(_components.p, {
      children: "Once your references are imported, you can insert them into your Quarto document. To do this, return to your CiteDrive project and one or more references your want to insert into your document and click the cite button. CiteDrive will copy the citation key to your clipboard."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/1f3b71e6-9746-4c33-91b9-df87be5415be_1_4KGAOkDIyUnvxOYDB58hQw.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "Back to your Quarto document and paste your citation key in the desired passage."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/a7483d1e-c708-4bad-b62c-2bb0ecb6d559_Screen_Recording_2022-08-23_at_10_47_45_AdobeExpress.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "After you insert the key to the corresponding section, click \u201Crender.\u201D The in-text citation will be outputted in your desired style, and the reference will appear at the end of your document."
    }), "\n", createVNode(_components.p, {
      children: "So there you have it! With CiteDrive, you can easily manage your bibliography and insert citations into your Quarto documents. Give it a try today and see how it can make your life easier."
    })]
  });
}

function MDXContent$t(props = {}) {
  return createVNode(MDXLayout$t, { ...props,
    children: createVNode(_createMdxContent$t, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$t, "astro:jsx");

__astro_tag_component__(MDXContent$t, "astro:jsx");
MDXContent$t[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$t.layout);
const url$t = "/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents/";
const file$t = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx";
function rawContent$t() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$t() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$t = MDXContent$t;

const _page16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$t,
  compiledContent: compiledContent$t,
  default: MDXContent$t,
  file: file$t,
  frontmatter: frontmatter$t,
  getHeadings: getHeadings$t,
  prerender: prerender$t,
  rawContent: rawContent$t,
  url: url$t
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$s = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$s;
  content.file = file$s;
  content.url = url$s;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$s,
    url: url$s,
    content,
    frontmatter: content,
    headings: getHeadings$s(),
    "server:root": true,
    children
  });
};
const frontmatter$s = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "How to Use Overleaf to Dual-Monitor Your PDF and Code: the PDF detach!",
  "pubDate": "Aug 11 2022",
  "lang": "en"
};
function getHeadings$s() {
  return [{
    "depth": 1,
    "slug": "how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach",
    "text": "How to Use Overleaf to Dual-Monitor Your PDF and Code: the PDF detach!"
  }];
}
const prerender$s = true;

function _createMdxContent$s(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    a: "a"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach",
      children: "How to Use Overleaf to Dual-Monitor Your PDF and Code: the PDF detach!"
    }), "\n", createVNode(_components.p, {
      children: "The brand new function available on Overleaf will open up a world of possibilities for your document management: the PDF detach!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/3496b904-a5e6-4eb8-845c-5d3466153fde_Screenshot%202022-08-10%20at%2013.43.49.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1000&h=533",
        alt: "Test"
      })
    }), "\n", createVNode(_components.p, {
      children: "Do you have a dual monitor set-up? If so, you\u2019re in luck! As of 15 June 2022, Overleaf has a detach feature that allows you to view your pdf on one monitor while your code is on the other. This can be really helpful when you are trying to debug your code. In this Overleaf tip, we will show you how to use overleaf in order to dual-monitor your pdf and code."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/5472bfc6-26d5-430d-9c00-8d95c50015e0_detach.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "After opening a project, you will notice the new layout menu in the top bar, which allows you to display the source code editor view and the PDF viewer together or separately. You can also use the \u201CPDF in a separate tap\u201D option for your second monitor."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/b66390f9-e76b-47b5-9c46-f4f385762e94_Screenshot+2022-08-10+at+12.44.19.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "Now, whenever you compile your code, the pdf will automatically be displayed on the selected monitor. This can be really helpful when trying to debug your code and see what is going on."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/90e6c017-0788-4dce-9795-ae79ccc85bc8_Screenshot+2022-08-10+at+12.44.39.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: ["This tip is brought to you by CiteDrive, a collaborative BibTeX-first reference management tool for the web with a free Overleaf add-on that allows you to insert citations and bibliographies into your Overleaf projects with one click. Check it out at:\xA0", createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf",
        children: "https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "We think the PDF detach feature will be helpful to all users (available from both free and premium plans), opening new possibilities besides dual monitor and presentations when sharing your screen in a conference call."
    }), "\n", createVNode(_components.p, {
      children: ["If you have any questions, feel free to reach out to us at ", createVNode(_components.a, {
        href: "mailto:hello@citedrive.com",
        children: "hello@citedrive.com"
      }), ". We\u2019re always happy to help! Happy coding!"]
    })]
  });
}

function MDXContent$s(props = {}) {
  return createVNode(MDXLayout$s, { ...props,
    children: createVNode(_createMdxContent$s, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$s, "astro:jsx");

__astro_tag_component__(MDXContent$s, "astro:jsx");
MDXContent$s[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$s.layout);
const url$s = "/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach/";
const file$s = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx";
function rawContent$s() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$s() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$s = MDXContent$s;

const _page17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$s,
  compiledContent: compiledContent$s,
  default: MDXContent$s,
  file: file$s,
  frontmatter: frontmatter$s,
  getHeadings: getHeadings$s,
  prerender: prerender$s,
  rawContent: rawContent$s,
  url: url$s
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$r = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$r;
  content.file = file$r;
  content.url = url$r;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$r,
    url: url$r,
    content,
    frontmatter: content,
    headings: getHeadings$r(),
    "server:root": true,
    children
  });
};
const frontmatter$r = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Overleaf is a finalist in the Digital Leaders Impact Awards 2022",
  "pubDate": "Feb 28 2022",
  "lang": "en"
};
function getHeadings$r() {
  return [{
    "depth": 1,
    "slug": "overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022",
    "text": "Overleaf is a finalist in the Digital Leaders Impact Awards 2022"
  }];
}
const prerender$r = true;

function _createMdxContent$r(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    a: "a",
    strong: "strong"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022",
      children: "Overleaf is a finalist in the Digital Leaders Impact Awards 2022"
    }), "\n", createVNode(_components.p, {
      children: "Overleaf was named a finalist at the 6th Digital Leaders Impact Awards 2022 after making the top 3 in the Education category!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/1026a1c3-409b-4968-b966-4986f72ee968_overleaf_wide_colour_blue_bg.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1000&h=331",
        alt: "Test"
      })
    }), "\n", createVNode(_components.p, {
      children: ["We are delighted to announce that our friends at\xA0", createVNode(_components.a, {
        href: "https://overleaf.com/",
        children: "Overleaf"
      }), "\xA0are finalists in the\xA0", createVNode(_components.a, {
        href: "https://www.impact-awards.co.uk/",
        children: "6th Digital Leaders Impact Awards"
      }), "\xA02022."]
    }), "\n", createVNode(_components.p, {
      children: "The Digital Leaders Impact Awards aims to recognize digital technology innovations that improve people\u2019s lives. Individuals, companies, government agencies, or non-profit organizations can apply."
    }), "\n", createVNode(_components.p, {
      children: "Overleaf is nominated in the top three in the education category, recognizing its efforts to create a collaborative real-time online latex editor used by over 9 million users.\xA0"
    }), "\n", createVNode(_components.p, {
      children: ["There will also be a\xA0", createVNode(_components.strong, {
        children: "People\u2019s Choice Award"
      }), "\xA0from Digital Leaders, honoring the most popular finalist through a public vote! You can help them win this award by voting for them. Voting is open until\xA0", createVNode(_components.strong, {
        children: "9 March"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Please\xA0", createVNode(_components.a, {
        href: "https://www.impact-awards.co.uk/finalists",
        children: "click on this link"
      }), "\xA0here and help them win. And if you have time, it would be amazing to share this with your friends. :)"]
    }), "\n", createVNode(_components.p, {
      children: ["The winners will be announced at the\xA0", createVNode(_components.strong, {
        children: "Impact Awards Ceremony"
      }), "\xA0on\xA0", createVNode(_components.strong, {
        children: "10 March"
      }), "\xA0at the Ministry of Sound in London."]
    })]
  });
}

function MDXContent$r(props = {}) {
  return createVNode(MDXLayout$r, { ...props,
    children: createVNode(_createMdxContent$r, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$r, "astro:jsx");

__astro_tag_component__(MDXContent$r, "astro:jsx");
MDXContent$r[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$r.layout);
const url$r = "/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022/";
const file$r = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx";
function rawContent$r() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$r() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$r = MDXContent$r;

const _page18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$r,
  compiledContent: compiledContent$r,
  default: MDXContent$r,
  file: file$r,
  frontmatter: frontmatter$r,
  getHeadings: getHeadings$r,
  prerender: prerender$r,
  rawContent: rawContent$r,
  url: url$r
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$q = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$q;
  content.file = file$q;
  content.url = url$q;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$q,
    url: url$q,
    content,
    frontmatter: content,
    headings: getHeadings$q(),
    "server:root": true,
    children
  });
};
const frontmatter$q = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Grammarly Works with Overleaf's Latest Source Editor Upgrade",
  "pubDate": "Aug 12 2022",
  "lang": "en"
};
function getHeadings$q() {
  return [{
    "depth": 1,
    "slug": "grammarly-works-with-overleafs-latest-source-editor-upgrade",
    "text": "Grammarly Works with Overleaf\u2019s Latest Source Editor Upgrade"
  }];
}
const prerender$q = true;

function _createMdxContent$q(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    a: "a",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "grammarly-works-with-overleafs-latest-source-editor-upgrade",
      children: "Grammarly Works with Overleaf\u2019s Latest Source Editor Upgrade"
    }), "\n", createVNode(_components.p, {
      children: "If you\u2019re looking for a great way to improve your writing, Grammarly is the perfect tool for you! Grammarly is a grammar-checking tool that helps you find and correct mistakes in your writing. It\u2019s available as a plugin for several different word processors, including Microsoft Word and Google Docs. And now, it also works with Overleaf\u2019s latest Source Editor Upgrade!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/43cea2af-2d9c-47af-8bdf-3cb0cfd82ca1_Screenshot%202022-08-12%20at%2013.16.21.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1000&h=593",
        alt: "Test"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Overleaf is a popular online LaTeX* editor that makes it easy to create and collaborate on scientific documents. Many tools are already available to simplify working with Overleaf, such as literature management programs like BibTeX-empowered\xA0", createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf",
        children: "CiteDrive"
      }), ", a platform-based, collaborative citation management system that can auto-generate and -maintain bibliographies for your Overleaf projects."]
    }), "\n", createVNode(_components.p, {
      children: ["Another great tool to add to your Overleaf workflow is\xA0", createVNode(_components.a, {
        href: "https://www.writefull.com/writefull-for-overleaf",
        children: "Writefull"
      }), ", an AI-driven writing aid that offers feedback on your work and aids you in writing, rephrasing, copyediting, and more. The latest upgrade to the Overleaf Source Editor includes Grammarly support, so you can now check your LaTeX documents for grammar mistakes! Simply install the Grammarly plugin and start using it with Overleaf."]
    }), "\n", createVNode(_components.p, {
      children: "If you\u2019re a Grammarly user, be sure to try out the Grammarly plugin for Overleaf! And if you\u2019re new to Grammarly, sign up for a free account today and start improving your writing. Grammarly can help you make sure your LaTeX documents are error-free, so you can focus on the content of your paper."
    }), "\n", createVNode(_components.p, {
      children: ["*", createVNode(_components.em, {
        children: "If you\u2019re unfamiliar with LaTeX, it\u2019s a typesetting system used by many scientists and mathematicians. It\u2019s especially well-suited for creating complex documents like papers and books."
      })]
    })]
  });
}

function MDXContent$q(props = {}) {
  return createVNode(MDXLayout$q, { ...props,
    children: createVNode(_createMdxContent$q, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$q, "astro:jsx");

__astro_tag_component__(MDXContent$q, "astro:jsx");
MDXContent$q[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$q.layout);
const url$q = "/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade/";
const file$q = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx";
function rawContent$q() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$q() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$q = MDXContent$q;

const _page19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$q,
  compiledContent: compiledContent$q,
  default: MDXContent$q,
  file: file$q,
  frontmatter: frontmatter$q,
  getHeadings: getHeadings$q,
  prerender: prerender$q,
  rawContent: rawContent$q,
  url: url$q
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$p = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$p;
  content.file = file$p;
  content.url = url$p;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$p,
    url: url$p,
    content,
    frontmatter: content,
    headings: getHeadings$p(),
    "server:root": true,
    children
  });
};
const frontmatter$p = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Data Visualization Packages for R you should check out in 2022",
  "pubDate": "May 09 2022",
  "lang": "en"
};
function getHeadings$p() {
  return [{
    "depth": 1,
    "slug": "data-visualization-packages-for-r-you-should-check-out-in-2022",
    "text": "Data Visualization Packages for R you should check out in 2022"
  }, {
    "depth": 2,
    "slug": "ggplot2",
    "text": "ggplot2"
  }, {
    "depth": 2,
    "slug": "leaflet",
    "text": "Leaflet"
  }, {
    "depth": 2,
    "slug": "simplevis",
    "text": "simplevis"
  }, {
    "depth": 2,
    "slug": "gganimate",
    "text": "GGANIMATE"
  }, {
    "depth": 2,
    "slug": "ggvis",
    "text": "ggvis"
  }, {
    "depth": 2,
    "slug": "rgl",
    "text": "RGL"
  }, {
    "depth": 2,
    "slug": "rayrender",
    "text": "rayrender"
  }, {
    "depth": 2,
    "slug": "highcharter",
    "text": "highcharter"
  }, {
    "depth": 2,
    "slug": "plotly",
    "text": "Plotly"
  }, {
    "depth": 2,
    "slug": "lattice",
    "text": "Lattice"
  }];
}
const prerender$p = true;

function _createMdxContent$p(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    h2: "h2",
    a: "a",
    strong: "strong"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "data-visualization-packages-for-r-you-should-check-out-in-2022",
      children: "Data Visualization Packages for R you should check out in 2022"
    }), "\n", createVNode(_components.p, {
      children: ["In the following, we have listed exciting libraries in R for data visualization that you should check out.\n", createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/c6848181-3e34-4b6a-a5ce-e17969d2b711_Screenshot%202022-05-09%20at%2020.42.28.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1000&h=582",
        alt: "Test"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "ggplot2",
      children: createVNode(_components.a, {
        href: "https://ggplot2.tidyverse.org/",
        children: "ggplot2"
      })
    }), "\n", createVNode(_components.p, {
      children: ["As part of the robust\xA0", createVNode(_components.strong, {
        children: "tidiyverse"
      }), "\xA0ecosystem,\xA0", createVNode(_components.strong, {
        children: "ggplot2"
      }), "\xA0offers the most feature-rich and versatile graph creation package based on the\xA0", createVNode(_components.strong, {
        children: "grammar of graphics"
      }), "\xA0framework. This principle divides graphs into components such as datasets, scales, levels, etc. The user combines these components to describe and create any diagram in a declarative fashion."]
    }), "\n", createVNode(_components.p, {
      children: "This approach has become so widely accepted that it has effectively replaced R\u2019s native diagrams and added several extensions, some of which we will mention here."
    }), "\n", createVNode(_components.h2, {
      id: "leaflet",
      children: createVNode(_components.a, {
        href: "https://rstudio.github.io/leaflet/",
        children: "Leaflet"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Leaflet"
      }), "\xA0by Volodymyr Agafonkin is one of the most popular open-source JavaScript libraries for interactive maps, used by the New York Times and the Washington Post. Leaflet for R offers an easy way to integrate leaflet maps into R."]
    }), "\n", createVNode(_components.h2, {
      id: "simplevis",
      children: createVNode(_components.a, {
        href: "https://statisticsnz.github.io/simplevis/",
        children: "simplevis"
      })
    }), "\n", createVNode(_components.p, {
      children: "With ggplot2- and leaflet, we have already introduced two practical tools. With simplevis, the aim is to facilitate visualization with less brainpower by providing a package of wrapper functions of these two packages."
    }), "\n", createVNode(_components.h2, {
      id: "gganimate",
      children: createVNode(_components.a, {
        href: "https://gganimate.com/articles/gganimate.html",
        children: "GGANIMATE"
      })
    }), "\n", createVNode(_components.p, {
      children: "gganimate is an extension of ggplot, which makes it possible to create diagrams with beautiful animations in R."
    }), "\n", createVNode(_components.p, {
      children: "The grammar principle is extended by a series of additional components that the data scientist can add to the ggplot object to represent how it should change over time."
    }), "\n", createVNode(_components.h2, {
      id: "ggvis",
      children: createVNode(_components.a, {
        href: "https://ggvis.rstudio.com/",
        children: "ggvis"
      })
    }), "\n", createVNode(_components.p, {
      children: ["In keeping with the philosophy of\xA0", createVNode(_components.strong, {
        children: "ggplot2"
      }), "\xA0(and the grammar of the graphics),\xA0", createVNode(_components.strong, {
        children: "ggvis"
      }), "\xA0makes it possible to create interactive graphics that the user can test either in Rstudio or in the browser using the shiny infrastructure."]
    }), "\n", createVNode(_components.h2, {
      id: "rgl",
      children: createVNode(_components.a, {
        href: "https://dmurdoch.github.io/rgl/",
        children: "RGL"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Enables the creation of interactive 3D graphics in R based on\xA0", createVNode(_components.strong, {
        children: "OpenGL"
      }), "\xA0or\xA0", createVNode(_components.strong, {
        children: "WebGL"
      }), "\xA0in the backend."]
    }), "\n", createVNode(_components.h2, {
      id: "rayrender",
      children: createVNode(_components.a, {
        href: "https://www.rayrender.net/",
        children: "rayrender"
      })
    }), "\n", createVNode(_components.p, {
      children: "Inspired by Peter Shirley\u2019s three books on ray tracing, this open-source R package allows you to do the same thing when creating 3D scenes in R."
    }), "\n", createVNode(_components.h2, {
      id: "highcharter",
      children: createVNode(_components.a, {
        href: "https://jkunst.com/highcharter/",
        children: "highcharter"
      })
    }), "\n", createVNode(_components.p, {
      children: ["This R package provides a collection of wrapper functions around the JavaScript library of the same name in R.\xA0", createVNode(_components.strong, {
        children: "Highcharts"
      }), "\xA0(JavaScript) is already used as a flexible and customizable chart library by BBC, Sony, and Twitter."]
    }), "\n", createVNode(_components.h2, {
      id: "plotly",
      children: createVNode(_components.a, {
        href: "https://plotly.com/r/",
        children: "Plotly"
      })
    }), "\n", createVNode(_components.p, {
      children: "With Plotly, the focus is on interactive, publication-quality diagrams. You will find examples for creating line charts, scatter plots, area plots, etc."
    }), "\n", createVNode(_components.h2, {
      id: "lattice",
      children: createVNode(_components.a, {
        href: "http://lattice.r-forge.r-project.org/",
        children: "Lattice"
      })
    }), "\n", createVNode(_components.p, {
      children: "With a focus on multivariate data, Lattice is a powerful and equally elegant high-level data visualization system inspired by Trellis graphics. While sufficient for typical graphing needs, Lattice is flexible enough to meet most non-standard requirements."
    })]
  });
}

function MDXContent$p(props = {}) {
  return createVNode(MDXLayout$p, { ...props,
    children: createVNode(_createMdxContent$p, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$p, "astro:jsx");

__astro_tag_component__(MDXContent$p, "astro:jsx");
MDXContent$p[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$p.layout);
const url$p = "/blog/data-visualization-packages-for-r-you-should-check-out/";
const file$p = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/data-visualization-packages-for-r-you-should-check-out.mdx";
function rawContent$p() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$p() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$p = MDXContent$p;

const _page20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$p,
  compiledContent: compiledContent$p,
  default: MDXContent$p,
  file: file$p,
  frontmatter: frontmatter$p,
  getHeadings: getHeadings$p,
  prerender: prerender$p,
  rawContent: rawContent$p,
  url: url$p
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$o = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$o;
  content.file = file$o;
  content.url = url$o;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$o,
    url: url$o,
    content,
    frontmatter: content,
    headings: getHeadings$o(),
    "server:root": true,
    children
  });
};
const frontmatter$o = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "CiteDrive 3.0: Information on the upcoming version",
  "pubDate": "Apr 27 2022",
  "lang": "en"
};
function getHeadings$o() {
  return [{
    "depth": 1,
    "slug": "citedrive-30-information-on-the-upcoming-version",
    "text": "CiteDrive 3.0: Information on the upcoming version"
  }, {
    "depth": 2,
    "slug": "we-are-bringing-reference-management-to-r-markdown",
    "text": "We are bringing reference management to R Markdown.\xA0"
  }, {
    "depth": 2,
    "slug": "new-user-interface-and-dark-mode",
    "text": "New user interface and dark mode"
  }, {
    "depth": 2,
    "slug": "all-about-biblatex",
    "text": "All about Bib[La]TeX"
  }, {
    "depth": 2,
    "slug": "better-collision-control",
    "text": "Better collision control"
  }, {
    "depth": 2,
    "slug": "optimizations",
    "text": "Optimizations"
  }];
}
const prerender$o = true;

function _createMdxContent$o(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    img: "img",
    strong: "strong"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "citedrive-30-information-on-the-upcoming-version",
      children: "CiteDrive 3.0: Information on the upcoming version"
    }), "\n", createVNode(_components.p, {
      children: "For months we have been working on CiteDrive 3.0, a complete revision of the previous version. We are happy to announce that the new version will be released soon! Here is some information about the changes to give you the first insight."
    }), "\n", createVNode(_components.h2, {
      id: "we-are-bringing-reference-management-to-r-markdown",
      children: "We are bringing reference management to R Markdown.\xA0"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive 3.0 will primarily appeal to R Markdown and Quarto users and is fully collaborative, 100% user-centric, and 100% Bib[La]TeX enabled."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/ef81f044-efe9-40a7-91db-07f96f9c2942_Screenshot+2022-04-24+at+12.28.54.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "We complement the R Markdown system and put reference management between the entire pipeline, i.e., raw data, to high-quality documents, reports, and presentations. You export your bibliography in the desired citation style to publication-ready PDFs, Jupyter Notebooks, LaTeX, web pages, books, MS Word, etc.\xA0"
    }), "\n", createVNode(_components.p, {
      children: "At CiteDrive, you create an R Markdown project where you can store your references centrally to separate them from your R Markdown workflow. With our in-house R package, you can synchronize the current status of your bibliography with the RStduio project at any time and fully automatically - just like with Overleaf. Obsidian, Quarto, and Roam Research will follow."
    }), "\n", createVNode(_components.h2, {
      id: "new-user-interface-and-dark-mode",
      children: "New user interface and dark mode"
    }), "\n", createVNode(_components.p, {
      children: "Based on our users\u2019 feedback and many drafts and prototypes we have been working on for months, the next update will significantly improve the user experience. For example, how to better organize BibTeX references has been addressed. The user can easily manage each reference with tags."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/9469660c-362f-4692-808c-8b65107741a2_Screenshot+2022-04-24+at+14.35.44.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "The second focus was on the problem of long-lasting user interfaces with better accessibility - for example, through optimal font sizes and colors - without giving up the distinctive style.\xA0"
    }), "\n", createVNode(_components.p, {
      children: "The dark mode is as well thought out and styled as the original - and offers much more than just a black background."
    }), "\n", createVNode(_components.h2, {
      id: "all-about-biblatex",
      children: "All about Bib[La]TeX"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive is a reference manager based entirely on BibTeX. But what does that mean strictly - especially for the next version? Apart from some suitable desktop applications (JabRef, for example), BibTeX seems to have an afterthought with many reference managers. One collects references in a database and exports them with an internal converter, resulting in a .bib file that omits many fields that the user might need. Also, manual editing with form fields is annoying. It was easier for many of our users to enter their bibliographies by hand into a text file."
    }), "\n", createVNode(_components.p, {
      children: "And therein lies the compromise in CiteDrive \u2014 the ease of manual maintenance and the ability to organize and search for references in a straightforward user interface. Instead of using forms, we allow users to add and maintain their references with BibTeX entries via a code editor."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/48c262ea-a81a-45ad-b674-70736bc882a3_Screenshot+2022-04-24+at+14.36.50.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "In the last update we released in January, we introduced this code editor and found that the idea was as well-received as it was by us. We\u2019re extending it to include better highlighting of inline LaTeX markups, color-coded within BibTeX entries."
    }), "\n", createVNode(_components.h2, {
      id: "better-collision-control",
      children: "Better collision control"
    }), "\n", createVNode(_components.p, {
      children: "Some headaches for us and our users are the CitationKeys. On the one hand, we want to give users the option to use any CitationKey. On the other hand, we also want to provide them with the opportunity to create them automatically. For example, if the user previously used AUTOKEY as the CitationKey, it was generated:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/bc642c27-cd73-4e35-8c46-d185c93ba2e7_Screenshot+2022-04-24+at+14.14.12.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/c7ea787b-de3b-43c5-92ef-2778c010e41c_Screenshot+2022-04-24+at+14.15.53.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "The result is a key consisting of the first author\u2019s name, the first non-breaking word of the title, the year, and a deterministic suffix. Doing so will ensure that your LateX document / Overleaf project does not contain compilation errors.\xA0"
    }), "\n", createVNode(_components.p, {
      children: "If you had a duplicate reference in your project, the system would automatically append a suffix with AUTOKEY that enumerates the number of duplicates."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/aedb8ba8-e8b5-45a9-86ee-45ab1c5f5a59_Screenshot+2022-04-24+at+14.34.15.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "If we detect a duplicate citation key, the reference is highlighted in red and displays a warning. CiteDrive does not export identical references to the Overleaf project, which leads to errors in the LaTeX document."
    }), "\n", createVNode(_components.h2, {
      id: "optimizations",
      children: "Optimizations"
    }), "\n", createVNode(_components.p, {
      children: ["Since the first alpha release, we have used\xA0", createVNode(_components.strong, {
        children: "React"
      }), "\xA0and\xA0", createVNode(_components.strong, {
        children: "Typescript"
      }), "\xA0for the frontend, using the boilerplate Create React app. We have carried over many packages and settings leftover from the alpha version into the current version. Also, we have completely rethought the whole architecture and optimized scripts, and we are now moving to\xA0", createVNode(_components.strong, {
        children: "Vite"
      }), "."]
    })]
  });
}

function MDXContent$o(props = {}) {
  return createVNode(MDXLayout$o, { ...props,
    children: createVNode(_createMdxContent$o, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$o, "astro:jsx");

__astro_tag_component__(MDXContent$o, "astro:jsx");
MDXContent$o[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$o.layout);
const url$o = "/blog/citedrive-3.0-information-on-the-upcoming-version/";
const file$o = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-3.0-information-on-the-upcoming-version.mdx";
function rawContent$o() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$o() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$o = MDXContent$o;

const _page21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$o,
  compiledContent: compiledContent$o,
  default: MDXContent$o,
  file: file$o,
  frontmatter: frontmatter$o,
  getHeadings: getHeadings$o,
  prerender: prerender$o,
  rawContent: rawContent$o,
  url: url$o
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$n = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$n;
  content.file = file$n;
  content.url = url$n;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$n,
    url: url$n,
    content,
    frontmatter: content,
    headings: getHeadings$n(),
    "server:root": true,
    children
  });
};
const frontmatter$n = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Parenthetical vs. narrative citations in CiteDrive",
  "pubDate": "Jan 15 2023",
  "lang": "en"
};
function getHeadings$n() {
  return [{
    "depth": 1,
    "slug": "parenthetical-vs-narrative-citations-in-citedrive",
    "text": "Parenthetical vs. narrative citations in CiteDrive"
  }, {
    "depth": 2,
    "slug": "parenthetical-and-narrative-citations---whats-the-difference",
    "text": "Parenthetical and narrative citations - what\u2019s the difference?"
  }, {
    "depth": 2,
    "slug": "in-latexoverleaf",
    "text": "In LaTeX/Overleaf"
  }, {
    "depth": 2,
    "slug": "in-pandoc-quarto-or-r-markdown",
    "text": "In Pandoc, Quarto, or R Markdown"
  }];
}
const prerender$n = true;

function _createMdxContent$n(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    code: "code"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "parenthetical-vs-narrative-citations-in-citedrive",
      children: "Parenthetical vs. narrative citations in CiteDrive"
    }), "\n", createVNode(_components.p, {
      children: "We receive many questions about using CiteDrive to create citations in parentheticals and narratives. Since the app is a BibTeX-based online reference management tool that works with both LaTeX and Pandoc-based systems (such as R Markdown and Quarto) and synchronizes your bibliographies with Overleaf and RStudio, we show you different options depending on the system and package you use."
    }), "\n", createVNode(_components.h2, {
      id: "parenthetical-and-narrative-citations---whats-the-difference",
      children: "Parenthetical and narrative citations - what\u2019s the difference?"
    }), "\n", createVNode(_components.p, {
      children: "In a parenthetical citation, you include information about a source in parentheses at the end of a sentence or clause where you are using information from that source. This allows you to identify the source of information without interrupting the flow of your writing. For example:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "According to a recent study (Smith, 2020), the average lifespan of a dog is 12 years."
      })
    }), "\n", createVNode(_components.p, {
      children: "Narrative citation, on the other hand, involves incorporating information about the source into the text of your writing. This typically includes the author\u2019s name and the publication date. For example:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "According to Smith (2020), the average lifespan of a dog is 12 years."
      })
    }), "\n", createVNode(_components.p, {
      children: "Both parenthetical and narrative citations are used to give credit to the source of information and to allow readers to locate the source if they want to learn more. Using a parenthetical or narrative citation will depend on your style guide and preference."
    }), "\n", createVNode(_components.h2, {
      id: "in-latexoverleaf",
      children: "In LaTeX/Overleaf"
    }), "\n", createVNode(_components.p, {
      children: ["When using LaTeX/Overleaf, it will depend if you use BibTeX or BibLaTeX. If you\u2019re using BibTeX, then the natbib package will be of help, which includes several commands for customizing citations, such as ", createVNode(_components.code, {
        children: "\\citet*"
      }), " for in-text citations and ", createVNode(_components.code, {
        children: "\\citep*"
      }), " for citations without parentheses."]
    }), "\n", createVNode(_components.p, {
      children: ["In BibLaTeX ", createVNode(_components.code, {
        children: "\\parencite*"
      }), " is an already built-in option for appropriate customizations."]
    }), "\n", createVNode(_components.h2, {
      id: "in-pandoc-quarto-or-r-markdown",
      children: "In Pandoc, Quarto, or R Markdown"
    }), "\n", createVNode(_components.p, {
      children: ["It is straightforward with Pandoc; add your citation key without brackets, i.e., ", createVNode(_components.code, {
        children: "@citationkey"
      }), " if you use a narrative citation, and the in-text version with brackets, i.e., ", createVNode(_components.code, {
        children: "[@citationkey]"
      }), "."]
    })]
  });
}

function MDXContent$n(props = {}) {
  return createVNode(MDXLayout$n, { ...props,
    children: createVNode(_createMdxContent$n, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$n, "astro:jsx");

__astro_tag_component__(MDXContent$n, "astro:jsx");
MDXContent$n[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$n.layout);
const url$n = "/blog/parenthetical-vs-narrative-citations-in-citedrive/";
const file$n = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/parenthetical-vs-narrative-citations-in-citedrive.mdx";
function rawContent$n() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$n() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$n = MDXContent$n;

const _page22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$n,
  compiledContent: compiledContent$n,
  default: MDXContent$n,
  file: file$n,
  frontmatter: frontmatter$n,
  getHeadings: getHeadings$n,
  prerender: prerender$n,
  rawContent: rawContent$n,
  url: url$n
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$m = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$m;
  content.file = file$m;
  content.url = url$m;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$m,
    url: url$m,
    content,
    frontmatter: content,
    headings: getHeadings$m(),
    "server:root": true,
    children
  });
};
const frontmatter$m = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "CiteDrive Forum has Moved to GitHub Discussions",
  "pubDate": "Jan 29 2023",
  "lang": "en"
};
function getHeadings$m() {
  return [{
    "depth": 1,
    "slug": "citedrive-forum-has-moved-to-github-discussions",
    "text": "CiteDrive Forum has Moved to GitHub Discussions"
  }];
}
const prerender$m = true;

function _createMdxContent$m(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "citedrive-forum-has-moved-to-github-discussions",
      children: "CiteDrive Forum has Moved to GitHub Discussions"
    }), "\n", createVNode(_components.p, {
      children: ["We at CiteDrive are thrilled to announce that we have recently moved our discussion forums to GitHub Discussions. This move was made with the aim of providing our users with a better and more streamlined platform for discussing and sharing their experiences with our reference management and citation tool. Click ", createVNode(_components.a, {
        href: "https://github.com/orgs/citedrive/discussions",
        children: "here"
      }), " to join now!"]
    }), "\n", createVNode(_components.p, {
      children: "GitHub Discussions is a new feature introduced by GitHub in 2021 and offers a simple and organized platform for discussions. The platform is designed to be user-friendly and provides a number of features to help keep discussions on-topic and organized."
    }), "\n", createVNode(_components.p, {
      children: "Our users will now have access to a larger and more engaged GitHub community, which is one of the major benefits of this move (at least one of your hopes and motivations for moving). When they ask general questions about BibTeX/BibLaTeX or the platforms to which CiteDrive connects, they will be able to connect with and learn from other platform users, and we will be able to better manage support requests."
    }), "\n", createVNode(_components.p, {
      children: "Another benefit of this change is the integration of discussions with Git repositories, which will help CiteDrive become open-source in the future. Our users can then directly reference and link to code snippets, bugs, and related issues from their discussions."
    }), "\n", createVNode(_components.p, {
      children: "In addition, GitHub Discussions offers thread categorization, reactions, and search capabilities, all aimed at keeping discussions organized and productive."
    }), "\n", createVNode(_components.p, {
      children: "At CiteDrive, we believe that this move to GitHub Discussions will result in a more productive and engaging experience for our users. We invite all our users to check out the new discussion forums and join the conversation."
    }), "\n", createVNode(_components.p, {
      children: "Join us in our move to GitHub Discussions and let\u2019s continue to revolutionize reference management and citation!"
    })]
  });
}

function MDXContent$m(props = {}) {
  return createVNode(MDXLayout$m, { ...props,
    children: createVNode(_createMdxContent$m, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$m, "astro:jsx");

__astro_tag_component__(MDXContent$m, "astro:jsx");
MDXContent$m[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$m.layout);
const url$m = "/blog/citedrive-forum-has-moved-to-github-discussions/";
const file$m = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-forum-has-moved-to-github-discussions.mdx";
function rawContent$m() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$m() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$m = MDXContent$m;

const _page23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$m,
  compiledContent: compiledContent$m,
  default: MDXContent$m,
  file: file$m,
  frontmatter: frontmatter$m,
  getHeadings: getHeadings$m,
  prerender: prerender$m,
  rawContent: rawContent$m,
  url: url$m
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$l = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$l;
  content.file = file$l;
  content.url = url$l;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$l,
    url: url$l,
    content,
    frontmatter: content,
    headings: getHeadings$l(),
    "server:root": true,
    children
  });
};
const frontmatter$l = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "CodeMirror 6: A New Source Editor for Overleaf",
  "pubDate": "Dec 03 2022",
  "lang": "en"
};
function getHeadings$l() {
  return [{
    "depth": 1,
    "slug": "codemirror-6-a-new-source-editor-for-overleaf",
    "text": "CodeMirror 6: A New Source Editor for Overleaf"
  }, {
    "depth": 2,
    "slug": "does-citedrive-support-the-new-editor",
    "text": "Does CiteDrive support the new editor?"
  }, {
    "depth": 2,
    "slug": "what-about-grammarly",
    "text": "What about Grammarly?"
  }, {
    "depth": 2,
    "slug": "what-are-some-other-benefits-of-the-new-code-editor",
    "text": "What are some other benefits of the new code editor?"
  }];
}
const prerender$l = true;

function _createMdxContent$l(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h2: "h2",
    strong: "strong",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "codemirror-6-a-new-source-editor-for-overleaf",
      children: "CodeMirror 6: A New Source Editor for Overleaf"
    }), "\n", createVNode(_components.p, {
      children: ["Good news, Overleaf users! After several weeks of beta testing, the new source editor (CodeMirror 6) is now available to power Overleaf. This new editor is more modern and supports a wide range of features that the old one did not. Be sure to read Overleaf\u2019s ", createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/towards-the-future-a-new-source-editor",
        children: "latest update"
      }), " in their blog!"]
    }), "\n", createVNode(_components.h2, {
      id: "does-citedrive-support-the-new-editor",
      children: "Does CiteDrive support the new editor?"
    }), "\n", createVNode(_components.p, {
      children: ["CiteDrive is a BibTeX-based platform designed to make referencing and bibliography management easy. With CiteDrive, you can organize your references and team collaboration in projects, sync everything seamlessly to ", createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf",
        children: "Overleaf"
      }), " or ", createVNode(_components.a, {
        href: "https://www.citedrive.com/quarto/",
        children: "RStudio"
      }), ", and much more. The CiteDrive Companion is an extension available to ", createVNode(_components.a, {
        href: "https://chrome.google.com/webstore/detail/citedrive-companion/gmmonfphegngpcbcapfbgembkjeookik",
        children: "Google Chrome"
      }), ", ", createVNode(_components.a, {
        href: "https://microsoftedge.microsoft.com/addons/detail/citedrive-bibtex-compan/kpmepfpbjehnlgfbcnbmgihklkkmfnpo",
        children: "Microsoft Edge"
      }), ", and ", createVNode(_components.a, {
        href: "https://addons.mozilla.org/af/firefox/addon/citedrive-companion/",
        children: "Mozilla Firefox"
      }), ", which allows you to manage your CiteDrive projects without having to switch any window or tab in your browser and has been optimized for the new source editor. While in ", createVNode(_components.a, {
        href: "https://www.citedrive.com/blog/overleaf-source-editor-upgrade/",
        children: "the beta phase"
      }), ", we have ensured that optimization works for both the new and old versions of the editor. ", createVNode(_components.strong, {
        children: "So, yes! CiteDrive is fully compatible with the new editor."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "what-about-grammarly",
      children: "What about Grammarly?"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.citedrive.com/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade/",
        children: "Grammarly"
      }), " is an AI-powered writing assistant that will help you to write mistake-free in any text editor. ", createVNode(_components.strong, {
        children: "Now, Grammarly also works with Overleaf\u2019s new source editor!"
      }), " The integration is seamless and allows you to get spelling and grammar suggestions from Grammarly as you type in the code editor, ensuring your essay is error-free."]
    }), "\n", createVNode(_components.h2, {
      id: "what-are-some-other-benefits-of-the-new-code-editor",
      children: "What are some other benefits of the new code editor?"
    }), "\n", createVNode(_components.p, {
      children: ["CodeMirror 6 has become an industry standard for code-based editors, used by some of the most popular editor applications. ", createVNode(_components.em, {
        children: "CiteDrive users edit their BibTeX entries using the same framework."
      }), " Compared to its predecessor, it will bring improvements and better behavior on mobile devices (tablets, phones), improved code highlighting and error control, more robust behavior while writing in non-Latin languages, and many more features."]
    }), "\n", createVNode(_components.p, {
      children: "With the new source editor, we hope that you can now enjoy a better writing experience with Overleaf!"
    })]
  });
}

function MDXContent$l(props = {}) {
  return createVNode(MDXLayout$l, { ...props,
    children: createVNode(_createMdxContent$l, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$l, "astro:jsx");

__astro_tag_component__(MDXContent$l, "astro:jsx");
MDXContent$l[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$l.layout);
const url$l = "/blog/codemirror-6-a-new-source-editor-for-overleaf/";
const file$l = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/codemirror-6-a-new-source-editor-for-overleaf.mdx";
function rawContent$l() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$l() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$l = MDXContent$l;

const _page24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$l,
  compiledContent: compiledContent$l,
  default: MDXContent$l,
  file: file$l,
  frontmatter: frontmatter$l,
  getHeadings: getHeadings$l,
  prerender: prerender$l,
  rawContent: rawContent$l,
  url: url$l
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$k = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$k;
  content.file = file$k;
  content.url = url$k;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$k,
    url: url$k,
    content,
    frontmatter: content,
    headings: getHeadings$k(),
    "server:root": true,
    children
  });
};
const frontmatter$k = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "The CiteDrive Companion for Overleaf and RStudio",
  "pubDate": "June 01 2022",
  "lang": "en"
};
function getHeadings$k() {
  return [{
    "depth": 1,
    "slug": "the-citedrive-companion-for-overleaf-and-rstudio",
    "text": "The CiteDrive Companion for Overleaf and RStudio"
  }];
}
const prerender$k = true;

function _createMdxContent$k(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    strong: "strong",
    ul: "ul",
    li: "li",
    a: "a",
    ol: "ol",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "the-citedrive-companion-for-overleaf-and-rstudio",
      children: "The CiteDrive Companion for Overleaf and RStudio"
    }), "\n", createVNode(_components.p, {
      children: "It has never been so easy to collect academic papers. Just click the CiteDrive button when you want to cite. This will automatically add any article you see in the browser to your Overleaf or RStudio project."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/b93d8c44-bc7f-4fbd-887f-598ed9ecc096_Screenshot%202022-07-01%20at%2015.08.24.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1722&h=964",
        alt: "Featured Image"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Looking for new papers to read can be time-consuming, especially if you\u2019re unsure where to start. CiteDrive aims to make finding new papers quick and easy by allowing you to add papers directly to your\xA0", createVNode(_components.strong, {
        children: "Overleaf"
      }), "\xA0document while browsing for them. Install the CiteDrive companion, and you\u2019ll be able to add articles to your document with just a few clicks. Import citations from major research aggregators straight into your Overleaf or RStudio project. The companion has you covered for wherever you\u2019re looking on\xA0", createVNode(_components.strong, {
        children: "Google Scholar"
      }), ",\xA0", createVNode(_components.strong, {
        children: "PubMed"
      }), ",\xA0", createVNode(_components.strong, {
        children: "arXiv"
      }), ",\xA0", createVNode(_components.strong, {
        children: "Springer"
      }), ",\xA0", createVNode(_components.strong, {
        children: "ACM"
      }), ",\xA0", createVNode(_components.strong, {
        children: "IEEE"
      }), ",\xA0", createVNode(_components.strong, {
        children: "CNKI"
      }), ", and other sites.\xA0"]
    }), "\n", createVNode(_components.p, {
      children: "The following browsers support the extension:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://microsoftedge.microsoft.com/addons/detail/citedrive-bibtex-compan/kpmepfpbjehnlgfbcnbmgihklkkmfnpo",
          children: "Microsoft Edge Addons"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik",
          children: "Chrome Web Store"
        }), "\xA0"]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://addons.mozilla.org/af/firefox/addon/citedrive-companion/",
          children: "Extension for Firefox"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Here is an example of how the CiteDrive companion works in Google Scholar:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Download and install the CiteDrive extension (links above)"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Go to Google Scholar and find an article you want to cite"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Click on the CiteDrive icon in your browser\u2019s toolbar"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Choose your project, for example, the one you\u2019ve linked to your Overleaf project; if everything\u2019s fine, click Add Reference."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["That\u2019s all there is to it! The reference will now be available in your CiteDrive project and your Overleaf (", createVNode(_components.em, {
        children: "or RStudio projects, depending on your preferences"
      }), "). You\u2019ll be able to preview it or edit it as needed."]
    })]
  });
}

function MDXContent$k(props = {}) {
  return createVNode(MDXLayout$k, { ...props,
    children: createVNode(_createMdxContent$k, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$k, "astro:jsx");

__astro_tag_component__(MDXContent$k, "astro:jsx");
MDXContent$k[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$k.layout);
const url$k = "/blog/citedrive-companion-for-overleaf-and-rstudio/";
const file$k = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-companion-for-overleaf-and-rstudio.mdx";
function rawContent$k() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$k() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$k = MDXContent$k;

const _page25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$k,
  compiledContent: compiledContent$k,
  default: MDXContent$k,
  file: file$k,
  frontmatter: frontmatter$k,
  getHeadings: getHeadings$k,
  prerender: prerender$k,
  rawContent: rawContent$k,
  url: url$k
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$j = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$j;
  content.file = file$j;
  content.url = url$j;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$j,
    url: url$j,
    content,
    frontmatter: content,
    headings: getHeadings$j(),
    "server:root": true,
    children
  });
};
const frontmatter$j = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Using natbib with BibTeX and Overleaf",
  "pubDate": "Feb 01 2023",
  "lang": "en"
};
function getHeadings$j() {
  return [{
    "depth": 1,
    "slug": "using-natbib-with-bibtex-and-overleaf",
    "text": "Using natbib with BibTeX and Overleaf"
  }, {
    "depth": 2,
    "slug": "why-use-natbib",
    "text": "Why use natbib?"
  }, {
    "depth": 2,
    "slug": "getting-started",
    "text": "Getting started"
  }];
}
const prerender$j = true;

function _createMdxContent$j(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    h2: "h2",
    strong: "strong",
    a: "a",
    pre: "pre",
    span: "span",
    ol: "ol",
    li: "li"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "using-natbib-with-bibtex-and-overleaf",
      children: "Using natbib with BibTeX and Overleaf"
    }), "\n", createVNode(_components.p, {
      children: ["The natbib package revolutionizes the standard ", createVNode(_components.code, {
        children: "\\cite{*}"
      }), " command in LaTeX, when using BibTeX; providing a plethora of options for author-year schemes and displaying both textual and parenthetical information when using BibTeX. With this enhanced feature, you can easily customize your citations to suit any style preferences!"]
    }), "\n", createVNode(_components.h2, {
      id: "why-use-natbib",
      children: "Why use natbib?"
    }), "\n", createVNode(_components.p, {
      children: "natbib is a LaTeX package that allows you to use bibtex references more freely. It includes many citation commands and citation styles not found in standard bibtex, as well as the ability to customize existing citation styles to meet your needs; most notably, ab citation style requirements. One of the advantages of using natbib is the ability to generate author-year in a narrative or textual format. As an alternative, you could look into BibLaTeX, which includes all of these features on top of a much more feature-rich ecosystem and a very robust framework."
    }), "\n", createVNode(_components.h2, {
      id: "getting-started",
      children: "Getting started"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 1: Create a bibliography"
      })
    }), "\n", createVNode(_components.p, {
      children: ["We recommend using ", createVNode(_components.strong, {
        children: "CiteDrive"
      }), " to create the.bib-file because it assists you with formatting and saves articles from your browser directly to your bibliography. Among many other features, such as native BibTeX/BibLaTeX support, collaboration, error handling, and formatting, Overleaf allows you to keep your bibliographies in sync. ", createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/better-bibliography-management-with-overleaf-citedrive-and-bibtex-biblatex",
        children: "Overleaf has more information"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Your bib-file, which you can also create manually if you don\u2019t want to use ", createVNode(_components.strong, {
        children: "CiteDrive"
      }), ", is a bibliographic reference file that LaTeX uses to format bibliographies and citations. Here\u2019s an example of a straightforward bib-file:"]
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "@book"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#FFA657"
            },
            children: "knuth1984texbook"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "        = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "The {\\TeX}book"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "       = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "Donald E. Knuth"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "year"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "         = "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "1984"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "publisher"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "Addison-Wesley"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "@article"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#FFA657"
            },
            children: "lamport1994latex"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "        = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{LaTeX}: A Document Preparation System"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "       = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "Leslie Lamport"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "year"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "         = "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "1994"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "journal"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "      = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "Addison-Wesley"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "@inproceedings"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#FFA657"
            },
            children: "gosling1995java"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "        = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "The Java Language Environment"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "       = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "James Gosling and Henry McGilton"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "year"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "         = "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "1995"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "booktitle"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "Proceedings of the Sun Microsystems "
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "                        Symposium on the Java Language"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "publisher"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    = "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "Sun Microsystems"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In this example, we have three references of different types (book, article, and inproceedings). Each reference is given a unique identifier (e.g. knuth1984texbook), which can be used to cite the reference in the LaTeX document."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 2: Create a TeX file"
      })
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s how to get everything together in our tex-file after we\u2019ve created our.bib-file:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Include the ", createVNode(_components.code, {
          children: "natbib"
        }), " package in your LaTeX document by adding the following line to the preamble:"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "\\usepackage"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{natbib} "
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: ["Specify the citation style you want to use. For example, if you want to use the ", createVNode(_components.code, {
          children: "numeric"
        }), " style, add the following line:"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "\\bibliographystyle"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{plainnat}"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "We will include our previously generated bibliographic reference file, which is in.bib format, in your LaTeX document using the bibliography command \u2014 notice that we omit the file extension."
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "\\bibliography"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{references}"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: ["To cite a reference in the text, use the ", createVNode(_components.code, {
          children: "\\cite"
        }), " or \\citep command followed by the reference identifier:"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "As discussed in "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "\\cite"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{knuth1984texbook}, "
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "\\TeX\\ "
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "is a powerful typesetting system."
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "5",
      children: ["\n", createVNode(_components.li, {
        children: "Finally, include the following command to produce the bibliography at the end of your document:"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "\\bibliography"
          })
        })
      })
    })]
  });
}

function MDXContent$j(props = {}) {
  return createVNode(MDXLayout$j, { ...props,
    children: createVNode(_createMdxContent$j, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$j, "astro:jsx");

__astro_tag_component__(MDXContent$j, "astro:jsx");
MDXContent$j[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$j.layout);
const url$j = "/blog/using-natbib-with-bibtex-and-overleaf/";
const file$j = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/using-natbib-with-bibtex-and-overleaf.mdx";
function rawContent$j() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$j() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$j = MDXContent$j;

const _page26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$j,
  compiledContent: compiledContent$j,
  default: MDXContent$j,
  file: file$j,
  frontmatter: frontmatter$j,
  getHeadings: getHeadings$j,
  prerender: prerender$j,
  rawContent: rawContent$j,
  url: url$j
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$i = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$i;
  content.file = file$i;
  content.url = url$i;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$i,
    url: url$i,
    content,
    frontmatter: content,
    headings: getHeadings$i(),
    "server:root": true,
    children
  });
};
const frontmatter$i = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Literature management with Overleaft",
  "pubDate": "Feb 21 2022",
  "lang": "en"
};
function getHeadings$i() {
  return [{
    "depth": 1,
    "slug": "literature-management-with-overleaf",
    "text": "Literature management with Overleaf"
  }, {
    "depth": 2,
    "slug": "a-quick-video-tutorial-on-citedrive",
    "text": "A quick video tutorial on CiteDrive"
  }, {
    "depth": 2,
    "slug": "ideal-for-overleaf",
    "text": "Ideal for Overleaf"
  }, {
    "depth": 2,
    "slug": "native-bibtex-support",
    "text": "Native BibTeX support"
  }, {
    "depth": 2,
    "slug": "collect-and-organize",
    "text": "Collect and organize"
  }, {
    "depth": 2,
    "slug": "fully-collaborative",
    "text": "Fully collaborative"
  }, {
    "depth": 2,
    "slug": "device-agnostic",
    "text": "Device-agnostic"
  }, {
    "depth": 2,
    "slug": "simple-but-powerful",
    "text": "Simple but powerful!"
  }];
}
const prerender$i = true;

function _createMdxContent$i(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "literature-management-with-overleaf",
      children: "Literature management with Overleaf"
    }), "\n", createVNode(_components.p, {
      children: "Complete your research pipeline with the powerful two-app. Link your two APPs and get all the updates in your BibTeX file without having to do anything at all manually in Overleaf \u2014 with a few simple mouse clicks. Concentrate on your work in Overleaf and leave the tedious bibliography and citation formatting to us."
    }), "\n", createVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/KfwYySjHRPE",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true
    }), "\n", createVNode(_components.h2, {
      id: "a-quick-video-tutorial-on-citedrive",
      children: "A quick video tutorial on CiteDrive"
    }), "\n", createVNode(_components.h2, {
      id: "ideal-for-overleaf",
      children: "Ideal for Overleaf"
    }), "\n", createVNode(_components.p, {
      children: "Overleaf enables teams of students and researchers to write papers simultaneously, from anywhere, in an easy-to-use, collaborative online LaTeX editor. Overleaf supports a variety of packages, including BibTeX, where you can manage your references. When you connect Overleaf to CiteDrive, you can automatically synchronize your project and BibTeX-database with Overleaf. With CiteDrive, easily collaborate on a project across global reach. When you discover a paper you want to use, use our browser extension, add it to your project with one click. You or anyone on your team can organize, cluster, annotate, and evaluate your material in a concise dashboard. Write faster at Overleaf: Insert in-text citations generated with CiteDrive. Since CiteDrive natively supports BibTeX, all changes are then automatically synced at Overleaf. You no longer need to upload and change references manually."
    }), "\n", createVNode(_components.h2, {
      id: "native-bibtex-support",
      children: "Native BibTeX support"
    }), "\n", createVNode(_components.p, {
      children: "We have designed our infrastructure for a BibTeX compliant delivery. We support all official entry and field types, which can be easily entered or imported with one click using our browser plugin: no tedious usage of converters or manual handling. Your project is always kept up to date for Overleaf and in a fashion that LaTeX will support."
    }), "\n", createVNode(_components.h2, {
      id: "collect-and-organize",
      children: "Collect and organize"
    }), "\n", createVNode(_components.p, {
      children: "Notably, with a bigger team working on a single project, copy-pasting or manually entering data to BibTeX databases (.bib-file) can cause much confusion, and mistakes can quickly occur. With CiteDrive, you can easily add references with one click thanks to the browser extension and group the references orderly simply by dragging and dropping."
    }), "\n", createVNode(_components.h2, {
      id: "fully-collaborative",
      children: "Fully collaborative"
    }), "\n", createVNode(_components.p, {
      children: "We know how essential teamwork is for scientists. Comprehensive tools for teams have become commonplace, and most importantly, papers are rarely written alone. We have therefore built our platform for collaboration. Add colleagues to your project at any time. You and your team collect, structure, and annotate references and material for your work, clearly organized in one project."
    }), "\n", createVNode(_components.h2, {
      id: "device-agnostic",
      children: "Device-agnostic"
    }), "\n", createVNode(_components.p, {
      children: "We conceptualized CiteDrive from the beginning as a form factor and device-agnostic platform for a seamless experience on all devices. Your on-the-go experience reviewing a paper your colleague presently saved should feel just as natural as CiteDrive on the desktop."
    }), "\n", createVNode(_components.h2, {
      id: "simple-but-powerful",
      children: "Simple but powerful!"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive aspires to be an actually easy-to-use, collaborative, and expandable tool for citing, managing references, creating bibliographies, and more."
    })]
  });
}

function MDXContent$i(props = {}) {
  return createVNode(MDXLayout$i, { ...props,
    children: createVNode(_createMdxContent$i, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$i, "astro:jsx");

__astro_tag_component__(MDXContent$i, "astro:jsx");
MDXContent$i[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$i.layout);
const url$i = "/blog/literature-management-with-overleaf/";
const file$i = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/literature-management-with-overleaf.mdx";
function rawContent$i() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$i() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$i = MDXContent$i;

const _page27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$i,
  compiledContent: compiledContent$i,
  default: MDXContent$i,
  file: file$i,
  frontmatter: frontmatter$i,
  getHeadings: getHeadings$i,
  prerender: prerender$i,
  rawContent: rawContent$i,
  url: url$i
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$h = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$h;
  content.file = file$h;
  content.url = url$h;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$h,
    url: url$h,
    content,
    frontmatter: content,
    headings: getHeadings$h(),
    "server:root": true,
    children
  });
};
const frontmatter$h = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "CiteDrive November 2021 Release",
  "pubDate": "Feb 22 2022",
  "lang": "en"
};
function getHeadings$h() {
  return [{
    "depth": 1,
    "slug": "citedrive-november-2021-release",
    "text": "CiteDrive November 2021 Release"
  }, {
    "depth": 2,
    "slug": "human-readable-citation-keys",
    "text": "Human readable citation keys"
  }, {
    "depth": 2,
    "slug": "citedrive-companion-context-menu",
    "text": "CiteDrive Companion context menu"
  }, {
    "depth": 2,
    "slug": "directly-import-bibtex-references",
    "text": "Directly import BibTeX references"
  }, {
    "depth": 2,
    "slug": "extended-bibtex-types-and-fields",
    "text": "Extended BibTeX types and fields"
  }, {
    "depth": 2,
    "slug": "other-improvements-and-bug-fixes",
    "text": "Other improvements and bug fixes:"
  }, {
    "depth": 2,
    "slug": "special-thanks",
    "text": "Special Thanks"
  }];
}
const prerender$h = true;

function _createMdxContent$h(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h2: "h2",
    strong: "strong",
    img: "img",
    ul: "ul",
    li: "li"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "citedrive-november-2021-release",
      children: "CiteDrive November 2021 Release"
    }), "\n", createVNode(_components.p, {
      children: "Timed perfectly to coincide with fall leaves, cooler weather and pumpkin spice lattes, we\u2019re pleased to announce the November 2021 release of CiteDrive!"
    }), "\n", createVNode(_components.p, {
      children: ["Timed perfectly to coincide with fall leaves, cooler weather, and pumpkin spice lattes, we\u2019re pleased to announce the November 2021 release of CiteDrive! It was a whirlwind of activity following our\xA0", createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf",
        children: "announcement of integration with Overleaf"
      }), "\xA0earlier last month and we were thrilled to get such enthusiastic feedback from users like you. We believe strongly that a good product innovates while a great product finds a way to listen while innovating."]
    }), "\n", createVNode(_components.h2, {
      id: "human-readable-citation-keys",
      children: "Human readable citation keys"
    }), "\n", createVNode(_components.p, {
      children: ["Based on popular demand, we have updated our default citation keys for BibTeX output to be human-readable. Instead of our original UUID-based keys, you\u2019ll now see that keys take on the format of\xA0", createVNode(_components.strong, {
        children: "\\AuthorYearTitleword:abcd."
      }), "\xA0For example,\xA0", createVNode(_components.strong, {
        children: "\\Jones2015Algorithms:f81c"
      })]
    }), "\n", createVNode(_components.p, {
      children: "By default, CiteDrive will ensure that every reference within a project receives a unique citation key based on this format. Additionally, you have the option to override citation keys as you see fit (in case you prefer to use your own system of organization.)"
    }), "\n", createVNode(_components.h2, {
      id: "citedrive-companion-context-menu",
      children: "CiteDrive Companion context menu"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/457fd7b4-b266-4f6e-b149-866a96a0c219_0_RxqWKU_W8FiilTue.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: ["The\xA0", createVNode(_components.a, {
        href: "https://chrome.google.com/webstore/detail/citedrive-companion/gmmonfphegngpcbcapfbgembkjeookik",
        children: "CiteDrive Companion browser extension"
      }), "\xA0was already a quick and easy way to add papers and web references to your project. Now it also streamlines adding book and DOI-based references to your project through a new right-click context menu! Simply select an ISBN or DOI within page text, right-click to open the context menu, and select one of the options under CiteDrive Companion."]
    }), "\n", createVNode(_components.h2, {
      id: "directly-import-bibtex-references",
      children: "Directly import BibTeX references"
    }), "\n", createVNode(_components.p, {
      children: ["Have existing BibTeX references or a bibliography you\u2019d like to manage through CiteDrive? We\u2019ve now made it incredibly easy to import BibTeX directly into your project. Simply select\xA0", createVNode(_components.strong, {
        children: "\u201CPaste BibTeX code\u201D"
      }), "\xA0from the options under the Add menu:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/e2e81a42-2bab-4362-8c38-23a5740d9daf_0_fSyuYKYYksHkg2uL.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "BibTeX references pasted into the code field will then be imported and added to your project."
    }), "\n", createVNode(_components.h2, {
      id: "extended-bibtex-types-and-fields",
      children: "Extended BibTeX types and fields"
    }), "\n", createVNode(_components.p, {
      children: "Based on user feedback, we heard loud and clear that our hosted BibTeX files weren\u2019t included as much rich detail as desired. We are now including all provided types and fields in our hosted output \u2014 whether or not CiteDrive itself supports the custom field."
    }), "\n", createVNode(_components.p, {
      children: "As a perfect example, let\u2019s say you\u2019ve imported the following custom BibTeX code into your project: As a perfect example, let\u2019s say you\u2019ve imported the following custom BibTeX code into your project:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/1d215a80-d05d-46fa-a743-5200d6dbd2d2_custom-bibtex.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: ["Although\xA0", createVNode(_components.strong, {
        children: "@something"
      }), "\xA0is an unsupported type within CiteDrive, your project\u2019s hosted BibTeX file will now pass through the original code nearly verbatim \u2014 including all fields."]
    }), "\n", createVNode(_components.h2, {
      id: "other-improvements-and-bug-fixes",
      children: "Other improvements and bug fixes:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Addressed an issue where CiteDrive Companion was unable to extract information from certain pages that should have worked."
      }), "\n", createVNode(_components.li, {
        children: "Front-end performance improvements."
      }), "\n", createVNode(_components.li, {
        children: "Citing websites & online media."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "special-thanks",
      children: "Special Thanks"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Junbum Lee \u2014\xA0", createVNode(_components.a, {
          href: "https://github.com/beomi",
          children: "GitHub"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Vincent Toor"
      }), "\n", createVNode(_components.li, {
        children: "Sebasti\xE1n Daza"
      }), "\n", createVNode(_components.li, {
        children: "Alexander"
      }), "\n", createVNode(_components.li, {
        children: "Derek"
      }), "\n", createVNode(_components.li, {
        children: "Thomas"
      }), "\n", createVNode(_components.li, {
        children: "Guys at Overleaf \u2014 Overleaf.com"
      }), "\n"]
    })]
  });
}

function MDXContent$h(props = {}) {
  return createVNode(MDXLayout$h, { ...props,
    children: createVNode(_createMdxContent$h, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$h, "astro:jsx");

__astro_tag_component__(MDXContent$h, "astro:jsx");
MDXContent$h[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$h.layout);
const url$h = "/blog/citedrive-november-2021-release/";
const file$h = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-november-2021-release.mdx";
function rawContent$h() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$h() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$h = MDXContent$h;

const _page28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$h,
  compiledContent: compiledContent$h,
  default: MDXContent$h,
  file: file$h,
  frontmatter: frontmatter$h,
  getHeadings: getHeadings$h,
  prerender: prerender$h,
  rawContent: rawContent$h,
  url: url$h
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$g = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$g;
  content.file = file$g;
  content.url = url$g;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$g,
    url: url$g,
    content,
    frontmatter: content,
    headings: getHeadings$g(),
    "server:root": true,
    children
  });
};
const frontmatter$g = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "How to Cite a Website in BibTeX",
  "pubDate": "Dec 14 2022",
  "lang": "en"
};
function getHeadings$g() {
  return [{
    "depth": 1,
    "slug": "how-to-cite-a-website-in-bibtex",
    "text": "How to Cite a Website in BibTeX"
  }, {
    "depth": 2,
    "slug": "citedrive",
    "text": "CiteDrive"
  }, {
    "depth": 2,
    "slug": "basic-format",
    "text": "Basic Format"
  }, {
    "depth": 2,
    "slug": "using-biblatex",
    "text": "Using BibLaTeX"
  }, {
    "depth": 2,
    "slug": "in-text-citation",
    "text": "In-Text Citation"
  }, {
    "depth": 2,
    "slug": "full-reference",
    "text": "Full Reference"
  }];
}
const prerender$g = true;

function _createMdxContent$g(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    a: "a",
    pre: "pre",
    code: "code",
    span: "span",
    hr: "hr"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "how-to-cite-a-website-in-bibtex",
      children: "How to Cite a Website in BibTeX"
    }), "\n", createVNode(_components.p, {
      children: "BibTeX is a tool and a file format used for managing citations and bibliographies in LaTeX documents. Since citing websites requires a hack, there are a few things to remember when referencing a website in a BibTeX document. To simplify matters, BibLaTeX was developed."
    }), "\n", createVNode(_components.h2, {
      id: "citedrive",
      children: "CiteDrive"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf",
        children: "Overleaf"
      }), " and ", createVNode(_components.a, {
        href: "https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619",
        children: "R Studio"
      }), " are just two of the many online publishing platforms that ", createVNode(_components.a, {
        href: "https://citedrive.com/",
        children: "CiteDrive"
      }), " synchronizes with automatically. In order to facilitate citing academic articles in, say, an Overleaf project, we provide a ", createVNode(_components.a, {
        href: "https://citedrive.medium.com/the-citedrive-companion-for-overleaf-and-rstudio-d8022adb9370",
        children: "browser extension"
      }), " that lets you do so without leaving the browser and in the proper BibTeX format. The extension can also be used to save web pages in BibLaTeX format, which will record the page\u2019s title, URL, and access date automatically."]
    }), "\n", createVNode(_components.h2, {
      id: "basic-format",
      children: "Basic Format"
    }), "\n", createVNode(_components.p, {
      children: "The basic format for citing a website in BibTeX is as follows:"
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "@misc{label,   "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    title = {Website Title},   "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    url = {http://website-url.com},   "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    author = {Author Name},   "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    year = {Year Published},   "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    note = {Accessed on Month Day, Year} "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In this format, the ", createVNode(_components.code, {
        children: "label"
      }), " is a unique identifier for the citation, the ", createVNode(_components.code, {
        children: "title"
      }), " is the title of the website, the ", createVNode(_components.code, {
        children: "url"
      }), " is the website\u2019s URL, the ", createVNode(_components.code, {
        children: "author"
      }), " is the name of the website\u2019s author (if known), the ", createVNode(_components.code, {
        children: "year"
      }), " is the year the website was published (if known), and the ", createVNode(_components.code, {
        children: "note"
      }), " is the date you accessed the website."]
    }), "\n", createVNode(_components.h2, {
      id: "using-biblatex",
      children: "Using BibLaTeX"
    }), "\n", createVNode(_components.p, {
      children: "We advise using BibLaTeX because it automatically supports the \u2018@online\u2019 entry type and requires no additional configuration for use. The fields \u201Curl\u201D and \u201Curldate\u201D are where you can put in the URL and the date you accessed it."
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "@online{CiteDrive2022,"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    title = {Website Title},  "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    author = {Author Name},  "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    year = {Year Published},"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    url = {http://website-url.com},   "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "    urldate      = {Use the date of access}"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "in-text-citation",
      children: "In-Text Citation"
    }), "\n", createVNode(_components.p, {
      children: ["To include the citation in your document, you can use the ", createVNode(_components.code, {
        children: "\\cite"
      }), " command followed by the citation\u2019s label like this:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "\\cite{label}"
      })
    }), "\n", createVNode(_components.p, {
      children: "This will create an in-text citation that looks like this: [label]"
    }), "\n", createVNode(_components.h2, {
      id: "full-reference",
      children: "Full Reference"
    }), "\n", createVNode(_components.p, {
      children: ["To include the full reference for the website at the end of your document, you can use the ", createVNode(_components.code, {
        children: "\\bibliography"
      }), " command, followed by the name of your BibTeX file (without the ", createVNode(_components.code, {
        children: ".bib"
      }), " extension), like this:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "\\bibliography{bibfile}"
      })
    }), "\n", createVNode(_components.p, {
      children: "This will create a reference list that includes the full citation for the website, using the information from the BibTeX file."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "With these basic guidelines, you can easily cite a website in a BibTeX file and include it in your LaTeX document. Just remember to follow your target publication\u2019s specific formatting and style guidelines to ensure that your citations are correct."
    })]
  });
}

function MDXContent$g(props = {}) {
  return createVNode(MDXLayout$g, { ...props,
    children: createVNode(_createMdxContent$g, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$g, "astro:jsx");

__astro_tag_component__(MDXContent$g, "astro:jsx");
MDXContent$g[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$g.layout);
const url$g = "/blog/how-to-cite-a-website-in-bibtex/";
const file$g = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/how-to-cite-a-website-in-bibtex.mdx";
function rawContent$g() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$g() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$g = MDXContent$g;

const _page29 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$g,
  compiledContent: compiledContent$g,
  default: MDXContent$g,
  file: file$g,
  frontmatter: frontmatter$g,
  getHeadings: getHeadings$g,
  prerender: prerender$g,
  rawContent: rawContent$g,
  url: url$g
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$f = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$f;
  content.file = file$f;
  content.url = url$f;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$f,
    url: url$f,
    content,
    frontmatter: content,
    headings: getHeadings$f(),
    "server:root": true,
    children
  });
};
const frontmatter$f = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "CiteDrive January 2022 Release",
  "pubDate": "Feb 23 2022",
  "lang": "en"
};
function getHeadings$f() {
  return [{
    "depth": 1,
    "slug": "citedrive-january-2022-release",
    "text": "CiteDrive January 2022 Release"
  }, {
    "depth": 2,
    "slug": "overleaf-in-editor-experience",
    "text": "Overleaf In-editor Experience"
  }, {
    "depth": 2,
    "slug": "citedrive-companion-context-menu",
    "text": "CiteDrive Companion Context Menu"
  }, {
    "depth": 2,
    "slug": "bibtex-direct-import",
    "text": "BibTeX Direct Import"
  }, {
    "depth": 2,
    "slug": "full-bibtex-control",
    "text": "Full BibTeX control"
  }, {
    "depth": 2,
    "slug": "other-improvements-and-fixes",
    "text": "Other Improvements and Fixes:"
  }];
}
const prerender$f = true;

function _createMdxContent$f(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h2: "h2",
    img: "img",
    strong: "strong",
    ul: "ul",
    li: "li"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "citedrive-january-2022-release",
      children: "CiteDrive January 2022 Release"
    }), "\n", createVNode(_components.p, {
      children: "Happy new year guys! We have been hard at work in the background building a better reference management experience based on all of the amazing feedback we received from users like you."
    }), "\n", createVNode(_components.p, {
      children: "On behalf of the entire CiteDrive crew, we hope everyone has had a wonderful holiday season and is ready to embark on an exciting 2022! The team has been hard at work in the background these last couple of months building a better reference management experience based on all of the amazing feedback we received from users like you."
    }), "\n", createVNode(_components.p, {
      children: ["Here are some of the highlights we\u2019re proud to announce for the\xA0", createVNode(_components.a, {
        href: "https://app.citedrive.com/",
        children: "January 2022 release of CiteDrive"
      }), ":"]
    }), "\n", createVNode(_components.h2, {
      id: "overleaf-in-editor-experience",
      children: "Overleaf In-editor Experience"
    }), "\n", createVNode(_components.p, {
      children: ["As a continuation of our efforts to simplify reference management, reduce clicks and generally remove tedium, we\u2019ve leaned into our collaboration with the Overleaf team to introduce the in-editor experience. With the\xA0", createVNode(_components.a, {
        href: "https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik",
        children: "CiteDrive Companion browser add-on"
      }), "\xA0installed, you\u2019ll notice a new \u201CInsert Citation\u201D button added to your Overleaf screen:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/637d4567-c7d6-4145-9a26-2b6330b27c67_0_E9tHJjph5ULEMZnm.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "Clicking this button will present you with a direct view of the references available in the selected CiteDrive project. As you select one or more references from your project, you can click \u201CIn-text citation\u201D, at which point the CiteDrive Companion will directly insert your in-text references into your current editor location."
    }), "\n", createVNode(_components.p, {
      children: "As we continue to evolve the integration between CiteDrive and Overleaf, we will strive to make the entire end-to-end experience seamless so that you can focus your time on research and writing \u2014 not on tools."
    }), "\n", createVNode(_components.h2, {
      id: "citedrive-companion-context-menu",
      children: "CiteDrive Companion Context Menu"
    }), "\n", createVNode(_components.p, {
      children: "Although the CiteDrive Companion add-on already empowered you to seamlessly capture articles and web pages at the point of browsing, you can now enjoy the same benefit with ISBN lookups and untagged DOIs. While viewing a page that contains the ISBN of a book you\u2019d like to add to your project, simply select/highlight the ISBN and right-click:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/72245ac6-9ce2-41c0-8af8-6a2aff7da287_0_iCeqhMbGU5G-jMLb.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "From the pop-up menu, select CiteDrive Companion and Search ISBN. You can then seamlessly add the book to your project just as you would an article or webpage."
    }), "\n", createVNode(_components.h2, {
      id: "bibtex-direct-import",
      children: "BibTeX Direct Import"
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019re one of the many LaTeX users who already have a BibTeX-based collection of references you\u2019d like to import into CiteDrive, we\u2019re excited to share that it\u2019s now a breeze to directly paste and import BibTeX references into your project. From within your CiteDrive project, simply click\xA0", createVNode(_components.strong, {
        children: "Add"
      }), "\xA0>\xA0", createVNode(_components.strong, {
        children: "Paste BibTeX Code"
      }), "\xA0and paste your existing BibTeX into the provided field:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/e9de6987-e11a-4f24-a4f6-d90a5a5196da_0_JZ4S6iGaN_1_1TFS.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.h2, {
      id: "full-bibtex-control",
      children: "Full BibTeX control"
    }), "\n", createVNode(_components.p, {
      children: "Further doubling down on support for our BibTeX users, you now have the ability to customize the generated BibTeX for references before you add them to your project:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/6bc4b94e-b5a8-4476-b079-190b1d80f720_0_DMhD_oQjrHo0PWBY.gif?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "Modify anything from BibTeX tag type, reference key, and standard BibTeX attributes to adding fully custom attributes. All attributes will carry over to your hosted references. bib file when working with an editor such as Overleaf."
    }), "\n", createVNode(_components.h2, {
      id: "other-improvements-and-fixes",
      children: "Other Improvements and Fixes:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Customizable, human-readable citation keys vs. UUID-based keys"
      }), "\n", createVNode(_components.li, {
        children: "Extended BibTeX fields (e.g. BibLaTeX)"
      }), "\n", createVNode(_components.li, {
        children: "More robust DOI and content detection in the CiteDrive Companion plugin"
      }), "\n", createVNode(_components.li, {
        children: "Many other incremental improvements"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["We\u2019re excited to hear your thoughts and feedback as we continue to build the world\u2019s best reference management experience for LaTeX authors. Try it out at\xA0", createVNode(_components.a, {
        href: "https://citedrive.com/",
        children: "citedrive.com"
      }), "\xA0and share your thoughts with us at\xA0", createVNode(_components.a, {
        href: "mailto:hello@citedrive.com",
        children: "hello@citedrive.com"
      })]
    })]
  });
}

function MDXContent$f(props = {}) {
  return createVNode(MDXLayout$f, { ...props,
    children: createVNode(_createMdxContent$f, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$f, "astro:jsx");

__astro_tag_component__(MDXContent$f, "astro:jsx");
MDXContent$f[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$f.layout);
const url$f = "/blog/citedrive-january-2022-release/";
const file$f = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citedrive-january-2022-release.mdx";
function rawContent$f() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$f() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$f = MDXContent$f;

const _page30 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$f,
  compiledContent: compiledContent$f,
  default: MDXContent$f,
  file: file$f,
  frontmatter: frontmatter$f,
  getHeadings: getHeadings$f,
  prerender: prerender$f,
  rawContent: rawContent$f,
  url: url$f
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$e = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$e;
  content.file = file$e;
  content.url = url$e;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$e,
    url: url$e,
    content,
    frontmatter: content,
    headings: getHeadings$e(),
    "server:root": true,
    children
  });
};
const frontmatter$e = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Overleaf Source Editor Upgrade",
  "pubDate": "June 16 2022",
  "lang": "en"
};
function getHeadings$e() {
  return [{
    "depth": 1,
    "slug": "overleaf-source-editor-upgrade",
    "text": "Overleaf Source Editor Upgrade"
  }];
}
const prerender$e = true;

function _createMdxContent$e(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    a: "a"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "overleaf-source-editor-upgrade",
      children: "Overleaf Source Editor Upgrade"
    }), "\n", createVNode(_components.p, {
      children: "Overleaf is currently rebuilding its source editor, and CiteDrive will adapt its extension to work with the new environment. This means that you\u2019ll be able to manage your BibTeX references in the new editor as well."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/a4f1b7b4-c101-47c9-ae01-44f27be6d999_Screenshot%202022-07-16%20at%2012.09.23.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=1000&h=558",
        alt: "Test"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The new source editor is accessible to anyone who has joined the Beta program. You may try out the new editor by going to\xA0", createVNode(_components.a, {
        href: "https://www.overleaf.com/beta/participate",
        children: "https://www.overleaf.com/beta/participate"
      }), "\xA0(or coming here from the Account Settings page) and checking the \u201COpt-In to Beta Program.\u201D"]
    }), "\n", createVNode(_components.p, {
      children: "After that, you will see a three-way switch that allows you to change between \u201CSource,\u201D \u201CSource (legacy),\u201D and \u201CRich Text\u201D when opening any project on Overleaf. We have adjusted all changes accordingly, and the CiteDrive extension will work for both the new source editor while still available for the old one. We have delivered the new code to all supported browsers - waiting for the browser platforms to confirm."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/f89e6023-1257-4513-af4a-b5463e8f142c_Screenshot+2022-07-16+at+11.17.24.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "Another change will be the position of the CiteDrive button above the Overleaf project. The extension to CiteDrive will no longer be accessible via \u201Cinsert citation.\u201D Instead, we have added a CiteDrive button in the top toolbar on the right. See the following image:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://images.prismic.io/citedrive/28774aa8-bbef-486f-8375-5024b9d96525_Screenshot+2022-07-16+at+11.17.14.png?auto=compress,format",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: ["This change is due to two factors: We know the CiteDrive companion conflicts with the popular browser extension\xA0", createVNode(_components.a, {
        href: "https://www.writefull.com/",
        children: "Writefull"
      }), "\xA0when both are used simultaneously in Overleaf. For this reason - and because of future functions that deepen the integration of CiteDrive / Overleaf, we will include a general CiteDrive button in the next version."]
    }), "\n", createVNode(_components.p, {
      children: "We\u2019ll notify you as soon as we release updates to our browser plugin. In the meantime, you can continue using our extension in the legacy source editor."
    })]
  });
}

function MDXContent$e(props = {}) {
  return createVNode(MDXLayout$e, { ...props,
    children: createVNode(_createMdxContent$e, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$e, "astro:jsx");

__astro_tag_component__(MDXContent$e, "astro:jsx");
MDXContent$e[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$e.layout);
const url$e = "/blog/overleaf-source-editor-upgrade/";
const file$e = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/overleaf-source-editor-upgrade.mdx";
function rawContent$e() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$e() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$e = MDXContent$e;

const _page31 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$e,
  compiledContent: compiledContent$e,
  default: MDXContent$e,
  file: file$e,
  frontmatter: frontmatter$e,
  getHeadings: getHeadings$e,
  prerender: prerender$e,
  rawContent: rawContent$e,
  url: url$e
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$d = async function ({
  children
}) {
  const Layout = (await import('./BlogPost.cd090bf0.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter$d;
  content.file = file$d;
  content.url = url$d;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$d,
    url: url$d,
    content,
    frontmatter: content,
    headings: getHeadings$d(),
    "server:root": true,
    children
  });
};
const frontmatter$d = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Citation keys in BibTeX",
  "pubDate": "Jan 08 2023",
  "lang": "en"
};
function getHeadings$d() {
  return [{
    "depth": 1,
    "slug": "citation-keys-in-bibtex",
    "text": "Citation keys in BibTeX"
  }];
}
const prerender$d = true;

function _createMdxContent$d(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    pre: "pre",
    span: "span"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "citation-keys-in-bibtex",
      children: "Citation keys in BibTeX"
    }), "\n", createVNode(_components.p, {
      children: ["The citation key is a unique identifier in BibTeX that is used to identify a specific source in your bibliography file. The citation key is used in the ", createVNode(_components.code, {
        children: "\\cite{key}"
      }), " command to generate a citation in your LaTeX document, as well as in the bibliography file to refer to the source, or in pandoc-based markdown files, such as when using Quarto or R Markdown with ", createVNode(_components.code, {
        children: "[@key]"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["To define a citation key in a BibTeX bibliography file, use the ", createVNode(_components.code, {
        children: "@"
      }), " command followed by the entry type (e.g., ", createVNode(_components.code, {
        children: "@article"
      }), ", ", createVNode(_components.code, {
        children: "@book"
      }), ", etc.), followed by the citation key enclosed in curly braces. As an example:"]
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "@article{key, "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "	author = {John Smith}, "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "	title = {The Great Article}, "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "	journal = {Journal of Great Articles}, "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "	year = {2021}, "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "	volume = {1}, "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "	number = {2}, "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "	pages = {3-4} "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "} "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In this example, the citation key is \u201Ckey.\u201D You can choose any unique identifier you want as the citation key as long as it does not contain any spaces or special characters. It is a good idea to choose a descriptive citation key that is easy to remember so that it is easy to use in your LaTeX document. It is frequently formed from the first author\u2019s surname, the date, and the first non-stopper word in the source\u2019s title."
    })]
  });
}

function MDXContent$d(props = {}) {
  return createVNode(MDXLayout$d, { ...props,
    children: createVNode(_createMdxContent$d, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$d, "astro:jsx");

__astro_tag_component__(MDXContent$d, "astro:jsx");
MDXContent$d[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$d.layout);
const url$d = "/blog/citation-keys-in-bibtex/";
const file$d = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/citation-keys-in-bibtex.mdx";
function rawContent$d() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$d() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$d = MDXContent$d;

const _page32 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$d,
  compiledContent: compiledContent$d,
  default: MDXContent$d,
  file: file$d,
  frontmatter: frontmatter$d,
  getHeadings: getHeadings$d,
  prerender: prerender$d,
  rawContent: rawContent$d,
  url: url$d
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$c = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$c;
  content.file = file$c;
  content.url = url$c;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$c,
    url: url$c,
    content,
    frontmatter: content,
    headings: getHeadings$c(),
    "server:root": true,
    children
  });
};
const frontmatter$c = {
  "title": "Adding References from Google Scholar",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "From Google Scholar",
  "cat": "add-references",
  "lang": "en"
};
function getHeadings$c() {
  return [{
    "depth": 1,
    "slug": "adding-references-from-google-scholar",
    "text": "Adding References from Google Scholar"
  }, {
    "depth": 3,
    "slug": "recommendation-install-citedrive-companion-browser-extension",
    "text": "Recommendation: Install CiteDrive Companion browser extension"
  }, {
    "depth": 2,
    "slug": "example-adding-article-using-citedrive-companion",
    "text": "Example: Adding article using CiteDrive Companion"
  }];
}
const prerender$c = true;

function _createMdxContent$c(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    blockquote: "blockquote",
    h3: "h3",
    ul: "ul",
    li: "li",
    a: "a",
    h2: "h2",
    code: "code",
    img: "img",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "adding-references-from-google-scholar",
      children: "Adding References from Google Scholar"
    }), "\n", createVNode(_components.p, {
      children: "If you do most of your source discovery in Google Scholar, CiteDrive provides multiple easy ways to collect your references. We recommend using the CiteDrive Companion browser extension but additional methods without the extension are also covered in detail below."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.h3, {
        id: "recommendation-install-citedrive-companion-browser-extension",
        children: "Recommendation: Install CiteDrive Companion browser extension"
      }), "\n", createVNode(_components.p, {
        children: "We strongly recommend installing the CiteDrive Companion browser extension for the best experience. Add articles, websites and more directly from Google Scholar, Pubmed and anywhere you\u2019re searching. CiteDrive Companion is available from:"
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: createVNode(_components.a, {
            href: "https://chrome.google.com/webstore/detail/citedrive-companion/gmmonfphegngpcbcapfbgembkjeookik",
            children: "Chrome Web Store"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.a, {
            href: "https://addons.mozilla.org/af/firefox/addon/citedrive-companion/",
            children: "Firefox/Mozilla addons"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-adding-article-using-citedrive-companion",
      children: "Example: Adding article using CiteDrive Companion"
    }), "\n", createVNode(_components.p, {
      children: ["Let\u2019s start by looking up our favorite ", createVNode(_components.code, {
        children: "algorithms"
      }), " article on Google Scholar:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-bibtex-scholar.png",
        alt: "Google Scholar lookup"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Click on the ", createVNode(_components.code, {
        children: "Algorithms"
      }), " paper link to open the full view on Springer Link. Locate the CiteDrive Companion extension icon in the upper right of your browser (highlighted). ", createVNode(_components.em, {
        children: "If you do not see the icon, please open your browser extensions list and pin the CiteDrive Companion extension in order for the icon to display"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-scholar-icon.png",
        alt: "Companion icon"
      })
    }), "\n", createVNode(_components.p, {
      children: "Click the icon and you will see a BibTeX representation of your reference presented, with the ability to customize the BibTeX snippet to your liking:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-scholar-add.png",
        alt: "Companion popup"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Once you are satisfied, click ", createVNode(_components.code, {
        children: "Save Reference"
      }), " to add the reference to the selected project."]
    })]
  });
}

function MDXContent$c(props = {}) {
  return createVNode(MDXLayout$c, { ...props,
    children: createVNode(_createMdxContent$c, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$c, "astro:jsx");

__astro_tag_component__(MDXContent$c, "astro:jsx");
MDXContent$c[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$c.layout);
const url$c = "/docs/adding-references-from-google-scholar/";
const file$c = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-from-google-scholar.mdx";
function rawContent$c() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$c() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$c = MDXContent$c;

const _page34 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$c,
  compiledContent: compiledContent$c,
  default: MDXContent$c,
  file: file$c,
  frontmatter: frontmatter$c,
  getHeadings: getHeadings$c,
  prerender: prerender$c,
  rawContent: rawContent$c,
  url: url$c
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$b = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$b;
  content.file = file$b;
  content.url = url$b;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$b,
    url: url$b,
    content,
    frontmatter: content,
    headings: getHeadings$b(),
    "server:root": true,
    children
  });
};
const frontmatter$b = {
  "title": "Creating a new project in CiteDrive",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "Create a project",
  "cat": "how-tos",
  "lang": "en"
};
function getHeadings$b() {
  return [{
    "depth": 1,
    "slug": "create-a-project",
    "text": "Create a project"
  }];
}
const prerender$b = true;

function _createMdxContent$b(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "create-a-project",
      children: "Create a project"
    }), "\n", createVNode(_components.p, {
      children: "First, log in to your account to create a new project in CiteDrive. Then, on the dashboard, you can choose between Overleaf, BibTeX/BibLaTeX, and R-Markdown, depending on the environment you want to work with."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/creating-a-new-project-in-citedrive.png",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "You will be prompted to name your project and select a project type. For this example, we will name our project \u201CExample Project\u201D and select \u201COverleaf.\u201D"
    }), "\n", createVNode(_components.p, {
      children: "Once you have created your project, you can invite your team to collaborate on the project and manage your bibliography together. You can also sync your project with Overleaf or R Studio."
    })]
  });
}

function MDXContent$b(props = {}) {
  return createVNode(MDXLayout$b, { ...props,
    children: createVNode(_createMdxContent$b, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$b, "astro:jsx");

__astro_tag_component__(MDXContent$b, "astro:jsx");
MDXContent$b[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$b.layout);
const url$b = "/docs/creating-a-new-project-in-citedrive/";
const file$b = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/creating-a-new-project-in-citedrive.mdx";
function rawContent$b() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$b() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$b = MDXContent$b;

const _page35 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$b,
  compiledContent: compiledContent$b,
  default: MDXContent$b,
  file: file$b,
  frontmatter: frontmatter$b,
  getHeadings: getHeadings$b,
  prerender: prerender$b,
  rawContent: rawContent$b,
  url: url$b
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$a = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$a;
  content.file = file$a;
  content.url = url$a;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$a,
    url: url$a,
    content,
    frontmatter: content,
    headings: getHeadings$a(),
    "server:root": true,
    children
  });
};
const frontmatter$a = {
  "title": "Adding References from BibTeX",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "From BibTeX",
  "cat": "add-references",
  "lang": "en"
};
function getHeadings$a() {
  return [{
    "depth": 1,
    "slug": "adding-references-from-bibtex",
    "text": "Adding References from BibTeX"
  }, {
    "depth": 2,
    "slug": "example-adding-bibtex-snippet-from-google-scholar",
    "text": "Example: Adding BibTeX snippet from Google Scholar"
  }, {
    "depth": 2,
    "slug": "example-importing-existing-bibtex-database",
    "text": "Example: Importing existing BibTeX database"
  }];
}
const prerender$a = true;

function _createMdxContent$a(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    h2: "h2",
    img: "img"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "adding-references-from-bibtex",
      children: "Adding References from BibTeX"
    }), "\n", createVNode(_components.p, {
      children: ["It\u2019s easy to import BibTeX references into CiteDrive, whether you\u2019re adding a single BibTeX snippet from Google Scholar or importing an existing BibTeX database. Simply select ", createVNode(_components.code, {
        children: "Add reference by hand"
      }), " from the ", createVNode(_components.code, {
        children: "+ Add"
      }), " menu, paste your BibTeX code and click ", createVNode(_components.code, {
        children: "Save Reference"
      }), " to confirm."]
    }), "\n", createVNode(_components.h2, {
      id: "example-adding-bibtex-snippet-from-google-scholar",
      children: "Example: Adding BibTeX snippet from Google Scholar"
    }), "\n", createVNode(_components.p, {
      children: ["Let\u2019s start by looking up our favorite ", createVNode(_components.code, {
        children: "algorithms"
      }), " article on Google Scholar:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-bibtex-scholar.png",
        alt: "Google Scholar lookup"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Locate the ", createVNode(_components.code, {
        children: "Cite"
      }), " link beneath the ", createVNode(_components.code, {
        children: "Algorithms"
      }), " paper and click it so we\u2019re looking at the Cite popover:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-bibtex-scholar-cite.png",
        alt: "Add menu"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Click the ", createVNode(_components.code, {
        children: "BibTex"
      }), " link (highlighted) and copy the BibTeX code from the browser. Next, return to your CiteDrive project and click the ", createVNode(_components.code, {
        children: "+ Add"
      }), " button:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-bibtex-citedrive-add.png",
        alt: "Add menu"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Select ", createVNode(_components.code, {
        children: "Add reference by hand"
      }), " and paste the copied BibTeX code into the popup:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-bibtex-citedrive-paste.png",
        alt: "Pasted code"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Click ", createVNode(_components.code, {
        children: "Save Reference"
      }), " and you\u2019ll find your Algorithms paper added to your project."]
    }), "\n", createVNode(_components.h2, {
      id: "example-importing-existing-bibtex-database",
      children: "Example: Importing existing BibTeX database"
    }), "\n", createVNode(_components.p, {
      children: ["If you have an existing BibTeX database, importing your references into CiteDrive takes just a few seconds. Copy the contents of your existing BibTeX database to your clipboard and click the ", createVNode(_components.code, {
        children: "+ Add"
      }), " button inside your CiteDrive project:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-bibtex-citedrive-add.png",
        alt: "Add menu"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Select ", createVNode(_components.code, {
        children: "Add reference by hand"
      }), " and paste the copied BibTeX database into the popup:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-bibtex-database.png",
        alt: "Pasted database"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Click ", createVNode(_components.code, {
        children: "Save Reference"
      }), " and you\u2019ll find all your BibTeX references imported into your project."]
    })]
  });
}

function MDXContent$a(props = {}) {
  return createVNode(MDXLayout$a, { ...props,
    children: createVNode(_createMdxContent$a, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$a, "astro:jsx");

__astro_tag_component__(MDXContent$a, "astro:jsx");
MDXContent$a[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$a.layout);
const url$a = "/docs/adding-references-from-bibtex/";
const file$a = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-from-bibtex.mdx";
function rawContent$a() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$a() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$a = MDXContent$a;

const _page36 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$a,
  compiledContent: compiledContent$a,
  default: MDXContent$a,
  file: file$a,
  frontmatter: frontmatter$a,
  getHeadings: getHeadings$a,
  prerender: prerender$a,
  rawContent: rawContent$a,
  url: url$a
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$9 = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$9;
  content.file = file$9;
  content.url = url$9;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$9,
    url: url$9,
    content,
    frontmatter: content,
    headings: getHeadings$9(),
    "server:root": true,
    children
  });
};
const frontmatter$9 = {
  "title": "Adding References from Pubmed",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "From Google Pubmed",
  "cat": "add-references",
  "lang": "en"
};
function getHeadings$9() {
  return [{
    "depth": 1,
    "slug": "adding-references-from-pubmed",
    "text": "Adding References from Pubmed"
  }, {
    "depth": 3,
    "slug": "recommendation-install-citedrive-companion-browser-extension",
    "text": "Recommendation: Install CiteDrive Companion browser extension"
  }, {
    "depth": 2,
    "slug": "example-adding-article-using-citedrive-companion",
    "text": "Example: Adding article using CiteDrive Companion"
  }];
}
const prerender$9 = true;

function _createMdxContent$9(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    blockquote: "blockquote",
    h3: "h3",
    ul: "ul",
    li: "li",
    a: "a",
    h2: "h2",
    code: "code",
    img: "img",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "adding-references-from-pubmed",
      children: "Adding References from Pubmed"
    }), "\n", createVNode(_components.p, {
      children: "If you do most of your source discovery in Pubmed, you have multiple options for easily adding references to your CiteDrive project. We recommend using the CiteDrive Companion browser extension but additional methods without the extension are also covered in detail below."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.h3, {
        id: "recommendation-install-citedrive-companion-browser-extension",
        children: "Recommendation: Install CiteDrive Companion browser extension"
      }), "\n", createVNode(_components.p, {
        children: "We strongly recommend installing the CiteDrive Companion browser extension for the best experience. Add articles, websites and more directly from Google Scholar, Pubmed and anywhere you\u2019re searching. CiteDrive Companion is available from:"
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: createVNode(_components.a, {
            href: "https://chrome.google.com/webstore/detail/citedrive-companion/gmmonfphegngpcbcapfbgembkjeookik",
            children: "Chrome Web Store"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.a, {
            href: "https://addons.mozilla.org/af/firefox/addon/citedrive-companion/",
            children: "Firefox/Mozilla addons"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-adding-article-using-citedrive-companion",
      children: "Example: Adding article using CiteDrive Companion"
    }), "\n", createVNode(_components.p, {
      children: ["Let\u2019s start by looking up our favorite ", createVNode(_components.code, {
        children: "algorithms"
      }), " article on Pubmed:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-pubmed-list.png",
        alt: "Pubmed lookup"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Click on the ", createVNode(_components.code, {
        children: "Comparing different supervised machine learning algorithms for disease prediction"
      }), " paper link to open the full view. Locate the CiteDrive Companion extension icon in the upper right of your browser (highlighted). ", createVNode(_components.em, {
        children: "If you do not see the icon, please open your browser extensions list and pin the CiteDrive Companion extension in order for the icon to display"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-pubmed-icon.png",
        alt: "Companion icon"
      })
    }), "\n", createVNode(_components.p, {
      children: "Click the icon and you will see a BibTeX representation of your reference presented, with the ability to customize the BibTeX snippet to your liking:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/from-pubmed-add.png",
        alt: "Companion popup"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Once you are satisfied, click ", createVNode(_components.code, {
        children: "Save Reference"
      }), " to add the reference to the selected project."]
    })]
  });
}

function MDXContent$9(props = {}) {
  return createVNode(MDXLayout$9, { ...props,
    children: createVNode(_createMdxContent$9, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$9, "astro:jsx");

__astro_tag_component__(MDXContent$9, "astro:jsx");
MDXContent$9[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$9.layout);
const url$9 = "/docs/adding-references-from-pubmed/";
const file$9 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-from-pubmed.mdx";
function rawContent$9() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$9() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$9 = MDXContent$9;

const _page37 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$9,
  compiledContent: compiledContent$9,
  default: MDXContent$9,
  file: file$9,
  frontmatter: frontmatter$9,
  getHeadings: getHeadings$9,
  prerender: prerender$9,
  rawContent: rawContent$9,
  url: url$9
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$8 = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$8;
  content.file = file$8;
  content.url = url$8;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$8,
    url: url$8,
    content,
    frontmatter: content,
    headings: getHeadings$8(),
    "server:root": true,
    children
  });
};
const frontmatter$8 = {
  "title": "Adding References to Journals",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "To Journals",
  "cat": "add-references",
  "lang": "en"
};
function getHeadings$8() {
  return [{
    "depth": 1,
    "slug": "adding-references-to-journals",
    "text": "Adding References to Journals"
  }, {
    "depth": 2,
    "slug": "article-searches",
    "text": "Article Searches"
  }];
}
const prerender$8 = true;

function _createMdxContent$8(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    code: "code",
    img: "img"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "adding-references-to-journals",
      children: "Adding References to Journals"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive supports collecting and adding references to your projects in a variety of ways. One of the fastest and easiest paths is to use the CiteDrive Companion Browser Extension but you can also do article searches or ISBN lookups within the app, in addition to pasting existing BibTeX code into your project. Last but not least, you can always add references by hand. We\u2019ll cover a few of these approaches in this section."
    }), "\n", createVNode(_components.h2, {
      id: "article-searches",
      children: "Article Searches"
    }), "\n", createVNode(_components.p, {
      children: ["One convenient way to add references to your project is to use CiteDrive\u2019s built-in article search. Simply click on the Add Reference button and select ", createVNode(_components.code, {
        children: "Journals"
      }), " under Search Online:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "../assets/search-journals-online.png",
        alt: "Search Online"
      })
    }), "\n", createVNode(_components.p, {
      children: ["You will be presented with the option to conduct an article search by title. Try searching for a title such as ", createVNode(_components.code, {
        children: "Quantum computing"
      }), " and hit Enter to find relevant articles."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "../assets/quantum-computing-articles.png",
        alt: "A search for quantum computing"
      })
    }), "\n", createVNode(_components.p, {
      children: ["As you find articles of interest, simply click ", createVNode(_components.code, {
        children: "Add to project"
      }), " and CiteDrive will directly import the reference, as shown below:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "../assets/imported-quantum-computing-article.png",
        alt: "Imported article from search"
      })
    })]
  });
}

function MDXContent$8(props = {}) {
  return createVNode(MDXLayout$8, { ...props,
    children: createVNode(_createMdxContent$8, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$8, "astro:jsx");

__astro_tag_component__(MDXContent$8, "astro:jsx");
MDXContent$8[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$8.layout);
const url$8 = "/docs/adding-references-to-journals/";
const file$8 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-to-journals.mdx";
function rawContent$8() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$8() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$8 = MDXContent$8;

const _page38 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$8,
  compiledContent: compiledContent$8,
  default: MDXContent$8,
  file: file$8,
  frontmatter: frontmatter$8,
  getHeadings: getHeadings$8,
  prerender: prerender$8,
  rawContent: rawContent$8,
  url: url$8
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$7 = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$7;
  content.file = file$7;
  content.url = url$7;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$7,
    url: url$7,
    content,
    frontmatter: content,
    headings: getHeadings$7(),
    "server:root": true,
    children
  });
};
const frontmatter$7 = {
  "title": "Adding References to Websites",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "To Websites",
  "cat": "add-references",
  "lang": "en"
};
function getHeadings$7() {
  return [{
    "depth": 1,
    "slug": "adding-references-to-websites",
    "text": "Adding References to Websites"
  }];
}
const prerender$7 = true;

function _createMdxContent$7(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "adding-references-to-websites",
      children: "Adding References to Websites"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Content coming soon"
      })
    })]
  });
}

function MDXContent$7(props = {}) {
  return createVNode(MDXLayout$7, { ...props,
    children: createVNode(_createMdxContent$7, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$7, "astro:jsx");

__astro_tag_component__(MDXContent$7, "astro:jsx");
MDXContent$7[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$7.layout);
const url$7 = "/docs/adding-references-to-websites/";
const file$7 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-references-to-websites.mdx";
function rawContent$7() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$7() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$7 = MDXContent$7;

const _page39 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$7,
  compiledContent: compiledContent$7,
  default: MDXContent$7,
  file: file$7,
  frontmatter: frontmatter$7,
  getHeadings: getHeadings$7,
  prerender: prerender$7,
  rawContent: rawContent$7,
  url: url$7
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$6 = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$6;
  content.file = file$6;
  content.url = url$6;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$6,
    url: url$6,
    content,
    frontmatter: content,
    headings: getHeadings$6(),
    "server:root": true,
    children
  });
};
const frontmatter$6 = {
  "title": "Enabling BibLaTeX Support",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "biblatex",
  "lang": "en"
};
function getHeadings$6() {
  return [{
    "depth": 1,
    "slug": "enabling-biblatex-support",
    "text": "Enabling BibLaTeX Support"
  }];
}
const prerender$6 = true;

function _createMdxContent$6(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "enabling-biblatex-support",
      children: "Enabling BibLaTeX Support"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Content coming soon"
      })
    })]
  });
}

function MDXContent$6(props = {}) {
  return createVNode(MDXLayout$6, { ...props,
    children: createVNode(_createMdxContent$6, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$6, "astro:jsx");

__astro_tag_component__(MDXContent$6, "astro:jsx");
MDXContent$6[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$6.layout);
const url$6 = "/docs/enabling-biblatex-support/";
const file$6 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/enabling-biblatex-support.mdx";
function rawContent$6() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$6() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$6 = MDXContent$6;

const _page40 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$6,
  compiledContent: compiledContent$6,
  default: MDXContent$6,
  file: file$6,
  frontmatter: frontmatter$6,
  getHeadings: getHeadings$6,
  prerender: prerender$6,
  rawContent: rawContent$6,
  url: url$6
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$5 = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$5;
  content.file = file$5;
  content.url = url$5;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$5,
    url: url$5,
    content,
    frontmatter: content,
    headings: getHeadings$5(),
    "server:root": true,
    children
  });
};
const frontmatter$5 = {
  "title": "Enabling BibTeX Support",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "bibtex",
  "lang": "en"
};
function getHeadings$5() {
  return [{
    "depth": 1,
    "slug": "enabling-bibtex-support",
    "text": "Enabling BibTeX Support"
  }];
}
const prerender$5 = true;

function _createMdxContent$5(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "enabling-bibtex-support",
      children: "Enabling BibTeX Support"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Content coming soon"
      })
    })]
  });
}

function MDXContent$5(props = {}) {
  return createVNode(MDXLayout$5, { ...props,
    children: createVNode(_createMdxContent$5, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$5, "astro:jsx");

__astro_tag_component__(MDXContent$5, "astro:jsx");
MDXContent$5[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$5.layout);
const url$5 = "/docs/enabling-bibtex-support/";
const file$5 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/enabling-bibtex-support.mdx";
function rawContent$5() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$5() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$5 = MDXContent$5;

const _page41 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$5,
  compiledContent: compiledContent$5,
  default: MDXContent$5,
  file: file$5,
  frontmatter: frontmatter$5,
  getHeadings: getHeadings$5,
  prerender: prerender$5,
  rawContent: rawContent$5,
  url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$4 = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$4;
  content.file = file$4;
  content.url = url$4;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$4,
    url: url$4,
    content,
    frontmatter: content,
    headings: getHeadings$4(),
    "server:root": true,
    children
  });
};
const frontmatter$4 = {
  "title": "Enabling Natbib Support",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "Enable support",
  "cat": "natbib",
  "lang": "en"
};
function getHeadings$4() {
  return [{
    "depth": 1,
    "slug": "enabling-natbib-support",
    "text": "Enabling Natbib Support"
  }];
}
const prerender$4 = true;

function _createMdxContent$4(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "enabling-natbib-support",
      children: "Enabling Natbib Support"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Content coming soon"
      })
    })]
  });
}

function MDXContent$4(props = {}) {
  return createVNode(MDXLayout$4, { ...props,
    children: createVNode(_createMdxContent$4, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$4, "astro:jsx");

__astro_tag_component__(MDXContent$4, "astro:jsx");
MDXContent$4[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$4.layout);
const url$4 = "/docs/enabling-natbib-support/";
const file$4 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/enabling-natbib-support.mdx";
function rawContent$4() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$4() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$4 = MDXContent$4;

const _page42 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$4,
  compiledContent: compiledContent$4,
  default: MDXContent$4,
  file: file$4,
  frontmatter: frontmatter$4,
  getHeadings: getHeadings$4,
  prerender: prerender$4,
  rawContent: rawContent$4,
  url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$3 = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$3;
  content.file = file$3;
  content.url = url$3;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$3,
    url: url$3,
    content,
    frontmatter: content,
    headings: getHeadings$3(),
    "server:root": true,
    children
  });
};
const frontmatter$3 = {
  "title": "How to Sync Your References.bib",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "Sync Your References.bib",
  "cat": "how-tos",
  "lang": "en"
};
function getHeadings$3() {
  return [{
    "depth": 1,
    "slug": "how-to-sync-your-referencesbib",
    "text": "How to Sync Your References.bib"
  }];
}
const prerender$3 = true;

function _createMdxContent$3(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "how-to-sync-your-referencesbib",
      children: "How to Sync Your References.bib"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Content coming soon"
      })
    })]
  });
}

function MDXContent$3(props = {}) {
  return createVNode(MDXLayout$3, { ...props,
    children: createVNode(_createMdxContent$3, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$3, "astro:jsx");

__astro_tag_component__(MDXContent$3, "astro:jsx");
MDXContent$3[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$3.layout);
const url$3 = "/docs/synchronize-database/";
const file$3 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/synchronize-database.mdx";
function rawContent$3() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$3() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$3 = MDXContent$3;

const _page43 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  compiledContent: compiledContent$3,
  default: MDXContent$3,
  file: file$3,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  prerender: prerender$3,
  rawContent: rawContent$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$2 = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$2;
  content.file = file$2;
  content.url = url$2;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$2,
    url: url$2,
    content,
    frontmatter: content,
    headings: getHeadings$2(),
    "server:root": true,
    children
  });
};
const frontmatter$2 = {
  "title": "Sharing a projects",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "Sharing a project",
  "cat": "how-tos",
  "lang": "en"
};
function getHeadings$2() {
  return [{
    "depth": 1,
    "slug": "sharing-a-projects",
    "text": "Sharing a projects"
  }, {
    "depth": 2,
    "slug": "invite-to-project",
    "text": "Invite to project"
  }];
}
const prerender$2 = true;

function _createMdxContent$2(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    img: "img"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "sharing-a-projects",
      children: "Sharing a projects"
    }), "\n", createVNode(_components.p, {
      children: "With CiteDrive you are able to share projects with other users and collect, organise and annotate references together."
    }), "\n", createVNode(_components.h2, {
      id: "invite-to-project",
      children: "Invite to project"
    }), "\n", createVNode(_components.p, {
      children: "Adding collaborators to your CiteDrive project is quick and easy. Click the \u201CInvite colleagues button on the project tile, and enter the email addresses of the people you want to invite. They\u2019ll receive an email notification with a link to the project, and they\u2019ll be able to start adding and editing citations immediately."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/sharing-a-projects.png",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "With CiteDrive, it\u2019s easy to get everyone on the same page and make sure your research is accurately cited."
    })]
  });
}

function MDXContent$2(props = {}) {
  return createVNode(MDXLayout$2, { ...props,
    children: createVNode(_createMdxContent$2, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$2, "astro:jsx");

__astro_tag_component__(MDXContent$2, "astro:jsx");
MDXContent$2[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$2.layout);
const url$2 = "/docs/sharing-a-project/";
const file$2 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/sharing-a-project.mdx";
function rawContent$2() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$2() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$2 = MDXContent$2;

const _page44 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  compiledContent: compiledContent$2,
  default: MDXContent$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  prerender: prerender$2,
  rawContent: rawContent$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$1 = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter$1;
  content.file = file$1;
  content.url = url$1;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file: file$1,
    url: url$1,
    content,
    frontmatter: content,
    headings: getHeadings$1(),
    "server:root": true,
    children
  });
};
const frontmatter$1 = {
  "title": "Adding References to Books",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "To Books",
  "cat": "add-references",
  "lang": "en"
};
function getHeadings$1() {
  return [{
    "depth": 1,
    "slug": "adding-references-to-books",
    "text": "Adding References to Books"
  }, {
    "depth": 3,
    "slug": "recommendation-install-citedrive-companion-browser-extension",
    "text": "Recommendation: Install CiteDrive Companion browser extension"
  }, {
    "depth": 2,
    "slug": "example-adding-a-book-from-amazon-using-citedrive-companion",
    "text": "Example: Adding a book from Amazon using CiteDrive Companion"
  }, {
    "depth": 2,
    "slug": "example-adding-a-book-from-an-isbn-lookup",
    "text": "Example: Adding a book from an ISBN lookup"
  }];
}
const prerender$1 = true;

function _createMdxContent$1(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    blockquote: "blockquote",
    h3: "h3",
    ul: "ul",
    li: "li",
    a: "a",
    h2: "h2",
    code: "code",
    img: "img",
    em: "em"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "adding-references-to-books",
      children: "Adding References to Books"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive supports collecting and adding references to your projects in a variety of ways. One of the fastest and easiest paths is to use the CiteDrive Companion Browser Extension but you can also do article searches or ISBN lookups within the app, in addition to pasting existing BibTeX code into your project. Last but not least, you can always add references by hand. We\u2019ll cover a few of these approaches in this section."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.h3, {
        id: "recommendation-install-citedrive-companion-browser-extension",
        children: "Recommendation: Install CiteDrive Companion browser extension"
      }), "\n", createVNode(_components.p, {
        children: "We strongly recommend installing the CiteDrive Companion browser extension for the best experience. Add articles, websites and more directly from Google Scholar, Pubmed and anywhere you\u2019re searching. CiteDrive Companion is available from:"
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: createVNode(_components.a, {
            href: "https://chrome.google.com/webstore/detail/citedrive-companion/gmmonfphegngpcbcapfbgembkjeookik",
            children: "Chrome Web Store"
          })
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.a, {
            href: "https://addons.mozilla.org/af/firefox/addon/citedrive-companion/",
            children: "Firefox/Mozilla addons"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-adding-a-book-from-amazon-using-citedrive-companion",
      children: "Example: Adding a book from Amazon using CiteDrive Companion"
    }), "\n", createVNode(_components.p, {
      children: ["Start by looking up ", createVNode(_components.code, {
        children: "Machine Learning"
      }), " on Amazon and selecting your favorite machine learning textbook to pull up the full detail page:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "'../assets/from-amazon-detail.png",
        alt: "Book on amazon"
      })
    }), "\n", createVNode(_components.h2, {
      id: "example-adding-a-book-from-an-isbn-lookup",
      children: "Example: Adding a book from an ISBN lookup"
    }), "\n", createVNode(_components.p, {
      children: "If you intend to cite one or more book passages as part of your project, the ISBN lookup makes it easy to quickly import book references. Open the ISBN lookup from the Add Reference menu:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/isbn-lookup-menu.png",
        alt: "ISBN Menu Option"
      })
    }), "\n", createVNode(_components.p, {
      children: ["You will be presented with the option to provide an ISBN 10 or 13 for lookup. Try looking up ", createVNode(_components.code, {
        children: "9780134159386"
      }), " for an ", createVNode(_components.em, {
        children: "Applied Physics"
      }), " textbook:"]
    })]
  });
}

function MDXContent$1(props = {}) {
  return createVNode(MDXLayout$1, { ...props,
    children: createVNode(_createMdxContent$1, { ...props
    })
  });
}

__astro_tag_component__(getHeadings$1, "astro:jsx");

__astro_tag_component__(MDXContent$1, "astro:jsx");
MDXContent$1[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$1.layout);
const url$1 = "/docs/adding-to-books/";
const file$1 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/adding-to-books.mdx";
function rawContent$1() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent$1() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content$1 = MDXContent$1;

const _page45 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: MDXContent$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  prerender: prerender$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./pages/all.4e5f39c2.mjs').then(n => n.D)).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }

  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }

  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }

  });
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "title": "Quick Start",
  "description": "Docs intro",
  "layout": "../../layouts/DocsLayout.astro",
  "side": "Quick Start",
  "cat": "quick-start",
  "lang": "en"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "quick-start",
    "text": "Quick Start"
  }, {
    "depth": 2,
    "slug": "create-a-project",
    "text": "Create a Project"
  }, {
    "depth": 2,
    "slug": "add-references-with-citedrive-companion",
    "text": "Add References with CiteDrive Companion"
  }, {
    "depth": 2,
    "slug": "link-your-project-to-overleaf",
    "text": "Link your project to Overleaf"
  }, {
    "depth": 2,
    "slug": "add-a-bibliography-to-your-overleaf-project",
    "text": "Add a bibliography to your Overleaf project"
  }, {
    "depth": 2,
    "slug": "adding-in-text-citations-to-your-paper",
    "text": "Adding in-text citations to your paper"
  }];
}
const prerender = true;

function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    a: "a",
    img: "img",
    code: "code",
    pre: "pre",
    span: "span"
  }, props.components);

  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "quick-start",
      children: "Quick Start"
    }), "\n", createVNode(_components.p, {
      children: "We built CiteDrive from the ground up with a relentless focus on simplicity\u2014 to be distraction-free and enable seamless reference management while staying out of your way. In less than 5 minutes, this quick start will walk you through every step of setting up a new project, collecting references, connecting your project to Overleaf and rendering a paper with bibliography and in-text citations."
    }), "\n", createVNode(_components.h2, {
      id: "create-a-project",
      children: "Create a Project"
    }), "\n", createVNode(_components.p, {
      children: ["Once you\u2019ve ", createVNode(_components.a, {
        href: "https://app.citedrive.com/sign-up",
        children: "signed up for a CiteDrive account"
      }), ",\nbegin by creating your first project. CiteDrive supports a few flavors of projects including BibTex, Overleaf and R-Markdown, as well as a Standard project type. Choose the flavor that is best suited to where you ultimately intend to write and edit your paper."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/create-citedrive-project.png",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: "For the purposes of this quick start guide, create an Overleaf project and name it as you wish."
    }), "\n", createVNode(_components.h2, {
      id: "add-references-with-citedrive-companion",
      children: "Add References with CiteDrive Companion"
    }), "\n", createVNode(_components.p, {
      children: ["One of the fastest and easiest ways to collect references for your CiteDrive project is to install the CiteDrive Companion browser extension from the ", createVNode(_components.a, {
        href: "https://chrome.google.com/webstore/detail/citedrive-companion/gmmonfphegngpcbcapfbgembkjeookik",
        children: "Chrome Web Store"
      }), ". With CiteDrive Companion, you can search and browse papers, books and more through your favorite indexes such as Google Scholar, Pubmed and many others."]
    }), "\n", createVNode(_components.p, {
      children: ["Install the CiteDrive Companion extension from the link above and open a new tab to ", createVNode(_components.a, {
        href: "https://scholar.google.com/",
        children: "Google Scholar"
      }), ". Do a search for a topic such as ", createVNode(_components.code, {
        children: "data science"
      }), " and click a paper of interest. As you identify references you\u2019d like to include in your CiteDrive project, simply click the ", createVNode(_components.code, {
        children: "+"
      }), " button in the upper right corner of your screen:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/citedrive-companion-button.png",
        alt: "Add reference button"
      })
    }), "\n", createVNode(_components.p, {
      children: "A new window will then pop up to confirm the project to which you\u2019d like to add the reference. Click Add Reference to confirm. The reference will now be added to your project."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/citedrive-companion-popup.png",
        alt: "Add reference popup"
      })
    }), "\n", createVNode(_components.h2, {
      id: "link-your-project-to-overleaf",
      children: "Link your project to Overleaf"
    }), "\n", createVNode(_components.p, {
      children: "CiteDrive supports working with a number of different editors but we\u2019ll quickly walk through a demonstration of how to link your CiteDrive project with Overleaf. Start by returning to your project and click the Export button toward the top of the screen:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/export-link.png",
        alt: "Export link"
      })
    }), "\n", createVNode(_components.p, {
      children: "A new tab will be opened to a hosted references.bib file, similar to the one below:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/exported-bibtex.png",
        alt: "Hosted referenced.bib file"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Select and copy the URL of this page and then return to your ", createVNode(_components.a, {
        href: "https://www.overleaf.com/project",
        children: "Overleaf"
      }), " project. On the left-hand pane click the upload button:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/upload-button.png",
        alt: "Upload button"
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the upload popup, select ", createVNode(_components.code, {
        children: "From External URL"
      }), ". Paste the URL from earlier in the top field and enter the name ", createVNode(_components.code, {
        children: "references.bib"
      }), " in the bottom field as shown below:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/add-from-external-url.png",
        alt: "Upload from external URL'"
      })
    }), "\n", createVNode(_components.p, {
      children: "Click the Create button and note the new references.bib file on the left-hand side of the screen."
    }), "\n", createVNode(_components.h2, {
      id: "add-a-bibliography-to-your-overleaf-project",
      children: "Add a bibliography to your Overleaf project"
    }), "\n", createVNode(_components.p, {
      children: "Once you\u2019ve linked your CiteDrive and Overleaf projects, we\u2019ll next want to prepare our paper to include a bibliography. Open your main.tex file and add two tags near the top of the file:"
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "\\usepackage"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "[utf8]{"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "inputenc"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "\\usepackage"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "apacite"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/add-packages.png",
        alt: "Adding packages to your project'"
      })
    }), "\n", createVNode(_components.p, {
      children: "Similarly, add two more tags near the end of the file but before the ending document tag:\nOnce you\u2019ve linked your CiteDrive and Overleaf projects, we\u2019ll next want to prepare our paper to include a bibliography. Open your main.tex file and add two tags near the top of the file:"
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "\\bibliographystyle"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{apacite}"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "\\bibliography"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "{references.bib}"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/add-bibliography-tags.png",
        alt: "Adding bibliography tags to your project'"
      })
    }), "\n", createVNode(_components.p, {
      children: "If you now re-render your paper, you should see an empty bibliography included:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/initial-paper.png",
        alt: "An empty paper with a bibliography'"
      })
    }), "\n", createVNode(_components.h2, {
      id: "adding-in-text-citations-to-your-paper",
      children: "Adding in-text citations to your paper"
    }), "\n", createVNode(_components.p, {
      children: "As the final step in our quick start, we\u2019ll generate and add a couple in-text citations to our Overleaf project. Begin by drafting some text for a section of your paper:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/draft-paper-copy.png",
        alt: "Drafting some copy for the paper"
      })
    }), "\n", createVNode(_components.p, {
      children: ["In CiteDrive, select a reference from your project and click the ", createVNode(_components.code, {
        children: "In-text citation"
      }), " button:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/intext-citation-button.png",
        alt: "In-text citation button"
      })
    }), "\n", createVNode(_components.p, {
      children: "Proceed by clicking the Copy citation for BIBTEX button:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/copy-citation-key.png",
        alt: "The in-text citation modal"
      })
    }), "\n", createVNode(_components.p, {
      children: "Return to your Overleaf project and paste this generated citation key into your paper in the appropriate place:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/paste-intext-citation.png",
        alt: "Pasting the citation key"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Repeat for your other reference and click the ", createVNode(_components.code, {
        children: "Recompile"
      }), " button in Overleaf to see the end result:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/assets/rendered-paper.png",
        alt: "The end result"
      })
    })]
  });
}

function MDXContent(props = {}) {
  return createVNode(MDXLayout, { ...props,
    children: createVNode(_createMdxContent, { ...props
    })
  });
}

__astro_tag_component__(getHeadings, "astro:jsx");

__astro_tag_component__(MDXContent, "astro:jsx");
MDXContent[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
const url = "/docs/quick-start/";
const file = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/quick-start.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = MDXContent;

const _page46 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: MDXContent,
  file,
  frontmatter,
  getHeadings,
  prerender,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page29 as A, _page30 as B, _page31 as C, _page32 as D, _page34 as E, _page35 as F, _page36 as G, _page37 as H, _page38 as I, _page39 as J, _page40 as K, _page41 as L, _page42 as M, _page43 as N, _page44 as O, _page45 as P, _page46 as Q, _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page9 as g, _page10 as h, _page11 as i, _page12 as j, _page13 as k, _page14 as l, _page15 as m, _page16 as n, _page17 as o, _page18 as p, _page19 as q, _page20 as r, _page21 as s, _page22 as t, _page23 as u, _page24 as v, _page25 as w, _page26 as x, _page27 as y, _page28 as z };
