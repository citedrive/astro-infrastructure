import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as defineScriptVars, _ as __astro_tag_component__, e as renderComponent, f as renderHead, g as renderSlot, F as Fragment$1 } from '../astro.14328da9.mjs';
import 'html-escaper';
import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';
/* empty css                                                                                                                                                    */import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
/* empty css                                 *//* empty css                              */
const $$Astro$n = createAstro();
const $$InternalLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$InternalLink;
  const { label, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(link, "href")} class="internal-link astro-6QTTI4ED">${label}</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/InternalLink.astro");

var __freeze$7 = Object.freeze;
var __defProp$7 = Object.defineProperty;
var __template$7 = (cooked, raw) => __freeze$7(__defProp$7(cooked, "raw", { value: __freeze$7(raw || cooked.slice()) }));
var _a$7;
const $$Astro$m = createAstro();
const $$Fathom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Fathom;
  const { site, src = "https://cdn.usefathom.com/script.js" } = Astro2.props;
  return renderTemplate(_a$7 || (_a$7 = __template$7(["<script", "", " defer><\/script>"])), addAttribute(src, "src"), addAttribute(site, "data-site"));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Fathom.astro");

var __freeze$6 = Object.freeze;
var __defProp$6 = Object.defineProperty;
var __template$6 = (cooked, raw) => __freeze$6(__defProp$6(cooked, "raw", { value: __freeze$6(raw || cooked.slice()) }));
var _a$6;
const $$Astro$l = createAstro();
const $$GoogleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const { id } = Astro2.props;
  const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  return renderTemplate(_a$6 || (_a$6 = __template$6(["<!-- Global site tag (gtag.js) - Google Analytics --><script async", "><\/script>\n<script>(function(){", "\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', id);\n})();<\/script>"])), addAttribute(gtagUrl, "src"), defineScriptVars({ id }));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/GoogleAnalytics.astro");

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$Astro$k = createAstro();
const $$Metrical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Metrical;
  const { app } = Astro2.props;
  return renderTemplate(_a$5 || (_a$5 = __template$5(['<script async src="https://cdn.metrical.xyz/script.js" type="text/javascript"><\/script>\n<script>(function(){', "\nwindow.metrical = {\n  app,\n};\n})();<\/script>"])), defineScriptVars({ app }));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Metrical.astro");

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$j = createAstro();
const $$Plausible = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Plausible;
  const { domain, src = "https://plausible.io/js/script.js" } = Astro2.props;
  return renderTemplate(_a$4 || (_a$4 = __template$4(["<script", "", " defer><\/script>"])), addAttribute(src, "src"), addAttribute(domain, "data-domain"));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Plausible.astro");

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$i = createAstro();
const $$SimpleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SimpleAnalytics;
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script>\n', '<noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade"></noscript>'])), maybeRenderHead($$result));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/SimpleAnalytics.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$h = createAstro();
const $$Umami = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Umami;
  const { dataId, site, host = "/umami.js" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script defer", "", "", "><\/script>"])), addAttribute(site, "src"), addAttribute(host, "host"), addAttribute(dataId, "data-website-id"));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Umami.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$g = createAstro();
const $$Amplitude = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Amplitude;
  Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="text/javascript">\n!function(){"use strict";!function(e,t){var r=e.amplitude||{_q:[],_iq:[]};if(r.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{r.invoked=!0;var n=t.createElement("script");n.type="text/javascript",n.integrity="sha384-KhsNZzlMl/yE+u/MowsLKm9jvghmBxiXW8aKvciqaaMaeHrm5uGeQluaVkpD9C7I",n.crossOrigin="anonymous",n.async=!0,n.src="https://cdn.amplitude.com/libs/analytics-browser-1.5.1-min.js.gz",n.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var s=t.getElementsByTagName("script")[0];function v(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}}s.parentNode.insertBefore(n,s);for(var o=function(){return this._q=[],this},i=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],a=0;a<i.length;a++)v(o,i[a]);r.Identify=o;for(var u=function(){return this._q=[],this},c=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],l=0;l<c.length;l++)v(u,c[l]);r.Revenue=u;var p=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset"],d=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];function f(e){function t(t,r){e[t]=function(){var n={promise:new Promise((r=>{e._q.push({name:t,args:Array.prototype.slice.call(arguments,0),resolve:r})}))};if(r)return n}}for(var r=0;r<p.length;r++)t(p[r],!1);for(var n=0;n<d.length;n++)t(d[n],!0)}f(r),r.createInstance=function(){var e=r._iq.push({_q:[]})-1;return f(r._iq[e]),r._iq[e]},e.amplitude=r}}(window,document)}();\n\namplitude.init(apiKey);\n<\/script>'])));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Amplitude.astro");

const variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};
const container = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};
const item = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45
    }
  },
  hidden: {
    y: 10,
    opacity: 0
  }
};
const MobileMenuInner = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex",
    style: {
      height: "100%",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    children: [/* @__PURE__ */ jsxs(m.ul, {
      variants: container,
      initial: "hidden",
      animate: "visible",
      children: [/* @__PURE__ */ jsx(m.li, {
        className: "mm-list-item",
        variants: item,
        children: /* @__PURE__ */ jsx("a", {
          href: "/overleaf/",
          children: "Overleaf Integration"
        })
      }), /* @__PURE__ */ jsx(m.li, {
        className: "mm-list-item",
        variants: item,
        children: /* @__PURE__ */ jsx("a", {
          href: "/docs/quick-start/",
          children: "Documentation"
        })
      }), /* @__PURE__ */ jsx(m.li, {
        className: "mm-list-item",
        variants: item,
        children: /* @__PURE__ */ jsx("a", {
          href: "/blog/",
          children: "Blog"
        })
      })]
    }), /* @__PURE__ */ jsxs("ul", {
      className: "flex pill",
      style: {
        gap: 0
      },
      children: [/* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx("a", {
          href: "",
          children: "Sign-in"
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx("a", {
          href: "",
          children: "Log-in"
        })
      })]
    })]
  });
};
const DocsMenuInner = ({
  children
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "mm-container",
    children
  });
};
const BlogMenuInner = ({
  children
}) => {
  return /* @__PURE__ */ jsx("ul", {
    className: "mm-container",
    children
  });
};
const MobileMenu = ({
  children,
  site,
  blog,
  doc
}) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  const handleOpen = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("button", {
      className: "absolute-button",
      onClick: handleOpen,
      children: [/* @__PURE__ */ jsx("div", {
        className: open ? "line rotate-left" : "line"
      }), /* @__PURE__ */ jsx("div", {
        className: open ? "line rotate-right" : "line"
      })]
    }), /* @__PURE__ */ jsx(LazyMotion, {
      features: domAnimation,
      children: /* @__PURE__ */ jsx(AnimatePresence, {
        children: open && /* @__PURE__ */ jsxs(m.div, {
          variants,
          initial: "hidden",
          animate: "visible",
          exit: "hidden",
          className: "mobile-menu",
          children: [site && /* @__PURE__ */ jsx(MobileMenuInner, {}), doc && /* @__PURE__ */ jsx(DocsMenuInner, {
            children
          }), blog && /* @__PURE__ */ jsx(BlogMenuInner, {
            children
          })]
        })
      })
    })]
  });
};
__astro_tag_component__(MobileMenu, "@astrojs/react");

