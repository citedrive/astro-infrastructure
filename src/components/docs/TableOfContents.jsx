function TableOfContents({headings}) {
	return (
		<>
			<h4>On this page</h4>
			<ul>
				{headings
					.filter(({ depth }) => depth > 1 && depth < 4)
					.map((heading) => (
						<li>
							<a href={`#${heading.slug}`}>{heading.text}</a>
						</li>
					))}
			</ul>
		</>
	);
};

export default TableOfContents;
