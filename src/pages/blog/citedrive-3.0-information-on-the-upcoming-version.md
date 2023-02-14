---
layout: "../../layouts/BlogPost.astro"
title: "CiteDrive 3.0: Information on the upcoming version"
pubDate: "Apr 27 2022"
lang: en
---
export const prerender = true;

# CiteDrive 3.0: Information on the upcoming version

For months we have been working on CiteDrive 3.0, a complete revision of the previous version. We are happy to announce that the new version will be released soon! Here is some information about the changes to give you the first insight.

## We are bringing reference management to R Markdown. 

CiteDrive 3.0 will primarily appeal to R Markdown and Quarto users and is fully collaborative, 100% user-centric, and 100% Bib[La]TeX enabled.

![](https://images.prismic.io/citedrive/ef81f044-efe9-40a7-91db-07f96f9c2942_Screenshot+2022-04-24+at+12.28.54.png?auto=compress,format)

We complement the R Markdown system and put reference management between the entire pipeline, i.e., raw data, to high-quality documents, reports, and presentations. You export your bibliography in the desired citation style to publication-ready PDFs, Jupyter Notebooks, LaTeX, web pages, books, MS Word, etc. 

At CiteDrive, you create an R Markdown project where you can store your references centrally to separate them from your R Markdown workflow. With our in-house R package, you can synchronize the current status of your bibliography with the RStduio project at any time and fully automatically - just like with Overleaf. Obsidian, Quarto, and Roam Research will follow.

## New user interface and dark mode

Based on our users' feedback and many drafts and prototypes we have been working on for months, the next update will significantly improve the user experience. For example, how to better organize BibTeX references has been addressed. The user can easily manage each reference with tags.

![](https://images.prismic.io/citedrive/9469660c-362f-4692-808c-8b65107741a2_Screenshot+2022-04-24+at+14.35.44.png?auto=compress,format)

The second focus was on the problem of long-lasting user interfaces with better accessibility - for example, through optimal font sizes and colors - without giving up the distinctive style. 

The dark mode is as well thought out and styled as the original - and offers much more than just a black background.

## All about Bib[La]TeX

CiteDrive is a reference manager based entirely on BibTeX. But what does that mean strictly - especially for the next version? Apart from some suitable desktop applications (JabRef, for example), BibTeX seems to have an afterthought with many reference managers. One collects references in a database and exports them with an internal converter, resulting in a .bib file that omits many fields that the user might need. Also, manual editing with form fields is annoying. It was easier for many of our users to enter their bibliographies by hand into a text file.

And therein lies the compromise in CiteDrive -- the ease of manual maintenance and the ability to organize and search for references in a straightforward user interface. Instead of using forms, we allow users to add and maintain their references with BibTeX entries via a code editor.

![](https://images.prismic.io/citedrive/48c262ea-a81a-45ad-b674-70736bc882a3_Screenshot+2022-04-24+at+14.36.50.png?auto=compress,format)

In the last update we released in January, we introduced this code editor and found that the idea was as well-received as it was by us. We're extending it to include better highlighting of inline LaTeX markups, color-coded within BibTeX entries.

## Better collision control

Some headaches for us and our users are the CitationKeys. On the one hand, we want to give users the option to use any CitationKey. On the other hand, we also want to provide them with the opportunity to create them automatically. For example, if the user previously used AUTOKEY as the CitationKey, it was generated:

![](https://images.prismic.io/citedrive/bc642c27-cd73-4e35-8c46-d185c93ba2e7_Screenshot+2022-04-24+at+14.14.12.png?auto=compress,format)

![](https://images.prismic.io/citedrive/c7ea787b-de3b-43c5-92ef-2778c010e41c_Screenshot+2022-04-24+at+14.15.53.png?auto=compress,format)

The result is a key consisting of the first author's name, the first non-breaking word of the title, the year, and a deterministic suffix. Doing so will ensure that your LateX document / Overleaf project does not contain compilation errors. 

If you had a duplicate reference in your project, the system would automatically append a suffix with AUTOKEY that enumerates the number of duplicates.

![](https://images.prismic.io/citedrive/aedb8ba8-e8b5-45a9-86ee-45ab1c5f5a59_Screenshot+2022-04-24+at+14.34.15.png?auto=compress,format)

If we detect a duplicate citation key, the reference is highlighted in red and displays a warning. CiteDrive does not export identical references to the Overleaf project, which leads to errors in the LaTeX document.

## Optimizations

Since the first alpha release, we have used **React** and **Typescript** for the frontend, using the boilerplate Create React app. We have carried over many packages and settings leftover from the alpha version into the current version. Also, we have completely rethought the whole architecture and optimized scripts, and we are now moving to **Vite**.
