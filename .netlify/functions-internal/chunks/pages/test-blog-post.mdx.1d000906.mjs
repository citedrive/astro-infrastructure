import { b as createVNode, _ as __astro_tag_component__ } from '../astro.a5cde4d3.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('../BlogPost.9d170400.mjs')).default;
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
  "layout": "../../layouts/BlogPost.astro",
  "title": "Test Blog POst",
  "pubDate": "Jan 30 2023",
  "lang": "en"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "test-blog-post",
    "text": "Test blog post"
  }];
}

function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);

  return createVNode(_components.h1, {
    id: "test-blog-post",
    children: "Test blog post"
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
const url = "/blog/test-blog-post/";
const file = "/Users/garethii/Documents/GitHub/astro-infrastructure/src/pages/blog/test-blog-post.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = MDXContent;

export { Content, compiledContent, MDXContent as default, file, frontmatter, getHeadings, rawContent, url };
