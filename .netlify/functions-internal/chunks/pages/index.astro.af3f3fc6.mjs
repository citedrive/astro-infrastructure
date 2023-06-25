import { c as createAstro, a as createComponent, r as renderTemplate } from '../astro.a5cde4d3.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://pages.citedrive.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(["<script>\n	// Redirect your homepage to the first page of documentation.\n	// If you have a landing page, remove this script and add it here!\n	window.location.pathname = `docs/quick-start/`;\n<\/script>"], ["<script>\n	// Redirect your homepage to the first page of documentation.\n	// If you have a landing page, remove this script and add it here!\n	window.location.pathname = \\`docs/quick-start/\\`;\n<\/script>"])));
}, "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/index.astro");

const $$file = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/docs/index.astro";
const $$url = "/docs/";

export { $$Index as default, $$file as file, $$url as url };
