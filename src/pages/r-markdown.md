---
title: Reference Manager for Overleaf with CiteDrive
layout: ../layouts/DocsLayout.astro
side: Enable support
cat: "natbib"
lang: en
---

# Reference Manager for R Markdown with CiteDrive

This tutorial will show you how to get started using CiteDrive for RStudio. This program allows users to easily manage their bibliography and insert references into documents--making citations a breeze! We'll walk you through setting up a CiteDrive account and importing references into RStudio before diving in on how to incorporate citations into an R Markdown document.

## Step 1: Adding references to your project

To start using CiteDrive, you first need to create an account by going to the website and clicking the sign-up button. Once your account is completed, you can create an "R-Markdown" project. This involves giving your project a name and filling it with references. Your project might resemble something like this:



(fig)



## Step 2: Synchronize your R Markdown document with CiteDrive

To sync your new CiteDrive with your R Markdown document, follow these steps: click on the “bib” button, which will open a new tab containing all of your BibTeX entries. From there, copy the URL and paste it into the YAML section of your RMD file.



## Step 3: Copy citation keys

After you finish importing your references, return to your CiteDrive project. Select one or more references you want to include in your document, then click the cite button. This copies the citation key, so all you have to do is paste it into your R Markdown document!

(fig)

In your R Markdown document, insert your citation key where you want the passage to appear.

(fig)



After you insert the key in the proper section, click “render.” The in-text citation will then appear in your specified style, and the reference will be placed at the end of your document.



To summarize, CiteDrive is an effective tool for managing your bibliography and adding citations to R Markdown documents. Come give it a try today to experience its benefits firsthand!
