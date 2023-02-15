import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as defineScriptVars, _ as __astro_tag_component__, e as renderComponent, f as renderHead, g as renderSlot, F as Fragment$1 } from '../astro.14328da9.mjs';
import 'html-escaper';
import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';
/* empty css                                                                                                                                                    */import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
/* empty css                              *//* empty css                                                                                                                                                    */
const $$Astro$k = createAstro();
const $$InternalLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$InternalLink;
  const { label, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(link, "href")} class="internal-link astro-6QTTI4ED">${label}</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/InternalLink.astro");

var __freeze$7 = Object.freeze;
var __defProp$7 = Object.defineProperty;
var __template$7 = (cooked, raw) => __freeze$7(__defProp$7(cooked, "raw", { value: __freeze$7(raw || cooked.slice()) }));
var _a$7;
const $$Astro$j = createAstro();
const $$Fathom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Fathom;
  const { site, src = "https://cdn.usefathom.com/script.js" } = Astro2.props;
  return renderTemplate(_a$7 || (_a$7 = __template$7(["<script", "", " defer><\/script>"])), addAttribute(src, "src"), addAttribute(site, "data-site"));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Fathom.astro");

var __freeze$6 = Object.freeze;
var __defProp$6 = Object.defineProperty;
var __template$6 = (cooked, raw) => __freeze$6(__defProp$6(cooked, "raw", { value: __freeze$6(raw || cooked.slice()) }));
var _a$6;
const $$Astro$i = createAstro();
const $$GoogleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const { id } = Astro2.props;
  const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  return renderTemplate(_a$6 || (_a$6 = __template$6(["<!-- Global site tag (gtag.js) - Google Analytics --><script async", "><\/script>\n<script>(function(){", "\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', id);\n})();<\/script>"])), addAttribute(gtagUrl, "src"), defineScriptVars({ id }));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/GoogleAnalytics.astro");

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$Astro$h = createAstro();
const $$Metrical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Metrical;
  const { app } = Astro2.props;
  return renderTemplate(_a$5 || (_a$5 = __template$5(['<script async src="https://cdn.metrical.xyz/script.js" type="text/javascript"><\/script>\n<script>(function(){', "\nwindow.metrical = {\n  app,\n};\n})();<\/script>"])), defineScriptVars({ app }));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Metrical.astro");

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$g = createAstro();
const $$Plausible = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Plausible;
  const { domain, src = "https://plausible.io/js/script.js" } = Astro2.props;
  return renderTemplate(_a$4 || (_a$4 = __template$4(["<script", "", " defer><\/script>"])), addAttribute(src, "src"), addAttribute(domain, "data-domain"));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Plausible.astro");

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$f = createAstro();
const $$SimpleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$SimpleAnalytics;
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script>\n', '<noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade"></noscript>'])), maybeRenderHead($$result));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/SimpleAnalytics.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$e = createAstro();
const $$Umami = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Umami;
  const { dataId, site, host = "/umami.js" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script defer", "", "", "><\/script>"])), addAttribute(site, "src"), addAttribute(host, "host"), addAttribute(dataId, "data-website-id"));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/node_modules/astro-analytics/src/Umami.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$d = createAstro();
const $$Amplitude = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
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

const $$Astro$c = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead($$result)}<a href="/" class="flex astro-S7ZBVXMX" style="align-items: center; --gap: 0; font-size: 18px;">
   <svg id="b" xmlns="http://www.w3.org/2000/svg" width="36px" viewBox="0 0 32 32" class="astro-S7ZBVXMX"><path d="M19.38,32H4.76v-3.15c0-1.54,1.15-2.83,2.67-3,2.88-.32,7.71-1.41,7.71-5.18h1.88c0,3.82-3.42,6.39-9.39,7.05-.57,.06-1,.55-1,1.13v1.27h12.74c4.02,0,7.28-3.27,7.28-7.28l-.03-13.58c0-4.06-3.31-7.37-7.37-7.37h-2.26V18.51h-3.72c-4.92,0-9.12-3.67-9.56-8.35-.25-2.64,.59-5.18,2.36-7.13C7.83,1.11,10.32,0,12.92,0V1.89c-2.07,0-4.06,.88-5.45,2.41-1.41,1.55-2.08,3.57-1.88,5.68,.36,3.72,3.73,6.64,7.69,6.64h1.84V0h4.15C24.37,0,28.52,4.15,28.52,9.25l.03,13.58c0,5.05-4.11,9.17-9.16,9.17Z" class="astro-S7ZBVXMX"></path></svg>
   <span class="logotype astro-S7ZBVXMX" style="color: black; margin-left: .25rem">CiteDrive</span>
