---
title: Reference Manager for Overleaf with CiteDrive
layout: ../layouts/DocsLayout.astro
side: Enable support
cat: "natbib"
lang: en
---

# Reference Manager for Quarto (RStudio) with CiteDrive

If you need to insert citations into your Quarto documents, then CiteDrive for RStudio is a great option. With CiteDrive, you can easily manage your bibliography and insert references into your documents. In this tutorial, we’ll show you how to get started.

We’ll walk you through setting up a CiteDrive account and importing references into RStudio. Then we’ll show you how to insert citations into a Quarto document. Let’s get started!

## Step 1: Adding references to your project

To get started, you must create a CiteDrive account by going to the website and clicking the sign-up button. Once your account is completed, you can create an "R-Markdown" project. This involves giving your project a name and filling it with references. Your project might resemble the following:



(fig)



## Step 2: Synchronize your Quarto document with CiteDrive

Let's get your new CiteDrive synced up with your Quarto document. To do this, click on the “bib” button, which will open a new tab containing all your BibTeX entries. Copy the URL from the new tab and paste it into the YAML section of your QMD file.



## Step 3: Copy citation keys

After you import your references, go back to your CiteDrive project. Choose one or more references you want to use in your document, and click the cite button. This will copy the citation key onto your clipboard so that you can insert it into your Quarto document.

(fig)

In your Quarto document, paste your citation key in the desired passage.

(fig)

After you insert the key in the proper section, click “render.” The in-text citation will then appear in your specified style, and the reference will be placed at the end of your document.



In conclusion, CiteDrive is an excellent tool for keeping track of your bibliography and adding citations to your Quarto documents. Try it out today to see how much easier it can make your life.