const $$Astro$f = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead($$result)}<a href="/" class="flex astro-S7ZBVXMX" style="align-items: center; --gap: 0; font-size: 18px;">
   <svg id="b" xmlns="http://www.w3.org/2000/svg" width="36px" viewBox="0 0 32 32" class="astro-S7ZBVXMX"><path d="M19.38,32H4.76v-3.15c0-1.54,1.15-2.83,2.67-3,2.88-.32,7.71-1.41,7.71-5.18h1.88c0,3.82-3.42,6.39-9.39,7.05-.57,.06-1,.55-1,1.13v1.27h12.74c4.02,0,7.28-3.27,7.28-7.28l-.03-13.58c0-4.06-3.31-7.37-7.37-7.37h-2.26V18.51h-3.72c-4.92,0-9.12-3.67-9.56-8.35-.25-2.64,.59-5.18,2.36-7.13C7.83,1.11,10.32,0,12.92,0V1.89c-2.07,0-4.06,.88-5.45,2.41-1.41,1.55-2.08,3.57-1.88,5.68,.36,3.72,3.73,6.64,7.69,6.64h1.84V0h4.15C24.37,0,28.52,4.15,28.52,9.25l.03,13.58c0,5.05-4.11,9.17-9.16,9.17Z" class="astro-S7ZBVXMX"></path></svg>
   <span class="logotype astro-S7ZBVXMX" style="color: black; margin-left: .25rem">CiteDrive</span>
</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Logo.astro");

const $$Astro$e = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead($$result)}<ul class="flex hidden astro-LOASJEQZ" style="list-style: none; --gap: 2rem; margin-right: 2rem; align-items: center;">
        <!-- <ReactDropdown label="Features" client:load></ReactDropdown> -->
        <!-- <ReactDropdown label="Integrations" client:load>
            <ul class="grid" style="list-style: none; padding: 0">
                <li><a href="/">Overleaf</a></li>
                <li><a href="/">RStudio</a></li>
            </ul>
        </ReactDropdown> -->
        <li class="astro-LOASJEQZ"><a class="header-link astro-LOASJEQZ" href="/overleaf/">Overleaf Integration</a></li>
        <li class="astro-LOASJEQZ"><a class="header-link astro-LOASJEQZ" href="/docs/quick-start/">Documentation</a></li>
        <li class="astro-LOASJEQZ"><a class="header-link astro-LOASJEQZ" href="/blog/">Blog</a></li>

        <!-- <ReactDropdown label="Resources" client:load>
            <ul class="grid" style="list-style: none; padding: 0">
                <li><a href="/docs/quick-start/">Documentaion</a></li>
                <li><a href="/blog/">Blog</a></li>
            </ul>
        </ReactDropdown> -->

        <!-- <li><a class="header-link" href="#">Pricing</a></li> -->
    </ul>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Navigation.astro");