</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/header/Logo.astro");

const $$Astro$b = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
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

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
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

const $$Astro$9 = createAstro();
const $$DocHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$DocHeader;
  Astro2.props;
  const docs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/docs/adding-references-from-bibtex.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.G),"../../pages/docs/adding-references-from-google-scholar.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.E),"../../pages/docs/adding-references-from-pubmed.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.H),"../../pages/docs/adding-references-to-journals.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.I),"../../pages/docs/adding-references-to-websites.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.J),"../../pages/docs/adding-to-books.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.P),"../../pages/docs/creating-a-new-project-in-citedrive.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.F),"../../pages/docs/enabling-biblatex-support.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.K),"../../pages/docs/enabling-bibtex-support.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.L),"../../pages/docs/enabling-natbib-support.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.M),"../../pages/docs/quick-start.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.Q),"../../pages/docs/sharing-a-project.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.O),"../../pages/docs/synchronize-database.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.N)}), () => "../../pages/docs/*.{md,mdx}");
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

const $$Astro$8 = createAstro();
const $$BlogHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  Astro2.props;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/blog/announcing-citedrive-3.0-simplest-method-to-keep-track-of-your-bibliographies-references-and-citations-on-overleaf-and-rstudio.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.m),"../../pages/blog/citation-keys-in-bibtex.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.D),"../../pages/blog/citedrive-3.0-information-on-the-upcoming-version.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.s),"../../pages/blog/citedrive-companion-for-overleaf-and-rstudio.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.w),"../../pages/blog/citedrive-for-bibliography-management-in-rstudio-easily-insert-references-into-quarto-documents.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.n),"../../pages/blog/citedrive-forum-has-moved-to-github-discussions.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.u),"../../pages/blog/citedrive-january-2022-release.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.B),"../../pages/blog/citedrive-november-2021-release.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.z),"../../pages/blog/codemirror-6-a-new-source-editor-for-overleaf.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.v),"../../pages/blog/data-visualization-packages-for-r-you-should-check-out.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.r),"../../pages/blog/grammarly-works-with-overleafs-latest-source-editor-upgrade.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.q),"../../pages/blog/how-to-cite-a-website-in-bibtex.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.A),"../../pages/blog/how-to-use-overleaf-to-dual-monitor-your-pdf-and-code-the-pdf-detach.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.o),"../../pages/blog/literature-management-with-overleaf.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.y),"../../pages/blog/overleaf-is-a-finalist-in-the-digital-leaders-impact-awards-2022.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.p),"../../pages/blog/overleaf-source-editor-upgrade.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.C),"../../pages/blog/parenthetical-vs-narrative-citations-in-citedrive.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.t),"../../pages/blog/using-natbib-with-bibtex-and-overleaf.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.x)}), () => "../../pages/blog/*.{md,mdx}")).sort(
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

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
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

const $$Astro$6 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, lang, dir, description, type, frontmatter, headings, site, doc, blog } = Astro2.props;
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
${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${site && renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}`}${doc && renderTemplate`${renderComponent($$result2, "DocHeader", $$DocHeader, {})}`}${blog && renderTemplate`${renderComponent($$result2, "BlogHeader", $$BlogHeader, {})}`}<main style="margin-top: 6.5rem">
            ${renderSlot($$result2, $$slots["default"])}
            <!-- <CookieConsent /> -->
</main>${site && renderTemplate`${renderComponent($$result2, "Footer", $$Footer, {})}`}${blog && renderTemplate`${renderComponent($$result2, "Footer", $$Footer, {})}`}` })}
</body>
</html>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/BaseLayout.astro");

const $$Astro$5 = createAstro();
const $$RightSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$RightSidebar;
  const { headings, githubEditUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-OOVZGW7M">
	<div class="astro-OOVZGW7M">
	${typeof headings !== "undefined" && headings.length > 1 && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, { "class": "astro-OOVZGW7M" }, { "default": ($$result2) => renderTemplate`<ul class="astro-OOVZGW7M">
				${headings.filter(({ depth }) => depth > 1 && depth < 4).map((heading) => renderTemplate`<li style="list-style: none;" class="astro-OOVZGW7M">
							<a class="anchor astro-OOVZGW7M"${addAttribute(`#${heading.slug}`, "href")}>${heading.text}</a>
						</li>`)}
			</ul>` })}`}
	</div>
</nav>

<a class="banner astro-OOVZGW7M" href="/">
<img src="/assets/Banner/banner.svg" alt="Try CiteDrive!" class="astro-OOVZGW7M">
</a>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/docs/RightSidebar.astro");

const $$Astro$4 = createAstro();
const $$LeftSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LeftSidebar;
  Astro2.props;
  const docs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/docs/adding-references-from-bibtex.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.G),"../../pages/docs/adding-references-from-google-scholar.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.E),"../../pages/docs/adding-references-from-pubmed.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.H),"../../pages/docs/adding-references-to-journals.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.I),"../../pages/docs/adding-references-to-websites.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.J),"../../pages/docs/adding-to-books.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.P),"../../pages/docs/creating-a-new-project-in-citedrive.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.F),"../../pages/docs/enabling-biblatex-support.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.K),"../../pages/docs/enabling-bibtex-support.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.L),"../../pages/docs/enabling-natbib-support.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.M),"../../pages/docs/quick-start.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.Q),"../../pages/docs/sharing-a-project.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.O),"../../pages/docs/synchronize-database.mdx": () => import('../prerender.1ca357a7.mjs').then(n => n.N)}), () => "../../pages/docs/*.{md,mdx}");
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
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-W24XUMAT">

   <div style="padding-bottom: 8rem" class="astro-W24XUMAT">
      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Quick Start", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${QUICKSTART.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

       ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Add References", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${ADDREFERENCES.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}
      
      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Overleaf Setup", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${OVERLEAFSETUP.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}
      
      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Howtos", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${HOWTOS.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "BibTex Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${BIBTEX.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "BibLaTeX Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${BIBLATEX.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

      ${renderComponent($$result, "ReactAccordion", ReactAccordion, { "label": "Natbib Basics", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-W24XUMAT" }, { "default": ($$result2) => renderTemplate`<ul class="list astro-W24XUMAT">
            ${NATBIB.map((doc) => renderTemplate`<li class="astro-W24XUMAT">
               <a class="link astro-W24XUMAT"${addAttribute(doc.url, "href")}>${doc.frontmatter.side}</a>
            </li>`)}
         </ul>` })}

   </div>

</nav>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/docs/LeftSidebar.astro");

const $$Astro$3 = createAstro();
const $$DocsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DocsLayout;
  const { title, lang, dir, frontmatter, description, headings } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title ?? frontmatter.title, "description": description, "lang": lang ?? frontmatter.lang, "doc": true, "class": "astro-MW7AASHJ" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="astro-MW7AASHJ">

   <section class="grid astro-MW7AASHJ">

      <aside class="left astro-MW7AASHJ" style="position: fixed;">
         <h4 style="margin-bottom: 1rem; font-weight: 500; color: hsl(var(--clr-secondary));;" class="astro-MW7AASHJ">In this doc</h4>
         <div class="leftSideBar astro-MW7AASHJ">
         ${renderComponent($$result2, "LeftSidebar", $$LeftSidebar, { "lang": lang ?? frontmatter.lang, "class": "astro-MW7AASHJ" })}
         </div>
      </aside>

      <article class="article astro-MW7AASHJ">
         <div class="mobileAnchor astro-MW7AASHJ">
               ${renderComponent($$result2, "ReactAccordion", ReactAccordion, { "label": "On this page", "isOpen": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/garethii/Documents/GitHub/astro-infrastructure/src/components/Accordion/ReactAccordion", "client:component-export": "default", "class": "astro-MW7AASHJ" }, { "default": ($$result3) => renderTemplate`<div style="margin-top: .75rem;" class="astro-MW7AASHJ">
                     ${renderComponent($$result3, "RightSidebar", $$RightSidebar, { "headings": headings, "githubEditUrl": "githubEditUrl", "class": "astro-MW7AASHJ" })}
                  </div>` })}
            </div>

         <div class="astro-MW7AASHJ">
            ${renderSlot($$result2, $$slots["default"])}
         </div>
      </article>

      <aside class="rightSidebar astro-MW7AASHJ">
         <h4 class="astro-MW7AASHJ">On this page</h4>
         ${renderComponent($$result2, "RightSidebar", $$RightSidebar, { "headings": headings, "githubEditUrl": "githubEditUrl", "class": "astro-MW7AASHJ" })}
      </aside>

      </section>

   </div>` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/DocsLayout.astro");

const $$file$3 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/layouts/DocsLayout.astro";
const $$url$3 = undefined;

const DocsLayout = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$DocsLayout,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  const { doi } = Astro2.params;
  let url = "https://api.crossref.org/works/" + doi;
  const response = await fetch(url);
  const data = await response.json();
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": "slug", "descpription": doi, "lang": "en" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>${data.message.title[0]} </h1><p>${data.message.abstract}</p><p>${data.message.author[0].given}</p><p>${data.message["container-title"]}</p>${typeof data.message.reference !== "undefined" && data.message.reference.map((x) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": ($$result3) => renderTemplate`${typeof x.DOI !== "undefined" && renderTemplate`${renderComponent($$result3, "Fragment", Fragment$1, {}, { "default": ($$result4) => renderTemplate`<div>
                          ${x.DOI}
                        </div>` })}`}` })}`)}` })}`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/discovery/[...doi].astro");

const $$file$2 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/discovery/[...doi].astro";
const $$url$2 = "/discovery/[...doi]/";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$1,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$;
  const pages = [
    {
      slug: void 0,
      title: "Astro Store",
      text: "Welcome to the Astro store!"
    },
    {
      slug: "products",
      title: "Astro products",
      text: "We have lots of products for you"
    },
    {
      slug: "products/astro-handbook",
      title: "The ultimate Astro handbook",
      text: "If you want to learn Astro, you must read this book."
    }
  ];
  const { slug } = Astro2.params;
  const page = pages.find((page2) => page2.slug === slug);
  if (!page)
    return Astro2.redirect("/404");
  const { title, text } = page;
  return renderTemplate`<html>
<head>
  <title>${title}</title>
${renderHead($$result)}</head>
<body>
  <h1>${title}</h1>
  <p>${text}</p>
</body>
</html>`;
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/test-slug/[...slug].astro");

const $$file$1 = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/test-slug/[...slug].astro";
const $$url$1 = "/test-slug/[...slug]/";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
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

const _page33 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$InternalLink as $, DocsLayout as D, ReactAccordion as R, _page7 as _, $$BaseLayout as a, $$DocsLayout as b, _page8 as c, _page33 as d, $$RightSidebar as e };
