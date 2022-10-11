---
layout: "../../layouts/BlogPost.astro"
title: "CiteDrive for Bibliography Management in RStudio: Easily Insert References into Quarto Documents"
pubDate: "Aug 23 2022"
lang: en
---

# CiteDrive for Bibliography Management in RStudio: Easily Insert References into Quarto Documents

<i>August 23, 2022 by Gareth</i>

Do you need to insert citations into your Quarto documents? If so, then you’ll want to check out CiteDrive for RStudio. With CiteDrive, you can easily manage your bibliography and insert references into your documents. In this tutorial, we’ll show you how to get started.

We’ll walk you through the steps of setting up a CiteDrive account and importing references into RStudio. Then we’ll show you how to insert citations into a Quarto document. Let’s get started!

## Step 1: Adding references to your project

First, you’ll need to [create a CiteDrive account](https://app.citedrive.com/sign-up). You can do this by going to the CiteDrive website and clicking on the “Sign Up” button. Once you’ve completed your account, you’ll be able to create an [“R-Markdown” project](https://www.citedrive.com/docs/creating-a-new-project-in-citedrive), give it a name and fill your project with references. Your project could look like this:

![](https://images.prismic.io/citedrive/6aaaeb72-adf1-476e-aa26-fe9f480bf865_FZ-PoGiXwAE35Bi.jpg?auto=compress,format)

## Step 2: Synchronize your Quarto document with CiteDrive

Now let’s get your new CiteDrive hooked up with your Quarto document. To do this, simply click the “**bib**” button, which will open up a new tab window containing all your entries in BibTeX format. Copy the URL of the new tab and paste it into the YAML of your QMD file.

![](https://images.prismic.io/citedrive/9f8b6b74-81bd-4d01-b4fe-7b7a3c43b139_Screenshot+2022-08-23+at+10.43.39.png?auto=compress,format)

## Step 3: Copy citation keys

Once your references are imported, you can insert them into your Quarto document. To do this, return to your CiteDrive project and one or more references your want to insert into your document and click the cite button. CiteDrive will copy the citation key to your clipboard.

![](https://images.prismic.io/citedrive/1f3b71e6-9746-4c33-91b9-df87be5415be_1_4KGAOkDIyUnvxOYDB58hQw.gif?auto=compress,format)

Back to your Quarto document and paste your citation key in the desired passage.

![](https://images.prismic.io/citedrive/a7483d1e-c708-4bad-b62c-2bb0ecb6d559_Screen_Recording_2022-08-23_at_10_47_45_AdobeExpress.gif?auto=compress,format)

After you insert the key to the corresponding section, click “render.” The in-text citation will be outputted in your desired style, and the reference will appear at the end of your document.

So there you have it! With CiteDrive, you can easily manage your bibliography and insert citations into your Quarto documents. Give it a try today and see how it can make your life easier.