const $$Astro$d = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Header;
  const { title, lang, dir, site, doc, blog } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-PWMMW5BA">

   <nav class="header flex astro-PWMMW5BA" style="justify-content: space-between; align-items: center;">

   <div class="flex astro-PWMMW5BA" style="align-items: center;">


   ${renderComponent($$result, "Logo", $$Logo, { "class": "logo astro-PWMMW5BA" })}


   ${blog && renderTemplate`<span style="font-size: 1rem; border-left: 1px solid black; color: hsl(var(--clr-secondary)); padding-left: 1rem;" class="astro-PWMMW5BA">Blog</span>`}

   </div>

   <div class="flex astro-PWMMW5BA" style="--gap: 0">

   ${renderComponent($$result, "Navigation", $$Navigation, { "class": "astro-PWMMW5BA" })}

   <ul class="flex pill hidden astro-PWMMW5BA" style="--gap: 0">
      <li class="astro-PWMMW5BA"><a href="https://app.citedrive.com/" class="astro-PWMMW5BA">Log In</a></li>
      <li class="astro-PWMMW5BA"><a href="https://app.citedrive.com/sign-up/" class="astro-PWMMW5BA">Sign Up</a></li>
   </ul>

   </div>

   ${renderComponent($$result, "MobileMenu", MobileMenu, { "site": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/MobileMenu/MobileMenu", "client:component-export": "default", "class": "astro-PWMMW5BA" })}

   </nav>

</header>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Header.astro");

function ReactAccordion({
  children,
  label,
  isOpen
}) {
  const [open, setOpen] = useState(isOpen);
  const handleClick = () => setOpen(!open);
  return /* @__PURE__ */ jsxs("li", {
    className: "react-accordion",
    "aria-expanded": "true",
    style: {
      marginBottom: ".75rem"
    },
    children: [/* @__PURE__ */ jsxs("header", {
      className: "flex",
      style: {
        "gap": ".25rem"
      },
      children: [/* @__PURE__ */ jsx("svg", {
        className: open ? "arrow" : "arrow accordion-closed",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 26 12",
        width: "16px",
        children: /* @__PURE__ */ jsx("path", {
          d: "M12.26,11.74L.4,1.93C-.08,1.53-.13,.84,.27,.38h0C.68-.08,1.4-.13,1.88,.26L13,9.46,24.12,.26c.48-.39,1.19-.34,1.6,.12h0c.41,.46,.35,1.15-.12,1.55L13.74,11.74c-.43,.35-1.05,.35-1.48,0Z"
        })
      }), /* @__PURE__ */ jsx("h3", {
        style: {
          marginBottom: 0
        },
        className: "react-accordion-label",
        onClick: handleClick,
        role: "button",
        children: label
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: open ? "react-accordion-content expanded" : "react-accordion-content",
      children
    })]
  });
}
__astro_tag_component__(ReactAccordion, "@astrojs/react");

const $$Astro$c = createAstro();
const $$DocHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$DocHeader;
  Astro2.props;
  const docs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/docs/adding-references-from-bibtex.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.G),"../../pages/docs/adding-references-from-google-scholar.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.E),"../../pages/docs/adding-references-from-pubmed.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.H),"../../pages/docs/adding-references-to-journals.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.I),"../../pages/docs/adding-references-to-websites.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.J),"../../pages/docs/adding-to-books.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.P),"../../pages/docs/creating-a-new-project-in-citedrive.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.F),"../../pages/docs/enabling-biblatex-support.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.K),"../../pages/docs/enabling-bibtex-support.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.L),"../../pages/docs/enabling-natbib-support.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.M),"../../pages/docs/quick-start.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.Q),"../../pages/docs/sharing-a-project.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.O),"../../pages/docs/synchronize-database.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.N)}), () => "../../pages/docs/*.{md,mdx}");
  const QUICKSTART = docs.filter(function(item) {
    return item.frontmatter.cat == "quick-start";
  });
  const ADDREFERENCES = docs.filter(function(item) {
    return item.frontmatter.cat == "add-references";
  });
  const OVERLEAFSETUP = docs.filter(function(item) {
    return item.frontmatter.cat == "overleaf-setup";
  });
  const HOWTOS = docs.filter(function(item) {
    return item.frontmatter.cat == "how-tos";
  });
  const BIBLATEX = docs.filter(function(item) {
    return item.frontmatter.cat == "biblatex";
  });
  const BIBTEX = docs.filter(function(item) {
    return item.frontmatter.cat == "bibtex";
  });
  const NATBIB = docs.filter(function(item) {
    return item.frontmatter.cat == "natbib";
  });
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-63RGYD2U">

   <nav class="alternative-header flex astro-63RGYD2U" style="justify-content: space-between; align-items: center;">

   <div class="flex astro-63RGYD2U" style="align-items: center; justify-content: space-between; width: 100%;">

   <div class="flex astro-63RGYD2U" style="align-items: center;">
      ${renderComponent($$result, "Logo", $$Logo, { "class": "astro-63RGYD2U" })}
      <span style="font-size: 1rem; border-left: 1px solid black; color: hsl(var(--clr-secondary)); padding-left: 1rem;" class="astro-63RGYD2U">Documentation</span>
   </div>   

   <ul class="flex pill hidden astro-63RGYD2U" style="--gap: 0;">
      <li class="astro-63RGYD2U"><a href="https://app.citedrive.com/" class="astro-63RGYD2U">Log In</a></li>
      <li class="astro-63RGYD2U"><a href="https://app.citedrive.com/sign-up/" class="astro-63RGYD2U">Sign Up</a></li>
   </ul>
   
   </div>


   ${renderComponent($$result, "MobileMenu", MobileMenu, { "doc": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/MobileMenu/MobileMenu", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result2) => renderTemplate`<h3 style="margin-bottom: 2rem" class="astro-63RGYD2U">In this Doc</h3>${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Quick Start", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${QUICKSTART.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Add References", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${ADDREFERENCES.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Overleaf Setup", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${OVERLEAFSETUP.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Howtos", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${HOWTOS.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "BibTex Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${BIBTEX.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "BibLaTeX Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${BIBLATEX.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "Natbib Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-63RGYD2U" }, { "default": ($$result3) => renderTemplate`<ul class="list astro-63RGYD2U">
            ${NATBIB.map((doc) => renderTemplate`<li class="astro-63RGYD2U">
               <a class="link astro-63RGYD2U"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}` })}

   </nav>

</header>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/DocHeader.astro");

const $$Astro$b = createAstro();
const $$BlogHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  Astro2.props;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.m),"../../pages/blog/citation-keys-in-bibtex.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.D),"../../pages/blog/citedrive-3.0-information-on-the-upcoming-version.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.s),"../../pages/blog/citedrive-companion-for-overleaf-and-rstudio.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.w),"../../pages/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.n),"../../pages/blog/citedrive-forum-has-moved-to-github-discussions.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.u),"../../pages/blog/citedrive-january-2022-release.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.B),"../../pages/blog/citedrive-november-2021-release.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.z),"../../pages/blog/codemirror-6-a-new-source-editor-for-overleaf.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.v),"../../pages/blog/data-visualization-packages-for-r-you-should-check-out.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.r),"../../pages/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.q),"../../pages/blog/how-to-cite-a-website-in-bibtex.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.A),"../../pages/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.o),"../../pages/blog/literature-management-with-overleaf.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.y),"../../pages/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.p),"../../pages/blog/overleaf-source-editor-upgrade.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.C),"../../pages/blog/parenthetical-vs-narrative-citations-in-citedrive.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.t),"../../pages/blog/using-natbib-with-bibtex-and-overleaf.mdx": () => import('../prerender.1fc5c4ce.mjs').then(n => n.x)}), () => "../../pages/blog/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-FWQZDMCU">

   <nav class="alternative-header flex astro-FWQZDMCU" style="justify-content: space-between; align-items: center;">
    
    <div class="flex astro-FWQZDMCU" style="align-items: center; justify-content: space-between; width: 100%;">

        <div class="flex astro-FWQZDMCU" style="align-items: center;">
            ${renderComponent($$result, "Logo", $$Logo, { "class": "astro-FWQZDMCU" })}
            <span style="font-size: 1rem; border-left: 1px solid black; color: hsl(var(--clr-secondary)); padding-left: 1rem;" class="astro-FWQZDMCU">Blog</span>
        </div>   

        <ul class="flex pill hidden astro-FWQZDMCU" style="--gap: 0;">
            <li class="astro-FWQZDMCU"><a href="https://app.citedrive.com/" class="astro-FWQZDMCU">Log In</a></li>
            <li class="astro-FWQZDMCU"><a href="https://app.citedrive.com/sign-up/" class="astro-FWQZDMCU">Sign Up</a></li>
        </ul>
        
   </div>


   ${renderComponent($$result, "MobileMenu", MobileMenu, { "blog": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/MobileMenu/MobileMenu", "client:component-export": "default", "class": "astro-FWQZDMCU" }, { "default": ($$result2) => renderTemplate`<h3 style="margin-bottom: 2rem" class="astro-FWQZDMCU">All posts</h3><ul class="list astro-FWQZDMCU">
        ${posts.map((post) => renderTemplate`<li style="list-style: none" class="astro-FWQZDMCU">
                
                    <a class="link astro-FWQZDMCU"${addAttribute(post.url, "href")}>${post.frontmatter.title}</a>
                </li>`)}
        </ul>` })}

   </nav>

</header>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/BlogHeader.astro");

const $$Astro$a = createAstro();
const $$DiscoveryHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$DiscoveryHeader;
  return renderTemplate`${maybeRenderHead($$result)}<header>
   <nav class="alternative-header flex" style="justify-content: space-between; align-items: center;">
    
    <div class="flex" style="align-items: center;">
        <a href="/">
        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="5.2 4 95 100" width="64px"><path d="m47.23,29.77c-7.29,0-13.12,6.26-12.41,13.7.62,6.48,6.43,11.25,12.95,11.25h4.17v-24.94h4.81c6.89,0,12.47,5.58,12.47,12.47l.04,20.38c0,6.81-5.52,12.34-12.34,12.34h-20.53v-3.32c0-1.58,1.18-2.92,2.75-3.09,4.48-.49,12.84-2.32,12.84-9.17" style="fill:none; stroke:#000; stroke-miterlimit:10; stroke-width:3px;"></path><rect x="5.68" y="6.04" width="92.66" height="92.66" rx="14" ry="14" style="fill:none; stroke:#1a1a1a; stroke-miterlimit:10;"></rect></svg>
        </a>
        <svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="15 0 150 70" width="128px"><path d="m17.27,39.21v-18.65c0-.36.2-.56.56-.56h12.07c4.79,0,6.61,2.3,6.61,7.42v5.04c0,5.1-1.82,7.31-6.61,7.31h-12.07c-.36,0-.56-.2-.56-.56Zm12.38-2.07c3.02,0,4.14-.92,4.14-4.7v-5.01c0-3.78-1.09-4.76-4.14-4.76h-9.63v14.48h9.63Z"></path><path d="m38.94,21.74v-2.66c0-.36.2-.56.56-.56h1.51c.36,0,.56.2.56.56v2.66c0,.36-.2.56-.56.56h-1.51c-.36,0-.56-.2-.56-.56Zm0,17.47v-14.62c0-.36.2-.56.56-.56h1.51c.36,0,.56.2.56.56v14.62c0,.36-.2.56-.56.56h-1.51c-.36,0-.56-.2-.56-.56Z"></path><path d="m44.23,39.21v-1.37c0-.36.2-.56.56-.56h8.01c2.49,0,3.19-.5,3.19-1.93s-.48-1.79-2.74-2.02l-4.7-.48c-3.58-.36-4.65-1.74-4.65-4.54,0-2.94,1.71-4.28,5.63-4.28h7.78c.36,0,.56.2.56.56v1.37c0,.36-.2.56-.56.56h-7.73c-2.27,0-3.05.56-3.05,1.99,0,1.32.42,1.71,2.46,1.93l4.65.5c4.03.45,5.01,1.9,5.01,4.62,0,3.05-1.68,4.2-5.88,4.2h-7.98c-.36,0-.56-.2-.56-.56Z"></path><path d="m60.47,33.55v-3.39c0-4.06,1.12-6.13,5.8-6.13h4.65c4.23,0,5.68,1.6,5.8,5.68,0,.39-.2.59-.56.59h-1.51c-.36,0-.56-.2-.56-.59-.08-2.63-.67-3.19-3.22-3.19h-4.54c-2.6,0-3.22.62-3.22,3.44v3.81c0,2.88.62,3.5,3.22,3.5h4.54c2.6,0,3.16-.62,3.22-3.25,0-.39.2-.59.56-.59h1.51c.36,0,.56.2.56.59-.14,4.23-1.62,5.74-5.8,5.74h-4.65c-4.68,0-5.8-2.04-5.8-6.22Z"></path><path d="m78.67,33.55v-3.39c0-4.06,1.12-6.13,5.8-6.13h4.65c4.68,0,5.8,2.07,5.8,6.13v3.39c0,4.17-1.12,6.22-5.8,6.22h-4.65c-4.68,0-5.8-2.04-5.8-6.22Zm10.39,3.72c2.6,0,3.22-.62,3.22-3.5v-3.81c0-2.83-.62-3.44-3.22-3.44h-4.54c-2.6,0-3.22.62-3.22,3.44v3.81c0,2.88.62,3.5,3.22,3.5h4.54Z"></path><path d="m103.14,39.35l-7.34-14.64c-.2-.39-.03-.67.39-.67h1.74c.31,0,.5.14.64.42l6.27,12.74,6.27-12.74c.14-.28.34-.42.64-.42h1.76c.42,0,.59.28.39.67l-7.36,14.64c-.14.28-.34.42-.64.42h-2.13c-.31,0-.5-.14-.64-.42Z"></path><path d="m114.96,33.55v-3.39c0-4.06,1.12-6.13,5.8-6.13h3.95c4.68,0,5.8,2.07,5.8,6.13v2.52c0,.36-.2.56-.56.56h-12.35v.53c0,2.88.62,3.5,3.22,3.5h7.87c.36,0,.56.2.56.56v1.37c0,.36-.2.56-.56.56h-7.92c-4.68,0-5.8-2.04-5.8-6.22Zm12.91-2.69v-.9c0-2.83-.62-3.44-3.22-3.44h-3.84c-2.6,0-3.22.62-3.22,3.44v.9h10.28Z"></path><path d="m142.6,24.03c.36,0,.56.2.56.56v1.37c0,.36-.2.56-.56.56h-3.81c-2.21,0-3.22.5-3.22,3.5v9.18c0,.36-.2.56-.56.56h-1.51c-.36,0-.56-.2-.56-.56v-14.62c0-.36.2-.56.56-.56h1.51c.36,0,.56.2.56.56v1.48c.62-1.37,1.9-2.04,4.45-2.04h2.58Z"></path><path d="m147.66,44.72v-1.37c0-.36.2-.56.56-.56h7.48c2.6,0,3.28-.98,3.28-3.5v-2.27c-.56,1.48-1.76,2.18-4.42,2.18h-3.02c-4.68,0-5.8-2.07-5.8-6.22v-8.4c0-.36.2-.56.56-.56h1.51c.36,0,.56.2.56.56v8.62c0,2.88.62,3.5,3.19,3.5h4.23c2.18,0,3.19-.5,3.19-3.5v-8.6c0-.36.2-.56.56-.56h1.51c.36,0,.56.2.56.56v14.45c0,3.84-1.23,6.22-5.91,6.22h-7.48c-.36,0-.56-.2-.56-.56Z"></path></svg>
    </div>

    <ul class="flex pill hidden" style="--gap: 0;">
      <li><a href="https://app.citedrive.com/">Log In</a></li>
      <li><a href="https://app.citedrive.com/sign-up/">Sign Up</a></li>
   </ul>

   </nav>

</header>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/DiscoveryHeader.astro");

const $$Astro$9 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<footer style="background-color: white;" class="astro-DWL4ONJJ">

  <div class="container grid footer-grid astro-DWL4ONJJ">

  <div class="grid astro-DWL4ONJJ">

    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">CiteDrive Companion</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik", "label": "CiteDrive Companion for Chrome", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://addons.mozilla.org/af/firefox/addon/citedrive-companion/", "label": "CiteDrive Companion for Firefox", "label": "CiteDrive Companion for Firefox", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://microsoftedge.microsoft.com/addons/detail/citedrive-bibtex-compan/kpmepfpbjehnlgfbcnbmgihklkkmfnpo", "label": "CiteDrive Companion for Edge", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>

    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Resources</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/docs/quick-start/", "label": "Documentation", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/blog/", "label": "Blog", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://github.com/orgs/citedrive/discussions", "label": "GitHub Discussions", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>


    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Featured</h4>
    <ul class="footer-list astro-DWL4ONJJ">
       <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/citedrive-recommends/", "label": "CiteDrive Recomends", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>

  </div>

  <div class="grid astro-DWL4ONJJ">

    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Follow us</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://twitter.com/CiteDrive", "label": "Twitter", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "https://www.youtube.com/channel/UC3ouAJ9bMVs4wti5cRUd9ag", "label": "Youtube", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>


    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Feedback</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ"><a class="email-link astro-DWL4ONJJ" href="mailto:hello@citedrive.com">hello@citedrive.com</a></li>
    </ul>
    </div>

  </div>

  <div class="grid astro-DWL4ONJJ">

    <div class="astro-DWL4ONJJ">
    <h4 class="astro-DWL4ONJJ">Legal</h4>
    <ul class="footer-list astro-DWL4ONJJ">
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/terms-and-conditions/", "label": "Terms and Conditions", "class": "astro-DWL4ONJJ" })}</li>
      <li class="astro-DWL4ONJJ">${renderComponent($$result, "InternalLink", $$InternalLink, { "link": "/privacy-policy/", "label": "Privacy Policy", "class": "astro-DWL4ONJJ" })}</li>
    </ul>
    </div>

  </div>
  </div>      
    <span style="display: inline-block; margin-bottom: 1rem; width: 100%; text-align: center;" class="astro-DWL4ONJJ">© 2022 CiteDrive. All rights reserved.</span>
  </footer>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/footer/Footer.astro");

const SITE = {
  title: "CiteDrive",
  description: "Your website description.",
  defaultLanguage: "en",
  url: "https://www.citedrive.com"
};
const KNOWN_LANGUAGES = {
  English: "en",
  French: "fr",
  Deutsch: "de"
};
Object.values(KNOWN_LANGUAGES);

const $$Astro$8 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, lang, dir, description, type, frontmatter, headings, site, doc, blog, disc } = Astro2.props;
  const TITLE_TAG = typeof title !== "undefined" ? title + " | CiteDrive - Citation and Bibliographic management for Overleaf and RStudio" : "UNTITLED | CiteDrive - Citation and Bibliographic management for Overleaf and RStudio";
  const DESCRIPTION_TAG = typeof description !== "undefined" ? description : "Read more about '" + title + "' | CiteDrive - BibTeX-supported citation and reference management for your bibliographies on Overleaf and RStudio";
  return renderTemplate`<html${addAttribute(lang, "lang")} dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>${TITLE_TAG}</title>
    <meta name="description"${addAttribute(DESCRIPTION_TAG, "content")}>

    <meta property="og:locale"${addAttribute(lang, "content")}>
    <meta property="og:title"${addAttribute(TITLE_TAG, "content")}>
    <meta property="og:description"${addAttribute(DESCRIPTION_TAG, "content")}>
    <meta property="og:type"${addAttribute(type, "content")}>
    <meta property="og:url" content="https://citedrive.com/">
    <meta property="og:site_name" content="CiteDrive">

    <meta property="og:image" content="https://www.citedrive.com/assets/theapp.png">
    <meta property="og:image:width" content="1260">
    <meta property="og:image:height" content="628">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@CiteDrive">
    <meta name="twitter:site" content="@CiteDrive">

    <link rel="canonical"${addAttribute(SITE.url + Astro2.url.pathname, "href")}>
    <!-- import fonts here -->

    ${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, { "id": "G-B4P7HQL1R8" })}

${renderHead($$result)}</head>

<body>
${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${site && renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}`}${disc && renderTemplate`${renderComponent($$result2, "DiscoveryHeader", $$DiscoveryHeader, {})}`}${doc && renderTemplate`${renderComponent($$result2, "DocHeader", $$DocHeader, {})}`}${blog && renderTemplate`${renderComponent($$result2, "BlogHeader", $$BlogHeader, {})}`}<main style="margin-top: 6.5rem">
            ${renderSlot($$result2, $$slots["default"])}
            <!-- <CookieConsent /> -->
</main>${site && renderTemplate`${renderComponent($$result2, "Footer", $$Footer, {})}`}${disc && renderTemplate`${renderComponent($$result2, "Footer", $$Footer, {})}`}${blog && renderTemplate`${renderComponent($$result2, "Footer", $$Footer, {})}`}` })}
</body>
</html>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/BaseLayout.astro");

const $$Astro$7 = createAstro();
const $$DiscoveryLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$DiscoveryLayout;
  const { title, lang, dir, description, type, frontmatter, headings } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title ?? frontmatter.title, "lang": lang ?? frontmatter.lang, "description": description, "disc": true, "class": "astro-Q7F4SZ6D" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<article class="discovery flex astro-Q7F4SZ6D" style="flex-direction: column; --gap: 3.5rem; margin-bottom: 6.5rem;">
  ${renderSlot($$result2, $$slots["default"])}
</article>` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/DiscoveryLayout.astro");

const $$Astro$6 = createAstro();
const $$References = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$References;
  const { doi, title, author, journal, year, volume, pages } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`http://localhost:3000/discovery/${doi}/`, "href")} class="astro-56PJAHRU">
    <article class="referenced-article astro-56PJAHRU">
        <div class="doi astro-56PJAHRU">DOI: ${doi}</div>
        <h4 class="title freight astro-56PJAHRU">${title}</h4>
        ${author}
        ${year}
    </article>
