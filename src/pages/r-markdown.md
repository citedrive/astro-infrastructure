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



![](https://images.prismic.io/citedrive/6aaaeb72-adf1-476e-aa26-fe9f480bf865_FZ-PoGiXwAE35Bi.jpg?auto=compress,format)



## Step 2: Synchronize your R Markdown document with CiteDrive

To sync your new CiteDrive with your R Markdown document, follow these steps: click on the “bib” button, which will open a new tab containing all of your BibTeX entries.


From there, copy the URL and paste it after 'bibliography' into the YAML section of your RMD file.


```md
---
bibliography: 'URL'
---
```



## Step 3: Copy citation keys

After you finish importing your references, return to your CiteDrive project. Select one or more references you want to include in your document, then click the cite button. This copies the citation key, so all you have to do is paste it into your R Markdown document!

![](https://images.prismic.io/citedrive/1f3b71e6-9746-4c33-91b9-df87be5415be_1_4KGAOkDIyUnvxOYDB58hQw.gif?auto=compress,format)

In your R Markdown document, insert your citation key where you want the passage to appear.

![](https://images.prismic.io/citedrive/a7483d1e-c708-4bad-b62c-2bb0ecb6d559_Screen_Recording_2022-08-23_at_10_47_45_AdobeExpress.gif?auto=compress,format)



After you insert the key in the proper section, click “render.” The in-text citation will then appear in your specified style, and the reference will be placed at the end of your document.



To summarize, CiteDrive is an effective tool for managing your bibliography and adding citations to R Markdown documents. Come give it a try today to experience its benefits firsthand!
