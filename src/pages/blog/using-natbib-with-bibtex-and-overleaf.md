---
layout: "../../layouts/BlogPost.astro"
title: "Using natbib with BibTeX and Overleaf"
pubDate: "Feb 01 2023"
lang: en
---


# Using natbib with BibTeX and Overleaf

The natbib package revolutionizes the standard `\cite{*}` command in LaTeX, when using BibTeX; providing a plethora of options for author-year schemes and displaying both textual and parenthetical information when using BibTeX. With this enhanced feature, you can easily customize your citations to suit any style preferences! 

  

## Why use natbib?

  

natbib is a LaTeX package that allows you to use bibtex references more freely. It includes many citation commands and citation styles not found in standard bibtex, as well as the ability to customize existing citation styles to meet your needs; most notably, ab citation style requirements. One of the advantages of using natbib is the ability to generate author-year in a narrative or textual format. As an alternative, you could look into BibLaTeX, which includes all of these features on top of a much more feature-rich ecosystem and a very robust framework.

  

## Getting started

**Step 1: Create a bibliography**

We recommend using **CiteDrive** to create the.bib-file because it assists you with formatting and saves articles from your browser directly to your bibliography. Among many other features, such as native BibTeX/BibLaTeX support, collaboration, error handling, and formatting, Overleaf allows you to keep your bibliographies in sync. [Overleaf has more information](https://www.overleaf.com/blog/better-bibliography-management-with-overleaf-citedrive-and-bibtex-biblatex).

Your bib-file, which you can also create manually if you don't want to use **CiteDrive**, is a bibliographic reference file that LaTeX uses to format bibliographies and citations. Here's an example of a straightforward bib-file:

```tex
@book{knuth1984texbook,
    author = "Donald E. Knuth",
    title = "The {\TeX}book",
    year = "1984",
    publisher = "Addison-Wesley"
}

@article{lamport1994latex,
    author = "Leslie Lamport",
    title = "{LaTeX}: A Document Preparation System",
    year = "1994",
    journal = "Addison-Wesley"
}

@inproceedings{gosling1995java,
    author = "James Gosling and Henry McGilton",
    title = "The Java Language Environment",
    booktitle = "Proceedings of the Sun Microsystems Symposium on the Java Language",
    year = "1995",
    publisher = "Sun Microsystems"
}

```

In this example, we have three references of different types (book, article, and inproceedings). Each reference is given a unique identifier (e.g. knuth1984texbook), which can be used to cite the reference in the LaTeX document.

  

**Step 2: Create a TeX file**

Here's how to get everything together in our tex-file after we've created our.bib-file:

1.  Include the `natbib` package in your LaTeX document by adding the following line to the preamble:

```tex
\usepackage{natbib} 
```

2.  Specify the citation style you want to use. For example, if you want to use the `numeric` style, add the following line:

```tex
\bibliographystyle{plainnat}
```

3.  We will include our previously generated bibliographic reference file, which is in.bib format, in your LaTeX document using the bibliography command — notice that we omit the file extension.

```tex
\bibliography{references}
```

4.  To cite a reference in the text, use the `\cite` or \citep command followed by the reference identifier:

```tex
As discussed in \cite{knuth1984texbook}, 
\TeX\ is a powerful typesetting system.
```

5.  Finally, include the following command to produce the bibliography at the end of your document:

```tex
\bibliography
```