</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Discovery/References.astro");

const $$Astro$5 = createAstro();
const $$BibTeXPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BibTeXPreview;
  const { type, title, author, journal, year, volume, pages } = Astro2.props;
  return renderTemplate`<!-- conditional rendering -->${type === "journal-article" && renderTemplate`${maybeRenderHead($$result)}<h4 class="astro-KM34EQXI">BibTeX:</h4><div class="bibtex-wrapper astro-KM34EQXI">
<pre class="bibtex astro-KM34EQXI" style="margin-bottom: 0">

  @article${`{cite-key,
    title: {${title}},
    author: {${author}},
    journal: {${journal}},
    year: {${year}},
    volume: {${volume}},
    pages: {${pages}}
  }
  `}
</pre>

<button type="button" class="copy astro-KM34EQXI">
    <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" class="astro-KM34EQXI"><path d="m29.85,69.47h-13.66c-7.73,0-14-6.27-14-14V16.5c0-7.73,6.27-14,14-14h26.37c7.73,0,14,6.27,14,14v3.27" style="fill:none; stroke:#e6e6e6; stroke-linecap:round; stroke-linejoin:round; stroke-width:5px;" class="astro-KM34EQXI"></path><rect x="39.04" y="26.67" width="54.37" height="66.97" rx="14" ry="14" style="fill:none; stroke:#e6e6e6; stroke-linecap:round; stroke-linejoin:round; stroke-width:5px;" class="astro-KM34EQXI"></rect></svg>
</button>

</div><div class="alert astro-KM34EQXI">Copied to Clipboard!</div>`}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Discovery/BibTeXPreview.astro");

const Arrow = "/assets/Arrow.svg";

const Quote = "/assets/Quotes.svg";

const $$Astro$4 = createAstro();
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$$1;
  const { doi } = await Astro2.params;
  let url = "https://api.crossref.org/works/" + doi;
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`HTTP error! Status: ${response.status}`);
  const data = await response.json();
  console.log(await JSON.stringify(data));
  let type = data.message.type;
  let title = data.message.title[0];
  let author = data.message.author.map((author2, i, arr) => `${author2.given} ${author2.family}`);
  let journal = data.message["container-title"];
  let year = data.message.published["date-parts"][0][0];
  let volume = data.message.volume;
  let pages = data.message.page;
  return renderTemplate`${renderComponent($$result, "DiscoveryLayout", $$DiscoveryLayout, { "title": title, "description": doi, "lang": "en", "class": "astro-6KUSQITS" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section class="astro-6KUSQITS">

<div class="flex astro-6KUSQITS" style="display: inline-flex; flex-direction: column; --gap: 0;">

  <div class="flex top-info astro-6KUSQITS" style="flex-wrap: wrap; --gap: 1rem;">
    <a${addAttribute(data.message.resource.primary.URL, "href")} class="astro-6KUSQITS"><div class="pill-tag arrow flex astro-6KUSQITS" style="align-items: center;"><img width="20"${addAttribute(Arrow, "src")} class="astro-6KUSQITS">${`DOI: ${data.message.DOI}`}</div></a>
    <div class="pill-tag quote flex astro-6KUSQITS" style="align-items: center;"><img width="20"${addAttribute(Quote, "src")} class="astro-6KUSQITS"> ${`${data.message["is-referenced-by-count"]} Citations `}</div>
  </div>

  <div class="freight author astro-6KUSQITS" style="margin-bottom: 1rem;">
    ${data.message.author.map(
    (author2, i, arr) => renderTemplate`<span class="astro-6KUSQITS">
      ${i < arr.length - 1 ? `${author2.given} ${author2.family}, ` : `${author2.given} ${author2.family}`}
      </span>`
  )}
  </div>

  <h1 class="freight title astro-6KUSQITS">${title}</h1>

  <div class="freight year astro-6KUSQITS" style="line-height: 30px"><span class="astro-6KUSQITS">${year}</span> - <span class="journal astro-6KUSQITS">${journal}</span></div>

</div>

<div class="flex astro-6KUSQITS" style="gap: .25rem; flex-wrap: wrap; margin-bottom: 2rem;">
  ${data.message.subject.map((subject) => renderTemplate`<div class="tag astro-6KUSQITS">${subject}</div>`)}
</div>

<div class="flex astro-6KUSQITS" style="align-items: center;" style="margin-bottom: 1rem;">
    <button type="button" class="safe-to-citedrive astro-6KUSQITS">Safe To CiteDrive</button>
</div>

</section><section class="astro-6KUSQITS">


${renderComponent($$result2, "BibtexPreview", $$BibTeXPreview, { "type": type, "title": title, "author": author, "journal": journal, "year": year, "volume": volume, "pages": pages, "class": "astro-6KUSQITS" })}

</section><section class="astro-6KUSQITS">

<h4 style="margin-bottom: 1rem;" class="astro-6KUSQITS">${data.message["reference-count"]} References:</h4>

  ${typeof data.message.reference !== "undefined" && renderTemplate`<div class="grid references-grid astro-6KUSQITS" style="--gap: .5rem">
                ${data.message.reference.map((ele) => renderTemplate`${renderComponent($$result2, "References", $$References, { "doi": typeof ele.DOI !== "undefined" ? ele.DOI : "No DOI", "author": ele.author, "title": ele["article-title"], "year": ele.year, "class": "astro-6KUSQITS" })}`)}
                </div>`}

</section>` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/discovery/[...doi].astro");

const $$file$3 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/discovery/[...doi].astro";
const $$url$3 = "/discovery/[...doi]/";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$1,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$MiniLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MiniLayout;
  return renderTemplate`<!-- Nest the Layout! -->${maybeRenderHead($$result)}<div>
  ${renderSlot($$result, $$slots["default"])}
  <h1>test</h1>
</div>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/MiniLayout.astro");

const $$Astro$2 = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = await Astro2.params;
  let url = "https://api.crossref.org/works/" + slug;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return renderTemplate`${renderComponent($$result, "MiniLayout", $$MiniLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>${slug} | ${data.message.title[0]}</h1><p>${slug}</p>` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/test-slug/[...slug].astro");

const $$file$2 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/test-slug/[...slug].astro";
const $$url$2 = "/test-slug/[...slug]/";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Request = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Request;
  let url = "https://api.crossref.org/works/10.4000/kentron.5990";
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`HTTP error! Status: ${response.status}`);
  const data = await response.json();
  console.log(data);
  return renderTemplate`<html>
<head>
  <title>This slug: </title>
${renderHead($$result)}</head>
<body>
  <h1>dasd</h1>
  <h1>${data.message.title[0]} </h1>
</body>
</html>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/request.astro");

const $$file$1 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/request.astro";
const $$url$1 = "/request/";

const _page13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Request,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(["<script>\n	// Redirect your homepage to the first page of documentation.\n	// If you have a landing page, remove this script and add it here!\n	window.location.pathname = `docs/quick-start/`;\n<\/script>"], ["<script>\n	// Redirect your homepage to the first page of documentation.\n	// If you have a landing page, remove this script and add it here!\n	window.location.pathname = \\`docs/quick-start/\\`;\n<\/script>"])));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/index.astro");

const $$file = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/index.astro";
const $$url = "/docs/";

const _page34 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$InternalLink as $, ReactAccordion as R, _page7 as _, $$BaseLayout as a, _page8 as b, _page13 as c, _page34 as d };
